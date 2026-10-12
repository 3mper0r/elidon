"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { localizedPath, pageKeys, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/types";
import { LanguageSwitcher } from "./language-switcher";

type Props = {
  locale: Locale;
  labels: Dictionary["navigation"];
  accessibility: Dictionary["accessibility"];
};

export function Navigation({ locale, labels, accessibility }: Props) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <nav aria-label={accessibility.navigation} className="flex flex-wrap items-center gap-x-6 gap-y-4 md:flex-1 md:justify-end">
      <LanguageSwitcher locale={locale} label={accessibility.language} />
      <button
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpenPath(open ? null : pathname)}
        className="min-h-11 rounded border border-secondary/40 px-4 text-sm md:hidden"
      >
        {accessibility.menu}
      </button>
      <ul id="primary-navigation" className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-secondary/20 pt-4 md:order-first md:flex md:w-auto md:flex-row md:flex-wrap md:gap-4 md:border-0 md:pt-0`}>
        {pageKeys.filter((page) => page !== "home").map((page) => {
          const href = localizedPath(locale, page);
          return (
            <li key={page}>
              <Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpenPath(null)} className="flex min-h-11 items-center py-2 text-sm text-secondary hover:text-foreground aria-[current=page]:text-foreground">
                {labels[page]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
