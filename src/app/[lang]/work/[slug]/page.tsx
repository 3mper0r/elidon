import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHomepageContent } from "@/content/homepage";
import { getLocale } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/container";
import { Media } from "@/components/editorial/media";
import { EditorialLink } from "@/components/editorial/editorial-link";
import styles from "@/components/editorial/editorial.module.css";

export const dynamicParams = false;

export async function generateStaticParams({ params }: { params: { lang: string } }) {
  const { work } = await getHomepageContent(params.lang);
  return work.projects.map(({ slug }) => ({ slug }));
}

async function getProject(slug: string, locale: string) {
  const { work } = await getHomepageContent(locale);
  const project = work.projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return { work, project };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { slug, lang } = await params;
  const { project } = await getProject(slug, lang);
  const locale = await getLocale(lang);
  const path = `/${locale}/work/${slug}`;
  return {
    title: `${project.title} | Elidon`,
    description: project.description,
    robots: { index: Boolean(project.caseStudy), follow: true },
    alternates: { canonical: path, languages: { en: `/en/work/${slug}`, de: `/de/work/${slug}`, "x-default": `/en/work/${slug}` } },
    openGraph: { title: `${project.title} | Elidon`, description: project.description, url: path, type: "article", locale: locale === "en" ? "en_US" : "de_DE" },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { slug, lang } = await params;
  const { work, project } = await getProject(slug, lang);
  const locale = await getLocale(lang);
  return (
    <Container className="py-20 sm:py-28 lg:py-36">
      <p className={styles.eyebrow}>{work.status}</p>
      <h1 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight sm:text-6xl">{project.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary">{project.description}</p>
      {project.media?.image && <div className="mt-12 max-w-4xl"><Media media={project.media} /></div>}
      <dl className="my-12 grid gap-8 sm:grid-cols-2">
        {[[work.roleLabel, project.role], [work.technologyLabel, project.technologies], [work.outcomeLabel, project.outcome]].filter(([, value]) => value).map(([label, value]) => (
          <div key={label} className={styles["detail-panel"]}><dt className="text-xl">{label}</dt><dd className={styles["detail-description"]}>{value}</dd></div>
        ))}
      </dl>
      {project.caseStudy && <div className="my-16 grid max-w-3xl gap-12">
        {project.caseStudy.map((section) => <section key={section.heading}>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{section.heading}</h2>
          <p className="mt-5 leading-relaxed text-secondary sm:text-lg">{section.body}</p>
        </section>)}
      </div>}
      <EditorialLink href={`/${locale}#work`}>{work.backLink}</EditorialLink>
    </Container>
  );
}
