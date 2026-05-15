# Skeleton Plan

## Phase 1

- Keep the current Kolmi/LADA UI and behavior.
- Move brand, contact, form, legal, locale, and automation metadata into config.
- Keep risky interaction logic and the original n8n workflow stable.
- Preserve Kolmi/LADA as an example fixture.

## Phase 1.5

- Make service option IDs fixture-owned slugs instead of a Kolmi-shaped shared
  enum.
- Constrain the current phone setup explicitly as `ru-phone-first`.
- Keep compatibility aliases, but document that they are transitional.
- Record the existing payload contract in automation template hints without
  rewriting the n8n workflow.
- Document the current fixed two-logo header assumption for future fixtures.

## Auto-Family Architecture Pass

- Add `services.items` as the canonical richer service model while preserving
  `form.serviceOptions` for the current selector and submission payload.
- Add lightweight auto-family hero template metadata for patterns such as
  premium detailing, coating protection, restoration care, and service trust.
- Keep CTA copy, legal content, contact data, theme tokens, and automation
  metadata in their current rendering-safe paths.
- Preserve the active AURUM DETAIL fixture and the Kolmi/LADA fixture.

## CTA Architecture Pass

- Add `cta` as the canonical CTA model for the current header, form, mobile
  sticky, and quick contact actions.
- Support CTA variants `book-consultation`, `leave-request`, `call-now`, and
  `get-price` as intent metadata for auto-family fixtures.
- Keep existing visual CTA touchpoints and compatibility aliases stable.
- Preserve route CTA metadata without rendering a new route button.

## FAQ Data Pass

- Add `faq` as canonical fixture-owned FAQ content for auto-family client demos.
- Keep FAQ data-only while the current page layout remains fixed.
- Add practical FAQ items to AURUM DETAIL and Kolmi/LADA.
- Document a future lightweight rendering path using existing visual primitives.

## Theme Preset Pass

- Add `themePresets` as reusable auto-family visual directions.
- Preserve the raw CSS token contract consumed by the current UI.
- Tie AURUM DETAIL to `black-gold` and Kolmi/LADA to `graphite-orange` without
  changing their visual tokens.
- Keep presets as authoring metadata; no runtime theme switcher is introduced.

## Next Phase Candidates

- Template the n8n workflow from `automation` config.
- Generalize phone formatting with tests.
- Decide whether webhook-specific payload adapters are needed once fixtures
  diverge further.
- Generalize or simplify the dual-logo header contract.
- Retire legacy config aliases after the app reads only canonical groups.
- Retire CTA compatibility aliases after the form and contact bridges no longer
  need them.
- Render FAQ with a lightweight non-interactive section once a page-layout pass is
  allowed.
- Add visual regression checks for activating new theme presets.
