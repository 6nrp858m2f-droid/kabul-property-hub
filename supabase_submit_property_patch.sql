-- KBL Property Hub image storage setup
-- Creates the public property-images bucket and allows anonymous browser uploads/reads.
-- Run this section once in Supabase SQL Editor before testing photo uploads.
insert into storage.buckets (id, name, public)
values ('property-images', 'property-images', true)
on conflict (id) do update set public = true;

drop policy if exists "KBL public image upload" on storage.objects;
create policy "KBL public image upload"
on storage.objects for insert
to anon, authenticated
with check (bucket_id = 'property-images');

drop policy if exists "KBL public image read" on storage.objects;
create policy "KBL public image read"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'property-images');

-- Kabul Property Hub RPC note
-- The current website calls public.submit_kbl_property_secure.
-- Keep the existing secure database function in Supabase.
-- This patch intentionally does not recreate the older public.submit_property routine.
-- Expected listing fields remain: title, type, description, contact name, district,
-- location, price, currency, rooms, bathrooms, size, floor, furnished, phone,
-- neighborhood, purpose, and photo URLs.
