"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/locales";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const pagePath = pathname.split("/").slice(2).join("/");

  return (
    <div role="group" aria-label={label} className="flex items-center gap-1 text-xs tracking-widest">
      {locales.map((language) => (
        <Link
          key={language}
          href={`/${language}${pagePath ? `/${pagePath}` : ""}`}
          hrefLang={language}
          lang={language}
          aria-current={locale === language ? "true" : undefined}
          aria-label={language === "en" ? "English" : "Deutsch"}
          className="flex min-h-11 min-w-11 items-center justify-center rounded text-secondary hover:bg-surface hover:text-foreground aria-[current=true]:text-foreground"
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
