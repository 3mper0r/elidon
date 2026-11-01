import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { locales } from "@/lib/i18n/locales";
import "../globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://elidon.de"),
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const locale = await getLocale(lang);
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} className={`${geist.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <a href="#main-content" className="skip-link">{dictionary.accessibility.skipToContent}</a>
        <Header locale={locale} />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
