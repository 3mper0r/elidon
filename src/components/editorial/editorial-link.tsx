import styles from "./editorial.module.css";
import Link from "next/link";

export function EditorialLink({ href, children, filled = false }: {
  href: string;
  children: React.ReactNode;
  filled?: boolean;
}) {
  return (
    <Link href={href} className={`${styles["editorial-link"]} ${filled ? styles["editorial-link-filled"] : ""}`}>
      <span>{children}</span><span className={styles["link-arrow"]} aria-hidden="true">↗</span>
    </Link>
  );
}
