import type { PillarPreviewContent } from "@/content/homepage/types";
import { EditorialLink } from "./editorial-link";
import { Media } from "./media";
import styles from "./editorial.module.css";

export function PillarPreview({ content, href, id, reverse = false }: {
  content: PillarPreviewContent;
  href: string;
  id: string;
  reverse?: boolean;
}) {
  return (
    <div className={`${styles["pillar-preview"]} ${reverse ? styles["pillar-reverse"] : ""}`}>
      <div className={styles["pillar-copy"]}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id={id} className={styles["pillar-heading"]}>{content.heading}</h2>
        <p className={styles["pillar-description"]}>{content.description}</p>
        <div className={styles["pillar-links"]}><EditorialLink href={href}>{content.link}</EditorialLink></div>
      </div>
      <Media media={content.media} />
    </div>
  );
}
