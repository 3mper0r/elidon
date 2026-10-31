import { getHomepageContent } from "@/content/homepage";
import { getLocale } from "@/lib/i18n/dictionaries";
import { localizedPath } from "@/lib/i18n/locales";
import { Container } from "./container";
import { EditorialLink } from "./editorial/editorial-link";
import { Media } from "./editorial/media";
import { SectionHeading } from "./editorial/section-heading";
import styles from "./editorial/editorial.module.css";

export async function Homepage() {
  const { hero, work, expertise, experience, about, contact } = await getHomepageContent();
  const locale = await getLocale();
  return (
    <>
      <section aria-labelledby="hero-heading" className={styles["hero-section"]}>
        <Container className={styles["hero-grid"]}>
          <div className={styles["hero-copy"]}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 id="hero-heading" className={styles["hero-heading"]}>
              <span>{hero.heading[0]}</span><span className="text-secondary">{hero.heading[1]}</span>
            </h1>
            <div className={styles["hero-support"]}>
              <p className={styles["hero-introduction"]}>{hero.introduction}</p>
              <div className={styles["hero-actions"]}>
                <EditorialLink href="#work" filled>{hero.primaryLink}</EditorialLink>
                <EditorialLink href="#about">{hero.secondaryLink}</EditorialLink>
              </div>
            </div>
          </div>
          <div className={styles["hero-innovation"]} aria-label="Engineering, AI, scalability and continuous improvement">
            <div className={styles["innovation-orbit"]} aria-hidden="true" />
            <div className={styles["innovation-globe"]} aria-hidden="true" />
            <div className={styles["innovation-cards"]}>
              {[
                { symbol: "</>", label: "Build" },
                { symbol: "AI", label: "AI" },
                { symbol: "◇", label: "Scale" },
                { symbol: "↗", label: "Improve" },
              ].map((item, index) => (
                <div key={item.label} className={styles["innovation-card"]} style={{ "--card-index": index } as React.CSSProperties}>
                  <span className={styles["innovation-symbol"]} aria-hidden="true">{item.symbol}</span>
                  <span className={styles["innovation-label"]}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <a href="#work" className={`${styles["hero-scroll"]} ${styles.eyebrow}`}><span aria-hidden="true">↓</span> {hero.scrollLink}</a>
        </Container>
      </section>
      <section id="work" aria-labelledby="work-heading" className={`${styles["editorial-section"]} ${styles["engineering-section"]}`}>
        <Container>
          <SectionHeading id="work-heading" eyebrow={work.eyebrow} heading={work.heading} description={work.introduction} />
          <p className="mt-8 text-sm text-secondary">{work.status}</p>
          <div className={styles["project-grid"]}>
            {work.projects.map((project) => (
              <article key={project.id} aria-labelledby={`project-${project.id}`} className={styles["project-preview"]}>
                <Media media={project.media} />
                <div className={styles["project-copy"]}>
                  <span className="pt-1 text-sm text-secondary" aria-hidden="true">{project.id}</span>
                  <div>
                    <h3 id={`project-${project.id}`} className="text-xl font-medium tracking-tight sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-secondary">{project.description}</p>
                    <dl className="mt-6 grid gap-4 text-sm leading-relaxed">
                      <div><dt>{work.roleLabel}</dt><dd className="mt-1 text-secondary">{project.role}</dd></div>
                      <div><dt>{work.technologyLabel}</dt><dd className="mt-1 text-secondary">{project.technologies}</dd></div>
                    </dl>
                    <div className="mt-6"><EditorialLink href={`/${locale}/work/${project.slug}`}>{work.detailLink}<span className="sr-only"> — {project.title}</span></EditorialLink></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="expertise" aria-labelledby="expertise-heading" className={styles["editorial-section"]}>
        <Container>
          <SectionHeading id="expertise-heading" eyebrow={expertise.eyebrow} heading={expertise.heading} description={expertise.introduction} />
          <div className={styles["engineering-details"]}>
            {expertise.details.map((detail) => (
              <article key={detail.title} className={styles["detail-panel"]}>
                <h3 className={styles["detail-title"]}>{detail.title}</h3>
                <p className={styles["detail-description"]}>{detail.description}</p>
                <ul className={styles["detail-list"]}>{detail.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="experience" aria-labelledby="experience-heading" className={styles["editorial-section"]}>
        <Container>
          <SectionHeading id="experience-heading" eyebrow={experience.eyebrow} heading={experience.heading} description={experience.introduction} />
          <div className={styles["engineering-details"]}>
            {experience.entries.map((entry) => (
              <article key={entry.title} className={styles["detail-panel"]}>
                <p className={styles.eyebrow}>{entry.period}</p>
                <h3 className={styles["detail-title"]}>{entry.title}</h3>
                <p className={styles["detail-description"]}>{entry.description}</p>
                <ul className={styles["detail-list"]}>{entry.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="about" aria-labelledby="about-heading" className={styles["editorial-section"]}>
        <Container><SectionHeading id="about-heading" eyebrow={about.eyebrow} heading={about.heading} description={about.introduction} /></Container>
      </section>
      <section id="contact" aria-labelledby="contact-heading" className={`${styles["editorial-section"]} ${styles["contact-section"]}`}>
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
