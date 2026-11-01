import { getLocale } from "@/lib/i18n/dictionaries";
import { getPageMetadata } from "@/lib/i18n/metadata";
import { ChallengesGallery } from "@/components/challenges-gallery";

export function generateMetadata() {
  return getPageMetadata("challenges");
}

export default async function ChallengesPage() {
  const locale = await getLocale();
  return <ChallengesGallery locale={locale} />;
}
