# Form Fields

The skeleton still uses the current phone-first lead form, but Phase 1.5 makes
the config contract clearer for additional fixtures.

## Current Form Contract

- Required: phone
- Optional: service type
- Optional: preferred contact window
- Optional: comment

Canonical source:

- `frontend/src/content/examples/kolmi-lada.ts`
- `frontend/src/content/examples/auto-detailing-yakutsk.ts`
- `form.copy`
- `form.serviceOptions`
- `form.contactWindowOptions`
- `form.submission`

## Fixture Rules

- `form.serviceOptions[].value` is a stable fixture-owned slug, not a shared
  automotive enum. Keep it machine-friendly and do not derive it from visible
  display text at runtime.
- `form.contactWindowOptions[].value` still follows the fixed
  `today | tomorrow | worktime` contract.
- `locale.phone.mode` is currently constrained to `ru-phone-first`. The visual
  form is configurable, but the formatter still assumes the existing RU-local
  phone model.
- The submission payload shape is unchanged:
  `phone`, `serviceType`, `contactWindow`, `comment`, `source`, `submittedAt`.
  `automation.templateHints.expectedPayloadKeys` mirrors that payload for later
  workflow templating.
