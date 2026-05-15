import type {
  ThemePreset,
  ThemePresetId,
  ThemePresetSelection,
} from "@/content/brand-types";

type ThemePresetKey =
  | "premiumDark"
  | "graphiteOrange"
  | "cleanSilver"
  | "blackGold";

export const themePresets = {
  premiumDark: {
    id: "premium-dark",
    label: "Premium Dark",
    description:
      "Restrained dark automotive palette for premium service, trusted repairs, and high-touch consultation.",
    intendedUse: [
      "premium auto service",
      "trusted repair",
      "dark automotive lead-gen",
    ],
    tokens: {
      bg: "#101114",
      surface: "rgba(22, 24, 29, 0.9)",
      surfaceMuted: "rgba(32, 35, 42, 0.88)",
      surfaceSubtle: "rgba(236, 239, 244, 0.08)",
      text: "#F3F5F7",
      textMuted: "#AEB5BF",
      border: "rgba(243, 245, 247, 0.12)",
      borderStrong: "rgba(243, 245, 247, 0.22)",
      primary: "#E2E7EF",
      primarySoft: "rgba(226, 231, 239, 0.14)",
      primaryPressed: "#C7D0DB",
      success: "#8BCF97",
      danger: "#FF9A90",
      warning: "#D8A35D",
      shadowSoft: "0 24px 54px rgba(0, 0, 0, 0.34)",
      themeColor: "#101114",
    },
    notes: [
      "Use when the fixture needs a quiet premium look without a strong accent color.",
      "Check logo contrast before activating for a client fixture.",
    ],
  },
  graphiteOrange: {
    id: "graphite-orange",
    label: "Graphite Orange",
    description:
      "Graphite base with orange accent, suitable for dealer service and pragmatic auto repair offers.",
    intendedUse: [
      "dealer service",
      "scheduled maintenance",
      "diagnostics and repair",
    ],
    tokens: {
      bg: "#3f454a",
      surface: "rgba(27, 34, 39, 0.84)",
      surfaceMuted: "rgba(42, 51, 58, 0.82)",
      surfaceSubtle: "rgba(62, 73, 81, 0.3)",
      text: "#f1f0eb",
      textMuted: "#b7bec6",
      border: "rgba(223, 229, 234, 0.12)",
      borderStrong: "rgba(223, 229, 234, 0.2)",
      primary: "#df6d32",
      primarySoft: "rgba(223, 109, 50, 0.14)",
      primaryPressed: "#c75b24",
      success: "#8bcf97",
      danger: "#ff9a90",
      warning: "#d89954",
      shadowSoft: "0 24px 54px rgba(4, 8, 14, 0.28)",
      themeColor: "#3f454a",
    },
    notes: [
      "Matches the original Kolmi/LADA example tokens for compatibility.",
    ],
  },
  cleanSilver: {
    id: "clean-silver",
    label: "Clean Silver",
    description:
      "Light, clean service palette for careful presentation, paint protection, and maintenance-oriented offers.",
    intendedUse: [
      "paint protection",
      "clean auto care",
      "maintenance presentation",
    ],
    tokens: {
      bg: "#EEF1F4",
      surface: "rgba(255, 255, 255, 0.9)",
      surfaceMuted: "rgba(245, 247, 250, 0.88)",
      surfaceSubtle: "rgba(37, 48, 64, 0.08)",
      text: "#171B22",
      textMuted: "#5D6673",
      border: "rgba(23, 27, 34, 0.12)",
      borderStrong: "rgba(23, 27, 34, 0.2)",
      primary: "#253040",
      primarySoft: "rgba(37, 48, 64, 0.12)",
      primaryPressed: "#151C27",
      success: "#287A47",
      danger: "#C84D47",
      warning: "#A26A24",
      shadowSoft: "0 24px 54px rgba(23, 27, 34, 0.18)",
      themeColor: "#EEF1F4",
    },
    notes: [
      "Not active by default. Run a visual check before using because the current UI was born as a dark layout.",
    ],
  },
  blackGold: {
    id: "black-gold",
    label: "Black Gold",
    description:
      "Premium dark automotive palette with warm gold accent for detailing, polishing, and coatings.",
    intendedUse: [
      "premium detailing",
      "ceramic coating",
      "polishing and restoration",
    ],
    tokens: {
      bg: "#0B0B0C",
      surface: "rgba(20, 21, 24, 0.9)",
      surfaceMuted: "rgba(30, 32, 37, 0.88)",
      surfaceSubtle: "rgba(214, 168, 95, 0.1)",
      text: "#F5F7FA",
      textMuted: "#A7ADB7",
      border: "rgba(245, 247, 250, 0.12)",
      borderStrong: "rgba(245, 247, 250, 0.22)",
      primary: "#D6A85F",
      primarySoft: "rgba(214, 168, 95, 0.16)",
      primaryPressed: "#BC8F45",
      success: "#8BCF97",
      danger: "#FF9A90",
      warning: "#D6A85F",
      shadowSoft: "0 24px 54px rgba(0, 0, 0, 0.36)",
      themeColor: "#0B0B0C",
    },
    notes: [
      "Matches the active AURUM DETAIL demo tokens for compatibility.",
      "Works best with light or gold-accent logos.",
    ],
  },
} satisfies Record<ThemePresetKey, ThemePreset>;

export const toThemePresetSelection = (
  preset: ThemePreset,
): ThemePresetSelection => ({
  id: preset.id,
  label: preset.label,
  description: preset.description,
  intendedUse: preset.intendedUse,
  tokenSource: preset.id,
  notes: preset.notes,
});

export const themePresetIds = Object.values(themePresets).map(
  (preset) => preset.id,
) satisfies ThemePresetId[];
