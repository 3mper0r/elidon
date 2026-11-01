import { PlaceholderPage } from "@/components/placeholder-page";
import { getPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return getPageMetadata("engineering", lang);
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return <PlaceholderPage page="engineering" locale={lang} />;
}
