import type { Metadata } from "next";
import Link from "next/link";

import { brandSeo, dealerProfile } from "@/app/site-content";

export const metadata: Metadata = {
  title: brandSeo.privacyPageTitle,
  description: brandSeo.privacyPageDescription,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-transparent text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <Link
          className="mb-6 inline-flex text-[14px] font-semibold text-[var(--primary)] transition hover:text-[var(--primary-pressed)]"
          href="/"
        >
          На страницу записи
        </Link>

        <div className="surface-panel p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-2)]">
            {dealerProfile.brandLine} • {dealerProfile.dealerName}
          </p>
          <h1 className="mt-3 text-[32px] font-semibold leading-[1.04] tracking-[-0.05em] text-[var(--text)]">
            Политика обработки персональных данных
          </h1>
          <div className="mt-6 space-y-4 border-t border-[var(--border)] pt-5 text-[15px] leading-7 text-[var(--text-2)]">
            <p>
              Здесь должна быть размещена утверждённая политика обработки персональных данных
              дилерского центра.
            </p>
            <p>
              Текущая страница добавлена как безопасная заглушка, чтобы ссылка из формы и
              футера не вела в пустоту. Перед публикацией замените текст на фактический
              юридический документ.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
