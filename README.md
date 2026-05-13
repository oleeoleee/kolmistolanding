# Reusable Landing Skeleton

Phase 1 converts the copied Kolmi/LADA landing into a reusable white-label
skeleton without redesigning the current UI.

## Current Example Fixture

The active example is Kolmi/LADA:

- `frontend/src/content/examples/kolmi-lada.ts`
- `frontend/src/content/brand.ts`

The UI should keep reading through the config bridge instead of hardcoding
brand, contact, form, legal, locale, or automation data in components.

## Frontend

```bash
cd frontend
npm run lint
npm run build
```
