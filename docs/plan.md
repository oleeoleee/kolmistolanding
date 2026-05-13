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

## Next Phase Candidates

- Template the n8n workflow from `automation` config.
- Generalize phone formatting with tests.
- Decide whether webhook-specific payload adapters are needed once fixtures
  diverge further.
- Generalize or simplify the dual-logo header contract.
- Retire legacy config aliases after the app reads only canonical groups.
