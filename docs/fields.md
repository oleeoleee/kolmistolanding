# Form Fields

The skeleton still uses the current phone-first lead form. The richer canonical
service data now lives in `services.items`, while the current form keeps reading
the compatibility options in `form.serviceOptions`.

## Current Form Contract

- Required: phone
- Optional: service type
- Optional: preferred contact window
- Optional: comment

Canonical source:

- `frontend/src/content/examples/kolmi-lada.ts`
- `frontend/src/content/examples/auto-detailing-yakutsk.ts`
- `cta.formSubmit`
- `faq.items`
- `services.items`
- `form.copy`
- `form.serviceOptions`
- `form.contactWindowOptions`
- `form.submission`

## Fixture Rules

- `services.items[].id` is the stable fixture-owned service slug. Keep it
  machine-friendly and scoped to the auto-family niche.
- `form.serviceOptions` should usually be derived from `services.items` with
  `toServiceOptions(services.items)` so the current UI and payload stay stable.
- `services.items` can carry optional `shortLabel`, `alternateLabel`,
  `description`, `category`, and `isPrimary` metadata for future use.
- `faq.items` carries data-only FAQ content for now. Each item has `id`,
  `question`, `answer`, and optional `shortAnswer`, `category`, `isPrimary`, and
  `order`.
- `cta.formSubmit` is the canonical source for submit CTA intent, label,
  submitting label, mobile helper text, and desktop helper points.
- `form.copy.submitLabel`, `form.copy.submittingLabel`,
  `form.copy.mobileCtaMicrocopy`, `form.copy.desktopCtaPoints`, and
  `form.copy.mobileStickySubmitLabel` remain compatibility aliases.
- `form.contactWindowOptions[].value` still follows the fixed
  `today | tomorrow | worktime` contract.
- `locale.phone.mode` is currently constrained to `ru-phone-first`. The visual
  form is configurable, but the formatter still assumes the existing RU-local
  phone model.
- The submission payload shape is unchanged:
  `phone`, `serviceType`, `contactWindow`, `comment`, `source`, `submittedAt`.
  `automation.templateHints.expectedPayloadKeys` mirrors that payload for later
  workflow templating.
