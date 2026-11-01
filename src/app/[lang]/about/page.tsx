import { AboutSection } from "@/components/profile-sections";
import { getHomepageContent } from "@/content/homepage";
import { getPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return getPageMetadata("about", lang);
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const content = await getHomepageContent(lang);
  return <AboutSection content={content.about} />;
}
