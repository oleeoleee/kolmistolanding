export type ServiceOptionId = string;

// Compatibility alias kept while the form payload still uses `serviceType`.
export type ServiceKind = ServiceOptionId;

export type AutoHeroTemplateId =
  | "premium-detailing"
  | "coating-protection"
  | "restoration-care"
  | "service-trust";

export type CtaVariant =
  | "book-consultation"
  | "leave-request"
  | "call-now"
  | "get-price";

export type CtaActionType =
  | "phone"
  | "form-anchor"
  | "form-submit"
  | "route";

export type CtaDefinition = {
  id: string;
  variant: CtaVariant;
  label: string;
  mobileLabel?: string;
  helperText?: string;
  actionType: CtaActionType;
  href?: string;
  target?: string;
  analytics?: {
    source: string;
    placement?: string;
  };
};

export type FormSubmitCta = CtaDefinition & {
  actionType: "form-submit";
  helperText: string;
  submittingLabel: string;
  desktopHelperPoints: string[];
};

export type CtaContent = {
  headerCall: CtaDefinition;
  quickContactCall: CtaDefinition;
  mobileStickyPrimary: CtaDefinition;
  mobileStickySecondary: CtaDefinition;
  formSubmit: FormSubmitCta;
  route?: CtaDefinition;
};

export type ContactWindow = "today" | "tomorrow" | "worktime";

export type LocaleConfig = {
  htmlLang: string;
  dateLocale: string;
  timeZone: string;
  phone: {
    mode: "ru-phone-first";
    prefix: string;
    normalizedCountryCode: string;
    localLength: number;
    trunkPrefixes: string[];
    placeholder: string;
  };
};

export type BrandIdentity = {
  brandLine: string;
  brandName: string;
  dealerName: string;
  city: string;
  serviceStatus: string;
  serviceCenterLabel: string;
};

export type BrandThemeTokens = {
  bg: string;
  surface: string;
  surfaceMuted: string;
  surfaceSubtle: string;
  text: string;
  textMuted: string;
  border: string;
  borderStrong: string;
  primary: string;
  primarySoft: string;
  primaryPressed: string;
  success: string;
  danger: string;
  warning: string;
  shadowSoft: string;
  themeColor: string;
};

export type ThemePresetId =
  | "premium-dark"
  | "graphite-orange"
  | "clean-silver"
  | "black-gold";

export type ThemePreset = {
  id: ThemePresetId;
  label: string;
  description: string;
  intendedUse: string[];
  tokens: BrandThemeTokens;
  notes?: string[];
};

export type ThemePresetSelection = {
  id: ThemePresetId;
  label: string;
  description: string;
  intendedUse: string[];
  tokenSource: ThemePresetId;
  notes?: string[];
};

export type BrandTheme = BrandThemeTokens & {
  // Authoring metadata only. Rendering still reads the raw CSS variable tokens.
  preset?: ThemePresetSelection;
};

export type BrandLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobileClassName: string;
  desktopClassName: string;
};

export type DealerProfile = {
  brandLine: string;
  brandName: string;
  dealerName: string;
  city: string;
  serviceStatus: string;
  serviceCenterLabel: string;
  heroTitle: string;
  heroDescription: string;
  phoneDisplay: string;
  phoneHref: string;
  address: string;
  shortAddress: string;
  workHours: string[];
  mobileWorkHours: string;
  routeHref: string;
  policyHref: string;
  formEndpoint: string | null;
  requisites: string | null;
};

export type ContactContent = {
  phoneDisplay: string;
  phoneHref: string;
  address: string;
  shortAddress: string;
  workHours: string[];
  mobileWorkHours: string;
  routeHref: string;
  requisites: string | null;
  labels: {
    sectionTitle: string;
    workHours: string;
    phone: string;
    callCta: string;
  };
};

export type SectionText = {
  title: string;
  description?: string;
};

export type HeroTemplate = {
  id: AutoHeroTemplateId;
  label: string;
  intent: string;
  useCases: string[];
};

export type HeroTemplateSelection = HeroTemplate & {
  primaryServiceIds?: ServiceOptionId[];
};

export type HeroContent = {
  template?: HeroTemplateSelection;
  title: string;
  description: string;
  eyebrow: string;
  mobileDescription: string;
  trustPoints: string[];
};

export type AdvantageIcon = "parts" | "tools" | "shield" | "scan";

export type AdvantageItem = {
  icon: AdvantageIcon;
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FormCopy = {
  eyebrow: string;
  title: string;
  description: string;
  phoneLabel: string;
  requiredLabel: string;
  optionalLabel: string;
  phoneHelperText: string;
  phoneErrorText: string;
  submitLabel: string;
  submittingLabel: string;
  mobileCtaMicrocopy: string;
  desktopCtaPoints: string[];
  legalPrefix: string;
  legalLinkLabel: string;
  successMessage: string;
  errorMessage: string;
  detailsToggleLabel: string;
  detailsToggleMeta: string;
  serviceLegend: string;
  serviceLabel: string;
  contactWindowLegend: string;
  contactWindowLabel: string;
  commentLabel: string;
  commentPlaceholder: string;
  antiAnxietyCopy: string;
  mobileStickySubmitLabel: string;
};

export type ServiceOption = {
  value: ServiceOptionId;
  label: string;
};

export type ServiceItem = {
  id: ServiceOptionId;
  label: string;
  shortLabel?: string;
  alternateLabel?: string;
  description?: string;
  category?: string;
  isPrimary?: boolean;
};

export type ServicesContent = {
  items: ServiceItem[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  shortAnswer?: string;
  category?: string;
  isPrimary?: boolean;
  order?: number;
};

export type FaqContent = {
  title: string;
  description?: string;
  items: FaqItem[];
};

export type FormContent = {
  serviceOptions: ServiceOption[];
  contactWindowOptions: Array<{ value: ContactWindow; label: string }>;
  copy: FormCopy;
  submission: {
    endpoint: string | null;
    source: string;
    mockDelayMs: number;
  };
};

export type LegalContent = {
  policyHref: string;
  policyLabel: string;
  privacyPolicyRaw: string;
  backLinkLabel: string;
};

export type AutomationPayloadKey =
  | "phone"
  | "serviceType"
  | "contactWindow"
  | "comment"
  | "source"
  | "submittedAt";

export type AutomationConfig = {
  workflowName: string;
  webhookPath: string;
  source: string;
  timeZone: string;
  emailSubject: string;
  templateHints: {
    expectedPayloadKeys: AutomationPayloadKey[];
  };
};

export type BrandAssets = {
  // The current header renders a fixed two-logo lockup.
  logos: {
    primary: BrandLogo;
    secondary: BrandLogo;
  };
  faviconPath: string;
  logoDirectory: string;
  ogImagePath?: string | null;
};

export type BrandConfig = {
  id: string;
  locale: LocaleConfig;
  brand: BrandIdentity;
  seo: {
    metadataTitleDefault: string;
    metadataTitleTemplate: string;
    metadataDescription: string;
    servicePageTitle: string;
    servicePageDescription: string;
    privacyPageTitle: string;
    privacyPageDescription: string;
  };
  theme: BrandTheme;
  assets: BrandAssets;
  contact: ContactContent;
  cta: CtaContent;
  hero: HeroContent;
  services: ServicesContent;
  faq: FaqContent;
  form: FormContent;
  legal: LegalContent;
  automation: AutomationConfig;
  // Compatibility aliases kept while the existing page bridge is retired gradually.
  logos: {
    primary: BrandLogo;
    secondary: BrandLogo;
  };
  dealerProfile: DealerProfile;
  trustSection: SectionText & {
    advantages: AdvantageItem[];
  };
  processSection: SectionText & {
    steps: ProcessStep[];
  };
  quickContact: SectionText;
  footer: {
    summaryLine: string;
    policyLabel: string;
  };
};
