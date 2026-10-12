"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { localizedPath, pageKeys, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/types";
import { LanguageSwitcher } from "./language-switcher";

type Props = {
  locale: Locale;
  labels: Dictionary["navigation"];
  accessibility: Dictionary["accessibility"];
};

export function Navigation({ locale, labels, accessibility }: Props) {
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <nav aria-label={accessibility.navigation} onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpenPath(null);
        menuButton.current?.focus();
      }
    }} className="flex items-center justify-end gap-2 sm:gap-5 lg:flex-1 lg:gap-7">
      <LanguageSwitcher locale={locale} label={accessibility.language} />
      <button
        ref={menuButton}
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpenPath(open ? null : pathname)}
        className="min-h-11 rounded border border-secondary/40 px-4 text-base lg:hidden"
      >
        {accessibility.menu}
      </button>
      <ul id="primary-navigation" className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[75dvh] w-full flex-col gap-1 overflow-y-auto border-b border-secondary/25 bg-background px-6 py-5 shadow-xl sm:px-10 lg:static lg:order-first lg:flex lg:max-h-none lg:w-auto lg:flex-row lg:gap-6 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
        {pageKeys.filter((page) => page !== "home").map((page) => {
          const href = localizedPath(locale, page);
          return (
            <li key={page}>
              <Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpenPath(null)} className="flex min-h-11 items-center rounded px-2 py-3 text-base text-secondary hover:bg-surface hover:text-foreground lg:px-0 lg:hover:bg-transparent motion-safe:transition-colors aria-[current=page]:text-foreground">
                {labels[page]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
