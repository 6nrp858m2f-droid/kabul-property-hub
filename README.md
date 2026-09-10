# KBL Property Hub — Apple-inspired final frontend

This build keeps KBL as a Kabul property marketplace and uses an original Apple-inspired visual language:
- large editorial typography
- translucent navigation
- restrained monochrome surfaces
- rounded controls
- strong whitespace
- full-width visual sections
- subtle motion and premium interaction

It does not copy Apple's proprietary code or assets.

## Files
- index.html — homepage
- buy.html — Buy marketplace
- rent.html — Rent marketplace
- list-property.html — provider listing form
- saved.html — saved properties
- how-it-works.html
- about.html
- contact.html
- terms.html
- privacy.html
- admin.html
- app.js
- style.css
- kbl_admin_security.sql

## Production image flow
Customer selects <=15 MB originals (up to 15 photos)
→ browser compression/WebP
→ KBL icon watermark
→ secure Cloudflare Worker upload
→ Cloudinary
→ returned URLs
→ Supabase property record

Do not expose Cloudinary API secrets in browser JavaScript.
