import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { localizedPath } from "@/lib/i18n/locales";
import { Container } from "./container";
import { Navigation } from "./navigation";

const wordmark = Space_Grotesk({ subsets: ["latin"], weight: "700", display: "swap" });

export async function Header() {
  const locale = await getLocale();
  const dictionary = await getDictionary();

  return (
    <header className="relative z-30 bg-[#091b14]">
      <Container className="flex items-center justify-between gap-2 py-5 min-[380px]:gap-4 lg:gap-8 lg:py-7">
        <Link href={localizedPath(locale)} aria-label={`Elidon builds — ${dictionary.navigation.home}`} className={`${wordmark.className} flex min-h-11 shrink-0 items-center whitespace-nowrap text-lg font-bold tracking-[-0.045em] min-[380px]:text-2xl`}>
          <span className="text-[#e5e9d9]">elidon <span className="text-[#b7d786]">builds</span></span>
        </Link>
        <Navigation locale={locale} labels={dictionary.navigation} accessibility={dictionary.accessibility} />
      </Container>
    </header>
  );
}
