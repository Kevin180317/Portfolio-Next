import { experienceEN, experienceES } from "@/app/data/experience";
import type { Lang } from "@/lib/i18n";
import { localePath, yearsOfExperience } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, FileText } from "@/components/ui/Icons";
import { stackGroups } from "@/app/data/stack";

const copy = {
  es: {
    label: "Sobre mí",
    title: (years: number) => `${years}+ años construyendo productos digitales.`,
    body: [
      "Trabajo directamente con dueños de negocio, médicos y equipos pequeños. Sin intermediarios: hablas con quien diseña y programa tu proyecto.",
      "Actualmente desarrollo para Ecommetrica, un estudio de desarrollo web en Tijuana y San Diego, y tomo proyectos freelance seleccionados.",
    ],
    experience: "Experiencia",
    stack: "Stack",
    more: "Ver experiencia completa",
    cv: "Descargar CV",
  },
  en: {
    label: "About",
    title: (years: number) => `${years}+ years building digital products.`,
    body: [
      "I work directly with business owners, doctors, and small teams. No middlemen: you talk to the person who designs and codes your project.",
      "I currently build for Ecommetrica, a web development studio in Tijuana and San Diego, and take on select freelance projects.",
    ],
    experience: "Experience",
    stack: "Stack",
    more: "Full experience",
    cv: "Download CV",
  },
};

export default function About({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const data = lang === "en" ? experienceEN : experienceES;

  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader index="05" label={c.label} title={c.title(yearsOfExperience())} />
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {c.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={localePath(lang, "/experience")} variant="secondary">
                {c.more}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/cv.pdf" external variant="secondary">
                <FileText />
                {c.cv}
              </Button>
            </div>
          </Reveal>

          <div className="space-y-14 md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{c.experience}</p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {data.professionalExperience.map((item) => (
                  <li key={item.title + item.company} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span>
                      <span className="font-medium">{item.title}</span>
                      <span className="text-muted"> — {item.company}</span>
                    </span>
                    {item.period && (
                      <span className="shrink-0 font-mono text-xs text-subtle">{item.period}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{c.stack}</p>
              <dl className="mt-5 divide-y divide-line border-y border-line">
                {stackGroups.map((group) => (
                  <div key={group.label.en} className="grid gap-2 py-5 sm:grid-cols-3">
                    <dt className="text-sm text-muted">{group.label[lang]}</dt>
                    <dd className="flex flex-wrap gap-x-4 gap-y-2 sm:col-span-2">
                      {group.items.map((item) => (
                        <span key={item.name} className="inline-flex items-center gap-2 text-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/icons/${item.icon}.svg`}
                            alt=""
                            width={14}
                            height={14}
                            className="h-3.5 w-3.5"
                            loading="lazy"
                          />
                          {item.name}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
