import type { CSSProperties } from "react";

import { ladaBrand } from "@/content/brands/lada";
import type { BrandConfig } from "@/content/brand-types";

export type { BrandConfig, ContactWindow, ServiceKind } from "@/content/brand-types";

// Switch this import to another brand config when cloning the template.
export const activeBrand: BrandConfig = ladaBrand;

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
export const brandLogos = activeBrand.logos;
export const dealerProfile = activeBrand.dealerProfile;
export const heroContent = activeBrand.hero;
export const serviceOptions = activeBrand.form.serviceOptions;
export const contactWindowOptions = activeBrand.form.contactWindowOptions;
export const trustSection = activeBrand.trustSection;
export const advantages = activeBrand.trustSection.advantages;
export const processSection = activeBrand.processSection;
export const processSteps = activeBrand.processSection.steps;
export const quickContact = activeBrand.quickContact;
export const footerContent = activeBrand.footer;
