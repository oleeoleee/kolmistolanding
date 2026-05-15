# Reusable Landing Skeleton

The project is a reusable RU-first, phone-first landing skeleton for auto-family
local lead-gen businesses. It keeps the current frontend fixed while moving
business, service, CTA, hero, contact, legal, theme, and automation data into
fixtures. FAQ data is also fixture-owned and ready for a later lightweight render
pass. Theme presets provide reusable auto-family visual directions while the
runtime still reads stable CSS tokens from each fixture.

## Current Example Fixture

The active demo-ready fixture is AURUM DETAIL:

- `frontend/src/content/examples/auto-detailing-yakutsk.ts`
- `frontend/src/content/brand.ts`

Kolmi/LADA remains available as the original example fixture:

- `frontend/src/content/examples/kolmi-lada.ts`

The UI should keep reading through the config bridge instead of hardcoding
brand, contact, form, legal, locale, or automation data in components.

Theme preset registry:

- `frontend/src/content/theme-presets.ts`

## Frontend

```bash
cd frontend
npm run lint
npm run build
```
