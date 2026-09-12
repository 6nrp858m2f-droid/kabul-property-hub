# KBL Property Hub — latest-source Apple UI update

This package is based on the supplied `kbl-property-hub-final-updated-sept-2026.zip`.

Preserved:
- Existing KBL marketplace pages and data flow
- Existing Supabase configuration and SQL
- Buy/Rent dedicated pages
- Provider listing form
- Multilingual UI
- Existing property cards, reports, saved properties, menu and search

Updated:
- Apple-inspired presentation retained from the latest source
- Search overlay state made explicit and stable
- Search close button, backdrop and Escape key close reliably
- Prevents stale search state from trapping the page after browser/deployment restoration
- Adds explicit hidden/state CSS so the overlay cannot accidentally block the page
