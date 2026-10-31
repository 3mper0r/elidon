import { AboutSection } from "@/components/profile-sections";
import { getHomepageContent } from "@/content/homepage";
import { getPageMetadata } from "@/lib/i18n/metadata";

export function generateMetadata() {
  return getPageMetadata("about");
}

export default async function Page() {
  const content = await getHomepageContent();
  return <AboutSection content={content.about} />;
}
