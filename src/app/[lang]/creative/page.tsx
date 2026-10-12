import { PlaceholderPage } from "@/components/placeholder-page";
import { getPageMetadata } from "@/lib/i18n/metadata";

export function generateMetadata() {
  return getPageMetadata("creative");
}

export default function Page() {
  return <PlaceholderPage page="creative" />;
}
