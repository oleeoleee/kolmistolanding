import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  brandLogos,
  brandSeo,
  dealerProfile,
  footerContent,
  heroContent,
  quickContact,
} from "@/app/site-content";
import { ServiceBookingForm } from "@/components/service-booking-form";

export const metadata: Metadata = {
  title: brandSeo.servicePageTitle,
  description: brandSeo.servicePageDescription,
};

const sectionClassName = "page-section max-[430px]:pt-7 max-[390px]:pt-6";
const surfacePanelClassName = "surface-panel";
const surfaceMutedClassName = "surface-muted";

function IconShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--primary)] sm:h-10 sm:w-10"
    >
      <svg
        aria-hidden="true"
        className="h-[18px] w-[18px] sm:h-5 sm:w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </span>
  );
}

function PhoneIcon() {
  return (
    <IconShell>
      <path d="M4.5 6.8c0-1 .8-1.8 1.8-1.8h2.4l1.3 3.7-1.9 1.9a15.8 15.8 0 0 0 5.3 5.3l1.9-1.9 3.7 1.3v2.4c0 1-.8 1.8-1.8 1.8h-.7C10.4 19.5 4.5 13.6 4.5 6.8Z" />
    </IconShell>
  );
}

function ClockIcon() {
  return (
    <IconShell>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.3 2" />
    </IconShell>
  );
}

function SectionHeading({
  title,
  description,
}: Readonly<{
  title: string;
  description?: string;
}>) {
  return (
    <div className="mb-6 space-y-1.5 max-[430px]:mb-5 sm:mb-7 sm:space-y-2">
      <h2 className="text-[22px] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--text)] sm:text-[28px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[38rem] text-[13px] leading-5 tracking-[-0.008em] text-[var(--text-2)] sm:max-w-[40rem] sm:text-[14px] sm:leading-[22px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CallButton({
  className,
  tone = "default",
}: Readonly<{
  className?: string;
  tone?: "default" | "primary";
}>) {
  const toneClassName =
    tone === "primary"
      ? "border-[var(--primary)] bg-[var(--primary)] text-white hover:bg-[var(--primary-pressed)] hover:border-[var(--primary-pressed)] hover:text-white"
      : "border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] hover:border-[rgba(17,22,29,0.26)] hover:bg-white hover:text-[var(--text)]";

  return (
    <a
      className={`inline-flex min-h-[46px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-semibold leading-none tracking-[-0.01em] transition sm:min-h-12 sm:text-[15px] ${toneClassName} ${className ?? ""}`}
      href={dealerProfile.phoneHref}
    >
      Позвонить
    </a>
  );
}

export default function Home() {
  const primaryWorkHours = dealerProfile.workHours[0] ?? "Уточняется";
  const mobileWorkHours = dealerProfile.mobileWorkHours;
  const shortAddress = dealerProfile.shortAddress;

  return (
    <>
      <main className="page-surface min-h-screen bg-transparent text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col px-4 pb-[calc(84px+env(safe-area-inset-bottom))] pt-3 max-[430px]:pb-[calc(78px+env(safe-area-inset-bottom))] max-[390px]:pt-2.5 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8">
          <header className="border-b border-[var(--border-strong)] pb-2.5 sm:pb-5">
            <div className="grid grid-cols-[minmax(0,1fr)_100px] items-center gap-x-2 gap-y-1.5 max-[360px]:grid-cols-[minmax(0,1fr)_96px] sm:hidden">
              <div
                className="ml-1 inline-grid w-fit max-w-full grid-cols-[auto_1px_auto] items-center justify-self-start gap-2 max-[360px]:ml-0.5 max-[360px]:gap-1.5"
              >
                <Image
                  src={brandLogos.primary.src}
                  alt={brandLogos.primary.alt}
                  width={brandLogos.primary.width}
                  height={brandLogos.primary.height}
                  priority
                  className={brandLogos.primary.mobileClassName}
                />
                <span className="h-[22px] w-px shrink-0 bg-[rgba(17,22,29,0.14)] max-[360px]:h-5" />
                <Image
                  src={brandLogos.secondary.src}
                  alt={brandLogos.secondary.alt}
                  width={brandLogos.secondary.width}
                  height={brandLogos.secondary.height}
                  priority
                  className={brandLogos.secondary.mobileClassName}
                />
              </div>

              <CallButton
                className="min-h-[42px] px-3 max-[360px]:px-2.5"
                tone="default"
              />

              <div className="col-span-full flex items-center justify-between gap-2">
                <a
                  className="min-w-0 flex-1 whitespace-nowrap text-[13px] font-semibold leading-4 tracking-[-0.02em] text-[var(--text)] transition hover:text-[var(--primary)] max-[360px]:text-[12px]"
                  href={dealerProfile.phoneHref}
                >
                  {dealerProfile.phoneDisplay}
                </a>
                <p className="shrink-0 text-right text-[9px] leading-[12px] tracking-[-0.01em] text-[var(--text-2)]">
                  <span className="font-semibold text-[var(--text)]">{mobileWorkHours}</span>
                  <br />
                  <span>{shortAddress}</span>
                </p>
              </div>
            </div>

            <div className="hidden sm:grid gap-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-6">
              <div
                className="inline-flex max-w-full items-center gap-2.5 max-[430px]:gap-2 sm:gap-4"
              >
                <Image
                  src={brandLogos.primary.src}
                  alt={brandLogos.primary.alt}
                  width={brandLogos.primary.width}
                  height={brandLogos.primary.height}
                  priority
                  className={brandLogos.primary.desktopClassName}
                />
                <span className="h-8 w-px shrink-0 bg-[rgba(17,22,29,0.14)] max-[430px]:h-7 sm:h-9" />
                <Image
                  src={brandLogos.secondary.src}
                  alt={brandLogos.secondary.alt}
                  width={brandLogos.secondary.width}
                  height={brandLogos.secondary.height}
                  priority
                  className={brandLogos.secondary.desktopClassName}
                />
              </div>

              <p className="min-w-0 text-[12px] leading-5 text-[var(--text-2)] sm:text-[13px] sm:leading-6 lg:px-2">
                <span className="font-semibold text-[var(--text)]">{primaryWorkHours}</span>
                {" • "}
                <span>{shortAddress}</span>
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 lg:justify-self-end">
                <a
                  className="inline-flex text-[14px] font-semibold tracking-[-0.02em] text-[var(--text)] transition hover:text-[var(--primary)] sm:text-[15px]"
                  href={dealerProfile.phoneHref}
                >
                  {dealerProfile.phoneDisplay}
                </a>
                <CallButton className="min-w-[118px]" tone="default" />
              </div>
            </div>
          </header>

          <section className="py-5 max-[390px]:py-4 sm:py-10 lg:py-14">
            <div className="grid gap-4 max-[390px]:gap-3.5 sm:gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-start lg:gap-x-12 lg:gap-y-8">
              <div className="min-w-0 lg:max-w-[44rem] lg:pt-2">
                <div className="space-y-3 max-[390px]:space-y-2.5 sm:space-y-5">
                  <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-2)] sm:block sm:text-[12px]">
                    {heroContent.eyebrow}
                  </p>
                  <h1 className="max-w-[11.5ch] text-[32px] font-semibold leading-[0.99] tracking-[-0.06em] text-[var(--text)] max-[390px]:text-[30px] max-[360px]:text-[28px] sm:max-w-[12ch] sm:text-[56px] sm:leading-[0.96]">
                    {dealerProfile.heroTitle}
                  </h1>
                  <p className="max-w-[31rem] text-[14px] leading-5 tracking-[-0.008em] text-[var(--text-2)] max-[390px]:max-w-[29rem] max-[390px]:leading-[19px] sm:max-w-[35rem] sm:text-[16px] sm:leading-[25px]">
                    <span className="sm:hidden">{heroContent.mobileDescription}</span>
                    <span className="hidden sm:inline">{dealerProfile.heroDescription}</span>
                  </p>
                </div>
              </div>

              <div className="min-w-0 lg:row-span-2 lg:border-l lg:border-[var(--border)] lg:pl-10">
                <div className="max-w-[430px] lg:ml-auto">
                  <ServiceBookingForm />
                </div>
              </div>


            </div>
          </section>

          <section className={sectionClassName} id="contacts">
            <SectionHeading title="Контакты" />
            <div className="grid gap-3.5 max-[430px]:gap-2.5 sm:gap-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)]">
              <article className={`${surfacePanelClassName} px-5 py-5 max-[430px]:px-3.5 max-[430px]:py-3.5 sm:px-6 sm:py-6`}>
                <div className="divide-y divide-[var(--border)]">
                
                  <div className="flex gap-4 py-4 max-[430px]:gap-2.5 max-[430px]:py-2.5">
                    <ClockIcon />
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-2)] max-[430px]:text-[11px]">
                        Часы работы
                      </p>
                      <div className="mt-2 space-y-1 text-[16px] leading-6 tracking-[-0.01em] text-[var(--text)] max-[430px]:mt-1 max-[430px]:text-[14px] max-[430px]:leading-5">
                        {dealerProfile.workHours.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pb-0 pt-4 max-[430px]:gap-2.5 max-[430px]:pt-2.5">
                    <PhoneIcon />
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-2)] max-[430px]:text-[11px]">
                        Телефон
                      </p>
                      <a
                        className="mt-2 inline-flex text-[16px] font-semibold leading-6 tracking-[-0.01em] text-[var(--primary)] transition hover:text-[var(--primary-pressed)] max-[430px]:mt-1 max-[430px]:text-[14px] max-[430px]:leading-5"
                        href={dealerProfile.phoneHref}
                      >
                        {dealerProfile.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              <aside className={`${surfaceMutedClassName} px-5 py-5 max-[430px]:px-3.5 max-[430px]:py-3.5 sm:px-6 sm:py-6`}>
                <div className="space-y-4 max-[430px]:space-y-2.5 sm:space-y-5">
                  <div className="space-y-2 max-[430px]:space-y-1 sm:space-y-3">
                    <p className="text-[20px] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--text)] max-[430px]:text-[17px] sm:text-[24px]">
                      {quickContact.title}
                    </p>
                    <p className="text-[14px] leading-[21px] tracking-[-0.008em] text-[var(--text-2)] max-[430px]:text-[12px] max-[430px]:leading-[17px] sm:text-[15px] sm:leading-[23px]">
                      {quickContact.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2.5 border-t border-[var(--border)] pt-4 max-[430px]:gap-1.5 max-[430px]:pt-2.5 sm:gap-3 sm:pt-5">
                    <CallButton className="w-full max-[430px]:min-h-11" tone="default" />
              
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <footer className="mt-10 border-t border-[var(--border)] py-6 text-[13px] leading-6 text-[var(--text-2)] max-[430px]:mt-7 max-[430px]:py-4 max-[430px]:text-[12px] max-[430px]:leading-[18px] sm:mt-12 sm:py-7">
            <div className="flex flex-col gap-4 max-[430px]:gap-2.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1 max-[430px]:space-y-0.5">
                <p className="font-semibold tracking-[-0.01em] text-[var(--text)] max-[430px]:leading-[18px]">
                  {footerContent.summaryLine}
                </p>
               
                {dealerProfile.requisites ? <p>{dealerProfile.requisites}</p> : null}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 max-[430px]:gap-y-1">
                <Link
                  className="font-semibold text-[var(--primary)]"
                  href={dealerProfile.policyHref}
                >
                  {footerContent.policyLabel}
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[rgba(17,22,29,0.08)] bg-[rgba(244,246,248,0.88)] px-4 py-2 shadow-[0_-4px_12px_rgba(15,23,42,0.022)] backdrop-blur-[10px] max-[430px]:py-1.5 max-[430px]:shadow-[0_-3px_10px_rgba(15,23,42,0.018)] md:hidden">
        <div className="mx-auto flex max-w-[1180px] gap-2 pb-[calc(env(safe-area-inset-bottom)+6px)] max-[430px]:gap-1.5 max-[430px]:pb-[calc(env(safe-area-inset-bottom)+6px)]">
          <a
            className="inline-flex min-h-[46px] flex-[1.08] items-center justify-center rounded-[10px] border border-[rgba(8,61,134,0.1)] bg-[rgba(10,63,132,0.62)] px-3.5 text-[13px] font-medium leading-none tracking-[-0.006em] text-[rgba(255,255,255,0.88)] transition hover:border-[rgba(8,61,134,0.14)] hover:bg-[rgba(8,61,134,0.68)] max-[430px]:min-h-11 max-[430px]:px-3"
            href="#service-form"
          >
            Отправить запрос
          </a>
          <a
            className="inline-flex min-h-[46px] flex-[0.92] items-center justify-center rounded-[10px] border border-[rgba(17,22,29,0.14)] bg-[rgba(255,255,255,0.76)] px-3.5 text-[13px] font-medium leading-none tracking-[-0.01em] text-[rgba(17,22,29,0.92)] transition hover:border-[rgba(17,22,29,0.2)] hover:bg-[rgba(255,255,255,0.92)] hover:text-[rgba(17,22,29,0.94)] max-[430px]:min-h-11 max-[430px]:px-3"
            href={dealerProfile.phoneHref}
          >
            Позвонить
          </a>
        </div>
      </div>
    </>
  );
}
