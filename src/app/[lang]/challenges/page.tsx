import { getLocale } from "@/lib/i18n/dictionaries";
import { getPageMetadata } from "@/lib/i18n/metadata";
import { ChallengesGallery } from "@/components/challenges-gallery";

export async function generateMetadata({ params }: PageProps<"/[lang]/challenges">) {
  const { lang } = await params;
  return getPageMetadata("challenges", lang);
}

export default async function ChallengesPage({ params }: PageProps<"/[lang]/challenges">) {
  const { lang } = await params;
  const locale = await getLocale(lang);
  return <ChallengesGallery locale={locale} />;
}
