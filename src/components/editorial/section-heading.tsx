import styles from "./editorial.module.css";
export function SectionHeading({ id, eyebrow, heading, description }: {
  id: string;
  eyebrow: string;
  heading: string;
  description?: string;
}) {
  return (
    <div className={styles["section-intro"]}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={`${styles["editorial-heading"]} mt-7 whitespace-pre-line`}>{heading}</h2>
      {description && <p className="mt-7 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">{description}</p>}
    </div>
  );
}
