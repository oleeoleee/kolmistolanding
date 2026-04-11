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

const sectionClassName = "page-section max-[430px]:pt-8 max-[390px]:pt-7";
const surfacePanelClassName = "surface-panel";
const surfaceMutedClassName = "surface-muted";
const surfaceSubtleClassName = "surface-subtle";
const heroTrustPoints = [
  "Дилерские регламенты LADA",
  "Оригинальные детали и расходные материалы",
  "Согласование работ до начала обслуживания",
];

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

function ShieldIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[var(--primary)] sm:h-6 sm:w-6">
      <svg
        aria-hidden="true"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
      <path d="M12 3.5 5.5 6v5.5c0 4 2.7 7 6.5 8.5 3.8-1.5 6.5-4.5 6.5-8.5V6L12 3.5Z" />
      <path d="m9.3 11.8 1.8 1.8 3.6-3.8" />
      </svg>
    </span>
  );
}

function PartsIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[var(--primary)] sm:h-6 sm:w-6">
      <svg
        aria-hidden="true"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
      <path d="M12 3.5v4" />
      <path d="M12 16.5v4" />
      <path d="M3.5 12h4" />
      <path d="M16.5 12h4" />
      <circle cx="12" cy="12" r="4.5" />
      </svg>
    </span>
  );
}

function ToolsIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[var(--primary)] sm:h-6 sm:w-6">
      <svg
        aria-hidden="true"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
      <path d="m14.2 5.3 4.5 4.5" />
      <path d="m12.3 7.2 4.5 4.5" />
      <path d="M4.8 19.2 11 13" />
      <path d="m4.8 14.8 4.4 4.4" />
      <path d="M17.8 3.9a3.3 3.3 0 0 0-4.6 4.6L9 12.7l2.3 2.3 4.2-4.2a3.3 3.3 0 0 0 4.6-4.6l-1.4 1.4-1.9-1.9 1-1.8Z" />
      </svg>
    </span>
  );
}

function ScanIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[var(--primary)] sm:h-6 sm:w-6">
      <svg
        aria-hidden="true"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
        <path d="M7.5 4.5h7l3 3v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" />
        <path d="M14.5 4.5v3h3" />
        <path d="m9.2 13 1.7 1.8 3.9-4.3" />
      </svg>
    </span>
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

function SectionHeading({
  title,
  description,
}: Readonly<{
  title: string;
  description?: string;
}>) {
  return (
    <div className="mb-6 space-y-2 sm:mb-7 sm:space-y-2.5">
      <h2 className="text-[22px] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--text)] sm:text-[28px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[42rem] text-[14px] leading-[22px] text-[var(--text-2)] sm:text-[15px] sm:leading-6">
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
      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] hover:text-[var(--text)]";

  return (
    <a
      className={`inline-flex min-h-[46px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-semibold tracking-[-0.01em] transition sm:min-h-12 ${toneClassName} ${className ?? ""}`}
      href={dealerProfile.phoneHref}
    >
      Позвонить
    </a>
  );
}

export default function Home() {
  const primaryWorkHours = dealerProfile.workHours[0] ?? "Уточняется";
  const mobileWorkHours = "Пн–Пт 09:00–19:00";
  const shortAddress = "Покровское шоссе, 6 км";
  const mobileHeroDescription =
    "ТО, диагностика и ремонт по стандартам LADA. Оставьте телефон — согласуем визит.";

  return (
    <>
      <main className="min-h-screen bg-transparent text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col px-4 pb-[calc(84px+env(safe-area-inset-bottom))] pt-3 max-[430px]:pb-[calc(78px+env(safe-area-inset-bottom))] max-[390px]:pt-2.5 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8">
          <header className="border-b border-[var(--border-strong)] pb-2.5 sm:pb-5">
            <div className="grid grid-cols-[minmax(0,1fr)_100px] items-center gap-x-2 gap-y-1.5 max-[360px]:grid-cols-[minmax(0,1fr)_96px] sm:hidden">
              <div
                className={`inline-flex max-w-full items-center gap-2 px-2 py-1.5 ${surfaceSubtleClassName}`}
              >
                <Image
                  src="/images/logos/lada-logo.png"
                  alt="LADA"
                  width={2100}
                  height={893}
                  priority
                  className="h-[18px] w-auto shrink-0 object-contain"
                />
                <span className="h-5 w-px shrink-0 bg-[var(--border-strong)]" />
                <Image
                  src="/images/logos/kolmi-logo.png"
                  alt="КОЛМИ"
                  width={690}
                  height={475}
                  priority
                  className="h-[26px] w-auto shrink-0 object-contain"
                />
              </div>

              <CallButton
                className="min-h-[42px] px-3 text-[13px] font-semibold max-[360px]:px-2.5"
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
                className={`inline-flex max-w-full items-center gap-2.5 px-2.5 py-2.5 max-[430px]:gap-2 max-[430px]:px-2 max-[430px]:py-2 sm:gap-4 sm:px-4 sm:py-3 ${surfaceSubtleClassName}`}
              >
                <Image
                  src="/images/logos/lada-logo.png"
                  alt="LADA"
                  width={2100}
                  height={893}
                  priority
                  className="h-6 w-auto shrink-0 object-contain max-[430px]:h-[22px] sm:h-8"
                />
                <span className="h-7 w-px shrink-0 bg-[var(--border-strong)] max-[430px]:h-6 sm:h-8" />
                <Image
                  src="/images/logos/kolmi-logo.png"
                  alt="КОЛМИ"
                  width={690}
                  height={475}
                  priority
                  className="h-[34px] w-auto shrink-0 object-contain max-[430px]:h-[30px] sm:h-[42px]"
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
                    LADA • КОЛМИ • ЯКУТСК
                  </p>
                  <h1 className="max-w-[11.5ch] text-[32px] font-semibold leading-[0.99] tracking-[-0.06em] text-[var(--text)] max-[390px]:text-[30px] max-[360px]:text-[28px] sm:max-w-[12ch] sm:text-[56px] sm:leading-[0.96]">
                    {dealerProfile.heroTitle}
                  </h1>
                  <p className="max-w-[34rem] text-[14px] leading-[21px] text-[var(--text-2)] max-[390px]:leading-5 sm:max-w-[38rem] sm:text-[17px] sm:leading-[28px]">
                    <span className="sm:hidden">{mobileHeroDescription}</span>
                    <span className="hidden sm:inline">{dealerProfile.heroDescription}</span>
                  </p>
                </div>
              </div>

              <div className="min-w-0 lg:row-span-2 lg:border-l lg:border-[var(--border)] lg:pl-10">
                <div className="max-w-[430px] lg:ml-auto">
                  <ServiceBookingForm />
                </div>
              </div>

              <ol className="border-y border-[var(--border)] lg:max-w-[40rem]">
                {heroTrustPoints.map((item, index) => (
                  <li
                    key={item}
                    className={`grid grid-cols-[28px_minmax(0,1fr)] items-start gap-2.5 py-2.5 max-[390px]:py-2 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-4 sm:py-5 ${
                      index > 0 ? "border-t border-[var(--border)]" : ""
                    }`}
                  >
                    <span className="pt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-2)] sm:text-[11px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13px] font-semibold leading-5 tracking-[-0.02em] text-[var(--text)] sm:text-[17px] sm:leading-6">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={sectionClassName}>
            <div className="grid gap-5 max-[430px]:gap-4 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-10">
              <div className="lg:pt-1">
                <SectionHeading
                  title="Почему выбирают сервис КОЛМИ"
                  description="Ключевые принципы официального дилерского сервиса LADA."
                />
              </div>

              <div className="border-y border-[var(--border)]">
                {advantages.map((item, index) => {
                  const Icon =
                    index === 0
                      ? PartsIcon
                      : index === 1
                        ? ToolsIcon
                        : index === 2
                          ? ShieldIcon
                          : ScanIcon;

                  return (
                    <article
                      key={item.title}
                      className={`grid grid-cols-[20px_minmax(0,1fr)] gap-2.5 py-3 max-[430px]:py-2.5 sm:grid-cols-[24px_minmax(0,1fr)] sm:gap-4 sm:py-5 ${
                        index > 0 ? "border-t border-[var(--border)]" : ""
                      }`}
                    >
                      <Icon />
                      <div className="space-y-0.5 max-[430px]:space-y-px md:grid md:grid-cols-[minmax(220px,0.88fr)_minmax(0,1.12fr)] md:items-start md:gap-6 md:space-y-0">
                        <h3 className="text-[15px] font-semibold leading-5 tracking-[-0.02em] text-[var(--text)] max-[430px]:text-[14px] max-[430px]:leading-[18px] sm:text-[16px]">
                          {item.title}
                        </h3>
                        <p className="text-[13px] leading-5 text-[var(--text-2)] max-[430px]:text-[12px] max-[430px]:leading-[18px] sm:text-[14px] sm:leading-6">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className={sectionClassName}>
            <SectionHeading
              title="Как проходит запись"
              description="Короткий и понятный сценарий без лишних шагов."
            />
            <ol className="grid gap-x-8 gap-y-0 max-[430px]:gap-y-0 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <li key={step.title} className="border-t border-[var(--border)] pt-4 max-[430px]:pt-3 sm:pt-6">
                  <div className="mb-2.5 flex items-center gap-2.5 max-[430px]:mb-2 max-[430px]:gap-2 sm:mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[var(--text)] text-[13px] font-semibold tracking-[-0.01em] text-white max-[430px]:h-7 max-[430px]:w-7 max-[430px]:text-[12px] sm:h-9 sm:w-9 sm:text-[14px]">
                      {index + 1}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-2)] max-[430px]:text-[10px] max-[430px]:tracking-[0.14em]">
                      Шаг {index + 1}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-semibold leading-5 tracking-[-0.02em] text-[var(--text)] max-[430px]:text-[14px] max-[430px]:leading-[18px] sm:text-[17px]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-[var(--text-2)] max-[430px]:mt-1 max-[430px]:text-[12px] max-[430px]:leading-[18px] sm:text-[14px] sm:leading-6">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className={sectionClassName} id="contacts">
            <SectionHeading title="Контакты" />
            <div className="grid gap-3.5 max-[430px]:gap-3 sm:gap-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)]">
              <article className={`${surfacePanelClassName} px-5 py-5 max-[430px]:px-4 max-[430px]:py-4 sm:px-6 sm:py-6`}>
                <div className="divide-y divide-[var(--border)]">
                  <div className="flex gap-4 py-4 first:pt-0 max-[430px]:gap-3 max-[430px]:py-3">
                    <MapPinIcon />
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-2)] max-[430px]:text-[11px]">
                        Адрес
                      </p>
                      <address className="mt-2 not-italic text-[16px] leading-6 tracking-[-0.01em] text-[var(--text)] max-[430px]:mt-1.5 max-[430px]:text-[14px] max-[430px]:leading-5">
                        {dealerProfile.address}
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-4 py-4 max-[430px]:gap-3 max-[430px]:py-3">
                    <ClockIcon />
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-2)] max-[430px]:text-[11px]">
                        Часы работы
                      </p>
                      <div className="mt-2 space-y-1 text-[16px] leading-6 tracking-[-0.01em] text-[var(--text)] max-[430px]:mt-1.5 max-[430px]:text-[14px] max-[430px]:leading-5">
                        {dealerProfile.workHours.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pb-0 pt-4 max-[430px]:gap-3 max-[430px]:pt-3">
                    <PhoneIcon />
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-2)] max-[430px]:text-[11px]">
                        Телефон
                      </p>
                      <a
                        className="mt-2 inline-flex text-[16px] font-semibold leading-6 tracking-[-0.01em] text-[var(--primary)] transition hover:text-[var(--primary-pressed)] max-[430px]:mt-1.5 max-[430px]:text-[14px] max-[430px]:leading-5"
                        href={dealerProfile.phoneHref}
                      >
                        {dealerProfile.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              <aside className={`${surfaceMutedClassName} px-5 py-5 max-[430px]:px-4 max-[430px]:py-4 sm:px-6 sm:py-6`}>
                <div className="space-y-4 max-[430px]:space-y-3 sm:space-y-5">
                  <div className="space-y-2 max-[430px]:space-y-1.5 sm:space-y-3">
                    <p className="text-[20px] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--text)] max-[430px]:text-[18px] sm:text-[24px]">
                      Быстрая связь с сервисом
                    </p>
                    <p className="text-[14px] leading-6 text-[var(--text-2)] max-[430px]:text-[13px] max-[430px]:leading-5 sm:text-[15px]">
                      Позвоните или постройте маршрут до дилерского центра. Если удобнее,
                      оставьте заявку выше и мы свяжемся в рабочее время.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2.5 border-t border-[var(--border)] pt-4 max-[430px]:gap-2 max-[430px]:pt-3 sm:gap-3 sm:pt-5">
                    <CallButton className="w-full max-[430px]:min-h-11" tone="primary" />
                    <a
                      className="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-5 text-[14px] font-semibold tracking-[-0.01em] text-[var(--text)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)] max-[430px]:min-h-11 max-[430px]:text-[13px] sm:min-h-12 sm:text-[15px]"
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

          <footer className="mt-10 border-t border-[var(--border)] py-6 text-[13px] leading-6 text-[var(--text-2)] max-[430px]:mt-8 max-[430px]:py-5 max-[430px]:text-[12px] max-[430px]:leading-5 sm:mt-12 sm:py-7">
            <div className="flex flex-col gap-4 max-[430px]:gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1 max-[430px]:space-y-0.5">
                <p className="font-semibold tracking-[-0.01em] text-[var(--text)] max-[430px]:leading-[18px]">
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
              <div className="flex flex-wrap gap-x-4 gap-y-2 max-[430px]:gap-y-1">
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

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-[rgba(242,244,246,0.96)] px-4 py-2 shadow-[0_-10px_24px_rgba(15,23,42,0.04)] backdrop-blur-[10px] max-[430px]:py-1.5 md:hidden">
        <div className="mx-auto flex max-w-[1180px] gap-2 pb-[calc(env(safe-area-inset-bottom)+6px)] max-[430px]:gap-1.5 max-[430px]:pb-[calc(env(safe-area-inset-bottom)+6px)]">
          <a
            className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-[10px] bg-[var(--primary)] px-3.5 text-[14px] font-semibold tracking-[-0.01em] text-white transition hover:bg-[var(--primary-pressed)] max-[430px]:min-h-11 max-[430px]:px-3"
            href="#service-form"
          >
            Записаться
          </a>
          <a
            className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-3.5 text-[14px] font-semibold tracking-[-0.01em] text-[var(--text)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)] max-[430px]:min-h-11 max-[430px]:px-3"
            href={dealerProfile.phoneHref}
          >
            Позвонить
          </a>
        </div>
      </div>
    </>
  );
}
