export type ServiceKind = "maintenance" | "repair" | "diagnostics" | "consultation";

export type ContactWindow = "today" | "tomorrow" | "worktime";

export type BrandTheme = {
  bg: string;
  surface: string;
  surfaceMuted: string;
  surfaceSubtle: string;
  text: string;
  textMuted: string;
  border: string;
  borderStrong: string;
  primary: string;
  primaryPressed: string;
  success: string;
  danger: string;
  warning: string;
  shadowSoft: string;
  themeColor: string;
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

export type SectionText = {
  title: string;
  description?: string;
};

export type HeroContent = {
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

export type BrandConfig = {
  id: string;
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
  logos: {
    primary: BrandLogo;
    secondary: BrandLogo;
  };
  dealerProfile: DealerProfile;
  hero: HeroContent;
  form: {
    serviceOptions: Array<{ value: ServiceKind; label: string }>;
    contactWindowOptions: Array<{ value: ContactWindow; label: string }>;
  };
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
  assets: {
    faviconPath: string;
    logoDirectory: string;
    ogImagePath?: string | null;
  };
};
