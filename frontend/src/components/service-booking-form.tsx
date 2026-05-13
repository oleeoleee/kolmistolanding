"use client";

import Link from "next/link";
import type { ChangeEvent, FormEvent, KeyboardEvent } from "react";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

import {
  contactWindowOptions,
  formContent,
  legalContent,
  localeContent,
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

type SubmitState = "idle" | "submitting" | "success" | "error";
type BookingSubmissionPayload = {
  phone: string;
  serviceType: ServiceKind | "";
  contactWindow: ContactWindow | "";
  comment: string;
  source: string;
  submittedAt: string;
};

const phoneDefaults = localeContent.phone;
const formCopy = formContent.copy;
const submissionConfig = formContent.submission;
const PHONE_PREFIX = phoneDefaults.prefix;
const LOCAL_PHONE_LENGTH = phoneDefaults.localLength;

const initialValues: FormValues = {
  phone: "",
  serviceType: "",
  contactWindow: "",
  comment: "",
};

const fieldHeaderClassName =
  "mb-2 flex items-center justify-between gap-3 max-[430px]:mb-1.5 max-[430px]:items-end max-[430px]:gap-2";
const fieldLabelClassName =
  "form-label-accent text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-2)] max-[430px]:tracking-[0.14em]";
const fieldMetaClassName =
  "shrink-0 whitespace-nowrap text-[10px] font-medium tracking-[0.005em] text-[rgba(209,216,223,0.72)] max-[430px]:text-[9px]";
const optionalMetaClassName =
  "shrink-0 whitespace-nowrap text-[10px] font-medium tracking-[0.005em] text-[rgba(183,191,199,0.62)] max-[430px]:text-[9px]";
const compactChipBaseClassName =
  "inline-flex min-h-[34px] cursor-pointer items-center justify-center rounded-[12px] border px-[11px] py-1.5 text-[12px] font-medium leading-[1.1] tracking-[-0.015em] transition-colors transition-[border-color,background-color,color] max-[430px]:min-h-[34px] max-[430px]:rounded-[11px] max-[430px]:px-2.5 max-[430px]:py-[5px] max-[430px]:text-[11px] sm:min-h-[36px] sm:rounded-[12px] sm:px-3 sm:text-[13px]";
const serviceRowControlClassName =
  "flex min-h-[46px] w-full items-center justify-between rounded-[12px] border px-3.5 py-2.5 text-left text-[13px] font-medium leading-[1.2] tracking-[-0.012em] transition-colors transition-[border-color,background-color,color] max-[430px]:min-h-[44px] max-[430px]:rounded-[11px] max-[430px]:px-3 max-[430px]:py-2.5 max-[430px]:text-[12px] sm:min-h-12 sm:px-4 sm:text-[13px]";
const normalizePhone = (value: string) => {
  if (value.length === 0) {
    return "";
  }

  return `${phoneDefaults.normalizedCountryCode}${value}`;
};

const isPhoneValid = (value: string) =>
  normalizePhone(value).length ===
  phoneDefaults.normalizedCountryCode.length + LOCAL_PHONE_LENGTH;

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
    phoneDefaults.trunkPrefixes.some((prefix) => digits.startsWith(prefix))
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

  if (!isPhoneValid(values.phone)) {
    errors.phone = formCopy.phoneErrorText;
  }

  return errors;
};

const submitBookingRequest = async (
  payload: BookingSubmissionPayload,
  endpoint?: string | null,
) => {
  if (!endpoint) {
    await new Promise((resolve) =>
      window.setTimeout(resolve, submissionConfig.mockDelayMs),
    );
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Submission failed");
  }
};

export function ServiceBookingForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [expanded, setExpanded] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [touched, setTouched] = useState({
    phone: false,
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const pendingPhoneCaretRef = useRef<number | null>(null);

  const errors = useMemo(() => validate(values), [values]);
  const phoneIsValid = useMemo(() => isPhoneValid(values.phone), [values.phone]);
  const phoneValue = useMemo(() => formatPhone(values.phone), [values.phone]);
  const phoneHasValue = values.phone.length > 0;
  const phoneError =
    phoneHasValue && (touched.phone || submitAttempted) ? errors.phone : undefined;

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

    if (submitState === "submitting") {
      return;
    }

    setSubmitAttempted(true);
    setTouched({
      phone: true,
    });
    setSubmitState("idle");

    if (!phoneIsValid || Object.keys(errors).length > 0) {
      return;
    }

    setSubmitState("submitting");

    try {
      await submitBookingRequest(
        {
          phone: normalizePhone(values.phone),
          serviceType: values.serviceType,
          contactWindow: values.contactWindow,
          comment: values.comment.trim(),
          source: submissionConfig.source,
          submittedAt: new Date().toISOString(),
        },
        submissionConfig.endpoint,
      );
      setValues(initialValues);
      setExpanded(false);
      setDetailsExpanded(false);
      setTouched({
        phone: false,
      });
      setSubmitAttempted(false);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <div
      id="service-form"
      className="surface-panel scroll-mt-6 px-5 py-5 max-[430px]:px-4 max-[430px]:py-4 sm:px-6 sm:py-6"
    >
      <div className="accent-divider mb-3.5 space-y-1.5 border-b border-[var(--border)] pb-3.5 max-[430px]:mb-3 max-[430px]:space-y-1.5 max-[430px]:pb-3 sm:mb-5 sm:space-y-2 sm:pb-4">
        <p className="form-label-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-2)] max-[430px]:text-[9px] max-[430px]:tracking-[0.16em] sm:text-[11px]">
          {formCopy.eyebrow}
        </p>
        <h2 className="text-[21px] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--text)] sm:text-[22px]">
          {formCopy.title}
        </h2>
        <p className="max-w-[28rem] text-[13px] leading-[18px] tracking-[-0.008em] text-[var(--text-2)] max-[430px]:max-w-[24rem] max-[430px]:text-[12px] max-[430px]:leading-[17px] sm:text-[14px] sm:leading-[22px]">
          {formCopy.description}
        </p>
      </div>

      <form
        className="grid gap-3 max-[430px]:gap-2.5 max-[390px]:gap-[9px] sm:gap-4"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="accent-divider order-1 space-y-2 border-b border-[var(--border)] pb-3.5 max-[430px]:space-y-1.5 max-[430px]:pb-3 sm:space-y-2.5 sm:pb-4">
          <div className={fieldHeaderClassName}>
            <label className={fieldLabelClassName} htmlFor="phone">
              {formCopy.phoneLabel}
            </label>
            <span className={fieldMetaClassName}>{formCopy.requiredLabel}</span>
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
            placeholder={phoneDefaults.placeholder}
            aria-invalid={Boolean(phoneError)}
            aria-describedby="phone-feedback"
            className="min-h-[54px] w-full rounded-[10px] border border-[var(--border-strong)] bg-[var(--surface-subtle)] px-4 text-[17px] leading-6 tracking-[-0.02em] text-[var(--text)] outline-none transition max-[430px]:min-h-[52px] max-[430px]:px-3.5 max-[430px]:text-[16px] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-soft)] sm:min-h-[56px] sm:text-[18px]"
          />
          <p
            id="phone-feedback"
            className={`pt-0.5 text-[11px] leading-4 tracking-[-0.006em] sm:text-[12px] sm:leading-[18px] ${
              phoneError
                ? "font-medium text-[var(--danger)]"
                : "text-[var(--text-2)]"
            }`}
          >
            {phoneError ?? formCopy.phoneHelperText}
          </p>
        </div>

        <div className="order-2 space-y-2.5 pt-1 max-[430px]:space-y-1.5 max-[430px]:pt-0.5 sm:order-3 sm:space-y-3 sm:pt-1.5">
          <button
            type="submit"
            aria-busy={submitState === "submitting" ? true : undefined}
            disabled={submitState === "submitting" || !phoneIsValid}
            className="inline-flex min-h-[54px] w-full items-center justify-center rounded-[10px] bg-[var(--primary)] px-5 text-base font-semibold tracking-[-0.01em] text-white shadow-[0_16px_36px_rgba(112,46,18,0.22)] transition max-[430px]:min-h-[52px] hover:bg-[var(--primary-pressed)] disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-14"
          >
            {submitState === "submitting" ? formCopy.submittingLabel : formCopy.submitLabel}
          </button>
          <div className="accent-divider border-b border-[var(--border)] pb-3 max-[430px]:pb-2.5">
            <p className="text-[10px] leading-[15px] tracking-[0.006em] text-[var(--text-2)] sm:hidden">
              {formCopy.mobileCtaMicrocopy}
            </p>
            <div className="hidden gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-2)] sm:grid sm:grid-cols-3 sm:gap-2 sm:text-[10px]">
              {formCopy.desktopCtaPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
          <p className="max-w-[29rem] text-[12px] leading-[17px] tracking-[-0.008em] text-[var(--text-2)] max-[430px]:max-w-[24rem] max-[430px]:text-[10px] max-[430px]:leading-[15px] sm:text-[12px] sm:leading-[19px]">
            {formCopy.legalPrefix}{" "}
            <Link
              className="font-semibold text-[var(--primary)] transition hover:text-[var(--primary-pressed)]"
              href={legalContent.policyHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formCopy.legalLinkLabel}
            </Link>
            .
          </p>
        </div>

        <div aria-live="polite" className="order-3 pt-0.5 sm:order-4 sm:pt-1">
          {submitState === "success" ? (
            <p className="rounded-[10px] border border-[rgba(139,207,151,0.24)] bg-[rgba(139,207,151,0.1)] px-4 py-3 text-[14px] leading-5 text-[var(--success)]">
              {formCopy.successMessage}
            </p>
          ) : null}

          {submitState === "error" ? (
            <p className="rounded-[10px] border border-[rgba(255,154,144,0.22)] bg-[rgba(255,154,144,0.1)] px-4 py-3 text-[14px] leading-5 text-[var(--danger)]">
              {formCopy.errorMessage}
            </p>
          ) : null}
        </div>

        <div className="order-4 sm:order-2">
          <button
            type="button"
            onClick={() => setDetailsExpanded((current) => !current)}
            aria-expanded={detailsExpanded}
            aria-controls="booking-details"
            className={`flex w-full items-center justify-between gap-3 px-0 text-left sm:hidden ${
              detailsExpanded
                ? "pb-2.5"
                : "accent-divider border-b border-[var(--border)] pb-3"
            }`}
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[13px] font-semibold leading-5 tracking-[-0.015em] text-[var(--text)]">
                {formCopy.detailsToggleLabel}
              </span>
              <span className="mt-0.5 block text-[10px] font-medium leading-4 tracking-[0.01em] text-[rgba(183,191,199,0.72)]">
                {formCopy.detailsToggleMeta}
              </span>
            </span>
            <span
              aria-hidden="true"
              className={`shrink-0 text-[18px] leading-none text-[var(--text-2)] transition ${
                detailsExpanded ? "rotate-45 text-[var(--primary)]" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            id="booking-details"
            className={`${detailsExpanded ? "mt-2.5 grid gap-3 max-[430px]:gap-2.5 max-[390px]:gap-[9px]" : "hidden"} sm:mt-0 sm:grid sm:gap-4`}
          >
            <fieldset className="accent-divider space-y-2 border-b border-[var(--border)] pb-3.5 max-[430px]:space-y-1.5 max-[430px]:pb-3 sm:pb-4">
              <legend className="sr-only">{formCopy.serviceLegend}</legend>
              <div className={fieldHeaderClassName}>
                <p className={fieldLabelClassName}>{formCopy.serviceLabel}</p>
                <span className={optionalMetaClassName}>{formCopy.optionalLabel}</span>
              </div>
              <div className="grid gap-1.5 sm:gap-2">
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
                      className={`${serviceRowControlClassName} ${
                        isChecked
                          ? "border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--text)]"
                          : "border-[var(--border-strong)] bg-[var(--surface-subtle)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)]"
                      }`}
                    >
                      <span>{option.label}</span>
                      <span
                        aria-hidden="true"
                        className={`ml-3 h-[15px] w-[15px] shrink-0 rounded-[4px] border transition-colors max-[430px]:h-[14px] max-[430px]:w-[14px] ${
                          isChecked
                            ? "border-[var(--primary)] bg-[var(--primary-soft)]"
                            : "border-[var(--border-strong)] bg-transparent"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="accent-divider space-y-2 border-b border-[var(--border)] pb-3.5 max-[430px]:space-y-1.5 max-[430px]:pb-3 sm:pb-4">
              <legend className="sr-only">{formCopy.contactWindowLegend}</legend>
              <div className={fieldHeaderClassName}>
                <p className={fieldLabelClassName}>{formCopy.contactWindowLabel}</p>
                <span className={optionalMetaClassName}>{formCopy.optionalLabel}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-[430px]:gap-1.5">
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
                          ? "border-[var(--primary)] bg-[var(--primary-soft)] font-semibold text-[var(--text)]"
                          : "border-[var(--border-strong)] bg-transparent text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)]"
                      }`}
                    >
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="accent-divider space-y-2.5 border-b border-[var(--border)] pb-3.5 max-[430px]:space-y-1.5 max-[430px]:pb-3 sm:space-y-2 sm:pb-4">
              <button
                type="button"
                onClick={() => setExpanded((current) => !current)}
                aria-expanded={expanded}
                aria-controls="booking-comment"
                className={`flex min-h-[40px] w-full items-center justify-between gap-3 px-0 py-0.5 text-left text-[13px] font-semibold leading-5 tracking-[-0.01em] transition max-[430px]:min-h-[38px] max-[430px]:gap-2.5 max-[430px]:text-[12px] sm:min-h-[42px] sm:text-[14px] ${
                  expanded
                    ? "text-[var(--primary)]"
                    : "text-[var(--text)]"
                }`}
              >
                <span className="flex min-w-0 flex-1 items-center gap-2 max-[430px]:items-start">
                  <span className="min-w-0">
                    <span className="block truncate max-[430px]:leading-4">{formCopy.commentLabel}</span>
                    <span className="mt-0.5 hidden text-[10px] font-medium leading-4 tracking-[0.02em] text-[rgba(183,191,199,0.82)] max-[430px]:block">
                      {formCopy.optionalLabel}
                    </span>
                  </span>
                  <span className={`max-[430px]:hidden ${optionalMetaClassName}`}>
                    {formCopy.optionalLabel}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-[18px] leading-none text-[var(--text-2)] transition max-[430px]:text-[16px] ${expanded ? "rotate-45 text-[var(--primary)]" : ""}`}
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
                      placeholder={formCopy.commentPlaceholder}
                      className="w-full rounded-[12px] border border-[var(--border-strong)] bg-[var(--surface-subtle)] px-4 py-3 text-[15px] leading-6 tracking-[-0.01em] text-[var(--text)] outline-none transition max-[430px]:rounded-[11px] max-[430px]:px-3.5 max-[430px]:py-2.5 max-[430px]:text-[14px] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-soft)]"
                    />
                  </div>
                  <p className="text-[12px] leading-[17px] tracking-[-0.008em] text-[var(--text-2)] max-[430px]:text-[11px] max-[430px]:leading-[15px] sm:text-[12px] sm:leading-[19px]">
                    {formCopy.antiAnxietyCopy}
                  </p>
                </div>
              ) : (
                <p className="text-[12px] leading-[17px] tracking-[-0.008em] text-[var(--text-2)] max-[430px]:text-[11px] max-[430px]:leading-[15px] sm:text-[12px] sm:leading-[19px]">
                  {formCopy.antiAnxietyCopy}
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
