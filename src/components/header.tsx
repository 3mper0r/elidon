import Link from "next/link";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { localizedPath } from "@/lib/i18n/locales";
import { Container } from "./container";
import { Navigation } from "./navigation";

export async function Header() {
  const locale = await getLocale();
  const dictionary = await getDictionary();

  return (
    <header className="border-b border-secondary/20">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5 md:flex-nowrap md:py-7">
        <Link href={localizedPath(locale)} aria-label={`Elidon — ${dictionary.navigation.home}`} className="flex min-h-11 items-center text-xl font-medium tracking-tight">elidon.</Link>
        <Navigation locale={locale} labels={dictionary.navigation} accessibility={dictionary.accessibility} />
      </Container>
    </header>
  );
}
