import type { HeroTemplate } from "@/content/brand-types";

export const autoHeroTemplates = {
  premiumDetailing: {
    id: "premium-detailing",
    label: "Premium detailing",
    intent: "Premium exterior, interior, and complete car-care lead generation.",
    useCases: ["auto-detailing", "polishing", "interior-care"],
  },
  coatingProtection: {
    id: "coating-protection",
    label: "Coating protection",
    intent: "Protective coatings, paint protection film, and long-term surface care.",
    useCases: ["ceramic-coating", "paint-protection-film", "new-car-protection"],
  },
  restorationCare: {
    id: "restoration-care",
    label: "Restoration care",
    intent: "Polishing, restoration, presale preparation, and visible-condition recovery.",
    useCases: ["paint-restoration", "presale-preparation", "body-polishing"],
  },
  serviceTrust: {
    id: "service-trust",
    label: "Service trust",
    intent: "Trusted auto service, scheduled maintenance, diagnostics, and repair leads.",
    useCases: ["maintenance", "diagnostics", "repair"],
  },
} satisfies Record<string, HeroTemplate>;
