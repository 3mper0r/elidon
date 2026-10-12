import Image from "next/image";
import type { EditorialMedia } from "@/content/homepage/types";
import styles from "./editorial.module.css";

export function Media({ media }: { media: EditorialMedia }) {
  return (
    <figure className={styles["editorial-media"]}>
      <div className={`${styles["media-frame"]} ${styles[`media-${media.variant}`]}`}>
        {media.image ? (
          <Image
            src={media.image.src}
            alt={media.image.alt}
            fill
            sizes="(min-width: 1440px) 600px, (min-width: 768px) 45vw, 90vw"
            className={styles["media-image"]}
          />
        ) : (
          <>
            <div className={styles["media-art"]} aria-hidden="true">
              <span className={`${styles["media-shape"]} ${styles["shape-one"]}`} />
              <span className={`${styles["media-shape"]} ${styles["shape-two"]}`} />
              <span className={`${styles["media-shape"]} ${styles["shape-three"]}`} />
            </div>
            <div className={styles["media-placeholder"]}>
              <span className={styles["media-label"]}>{media.label}</span>
            </div>
          </>
        )}
      </div>
      <figcaption className={styles["media-caption"]}>{media.caption}</figcaption>
    </figure>
  );
}
