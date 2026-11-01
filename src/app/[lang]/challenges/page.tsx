import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n/dictionaries";
import { ChallengesGallery } from "@/components/challenges-gallery";

export const metadata: Metadata = {
  title: "Challenges | elidon.de",
  description: "A collection of running, cycling, swimming and outdoor video challenges.",
};

export default async function ChallengesPage() {
  const locale = await getLocale();
  return <ChallengesGallery locale={locale} />;
}
