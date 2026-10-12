import { getHomepageContent } from "@/content/homepage";
import { getLocale } from "@/lib/i18n/dictionaries";
import { localizedPath } from "@/lib/i18n/locales";
import { Container } from "./container";
import { EditorialLink } from "./editorial/editorial-link";
import { Media } from "./editorial/media";
import { PillarPreview } from "./editorial/pillar-preview";
import { SectionHeading } from "./editorial/section-heading";
import styles from "./editorial/editorial.module.css";

export async function Homepage() {
  const content = await getHomepageContent();
  const locale = await getLocale();
  const { hero, engineering, beyond, contact } = content;

  return (
    <>
      <section aria-labelledby="hero-heading" className={styles["hero-section"]}>
        <Container className={styles["hero-grid"]}>
          <div className={styles["hero-copy"]}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 id="hero-heading" className={styles["hero-heading"]}>
              <span>{hero.heading[0]}</span>
              <span className="text-secondary">{hero.heading[1]}</span>
            </h1>
            <div className={styles["hero-support"]}>
              <p className={styles["hero-introduction"]}>{hero.introduction}</p>
              <div className={styles["hero-actions"]}>
                <EditorialLink href={localizedPath(locale, "engineering")} filled>{hero.primaryLink}</EditorialLink>
                <EditorialLink href={localizedPath(locale, "about")}>{hero.secondaryLink}</EditorialLink>
              </div>
            </div>
          </div>
          <a href="#engineering" className={`${styles["hero-scroll"]} ${styles.eyebrow}`}><span aria-hidden="true">↓</span> {hero.scrollLink}</a>
        </Container>
      </section>

      <section id="engineering" aria-labelledby="engineering-heading" className={`${styles["editorial-section"]} ${styles["engineering-section"]}`}>
        <Container>
          <div className={styles["engineering-intro"]}>
            <SectionHeading id="engineering-heading" eyebrow={engineering.eyebrow} heading={engineering.heading} description={engineering.introduction} />
            <div className="mt-8"><EditorialLink href={localizedPath(locale, "engineering")}>{engineering.link}</EditorialLink></div>
          </div>
          <div className={styles["engineering-details"]}>
            {engineering.details.map((detail, index) => (
              <article key={detail.title} className={styles["detail-panel"]}>
                <span className={styles["detail-number"]} aria-hidden="true">0{index + 1}</span>
                <h3 className={styles["detail-title"]}>{detail.title}</h3>
                <p className={styles["detail-description"]}>{detail.description}</p>
                <ul className={styles["detail-list"]}>
                  {detail.items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true">—</span>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles["selected-work"]}>
            <div className={styles["work-heading"]}>
              <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{engineering.projectsHeading}</h3>
              <p className="text-sm text-secondary">{engineering.projectStatus}</p>
            </div>
            <div className={styles["project-grid"]}>
              {engineering.projects.map((project) => (
                <article key={project.id} aria-labelledby={`project-${project.id}`} className={styles["project-preview"]}>
                  <Media media={project.media} />
                  <div className={styles["project-copy"]}>
                    <span className="pt-1 text-sm text-secondary" aria-hidden="true">{project.id}</span>
                    <div>
                      <h4 id={`project-${project.id}`} className="text-xl font-medium tracking-tight sm:text-2xl">{project.title}</h4>
                      <p className="mt-3 max-w-md text-base leading-relaxed text-secondary">{project.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="beyond-heading" className={`${styles["editorial-section"]} ${styles["beyond-intro"]}`}>
        <Container>
          <SectionHeading id="beyond-heading" eyebrow={beyond.eyebrow} heading={beyond.heading} description={beyond.introduction} />
        </Container>
      </section>
      <section aria-labelledby="fitness-heading" className={`${styles["editorial-section"]} ${styles["pillar-section"]}`}>
        <Container><PillarPreview id="fitness-heading" content={content.fitness} href={localizedPath(locale, "fitness")} /></Container>
      </section>
      <section aria-labelledby="creative-heading" className={`${styles["editorial-section"]} ${styles["pillar-section"]}`}>
        <Container><PillarPreview id="creative-heading" content={content.creative} href={localizedPath(locale, "creative")} reverse /></Container>
      </section>

      <section aria-labelledby="contact-heading" className={`${styles["editorial-section"]} ${styles["contact-section"]}`}>
        <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <SectionHeading id="contact-heading" eyebrow={contact.eyebrow} heading={contact.heading} />
          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-secondary">{contact.description}</p>
            <div className="mt-8"><EditorialLink href={localizedPath(locale, "contact")} filled>{contact.link}</EditorialLink></div>
          </div>
        </Container>
      </section>
    </>
  );
}
