import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  advantages,
  dealerProfile,
  processSteps,
} from "@/app/site-content";
import { ServiceBookingForm } from "@/components/service-booking-form";

export const metadata: Metadata = {
  title: "Запись на сервис LADA",
  description: dealerProfile.heroDescription,
};

const sectionClassName = "pt-6 sm:pt-8";

function IconShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[var(--border)] bg-white text-[var(--primary)] sm:h-10 sm:w-10 sm:rounded-[12px]">
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

function ShieldIcon() {
  return (
    <IconShell>
      <path d="M12 3.5 5.5 6v5.5c0 4 2.7 7 6.5 8.5 3.8-1.5 6.5-4.5 6.5-8.5V6L12 3.5Z" />
      <path d="m9.3 11.8 1.8 1.8 3.6-3.8" />
    </IconShell>
  );
}

function PartsIcon() {
  return (
    <IconShell>
      <path d="M12 3.5v4" />
      <path d="M12 16.5v4" />
      <path d="M3.5 12h4" />
      <path d="M16.5 12h4" />
      <circle cx="12" cy="12" r="4.5" />
    </IconShell>
  );
}

function ToolsIcon() {
  return (
    <IconShell>
      <path d="m14.2 5.3 4.5 4.5" />
      <path d="m12.3 7.2 4.5 4.5" />
      <path d="M4.8 19.2 11 13" />
      <path d="m4.8 14.8 4.4 4.4" />
      <path d="M17.8 3.9a3.3 3.3 0 0 0-4.6 4.6L9 12.7l2.3 2.3 4.2-4.2a3.3 3.3 0 0 0 4.6-4.6l-1.4 1.4-1.9-1.9 1-1.8Z" />
    </IconShell>
  );
}

function ScanIcon() {
  return (
    <IconShell>
      <path d="M7 4.5H5a1.5 1.5 0 0 0-1.5 1.5v2" />
      <path d="M17 4.5h2A1.5 1.5 0 0 1 20.5 6v2" />
      <path d="M7 19.5H5A1.5 1.5 0 0 1 3.5 18v-2" />
      <path d="M17 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-2" />
      <path d="M8 12h8" />
      <path d="M10 9.5h4" />
      <path d="M10 14.5h4" />
    </IconShell>
  );
}

function MapPinIcon() {
  return (
    <IconShell>
      <path d="M12 20c3.3-4 5-7 5-9.5a5 5 0 1 0-10 0c0 2.5 1.7 5.5 5 9.5Z" />
      <circle cx="12" cy="10.5" r="1.8" />
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

function CompactIconShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-[var(--border)] bg-white text-[var(--primary)] sm:h-9 sm:w-9 sm:rounded-[10px]">
      <svg
        aria-hidden="true"
        className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
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

function CompactPhoneIcon() {
  return (
    <CompactIconShell>
      <path d="M4.5 6.8c0-1 .8-1.8 1.8-1.8h2.4l1.3 3.7-1.9 1.9a15.8 15.8 0 0 0 5.3 5.3l1.9-1.9 3.7 1.3v2.4c0 1-.8 1.8-1.8 1.8h-.7C10.4 19.5 4.5 13.6 4.5 6.8Z" />
    </CompactIconShell>
  );
}

function CompactClockIcon() {
  return (
    <CompactIconShell>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.3 2" />
    </CompactIconShell>
  );
}

function CompactMapPinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M12 20c3.3-4 5-7 5-9.5a5 5 0 1 0-10 0c0 2.5 1.7 5.5 5 9.5Z" />
      <circle cx="12" cy="10.5" r="1.8" />
    </svg>
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
    <div className="mb-5 space-y-1.5 sm:mb-6 sm:space-y-2">
      <h2 className="text-[20px] font-semibold leading-[26px] text-[var(--text)] sm:text-[22px] sm:leading-[28px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[15px] leading-[23px] text-[var(--text-2)] sm:text-base sm:leading-6">
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
      ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_12px_24px_rgba(10,91,211,0.16)] hover:bg-[var(--primary-pressed)] hover:border-[var(--primary-pressed)] hover:text-white"
      : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)]";

  return (
    <a
      className={`inline-flex min-h-[46px] items-center justify-center rounded-[12px] border px-4 text-[14px] font-semibold transition sm:min-h-12 ${toneClassName} ${className ?? ""}`}
      href={dealerProfile.phoneHref}
    >
      Позвонить
    </a>
  );
}

function HeaderQuickFact({
  icon,
  label,
  value,
  href,
  ariaLabel,
}: Readonly<{
  icon: ReactNode;
  label: string;
  value: ReactNode;
  href?: string;
  ariaLabel?: string;
}>) {
  const contentClassName =
    "mt-0.5 block text-[13px] font-semibold leading-5 text-[var(--text)] max-[360px]:text-[12px] max-[360px]:leading-[18px] sm:text-[14px]";

  return (
    <div className="flex min-w-0 items-center gap-2.5 rounded-[12px] border border-[var(--border)] bg-white px-3.5 py-2.5 max-[360px]:gap-2 max-[360px]:px-3 max-[360px]:py-2 sm:gap-3 sm:rounded-[14px] sm:px-4 sm:py-3">
      {icon}
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-2)] sm:text-[11px]">
          {label}
        </p>
        {href ? (
          <a aria-label={ariaLabel} className={contentClassName} href={href}>
            {value}
          </a>
        ) : (
          <p className={contentClassName}>{value}</p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const primaryWorkHours = dealerProfile.workHours[0] ?? "Уточняется";
  const mobileHeroAddress = "Покровское шоссе, 6 км";

  return (
    <>
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-[calc(84px+env(safe-area-inset-bottom))] pt-3 max-[430px]:pb-[calc(78px+env(safe-area-inset-bottom))] max-[430px]:pt-2.5 sm:px-6 sm:pt-4 lg:px-8 lg:pb-12">
          <header className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-soft)] px-3.5 py-3.5 max-[430px]:px-3 max-[430px]:py-3 sm:px-5 sm:py-5">
            <div className="flex flex-col gap-3.5 max-[430px]:gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 space-y-2.5 max-[430px]:space-y-2 sm:space-y-3">
                <div className="inline-flex max-w-full items-center gap-2.5 rounded-[14px] border border-[var(--border)] bg-white px-2.5 py-2.5 max-[430px]:gap-2 max-[430px]:rounded-[12px] max-[430px]:px-2 max-[430px]:py-2 sm:gap-4 sm:rounded-[16px] sm:px-4 sm:py-3">
                  <Image
                    src="/images/logos/lada-logo.png"
                    alt="LADA"
                    width={2100}
                    height={893}
                    priority
                    className="h-6 w-auto shrink-0 object-contain max-[430px]:h-[22px] sm:h-8"
                  />
                  <span className="h-7 w-px shrink-0 bg-[var(--border)] max-[430px]:h-6 sm:h-8" />
                  <Image
                    src="/images/logos/kolmi-logo.png"
                    alt="КОЛМИ"
                    width={690}
                    height={475}
                    priority
                    className="h-[34px] w-auto shrink-0 object-contain max-[430px]:h-[30px] sm:h-[42px]"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-2)] max-[430px]:text-[10px] sm:text-[12px]">
                    {dealerProfile.serviceStatus}
                  </p>
                  <p className="mt-1 text-[16px] font-semibold leading-5 text-[var(--text)] max-[430px]:text-[15px] sm:text-[18px] sm:leading-6">
                    {dealerProfile.dealerName}, {dealerProfile.city}
                  </p>
                  <p className="mt-1 text-[12px] leading-[18px] text-[var(--text-2)] max-[430px]:text-[11px] max-[430px]:leading-4 sm:text-[13px] sm:leading-5">
                    {dealerProfile.serviceCenterLabel}
                  </p>
                </div>
              </div>

              <div className="grid gap-2.5 max-[430px]:grid-cols-[minmax(0,1fr)_auto] max-[430px]:gap-2 max-[360px]:grid-cols-[minmax(0,1fr)_112px] max-[360px]:gap-1.5 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
                <HeaderQuickFact
                  icon={<CompactPhoneIcon />}
                  label="Телефон"
                  value={
                    <>
                      <span className="max-[360px]:hidden">{dealerProfile.phoneDisplay}</span>
                      <span className="hidden max-[360px]:grid">
                        <span className="whitespace-nowrap">+7 (4112)</span>
                        <span className="whitespace-nowrap">40-08-88</span>
                      </span>
                    </>
                  }
                  href={dealerProfile.phoneHref}
                  ariaLabel={dealerProfile.phoneDisplay}
                />
                <div className="max-[430px]:hidden">
                  <HeaderQuickFact
                    icon={<CompactClockIcon />}
                    label="Часы работы"
                    value={primaryWorkHours}
                  />
                </div>
                <CallButton className="w-full max-[430px]:min-w-[124px] max-[360px]:min-w-[112px] lg:w-auto" tone="primary" />
              </div>
            </div>
          </header>

          <section className="mt-3 rounded-[24px] border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3.5 max-[430px]:mt-2 max-[430px]:px-3.5 max-[430px]:py-3 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
            <div className="grid gap-3.5 max-[430px]:gap-3 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start lg:gap-8">
              <div className="min-w-0 space-y-2.5 max-[430px]:space-y-2 sm:space-y-3">
                <div className="space-y-1.5 max-[430px]:space-y-1 sm:space-y-2">
                  <p className="inline-flex min-h-[26px] items-center rounded-full border border-[rgba(10,91,211,0.16)] bg-white px-3 text-[12px] font-semibold leading-5 text-[var(--primary)] sm:min-h-7 sm:text-[13px]">
                    <span className="max-[430px]:hidden">Сервисный прием официального дилера</span>
                    <span className="hidden max-[430px]:inline">Официальный сервис LADA</span>
                  </p>
                  <h1 className="max-w-2xl text-[28px] font-bold leading-[34px] tracking-[-0.02em] text-[var(--text)] max-[360px]:text-[26px] max-[360px]:leading-[31px] sm:text-[32px] sm:leading-[38px]">
                    {dealerProfile.heroTitle}
                  </h1>
                  <p className="max-w-2xl text-[15px] leading-[23px] text-[var(--text-2)] max-[430px]:text-[14px] max-[430px]:leading-[21px] sm:text-base sm:leading-6">
                    {dealerProfile.heroDescription}
                  </p>
                </div>

                <div className="flex max-w-xl min-w-0 items-start gap-2 text-[var(--text-2)] max-[430px]:gap-1.5">
                  <span className="mt-0.5 shrink-0 text-[var(--primary)]">
                    <CompactMapPinIcon />
                  </span>
                  <p className="min-w-0 text-[13px] leading-5 max-[430px]:text-[12px] max-[430px]:leading-[18px] sm:text-[14px]">
                    <span className="font-semibold text-[var(--text)]">{dealerProfile.city}.</span>{" "}
                    <span className="max-[430px]:hidden">{dealerProfile.address}</span>
                    <span className="hidden max-[430px]:inline">{mobileHeroAddress}</span>
                  </p>
                </div>
              </div>

              <div className="min-w-0">
                <ServiceBookingForm />
              </div>
            </div>
          </section>

          <section className="pt-7 sm:pt-8">
            <SectionHeading
              title="Почему выбирают сервис КОЛМИ"
              description="Один компактный блок о том, что важно перед записью в официальный сервис."
            />
            <div className="grid gap-2.5 md:grid-cols-2 sm:gap-3">
              {advantages.map((item, index) => {
                const Icon =
                  index === 0
                    ? ShieldIcon
                    : index === 1
                      ? PartsIcon
                      : index === 2
                        ? ToolsIcon
                        : ScanIcon;

                return (
                  <article
                    key={item.title}
                    className="flex gap-2.5 rounded-[14px] border border-[var(--border)] bg-[var(--bg-soft)] px-3.5 py-3.5 sm:gap-3 sm:rounded-[16px] sm:px-4 sm:py-4"
                  >
                    <Icon />
                    <div className="space-y-0.5 sm:space-y-1">
                      <h3 className="text-[15px] font-semibold leading-5 text-[var(--text)] sm:text-[16px]">
                        {item.title}
                      </h3>
                      <p className="text-[13px] leading-5 text-[var(--text-2)] sm:text-[14px]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className={sectionClassName}>
            <div className="rounded-[16px] border border-[var(--border)] bg-[var(--bg-soft)] p-4 sm:p-5">
              <SectionHeading
                title="Как проходит запись"
                description="Короткий и понятный сценарий без лишних шагов."
              />
              <ol className="grid gap-2.5 sm:gap-3 lg:grid-cols-3">
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-[14px] border border-[var(--border)] bg-white p-3.5 sm:rounded-[16px] sm:p-4"
                  >
                    <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--text)] text-[13px] font-semibold text-white sm:mb-3 sm:h-9 sm:w-9 sm:text-[14px]">
                      {index + 1}
                    </div>
                    <h3 className="text-[15px] font-semibold leading-5 text-[var(--text)] sm:text-[16px]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-5 text-[var(--text-2)] sm:mt-2 sm:text-[14px]">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={sectionClassName} id="contacts">
            <SectionHeading title="Контакты" />
            <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-[16px] border border-[var(--border)] bg-white p-4 sm:p-6">
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex gap-4">
                    <MapPinIcon />
                    <div>
                      <p className="text-[13px] font-semibold leading-5 text-[var(--text-2)]">
                        Адрес
                      </p>
                      <address className="mt-1 not-italic text-[16px] leading-6 text-[var(--text)]">
                        {dealerProfile.address}
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ClockIcon />
                    <div>
                      <p className="text-[13px] font-semibold leading-5 text-[var(--text-2)]">
                        Часы работы
                      </p>
                      <div className="mt-1 space-y-1 text-[16px] leading-6 text-[var(--text)]">
                        {dealerProfile.workHours.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <PhoneIcon />
                    <div>
                      <p className="text-[13px] font-semibold leading-5 text-[var(--text-2)]">
                        Телефон
                      </p>
                      <a
                        className="mt-1 inline-flex text-[16px] font-semibold leading-6 text-[var(--primary)] transition hover:text-[var(--primary-pressed)]"
                        href={dealerProfile.phoneHref}
                      >
                        {dealerProfile.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              <aside className="rounded-[16px] border border-[var(--border)] bg-[var(--bg-soft)] p-4 sm:p-6">
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <p className="text-[18px] font-semibold leading-[24px] text-[var(--text)] sm:text-[20px] sm:leading-[28px]">
                      Быстрая связь с сервисом
                    </p>
                    <p className="text-[14px] leading-5 text-[var(--text-2)] sm:text-[15px] sm:leading-6">
                      Позвоните или постройте маршрут до дилерского центра. Если удобнее,
                      оставьте заявку выше и мы свяжемся в рабочее время.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2.5 sm:gap-3">
                    <CallButton className="w-full" tone="primary" />
                    <a
                      className="inline-flex min-h-[46px] items-center justify-center rounded-[12px] border border-[var(--border)] bg-white px-5 text-[14px] font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] sm:min-h-12 sm:text-[15px]"
                      href={dealerProfile.routeHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Построить маршрут
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <footer className="py-6 text-[14px] leading-6 text-[var(--text-2)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <p className="font-semibold text-[var(--text)]">
                  Официальный дилер LADA • КОЛМИ • Якутск
                </p>
                <a
                  className="inline-flex font-semibold text-[var(--primary)] transition hover:text-[var(--primary-pressed)]"
                  href={dealerProfile.phoneHref}
                >
                  {dealerProfile.phoneDisplay}
                </a>
                {dealerProfile.requisites ? <p>{dealerProfile.requisites}</p> : null}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link
                  className="font-semibold text-[var(--primary)]"
                  href={dealerProfile.policyHref}
                >
                  Политика обработки персональных данных
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-white/96 px-4 py-2 shadow-[0_-6px_18px_rgba(11,15,20,0.06)] backdrop-blur max-[430px]:py-1.5 md:hidden">
        <div className="mx-auto flex max-w-6xl gap-2 pb-[calc(env(safe-area-inset-bottom)+6px)] max-[430px]:gap-1.5 max-[430px]:pb-[calc(env(safe-area-inset-bottom)+4px)]">
          <a
            className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-[12px] bg-[var(--primary)] px-3.5 text-[14px] font-semibold text-white transition hover:bg-[var(--primary-pressed)] max-[430px]:min-h-11 max-[430px]:px-3"
            href="#service-form"
          >
            Записаться
          </a>
          <a
            className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-[12px] border border-[var(--border)] bg-white px-3.5 text-[14px] font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] max-[430px]:min-h-11 max-[430px]:px-3"
            href={dealerProfile.phoneHref}
          >
            Позвонить
          </a>
        </div>
      </div>
    </>
  );
}
