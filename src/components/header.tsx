import Link from "next/link";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { localizedPath } from "@/lib/i18n/locales";
import { Container } from "./container";
import { Navigation } from "./navigation";

export async function Header() {
  const locale = await getLocale();
  const dictionary = await getDictionary();

  return (
    <header className="relative z-30 bg-[#091b14]">
      <Container className="flex items-center justify-between gap-4 py-5 lg:gap-8 lg:py-7">
        <Link href={localizedPath(locale)} aria-label={`Elidon builds — ${dictionary.navigation.home}`} className="flex min-h-11 items-center text-2xl font-medium tracking-tight">
          <span className="text-[#e5e9d9]">elidon builds</span>
        </Link>
        <Navigation locale={locale} labels={dictionary.navigation} accessibility={dictionary.accessibility} />
      </Container>
    </header>
  );
}
