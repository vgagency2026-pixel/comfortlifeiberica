"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/utils/cn";
import { LOCALES, LOCALE_COOKIE, type Locale } from "@/lib/i18n/types";

const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
};

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

interface LanguageSwitcherProps {
  locale: Locale;
  tone?: "ivory" | "chocolate";
}

export function LanguageSwitcher({
  locale,
  tone = "ivory",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function selectLocale(next: Locale) {
    if (next === locale) return;
    setLocaleCookie(next);
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div
      className={cn(
        "font-ui text-caption flex items-center gap-2 tracking-[0.15em] uppercase",
        isPending && "opacity-60",
      )}
      aria-label="Selector de idioma"
    >
      {LOCALES.map((code, i) => (
        <span key={code} className="flex items-center gap-2">
          {i > 0 ? (
            <span
              className={
                tone === "ivory" ? "text-ivory/30" : "text-chocolate/30"
              }
              aria-hidden
            >
              /
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => selectLocale(code)}
            aria-current={locale === code ? "true" : undefined}
            className={cn(
              "ease-elegant transition-colors duration-500",
              locale === code
                ? tone === "ivory"
                  ? "text-gold-rose"
                  : "text-champagne-dark"
                : tone === "ivory"
                  ? "text-ivory/50 hover:text-ivory"
                  : "text-chocolate/50 hover:text-chocolate",
            )}
          >
            {LOCALE_LABELS[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
