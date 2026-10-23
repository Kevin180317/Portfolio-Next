import Image from "next/image";
import Link from "next/link";
import {
  categoryLabels,
  kindLabels,
  projectName,
  projects,
  type Lang,
  type Project,
} from "@/app/data/projects";
import { localePath } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TechBadge from "@/components/ui/TechBadge";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

const copy = {
  es: {
    back: "Todo el trabajo",
    industry: "Industria",
    services: "Servicio",
    stack: "Tecnologías",
    site: "Sitio",
    visit: "Visitar sitio",
    overview: "Resumen del proyecto",
    next: "Siguiente proyecto",
  },
  en: {
    back: "All work",
    industry: "Industry",
    services: "Service",
    stack: "Stack",
    site: "Website",
    visit: "Visit website",
    overview: "Project overview",
    next: "Next project",
  },
};

export default function ProjectDetail({ project, lang }: { project: Project; lang: Lang }) {
  const c = copy[lang];
  const name = projectName(project, lang);
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const host = project.url?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description: project.description[lang],
    url: `https://okhuysen.dev${localePath(lang, `/projects/${project.slug}`)}`,
    ...(project.image && { image: `https://okhuysen.dev${project.image}` }),
    ...(project.url && { sameAs: project.url }),
    genre: categoryLabels[project.category][lang],
    keywords: project.tech.map((t) => t.name).join(", "),
    creator: { "@type": "Person", name: "Kevin Okhuysen", url: "https://okhuysen.dev" },
  };

  return (
    <main id="main" className="pt-10 md:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <Container>
        <Link
          href={localePath(lang, "/projects")}
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {c.back}
        </Link>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <Eyebrow>
              <span className="text-accent">{categoryLabels[project.category][lang]}</span>
              {" · "}
              {project.kind.map((k) => kindLabels[k][lang]).join(" · ")}
            </Eyebrow>
            <h1 className="mt-5 text-[clamp(2.75rem,11vw,6rem)] font-medium leading-[1] tracking-tight text-balance">
              <RevealText text={name} stagger={0.06} />
            </h1>
          </div>
          <Reveal delay={300} y={16} className="flex items-end md:col-span-4 md:justify-end">
            {project.url && (
              <Button href={project.url} external className="w-full sm:w-auto">
                {c.visit}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            )}
          </Reveal>
        </div>
      </Container>

      {project.image && (
        <Container className="mt-14 md:mt-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface sm:aspect-[16/10]">
              <Image
                src={project.image}
                alt={name}
                fill
                priority
                sizes="(min-width: 1280px) 1184px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </Container>
      )}

      <Container className="mt-16 md:mt-24">
        <Reveal className="grid gap-12 border-t border-line pt-10 md:grid-cols-12">
          <dl className="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-1 md:content-start">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{c.industry}</dt>
              <dd className="mt-2">{categoryLabels[project.category][lang]}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{c.services}</dt>
              <dd className="mt-2">{project.kind.map((k) => kindLabels[k][lang]).join(", ")}</dd>
            </div>
            {project.url && host && (
              <div className="col-span-2 md:col-span-1">
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{c.site}</dt>
                <dd className="mt-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 break-all underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {host}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </dd>
              </div>
            )}
          </dl>

          <div className="md:col-span-8">
            <Eyebrow>{c.overview}</Eyebrow>
            <p className="mt-5 text-2xl leading-snug tracking-tight text-pretty md:text-3xl">
              {project.description[lang]}
            </p>

            <div className="mt-12">
              <Eyebrow>{c.stack}</Eyebrow>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechBadge key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-24 md:mt-32">
        <Link
          href={localePath(lang, `/projects/${next.slug}`)}
          className="group grid items-center gap-8 border-t border-line pt-10 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <Eyebrow>{c.next}</Eyebrow>
            <p className="mt-4 flex items-center gap-4 text-4xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-6xl">
              {projectName(next, lang)}
              <ArrowRight className="h-8 w-8 shrink-0 transition-transform duration-500 group-hover:translate-x-2 md:h-10 md:w-10" />
            </p>
          </div>
          {next.image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-line bg-surface md:col-span-7">
              <Image
                src={next.image}
                alt=""
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover object-top opacity-70 transition-all duration-700 ease-out-expo group-hover:scale-[1.03] group-hover:opacity-100"
              />
            </div>
          )}
        </Link>
      </Container>
    </main>
  );
}
