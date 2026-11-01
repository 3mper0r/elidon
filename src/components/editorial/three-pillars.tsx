import Image from "next/image";
import Link from "next/link";
import { pillarKeys, pillarMedia } from "@/content/pillars";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { localizedPath } from "@/lib/i18n/locales";
import { Container } from "../container";
import { SectionHeading } from "./section-heading";
import styles from "./three-pillars.module.css";

export async function ThreePillars({ locale: localeOverride }: { locale?: string | null }) {
  const locale = await getLocale(localeOverride);
  const { threePillars: content } = await getDictionary(locale);

  return (
    <section id="three-pillars" aria-labelledby="three-pillars-heading" className={styles.section}>
      <Container>
        <SectionHeading id="three-pillars-heading" eyebrow={content.eyebrow} heading={content.heading} description={content.description} />
        <ul className={styles.grid}>
          {pillarKeys.map((pillar, index) => {
            const card = content.cards[pillar];
            const { image } = pillarMedia[pillar];
            return (
              <li key={pillar} className={styles.item}>
                <Link href={localizedPath(locale, pillar)} className={styles.card} aria-labelledby={`pillar-${pillar}-title pillar-${pillar}-link`}>
                  <div className={styles.frame}>
                    {image ? (
                      <Image src={image.src} alt={image.alt[locale]} fill sizes="(min-width: 1440px) 410px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw" className={styles.image} />
                    ) : (
                      <div className={styles.placeholder}>
                        <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                        <span className={styles.label}>{card.mediaLabel}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.copy}>
                    <h3 id={`pillar-${pillar}-title`} className={styles.title}>{card.title}</h3>
                    <p className={styles.description}>{card.description}</p>
                    <span id={`pillar-${pillar}-link`} className={styles.affordance}>
                      {card.link}<span className={styles.arrow} aria-hidden="true">↗</span>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
