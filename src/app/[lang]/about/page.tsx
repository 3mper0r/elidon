import { PlaceholderPage } from "@/components/placeholder-page";
import { getPageMetadata } from "@/lib/i18n/metadata";

export function generateMetadata() {
  return getPageMetadata("about");
}

export default function Page() {
  return <PlaceholderPage page="about" />;
}
