import type { CSSProperties } from "react";

import { autoDetailingYakutskExampleConfig } from "@/content/examples/auto-detailing-yakutsk";
import type { BrandConfig } from "@/content/brand-types";

export type {
  AutomationConfig,
  AutomationPayloadKey,
  BrandAssets,
  BrandConfig,
  BrandIdentity,
  ContactContent,
  ContactWindow,
  FormContent,
  LegalContent,
  LocaleConfig,
  ServiceOption,
  ServiceOptionId,
  ServiceKind,
} from "@/content/brand-types";

// Switch this fixture to adapt the white-label skeleton to another local service.
export const activeBrand: BrandConfig = autoDetailingYakutskExampleConfig;

type CSSVariableStyle = CSSProperties & Record<`--${string}`, string>;

export const brandThemeStyle: CSSVariableStyle = {
  "--bg": activeBrand.theme.bg,
  "--surface": activeBrand.theme.surface,
  "--surface-muted": activeBrand.theme.surfaceMuted,
  "--surface-subtle": activeBrand.theme.surfaceSubtle,
  "--text": activeBrand.theme.text,
  "--text-2": activeBrand.theme.textMuted,
  "--border": activeBrand.theme.border,
  "--border-strong": activeBrand.theme.borderStrong,
  "--primary": activeBrand.theme.primary,
  "--primary-soft": activeBrand.theme.primarySoft,
  "--primary-pressed": activeBrand.theme.primaryPressed,
  "--success": activeBrand.theme.success,
  "--danger": activeBrand.theme.danger,
  "--warning": activeBrand.theme.warning,
  "--shadow-soft": activeBrand.theme.shadowSoft,
};

export const brandSeo = activeBrand.seo;
export const localeContent = activeBrand.locale;
export const brandContent = activeBrand.brand;
export const assetsContent = activeBrand.assets;
export const brandLogos = activeBrand.assets.logos;
export const contactContent = activeBrand.contact;
export const dealerProfile = activeBrand.dealerProfile;
export const heroContent = activeBrand.hero;
export const formContent = activeBrand.form;
export const serviceOptions = formContent.serviceOptions;
export const contactWindowOptions = formContent.contactWindowOptions;
export const legalContent = activeBrand.legal;
export const automationContent = activeBrand.automation;
export const trustSection = activeBrand.trustSection;
export const advantages = activeBrand.trustSection.advantages;
export const processSection = activeBrand.processSection;
export const processSteps = activeBrand.processSection.steps;
export const quickContact = activeBrand.quickContact;
export const footerContent = activeBrand.footer;
