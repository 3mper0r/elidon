import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import type { PageKey } from "@/lib/i18n/locales";
import { Container } from "./container";

export async function PlaceholderPage({ page, locale: localeOverride }: { page: PageKey; locale?: string | null }) {
  const locale = await getLocale(localeOverride);
  const dictionary = await getDictionary(locale);
  const { heading, description } = dictionary.pages[page];
  return (
    <Container className="py-20 sm:py-28 lg:py-36">
      <h1 className="max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">{heading}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">{description}</p>
    </Container>
  );
}
