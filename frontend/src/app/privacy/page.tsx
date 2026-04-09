import type { Metadata } from "next";
import Link from "next/link";

import { dealerProfile } from "@/app/site-content";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных",
  description: "Временная заглушка для страницы политики персональных данных.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <Link
          className="mb-6 inline-flex text-[14px] font-semibold text-[var(--primary)] transition hover:text-[var(--primary-pressed)]"
          href="/"
        >
          На страницу записи
        </Link>

        <div className="rounded-[16px] border border-[var(--border)] bg-white p-5 shadow-[0_18px_40px_rgba(11,15,20,0.08)] sm:p-6">
          <p className="text-[14px] font-semibold leading-5 text-[var(--text-2)]">
            {dealerProfile.brandLine} • {dealerProfile.dealerName}
          </p>
          <h1 className="mt-3 text-[30px] font-bold leading-[36px] tracking-[-0.02em] text-[var(--text)]">
            Политика обработки персональных данных
          </h1>
          <div className="mt-6 space-y-4 text-base leading-6 text-[var(--text-2)]">
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
