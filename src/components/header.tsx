import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { localizedPath } from "@/lib/i18n/locales";
import { Container } from "./container";
import { Navigation } from "./navigation";

const wordmark = Space_Grotesk({ subsets: ["latin"], weight: "700", display: "swap" });

export async function Header({ locale: localeOverride }: { locale?: string | null }) {
  const locale = await getLocale(localeOverride);
  const dictionary = await getDictionary(locale);

  return (
    <header className="relative z-30 bg-[#091b14]">
      <Container className="flex items-center justify-between gap-4 py-5 lg:gap-8 lg:py-7">
        <Link href={localizedPath(locale)} aria-label={`Elidon builds — ${dictionary.navigation.home}`} className={`${wordmark.className} flex min-h-11 shrink-0 items-center whitespace-nowrap text-2xl font-bold tracking-[-0.045em]`}>
          <span className="text-[#e5e9d9]">elidon <span className="text-[#b7d786]">builds</span></span>
        </Link>
        <Navigation locale={locale} labels={dictionary.navigation} accessibility={dictionary.accessibility} />
      </Container>
    </header>
  );
}
