import { Homepage } from "@/components/homepage";
import { getPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return getPageMetadata("home", lang);
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return <Homepage locale={lang} />;
}
