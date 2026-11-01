import { ContactSection } from "@/components/profile-sections";
import { getHomepageContent } from "@/content/homepage";
import { getPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return getPageMetadata("contact", lang);
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const content = await getHomepageContent(lang);
  return <ContactSection content={content.contact} />;
}
