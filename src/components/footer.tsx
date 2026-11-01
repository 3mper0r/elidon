import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { Container } from "./container";

export async function Footer({ locale: localeOverride }: { locale?: string | null }) {
  const locale = await getLocale(localeOverride);
  const dictionary = await getDictionary(locale);
  return (
    <footer className="border-t border-secondary/20 py-10 sm:py-14">
      <Container className="flex flex-col gap-3 text-sm text-secondary sm:flex-row sm:justify-between">
        <p>elidon.de</p>
        <p>{dictionary.footer}</p>
      </Container>
    </footer>
  );
}
