import { getHomepageContent } from "@/content/homepage";
import { getLocale } from "@/lib/i18n/dictionaries";
import { AboutSection, ContactSection } from "./profile-sections";
import { EngineeringIcon, HeroArt } from "./hero-art";
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
              <span>{hero.heading[0]}</span><span>{hero.heading[1]}</span>
            </h1>
            <div className={styles["hero-support"]}>
              <p className={styles["hero-introduction"]}>{hero.introduction}</p>
              <div className={styles["hero-actions"]}>
                <EditorialLink href="#work" filled>{hero.primaryLink}</EditorialLink>
                <EditorialLink href="#about">{hero.secondaryLink}</EditorialLink>
              </div>
            </div>
          </div>
          <div className={styles["hero-innovation"]}><HeroArt /></div>
        </Container>
        <svg className={styles["hero-landscape"]} viewBox="0 0 1440 210" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="land-fill" x2="0" y2="1"><stop stopColor="#4a7034" stopOpacity=".5" /><stop offset="1" stopColor="#091b14" /></linearGradient>
            <linearGradient id="land-edge"><stop stopColor="#e3f69b" /><stop offset=".35" stopColor="#759450" stopOpacity=".15" /><stop offset="1" stopColor="#d4e69a" stopOpacity=".7" /></linearGradient>
          </defs>
          <path d="M0 145C160 80 233 186 421 147S674 67 822 111s224 12 364-55S1368 1 1440 5V210H0Z" fill="url(#land-fill)" stroke="url(#land-edge)" />
          <path d="M785 210c255-17 360-137 655-205v205Z" fill="url(#land-fill)" />
        </svg>
        <Container className={styles["hero-services"]}>
          {[
            { icon: "Build", en: "Fullstack Development", de: "Fullstack Entwicklung" },
            { icon: "Scale", en: "Product Engineering", de: "Produktentwicklung" },
            { icon: "Architecture", en: "System Architecture", de: "Systemarchitektur" },
            { icon: "Performance", en: "Performance & Scale", de: "Performance & Skalierung" },
          ].map((service) => <div key={service.icon} className={styles["hero-service"]}><EngineeringIcon kind={service.icon} /><span>{locale === "de" ? service.de : service.en}</span></div>)}
        </Container>
      </section>
      <section id="work" aria-labelledby="work-heading" className={`${styles["editorial-section"]} ${styles["engineering-section"]}`}>
        <Container>
          <SectionHeading id="work-heading" eyebrow={work.eyebrow} heading={work.heading} description={work.introduction} />
          <p className="mt-8 text-sm text-secondary">{work.status}</p>
          <div className={styles["project-grid"]}>
            {work.projects.map((project) => (
              <article key={project.id} aria-labelledby={`project-${project.id}`} className={styles["project-preview"]}>
                {project.media?.image && <Media media={project.media} />}
                <div className={styles["project-copy"]}>
                  <span className="pt-1 text-sm text-secondary" aria-hidden="true">{project.id}</span>
                  <div>
                    <h3 id={`project-${project.id}`} className="text-xl font-medium tracking-tight sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-secondary">{project.description}</p>
                    <dl className="mt-6 grid gap-4 text-sm leading-relaxed">
                      <div><dt>{work.roleLabel}</dt><dd className="mt-1 text-secondary">{project.role}</dd></div>
                      <div><dt>{work.technologyLabel}</dt><dd className="mt-1 text-secondary">{project.technologies}</dd></div>
                    </dl>
                    {project.caseStudy && <div className="mt-6"><EditorialLink href={`/${locale}/work/${project.slug}`}>{work.detailLink}<span className="sr-only"> — {project.title}</span></EditorialLink></div>}
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
                {entry.period && <p className={styles.eyebrow}>{entry.period}</p>}
                <h3 className={styles["detail-title"]}>{entry.title}</h3>
                <p className={styles["detail-description"]}>{entry.description}</p>
                <ul className={styles["detail-list"]}>{entry.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <AboutSection content={about} />
      <ContactSection content={contact} />
    </>
  );
}
