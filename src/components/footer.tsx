import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "./container";

export async function Footer() {
  const dictionary = await getDictionary();
  return (
    <footer className="border-t border-secondary/20 py-10 sm:py-14">
      <Container className="flex flex-col gap-3 text-sm text-secondary sm:flex-row sm:justify-between">
        <p>elidon.de</p>
        <p>{dictionary.footer}</p>
      </Container>
    </footer>
  );
}
