# hlh-wwco

Standalone coming-soon landing page for The Wags & Whiskers Co.

## Run locally

Run `python3 -m http.server 8080` in this repository, then open http://localhost:8080.
No installation or build step is required.

## Hosting

Deploy the repository root as a static site. The entry point is `index.html`.
Use no framework and no build command; choose `.` as the publish directory if your host asks.
Connect the custom domain in your hosting provider after deployment. No domain or DNS configuration is included.

## Files

- `index.html`: landing hero and cat/dog contact pop-ups.
- `assets/css/landing.css`: hero layout and brand details.
- `assets/css/contact-popups.css`: contact icons and pop-up styles.
- `assets/css/bootstrap.css`, `style.css`, `responsive.css`: existing site styles preserved for visual consistency.
- `assets/js/contact-popups.js`: phone, email, WhatsApp and social destinations.
- `assets/brand/`: current logo, diagonal whiskers and favicon.
- `assets/icons/`: contact and social icons.
- `assets/images/`: images referenced by the retained theme CSS.

All local assets are included. The theme loads Google Fonts over HTTPS; system sans-serif fonts are used when unavailable.
This repository is independent of the original website folder. Changes here do not update that folder.

## Asset provenance

Theme CSS and brand artwork were copied from the supplied website package; original licensing continues to apply.
Lucide icons include their license in `assets/icons/lucide/LICENSE`.
Facebook and Instagram artwork came from the supplied SVG Repo assets; TikTok is a music-note crop of the supplied SVG Repo artwork.
The WhatsApp icon came from Simple Icons. Brand marks remain subject to their respective owners’ rights.
# hlh-wwco
