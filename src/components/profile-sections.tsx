import type { HomepageContent } from "@/content/homepage/types";
import { Container } from "./container";
import { EditorialLink } from "./editorial/editorial-link";
import { SectionHeading } from "./editorial/section-heading";
import { TechnologyStack } from "./technology-stack";
import styles from "./editorial/editorial.module.css";

export function AboutSection({ content }: { content: HomepageContent["about"] }) {
  return <section id="about" aria-labelledby="about-heading" className={styles["editorial-section"]}>
    <Container>
      <SectionHeading id="about-heading" eyebrow={content.eyebrow} heading={content.heading} description={content.introduction} />
      <p className="mt-6 max-w-2xl leading-relaxed text-secondary">{content.availability}</p>
      <TechnologyStack label={content.technologyLabel} />
    </Container>
  </section>;
}

export function ContactSection({ content }: { content: HomepageContent["contact"] }) {
  return <section id="contact" aria-labelledby="contact-heading" className={`${styles["editorial-section"]} ${styles["contact-section"]}`}>
    <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
      <SectionHeading id="contact-heading" eyebrow={content.eyebrow} heading={content.heading} />
      <div className="lg:pb-2">
        <p className="max-w-md text-lg leading-relaxed text-secondary">{content.description}</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <EditorialLink href={`mailto:${content.email}`} filled>{content.email}</EditorialLink>
          <EditorialLink href="https://www.linkedin.com/in/elidonmorina">LinkedIn</EditorialLink>
        </div>
      </div>
    </Container>
  </section>;
}
