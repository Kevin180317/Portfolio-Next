import { experienceEN, experienceES } from "@/app/data/experience";
import type { Lang } from "@/lib/i18n";
import { stackGroups } from "@/app/data/stack";
import { yearsOfExperience } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionHeader, { Eyebrow } from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { FileText } from "@/components/ui/Icons";
import Certifications from "@/components/Certifications";

const copy = {
  es: {
    label: "Experiencia",
    title: (y: number) => `${y}+ años diseñando y desarrollando para negocios reales.`,
    cv: "Descargar CV",
    work: "Experiencia profesional",
    education: "Educación",
    stack: "Stack técnico",
  },
  en: {
    label: "Experience",
    title: (y: number) => `${y}+ years designing and building for real businesses.`,
    cv: "Download CV",
    work: "Professional experience",
    education: "Education",
    stack: "Tech stack",
  },
};

function Row({
  period,
  title,
  org,
  points,
}: {
  period: string;
  title: string;
  org: string;
  points: string[];
}) {
  return (
    <Reveal>
      <article className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle md:col-span-3 md:pt-1.5">
          {period || "—"}
        </p>
        <div className="md:col-span-4">
          <h3 className="text-xl font-medium tracking-tight md:text-2xl">{title}</h3>
          <p className="mt-1 text-accent">{org}</p>
        </div>
        <ul className="space-y-2 text-muted md:col-span-5">
          {points.map((point) => (
            <li key={point} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function ExperiencePage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const data = lang === "en" ? experienceEN : experienceES;

  return (
    <main id="main" className="pt-12 md:pt-20">
      <Container>
        <SectionHeader
          as="h1"
          label={c.label}
          title={c.title(yearsOfExperience())}
          action={
            <Button href="/cv.pdf" external variant="secondary">
              <FileText />
              {c.cv}
            </Button>
          }
        />

        <section className="mt-20">
          <Eyebrow>{c.work}</Eyebrow>
          <div className="mt-6 border-b border-line">
            {data.professionalExperience.map((item) => (
              <Row
                key={item.title + item.company}
                period={item.period}
                title={item.title}
                org={item.company}
                points={item.responsibilities}
              />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <Eyebrow>{c.education}</Eyebrow>
          <div className="mt-6 border-b border-line">
            {data.education.map((item) => (
              <Row
                key={item.degree}
                period={item.period}
                title={item.degree}
                org={item.institution}
                points={item.details}
              />
            ))}
          </div>
        </section>

        <Certifications lang={lang} />

        <section className="mt-20">
          <Eyebrow>{c.stack}</Eyebrow>
          <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {stackGroups.map((group) => (
              <div key={group.label.en} className="bg-bg p-6">
                <p className="text-sm text-muted">{group.label[lang]}</p>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-2.5 text-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/icons/${item.icon}.svg`} alt="" width={16} height={16} className="h-4 w-4" loading="lazy" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
