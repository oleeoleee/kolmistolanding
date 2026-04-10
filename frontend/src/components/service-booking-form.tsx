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
      className="scroll-mt-6 rounded-[16px] border border-[var(--border)] bg-[var(--bg-soft)] p-4 shadow-[0_18px_40px_rgba(11,15,20,0.08)] sm:p-6"
    >
      <div className="mb-5 space-y-2">
        <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--text)]">
          Заявка на сервис
        </h2>
        <p className="text-[14px] leading-5 text-[var(--text-2)]">
          Оставьте телефон. Сотрудник сервиса свяжется с вами в рабочее время и согласует удобный визит.
        </p>
      </div>

      <form className="space-y-4" noValidate onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            className="block text-[14px] font-semibold leading-5 text-[var(--text)]"
            htmlFor="phone"
          >
            Телефон для связи *
          </label>
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
            className="min-h-14 w-full rounded-[12px] border border-[var(--border)] bg-white px-4 text-base leading-6 text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-[rgba(10,91,211,0.12)]"
          />
          {phoneError ? (
            <p
              id="phone-error"
              className="text-[13px] font-medium leading-5 text-[var(--danger)]"
            >
              {phoneError}
            </p>
          ) : null}
        </div>

        <fieldset className="space-y-2">
          <legend className="text-[14px] font-semibold leading-5 text-[var(--text)]">
            Что нужно (необязательно)
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
                  className={`flex min-h-12 cursor-pointer items-center justify-center rounded-[10px] border px-3 text-center text-[14px] font-semibold leading-5 transition ${
                    isChecked
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_10px_22px_rgba(10,91,211,0.18)]"
                      : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--primary)]"
                  }`}
                >
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="space-y-2">
          <legend className="text-[14px] font-semibold leading-5 text-[var(--text)]">
            Когда удобно связаться (необязательно)
          </legend>
          <div className="flex flex-wrap gap-2">
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
                  className={`flex min-h-12 cursor-pointer items-center rounded-full border px-4 text-[14px] font-semibold leading-5 transition ${
                    isChecked
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_10px_22px_rgba(10,91,211,0.18)]"
                      : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--primary)]"
                  }`}
                >
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="space-y-3 border-t border-[var(--border)] pt-4">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            aria-expanded={expanded}
            aria-controls="booking-comment"
            className={`flex min-h-12 w-full items-center justify-between rounded-[12px] border px-4 text-left text-[14px] font-semibold leading-5 transition ${
              expanded
                ? "border-[var(--primary)] bg-white text-[var(--primary)]"
                : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--primary)]"
            }`}
          >
            <span>Комментарий к заявке (необязательно)</span>
            <span
              aria-hidden="true"
              className={`text-[18px] leading-none transition ${expanded ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>

          {expanded ? (
            <div id="booking-comment" className="space-y-3">
              <div className="space-y-2">
                <label
                  className="block text-[14px] font-semibold leading-5 text-[var(--text)]"
                  htmlFor="comment"
                >
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  value={values.comment}
                  onChange={(event) => {
                    setValues((current) => ({
                      ...current,
                      comment: event.target.value,
                    }));
                    setSubmitState("idle");
                  }}
                  placeholder="Если хотите, кратко опишите вопрос или неисправность"
                  className="w-full rounded-[12px] border border-[var(--border)] bg-white px-4 py-3 text-base leading-6 text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-[rgba(10,91,211,0.12)]"
                />
              </div>
              <p className="text-[13px] leading-5 text-[var(--text-2)]">
                Можно без точного описания неисправности.
              </p>
            </div>
          ) : (
            <p className="text-[13px] leading-5 text-[var(--text-2)]">
              Можно без точного описания неисправности.
            </p>
          )}
        </div>

        <div className="space-y-3 pt-2">
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-[12px] bg-[var(--primary)] px-5 text-base font-semibold text-white transition hover:bg-[var(--primary-pressed)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === "submitting" ? "Отправляем..." : "Оставить заявку"}
          </button>
          <p className="text-center text-[13px] font-medium leading-5 text-[var(--text-2)]">
            Свяжемся в рабочее время и согласуем удобный визит.
          </p>
          <p className="text-[13px] leading-5 text-[var(--text-2)]">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных{" "}
            <Link className="font-semibold text-[var(--primary)]" href={dealerProfile.policyHref}>
              по политике ПД
            </Link>
            .
          </p>
        </div>

        <div aria-live="polite" className="pt-1">
          {submitState === "success" ? (
            <p className="rounded-[12px] border border-[rgba(17,122,55,0.18)] bg-[rgba(17,122,55,0.08)] px-4 py-3 text-[14px] leading-5 text-[var(--success)]">
              Спасибо. Заявка отправлена, мы свяжемся с вами для согласования визита.
            </p>
          ) : null}

          {submitState === "integration-missing" ? (
            <p className="rounded-[12px] border border-[rgba(180,83,9,0.18)] bg-[rgba(180,83,9,0.08)] px-4 py-3 text-[14px] leading-5 text-[var(--warning)]">
              Форма готова, но отправка пока не подключена. Добавьте endpoint в{" "}
              <code className="rounded bg-white px-1 py-0.5 text-[13px]">
                dealerProfile.formEndpoint
              </code>
              .
            </p>
          ) : null}

          {submitState === "error" ? (
            <p className="rounded-[12px] border border-[rgba(198,40,40,0.18)] bg-[rgba(198,40,40,0.08)] px-4 py-3 text-[14px] leading-5 text-[var(--danger)]">
              Не удалось отправить заявку. Проверьте подключение формы и попробуйте ещё раз.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
