# Reusable Landing Skeleton Guide

Phase 1.5 keeps the current landing surface intact while making fixture authoring
less Kolmi-shaped and more explicit about the constraints that still remain.

## Active Example

- Active config: `frontend/src/content/brand.ts`
- Kolmi/LADA example fixture: `frontend/src/content/examples/kolmi-lada.ts`
- Legacy alias kept for compatibility: `frontend/src/content/brands/lada.ts`
- Config contract: `frontend/src/content/brand-types.ts`
- App-facing content bridge: `frontend/src/app/site-content.ts`

## Canonical Config Groups

- `locale`: html language, date locale, timezone, RU-first phone defaults
- `brand`: brand/dealer identity
- `assets`: logos, favicon path, logo directory, optional OG image
- `theme`: CSS variable values used by the existing UI
- `seo`: shared and page-level metadata
- `contact`: phone, address, route, work hours, contact labels
- `hero`: hero title, descriptions, eyebrow, preserved trust points
- `form`: visible form copy, options, endpoint/source/mock settings
- `legal`: policy link, policy label, privacy text, privacy page back link
- `automation`: n8n-oriented workflow metadata plus future template hints

## Compatibility Aliases

These fields remain to avoid a wide rewrite and to keep risky areas stable. Some
are still read by the current app bridge, so fixture authors should preserve them
until a later cleanup pass retires them deliberately:

- `dealerProfile`
- `logos`
- `trustSection`
- `processSection`
- `quickContact`
- `footer`

Do not remove them yet. New work should prefer the canonical config groups
above, then retire aliases only when the UI and automation path are covered by
checks.

## Creating A New Fixture

1. Copy `frontend/src/content/examples/kolmi-lada.ts` to a new file in
   `frontend/src/content/examples`.
2. Replace only data inside the canonical groups first.
3. Use stable fixture-owned slugs in `form.serviceOptions[].value`. Labels are
   visible copy; values are submission IDs and no longer share a single
   auto-service enum.
4. Keep `locale.phone.mode` as `ru-phone-first`. The current form remains a
   Russian phone-first lead form, even though its defaults live in config.
5. Preserve the current dual-logo header contract. For a single-logo brand,
   duplicate the primary mark or use a neutral secondary placeholder until the
   header itself is generalized.
6. Point `activeBrand` in `frontend/src/content/brand.ts` to the new fixture.
7. Run `npm run lint` and `npm run build` from `frontend`.

## Current Constraints

- The form shape is fixed: phone first, then optional service, contact window,
  and comment.
- `locale.phone.mode` is intentionally constrained to `ru-phone-first`; the
  formatter still follows the current `+7` local-number assumptions.
- `automation.templateHints.expectedPayloadKeys` documents the current payload
  contract for future workflow templating. It does not rewrite or regenerate the
  n8n workflow yet.
- `privacyPolicyRaw` should remain structured enough for the existing privacy
  parser and page template.

## Deferred On Purpose

- Phone caret and formatting logic is still interaction-heavy and should be
  generalized only with tests.
- The n8n JSON workflow is still the original Kolmi export; Phase 1 only adds
  config metadata that makes a template easier to create next.
- The header still renders a fixed two-logo lockup.
- Alias retirement is intentionally deferred until the current app bridge can be
  simplified without widening the refactor.
