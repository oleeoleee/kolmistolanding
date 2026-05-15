# Reusable Landing Skeleton Guide

The current skeleton is a RU-first, phone-first lead-gen foundation for
auto-family local services: detailing, polishing, coatings, protection, and
trusted service-style offers. The UI stays fixed; fixtures carry the business,
service, CTA, FAQ, hero, legal, theme, and automation data.

## Active Example

- Active config: `frontend/src/content/brand.ts`
- Active demo fixture: `frontend/src/content/examples/auto-detailing-yakutsk.ts`
- Kolmi/LADA example fixture: `frontend/src/content/examples/kolmi-lada.ts`
- Legacy alias kept for compatibility: `frontend/src/content/brands/lada.ts`
- Config contract: `frontend/src/content/brand-types.ts`
- Service option helper: `frontend/src/content/services.ts`
- Auto-family hero templates: `frontend/src/content/hero-templates.ts`
- Theme preset registry: `frontend/src/content/theme-presets.ts`
- App-facing content bridge: `frontend/src/app/site-content.ts`

## Canonical Config Groups

- `locale`: html language, date locale, timezone, RU-first phone defaults
- `brand`: brand/dealer identity
- `assets`: logos, favicon path, logo directory, optional OG image
- `theme`: preset metadata plus CSS variable values used by the existing UI
- `seo`: shared and page-level metadata
- `contact`: phone, address, route, work hours, contact labels
- `cta`: reusable CTA definitions for current header, form, sticky, and contact actions
- `faq`: fixture-owned FAQ content for future lightweight rendering and client demos
- `hero`: hero title, descriptions, eyebrow, trust points, optional auto-family template metadata
- `services`: canonical service data with IDs, labels, descriptions, categories, and primary flags
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
3. Define services in `services.items`. Keep IDs stable, machine-friendly, and
   scoped to the auto-family niche.
4. Derive `form.serviceOptions` with `toServiceOptions(services.items)` unless
   there is a deliberate compatibility reason to hand-map options.
5. Pick a hero template from `autoHeroTemplates` and keep the visible hero copy
   explicit in the fixture. The template is metadata, not a rendering engine.
6. Pick a theme preset from `themePresets`. Keep the preset tokens as-is when
   possible; override raw tokens only after checking the visual result.
7. Define CTA intent in `cta`. Keep `contact.labels.callCta` and
   `form.copy.*` submit fields aligned as compatibility aliases.
8. Add practical FAQ items in `faq.items`. Keep answers short, local-service
   oriented, and useful before a phone consultation.
9. Keep `locale.phone.mode` as `ru-phone-first`. The current form remains a
   Russian phone-first lead form, even though its defaults live in config.
10. Preserve the current dual-logo header contract. For a single-logo brand,
   duplicate the primary mark or use a neutral secondary placeholder until the
   header itself is generalized.
11. Point `activeBrand` in `frontend/src/content/brand.ts` to the new fixture.
12. Run `npm run lint` and `npm run build` from `frontend`.

## Services Model

`services.items` is the richer canonical model for future auto fixtures:

- `id`: stable submission identifier
- `label`: current form-visible label
- `shortLabel` or `alternateLabel`: optional authoring metadata for future UI
- `description`: optional service explanation for future sections or sales docs
- `category`: optional auto-family grouping such as `polishing`, `coating`,
  `interior-care`, `paint-protection`, `scheduled-service`, or `diagnostics`
- `isPrimary`: optional flag for the services that define the core offer

The current form still receives only `{ value, label }` through
`form.serviceOptions`, preserving the existing selector and submission payload.

## Hero Templates

Hero templates live in `autoHeroTemplates` and describe the intended pattern for
visible hero copy. They are deliberately lightweight metadata:

- `premium-detailing`
- `coating-protection`
- `restoration-care`
- `service-trust`

Fixtures still own the final visible hero text. This avoids a template engine
while making future auto-family landing pages easier to compare and author.

## Theme Presets

Theme presets live in `themePresets` and are authoring metadata plus reusable
token sets. The active runtime still reads raw tokens from `theme`, so presets do
not add a theme switcher or a new rendering path.

Available presets:

- `premium-dark`: quiet dark premium palette for trusted auto service
- `graphite-orange`: original Kolmi/LADA graphite and orange palette
- `clean-silver`: light clean palette for protection or maintenance offers
- `black-gold`: active AURUM DETAIL black and gold palette

Fixture pattern:

```ts
theme: {
  ...themePresets.blackGold.tokens,
  preset: toThemePresetSelection(themePresets.blackGold),
}
```

What is fixed:

- the CSS variable contract used by `brandThemeStyle`
- the current page layout and component styling
- no runtime preset selector in the UI

What is configurable:

- preset assignment metadata
- raw token values in the fixture
- future preset descriptions, intended use notes, and token sets

When creating a new preset, add it to `frontend/src/content/theme-presets.ts`,
keep the existing token keys complete, and run a visual check before making it
the active fixture. For single-logo brands, check logo contrast against the
chosen preset before duplicating or placeholdering the second header logo.

## CTA Variants

CTA config lives in `cta` and covers only the actions that already exist in the
current UI:

- `headerCall`: phone button in the header
- `quickContactCall`: phone button in the quick contact panel
- `mobileStickyPrimary`: mobile sticky link to the form
- `mobileStickySecondary`: mobile sticky phone link
- `formSubmit`: submit button, submit loading label, mobile helper text, and
  desktop helper points
- `route`: route metadata for future use; no route button is rendered yet

Supported variants are:

- `book-consultation`
- `leave-request`
- `call-now`
- `get-price`

Use variants to document intent. Use `actionType` to describe behavior:
`phone`, `form-anchor`, `form-submit`, or `route`. This is not a marketing
engine and should not add new UI by itself.

Compatibility aliases remain for now:

- `contact.labels.callCta`
- `form.copy.submitLabel`
- `form.copy.submittingLabel`
- `form.copy.mobileCtaMicrocopy`
- `form.copy.desktopCtaPoints`
- `form.copy.mobileStickySubmitLabel`

Keep them in sync with `cta` until the old fields are retired.

## FAQ Data

FAQ config lives in `faq` and is data-only in the current pass. No FAQ section is
rendered yet, because the current page layout is intentionally preserved.

Each `faq.items` entry supports:

- `id`: stable fixture-owned identifier
- `question`: visible question
- `answer`: full answer
- `shortAnswer`: optional short version for compact future UI
- `category`: optional auto-family grouping such as `pricing`, `coating`,
  `diagnostics`, `process`, or `contact`
- `isPrimary`: optional flag for the most client-facing questions
- `order`: optional explicit ordering metadata

Author FAQ items as practical pre-call objections or clarifications. Good
auto-family FAQ topics include service choice, timing, price confirmation,
diagnostics, coating expectations, paint-protection scope, and callback timing.

Intended future rendering path: add a lightweight section near the contact area
using the existing `SectionHeading`, `surface-panel`, and text styles. Do not add
an accordion or heavy interaction unless there is a specific need.

## Current Constraints

- The form shape is fixed: phone first, then optional service, contact window,
  and comment.
- FAQ is currently fixture-owned data only; it does not change the rendered page
  or introduce a new section yet.
- Theme presets are authoring metadata plus reusable token sets; the app still
  renders raw CSS variables from `theme`.
- CTA config can change labels, helper text, intent metadata, and existing hrefs;
  it does not change the number, placement, or visual structure of buttons.
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
