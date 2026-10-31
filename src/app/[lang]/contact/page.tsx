import { ContactSection } from "@/components/profile-sections";
import { getHomepageContent } from "@/content/homepage";
import { getPageMetadata } from "@/lib/i18n/metadata";

export function generateMetadata() {
  return getPageMetadata("contact");
}

export default async function Page() {
  const content = await getHomepageContent();
  return <ContactSection content={content.contact} />;
}
