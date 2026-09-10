-- KBL PROPERTY HUB
-- Admin authentication + authorization
-- Admin UUID: 5645b70d-c5db-4044-9d29-2849740533cf
-- Run this whole script once in Supabase SQL Editor.
-- This script does not replace the listings table or your existing submission RPC.

create table if not exists public.kbl_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  label text,
  created_at timestamptz not null default now()
);

alter table public.kbl_admins enable row level security;

-- Only the database security functions below need to see this table.
revoke all on table public.kbl_admins from anon, authenticated;

drop policy if exists "kbl_admins_self_select" on public.kbl_admins;

insert into public.kbl_admins (user_id, label)
values ('5645b70d-c5db-4044-9d29-2849740533cf'::uuid, 'KBL primary administrator')
on conflict (user_id) do update set label = excluded.label;

create or replace function public.is_kbl_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.kbl_admins
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_kbl_admin() from public;
grant execute on function public.is_kbl_admin() to authenticated;

-- Provider rows are private. Only authenticated KBL admins receive SELECT access.
revoke all on table public.providers from anon, authenticated;
grant select on table public.providers to authenticated;
alter table public.providers enable row level security;
drop policy if exists "kbl_admin_read_providers" on public.providers;
create policy "kbl_admin_read_providers"
on public.providers
for select
to authenticated
using (public.is_kbl_admin());

-- Verification history is private and admin-only.
revoke all on table public.provider_verification_history from anon, authenticated;
grant select on table public.provider_verification_history to authenticated;
alter table public.provider_verification_history enable row level security;
drop policy if exists "kbl_admin_read_verification_history" on public.provider_verification_history;
create policy "kbl_admin_read_verification_history"
on public.provider_verification_history
for select
to authenticated
using (public.is_kbl_admin());

-- Replace the existing status RPC with an authorization-enforced version.
drop function if exists public.set_provider_status(bigint, text, text, text);

create or replace function public.set_provider_status(
  p_provider_id bigint,
  p_status text,
  p_reason text default null,
  p_changed_by text default 'admin'
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_old_status text;
begin
  if not public.is_kbl_admin() then
    raise exception 'KBL admin authorization required';
  end if;

  if p_status not in ('unverified','verified','trusted','blocked') then
    raise exception 'Invalid provider status: %', p_status;
  end if;

  select verification_status
    into v_old_status
  from public.providers
  where id = p_provider_id
  for update;

  if not found then
    raise exception 'Provider % not found', p_provider_id;
  end if;

  update public.providers
  set
    verification_status = p_status,
    verified_at = case
      when p_status in ('verified','trusted') then coalesce(verified_at, now())
      else null
    end,
    trusted_at = case
      when p_status = 'trusted' then coalesce(trusted_at, now())
      else null
    end,
    updated_at = now()
  where id = p_provider_id;

  if v_old_status is distinct from p_status then
    insert into public.provider_verification_history
      (provider_id, old_status, new_status, changed_at, changed_by, reason)
    values
      (p_provider_id, v_old_status, p_status, now(), coalesce(p_changed_by, 'admin'), p_reason);
  end if;
end;
$$;

revoke all on function public.set_provider_status(bigint, text, text, text) from public;
revoke all on function public.set_provider_status(bigint, text, text, text) from anon;
grant execute on function public.set_provider_status(bigint, text, text, text) to authenticated;

-- Do not give browser clients direct provider status-update or history-write privileges.
-- The SECURITY DEFINER RPC above is the only browser-callable mutation path.
revoke insert, update, delete on table public.providers from authenticated;
revoke insert, update, delete on table public.provider_verification_history from authenticated;

-- IMPORTANT:
-- Your admin.html uses Supabase email magic-link authentication.
-- In Supabase Dashboard go to Authentication > URL Configuration and add the exact
-- URL where admin.html will be hosted, for example:
-- https://kabul-property-hub.pages.dev/admin.html
--
-- Also enable Email provider under Authentication > Sign In / Providers.
-- Apple is not required by this setup.
