"use client";

import Link from "next/link";
import type { ChangeEvent, FormEvent, KeyboardEvent } from "react";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

import {
  contactWindowOptions,
  dealerProfile,
  serviceOptions,
  type ContactWindow,
  type ServiceKind,
} from "@/app/site-content";

type FormValues = {
  phone: string;
  serviceType: ServiceKind | "";
  contactWindow: ContactWindow | "";
  comment: string;
};

type FieldErrors = {
  phone?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "integration-missing" | "error";

const PHONE_PREFIX = "+7";
const LOCAL_PHONE_LENGTH = 10;

const initialValues: FormValues = {
  phone: "",
  serviceType: "",
  contactWindow: "",
  comment: "",
};

const fieldHeaderClassName =
  "mb-2 flex items-center justify-between gap-3 max-[430px]:mb-1.5 max-[430px]:gap-2";
const fieldLabelClassName =
  "text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-2)] max-[430px]:tracking-[0.14em]";
const fieldMetaClassName =
  "inline-flex items-center rounded-full border border-[rgba(17,22,29,0.1)] bg-[rgba(247,248,250,0.72)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(107,116,130,0.92)] max-[430px]:px-1.5 max-[430px]:py-[3px] max-[430px]:text-[9px] max-[430px]:tracking-[0.08em]";
const compactChipBaseClassName =
  "inline-flex min-h-[38px] cursor-pointer items-center justify-center rounded-full border px-3 py-2 text-[12px] font-semibold leading-4 tracking-[-0.01em] transition max-[430px]:min-h-9 max-[430px]:px-2.5 max-[430px]:py-1.5 max-[430px]:text-[11px] sm:min-h-10 sm:px-3.5 sm:text-[13px]";
const antiAnxietyCopy =
  "Если не уверены в причине обращения — опишите своими словами, мы уточним.";

const normalizePhone = (value: string) => {
  if (value.length === 0) {
    return "";
  }

  return `7${value}`;
};

const extractPhoneDigits = (value: string) => {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 0) {
    return "";
  }

  if (value.trim().startsWith(PHONE_PREFIX)) {
    return digits.slice(1, LOCAL_PHONE_LENGTH + 1);
  }

  if (
    digits.length > LOCAL_PHONE_LENGTH &&
    (digits.startsWith("7") || digits.startsWith("8"))
  ) {
    return digits.slice(1, LOCAL_PHONE_LENGTH + 1);
  }

  return digits.slice(0, LOCAL_PHONE_LENGTH);
};

const formatPhone = (value: string) => {
  if (value.length === 0) {
    return "";
  }

  if (value.length <= 3) {
    return `${PHONE_PREFIX} (${value}`;
  }

  if (value.length <= 6) {
    return `${PHONE_PREFIX} (${value.slice(0, 3)}) ${value.slice(3)}`;
  }

  if (value.length <= 8) {
    return `${PHONE_PREFIX} (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  }

  return `${PHONE_PREFIX} (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(
    6,
    8,
  )}-${value.slice(8, 10)}`;
};

const getPhoneDigitIndex = (value: string, caretPosition: number) => {
  const digitsBeforeCaret = value.slice(0, caretPosition).replace(/\D/g, "");

  if (digitsBeforeCaret.length === 0) {
    return 0;
  }

  const prefixOffset = value.trim().startsWith(PHONE_PREFIX) ? 1 : 0;

  return Math.max(
    0,
    Math.min(LOCAL_PHONE_LENGTH, digitsBeforeCaret.length - prefixOffset),
  );
};

const getCaretPosition = (value: string, digitIndex: number) => {
  if (value.length === 0) {
    return 0;
  }

  if (digitIndex <= 0) {
    return value.startsWith(PHONE_PREFIX) ? PHONE_PREFIX.length : 0;
  }

  const hasPrefix = value.startsWith(PHONE_PREFIX);
  let localDigitsSeen = 0;
  let prefixSkipped = !hasPrefix;

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];

    if (!/\d/.test(char)) {
      continue;
    }

    if (!prefixSkipped) {
      prefixSkipped = true;
      continue;
    }

    localDigitsSeen += 1;

    if (localDigitsSeen === digitIndex) {
      return index + 1;
    }
  }

  return value.length;
};

const validate = (values: FormValues): FieldErrors => {
  const errors: FieldErrors = {};

  if (normalizePhone(values.phone).length !== 11) {
    errors.phone = "Введите номер целиком — мы перезвоним для подтверждения.";
  }

  return errors;
};

export function ServiceBookingForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [expanded, setExpanded] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [touched, setTouched] = useState({
    phone: false,
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const pendingPhoneCaretRef = useRef<number | null>(null);

  const errors = useMemo(() => validate(values), [values]);
  const phoneValue = useMemo(() => formatPhone(values.phone), [values.phone]);

  const phoneError = (touched.phone || submitAttempted) ? errors.phone : undefined;

  useLayoutEffect(() => {
    if (pendingPhoneCaretRef.current === null || !phoneInputRef.current) {
      return;
    }

    phoneInputRef.current.setSelectionRange(
      pendingPhoneCaretRef.current,
      pendingPhoneCaretRef.current,
    );
    pendingPhoneCaretRef.current = null;
  }, [phoneValue]);

  const applyPhoneDigits = (nextValue: string, nextDigitIndex?: number) => {
    const nextDigits = extractPhoneDigits(nextValue);

    if (typeof nextDigitIndex === "number") {
      pendingPhoneCaretRef.current = getCaretPosition(
        formatPhone(nextDigits),
        Math.min(nextDigitIndex, nextDigits.length),
      );
    }

    setValues((current) => ({
      ...current,
      phone: nextDigits,
    }));
    setSubmitState("idle");
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, selectionStart } = event.target;
    const nextDigits = extractPhoneDigits(value);
    const nextDigitIndex = Math.min(
      getPhoneDigitIndex(value, selectionStart ?? value.length),
      nextDigits.length,
    );

    applyPhoneDigits(nextDigits, nextDigitIndex);
  };

  const handlePhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Backspace" && event.key !== "Delete") {
      return;
    }

    const { selectionStart, selectionEnd, value } = event.currentTarget;
    const start = selectionStart ?? value.length;
    const end = selectionEnd ?? value.length;
    const startDigitIndex = getPhoneDigitIndex(value, start);
    const endDigitIndex = getPhoneDigitIndex(value, end);

    if (start !== end) {
      event.preventDefault();

      if (startDigitIndex === endDigitIndex) {
        return;
      }

      applyPhoneDigits(
        `${values.phone.slice(0, startDigitIndex)}${values.phone.slice(endDigitIndex)}`,
        startDigitIndex,
      );
      return;
    }

    if (event.key === "Backspace") {
      event.preventDefault();

      if (startDigitIndex === 0) {
        return;
      }

      applyPhoneDigits(
        `${values.phone.slice(0, startDigitIndex - 1)}${values.phone.slice(startDigitIndex)}`,
        startDigitIndex - 1,
      );
      return;
    }

    event.preventDefault();

    if (startDigitIndex >= values.phone.length) {
      return;
    }

    applyPhoneDigits(
      `${values.phone.slice(0, startDigitIndex)}${values.phone.slice(startDigitIndex + 1)}`,
      startDigitIndex,
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    setTouched({
      phone: true,
    });
    setSubmitState("idle");

    if (Object.keys(errors).length > 0) {
      return;
    }

    if (!dealerProfile.formEndpoint) {
      setSubmitState("integration-missing");
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch(dealerProfile.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: normalizePhone(values.phone),
          serviceType: values.serviceType,
          contactWindow: values.contactWindow,
          comment: values.comment.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <div
      id="service-form"
      className="surface-panel scroll-mt-6 p-3.5 max-[430px]:p-[13px] max-[390px]:p-3 sm:p-5 lg:p-6"
    >
      <div className="mb-3.5 space-y-1.5 border-b border-[var(--border)] pb-3.5 max-[430px]:mb-3 max-[430px]:space-y-1 max-[430px]:pb-3 sm:mb-5 sm:space-y-2 sm:pb-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-2)] max-[430px]:text-[9px] max-[430px]:tracking-[0.16em] sm:text-[11px]">
          Предварительная запись
        </p>
        <h2 className="text-[21px] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--text)] sm:text-[22px]">
          Заявка на сервис
        </h2>
        <p className="text-[13px] leading-[19px] text-[var(--text-2)] max-[430px]:text-[12px] max-[430px]:leading-[18px] sm:text-[14px] sm:leading-6">
          Достаточно телефона. Остальное можно указать по желанию.
        </p>
      </div>

      <form className="space-y-3 max-[430px]:space-y-2.5 sm:space-y-4" noValidate onSubmit={handleSubmit}>
        <div className="space-y-2 border-b border-[var(--border)] pb-3.5 max-[430px]:space-y-1.5 max-[430px]:pb-3 sm:space-y-2.5 sm:pb-4">
          <div className={fieldHeaderClassName}>
            <label className={fieldLabelClassName} htmlFor="phone">
              Телефон для связи
            </label>
            <span className={fieldMetaClassName}>Обязательно</span>
          </div>
          <input
            ref={phoneInputRef}
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phoneValue}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
            onBlur={() =>
              setTouched((current) => ({
                ...current,
                phone: true,
              }))
            }
            placeholder="+7 (900) 123-45-67"
            aria-invalid={Boolean(phoneError)}
            aria-describedby={phoneError ? "phone-error" : undefined}
            className="min-h-[54px] w-full rounded-[10px] border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-[17px] leading-6 tracking-[-0.02em] text-[var(--text)] outline-none transition max-[430px]:min-h-[52px] max-[430px]:px-3.5 max-[430px]:text-[16px] focus:border-[var(--primary)] focus:ring-4 focus:ring-[rgba(11,76,168,0.1)] sm:min-h-[56px] sm:text-[18px]"
          />
          {phoneError ? (
            <p
              id="phone-error"
              className="pt-0.5 text-[12px] font-medium leading-[18px] text-[var(--danger)] sm:text-[13px] sm:leading-5"
            >
              {phoneError}
            </p>
          ) : null}
        </div>

        <fieldset className="space-y-2 max-[430px]:space-y-1.5">
          <legend className="sr-only">Что нужно</legend>
          <div className={fieldHeaderClassName}>
            <p className={fieldLabelClassName}>Услуга</p>
            <span className={fieldMetaClassName}>Необязательно</span>
          </div>
          <div className="flex flex-wrap gap-2 max-[430px]:gap-1.5">
            {serviceOptions.map((option) => {
              const isChecked = values.serviceType === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={isChecked}
                  onClick={() => {
                    setValues((current) => ({
                      ...current,
                      serviceType: current.serviceType === option.value ? "" : option.value,
                    }));
                    setSubmitState("idle");
                  }}
                  className={`${compactChipBaseClassName} ${
                    isChecked
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="space-y-2 max-[430px]:space-y-1.5">
          <legend className="sr-only">Когда удобно связаться</legend>
          <div className={fieldHeaderClassName}>
            <p className={fieldLabelClassName}>Когда удобно связаться</p>
            <span className={fieldMetaClassName}>Необязательно</span>
          </div>
          <div className="flex flex-wrap gap-2 max-[430px]:gap-1.5">
            {contactWindowOptions.map((option) => {
              const isChecked = values.contactWindow === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={isChecked}
                  onClick={() => {
                    setValues((current) => ({
                      ...current,
                      contactWindow:
                        current.contactWindow === option.value ? "" : option.value,
                    }));
                    setSubmitState("idle");
                  }}
                  className={`${compactChipBaseClassName} ${
                    isChecked
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="space-y-2 border-t border-[var(--border)] pt-3 max-[430px]:space-y-1.5 max-[430px]:pt-2.5 sm:space-y-2.5 sm:pt-4">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            aria-expanded={expanded}
            aria-controls="booking-comment"
            className={`flex min-h-[44px] w-full items-center justify-between rounded-[10px] border px-4 text-left text-[13px] font-semibold leading-5 tracking-[-0.01em] transition max-[430px]:px-3.5 max-[430px]:text-[12px] sm:min-h-[46px] sm:text-[14px] ${
              expanded
                ? "border-[var(--primary)] bg-[rgba(11,76,168,0.08)] text-[var(--primary)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)]"
            }`}
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="truncate">Комментарий к заявке</span>
              <span className={fieldMetaClassName}>Необязательно</span>
            </span>
            <span
              aria-hidden="true"
              className={`text-[18px] leading-none transition ${expanded ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>

          {expanded ? (
            <div id="booking-comment" className="space-y-2 max-[430px]:space-y-1.5">
              <div className="space-y-2">
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  value={values.comment}
                  onChange={(event) => {
                    setValues((current) => ({
                      ...current,
                      comment: event.target.value,
                    }));
                    setSubmitState("idle");
                  }}
                  placeholder="Если хотите, кратко опишите вопрос или неисправность"
                  className="w-full rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[15px] leading-6 tracking-[-0.01em] text-[var(--text)] outline-none transition max-[430px]:px-3.5 max-[430px]:py-2.5 max-[430px]:text-[14px] focus:border-[var(--primary)] focus:ring-4 focus:ring-[rgba(11,76,168,0.1)]"
                />
              </div>
              <p className="text-[12px] leading-[18px] text-[var(--text-2)] max-[430px]:text-[11px] max-[430px]:leading-4 sm:text-[13px] sm:leading-5">
                {antiAnxietyCopy}
              </p>
            </div>
          ) : (
            <p className="text-[12px] leading-[18px] text-[var(--text-2)] max-[430px]:text-[11px] max-[430px]:leading-4 sm:text-[13px] sm:leading-5">
              {antiAnxietyCopy}
            </p>
          )}
        </div>

        <div className="space-y-2.5 pt-1 max-[430px]:space-y-2 max-[430px]:pt-0.5 sm:space-y-3 sm:pt-1.5">
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="inline-flex min-h-[54px] w-full items-center justify-center rounded-[10px] bg-[var(--primary)] px-5 text-base font-semibold tracking-[-0.01em] text-white shadow-[0_12px_26px_rgba(11,76,168,0.2)] transition max-[430px]:min-h-[52px] hover:bg-[var(--primary-pressed)] disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-14"
          >
            {submitState === "submitting" ? "Отправляем..." : "Оставить заявку"}
          </button>
          <div className="grid gap-1.5 border-b border-[var(--border)] pb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-2)] max-[430px]:gap-1 max-[430px]:pb-2.5 max-[430px]:text-[10px] max-[430px]:tracking-[0.1em] sm:grid-cols-3 sm:gap-2 sm:text-[10px]">
            <p>Запись предварительная</p>
            <p>Подтверждаем визит</p>
            <p>Свяжемся в рабочее время</p>
          </div>
          <p className="text-[12px] leading-[18px] text-[var(--text-2)] max-[430px]:text-[11px] max-[430px]:leading-4 sm:text-[13px] sm:leading-5">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных{" "}
            <Link className="font-semibold text-[var(--primary)]" href={dealerProfile.policyHref}>
              по политике ПД
            </Link>
            .
          </p>
        </div>

        <div aria-live="polite" className="pt-0.5 sm:pt-1">
          {submitState === "success" ? (
            <p className="rounded-[10px] border border-[rgba(17,122,55,0.18)] bg-[rgba(17,122,55,0.08)] px-4 py-3 text-[14px] leading-5 text-[var(--success)]">
              Спасибо. Заявка отправлена, мы свяжемся с вами для согласования визита.
            </p>
          ) : null}

          {submitState === "integration-missing" ? (
            <p className="rounded-[10px] border border-[rgba(180,83,9,0.18)] bg-[rgba(180,83,9,0.08)] px-4 py-3 text-[14px] leading-5 text-[var(--warning)]">
              Форма готова, но отправка пока не подключена. Добавьте endpoint в{" "}
              <code className="rounded-[6px] bg-[var(--surface)] px-1 py-0.5 text-[13px]">
                dealerProfile.formEndpoint
              </code>
              .
            </p>
          ) : null}

          {submitState === "error" ? (
            <p className="rounded-[10px] border border-[rgba(198,40,40,0.18)] bg-[rgba(198,40,40,0.08)] px-4 py-3 text-[14px] leading-5 text-[var(--danger)]">
              Не удалось отправить заявку. Проверьте подключение формы и попробуйте ещё раз.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
