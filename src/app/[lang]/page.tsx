import { Homepage } from "@/components/homepage";
import { getPageMetadata } from "@/lib/i18n/metadata";

export function generateMetadata() {
  return getPageMetadata("home");
}

export default function Page() {
  return <Homepage />;
}
