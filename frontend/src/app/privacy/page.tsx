import type { Metadata } from "next";
import Link from "next/link";

import { brandContent, brandSeo, legalContent } from "@/app/site-content";
import { privacyPolicy } from "@/content/privacy-policy";

export const metadata: Metadata = {
  title: brandSeo.privacyPageTitle,
  description: brandSeo.privacyPageDescription,
};

export default function PrivacyPage() {
  return (
    <main className="page-surface min-h-screen text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <Link
          className="mb-6 inline-flex text-[14px] font-semibold text-[var(--primary)] transition hover:text-[var(--primary-pressed)]"
          href="/"
        >
          {legalContent.backLinkLabel}
        </Link>

        <article className="surface-panel p-5 sm:p-6 lg:p-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-2)]">
            {brandContent.brandLine} • {brandContent.dealerName}
          </p>
          <h1 className="mt-3 text-[32px] font-semibold leading-[1.04] tracking-[-0.05em] text-[var(--text)]">
            {privacyPolicy.title}
          </h1>
          <div className="mt-6 space-y-8 border-t border-[var(--border)] pt-5">
            <div className="whitespace-pre-line break-words text-[14px] leading-6 text-[var(--text-2)] sm:text-[15px] sm:leading-7">
              {privacyPolicy.meta}
            </div>

            {privacyPolicy.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="whitespace-pre-line text-[18px] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--text)] sm:text-[20px]">
                  {section.heading}
                </h2>
                <div className="whitespace-pre-line break-words text-[14px] leading-6 text-[var(--text-2)] sm:text-[15px] sm:leading-7">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
