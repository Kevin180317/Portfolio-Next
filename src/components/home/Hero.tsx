import {
  categoryLabels,
  categoryOrder,
  getProject,
  projectName,
  projects,
} from "@/app/data/projects";
import { testimonialsES } from "@/app/data/testimonials";
import { localePath, yearsOfExperience, type Lang } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import Counter from "@/components/ui/Counter";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import HeroFan, { type FanItem } from "./HeroFan";
import RotatingWords from "./RotatingWords";
import HeroBackground from "./HeroBackground";

// Proyectos que aparecen en el abanico del hero
const FAN_SLUGS = ["doctorlumban", "excellentiafoods", "palmasrecovery", "enriqueciapara"];

const copy = {
  es: {
    available: "Disponible para nuevos proyectos",
    location: "Tijuana, MX — Remoto",
    lead: "Sitios web y apps que",
    words: ["atraen pacientes.", "venden más.", "ganan clientes.", "crecen contigo."],
    seoTitle: "Sitios web y apps que hacen crecer tu negocio",
    intro:
      "Soy Kevin Okhuysen, desarrollador full stack. Diseño y construyo sitios, web apps y apps móviles rápidos y medibles, con experiencia especial en el sector médico y dental.",
    primary: "Hablemos de tu proyecto",
    secondary: "Ver trabajo",
    fan: "Proyectos destacados",
    stats: ["Proyectos entregados", "Años de experiencia", "Industrias atendidas", "Calificación de clientes"],
  },
  en: {
    available: "Available for new projects",
    location: "Tijuana, MX — Remote",
    lead: "Websites and apps that",
    words: ["attract patients.", "sell more.", "win customers.", "grow with you."],
    seoTitle: "Websites and apps that grow your business",
    intro:
      "I'm Kevin Okhuysen, a full stack developer. I design and build fast, measurable websites, web apps, and mobile apps — with deep experience in the medical and dental sector.",
    primary: "Tell me about your project",
    secondary: "View work",
    fan: "Featured projects",
    stats: ["Projects delivered", "Years of experience", "Industries served", "Client rating"],
  },
};

// Bordes de la grilla de stats: 2 columnas en móvil, 4 en desktop
const statBorders = [
  "",
  "border-l border-line pl-5 md:pl-8",
  "border-t border-line md:border-l md:border-t-0 md:pl-8",
  "border-l border-t border-line pl-5 md:border-t-0 md:pl-8",
];

export default function Hero({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const industries = categoryOrder.filter((cat) => projects.some((p) => p.category === cat)).length;
  const rating =
    testimonialsES.reduce((sum, t) => sum + t.rating, 0) / Math.max(testimonialsES.length, 1);

  const stats = [`${projects.length}+`, `${yearsOfExperience()}+`, String(industries), rating.toFixed(1)];

  const fanItems: FanItem[] = FAN_SLUGS.map(getProject)
    .filter((p) => p?.image)
    .map((p) => ({
      slug: p!.slug,
      name: projectName(p!, lang),
      category: categoryLabels[p!.category][lang],
      image: p!.image!,
      host: p!.url?.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: localePath(lang, `/projects/${p!.slug}`),
    }));

  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <Container className="relative pb-14 pt-10 md:pb-20 md:pt-16 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:text-xs">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {c.available}
                </span>
                <span className="text-subtle">{c.location}</span>
              </div>
            </Reveal>

            <h1 className="mt-8 text-[clamp(2.5rem,10.5vw,4.5rem)] lg:text-[clamp(3.5rem,6.4vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.04em] md:mt-10">
              <span className="sr-only">{c.seoTitle}</span>
              <span aria-hidden="true" className="block">
                <RevealText text={c.lead} stagger={0.06} />
                <span className="mt-1 block text-[0.82em] text-accent">
                  <RotatingWords words={c.words} />
                </span>
              </span>
            </h1>

            <Reveal delay={350}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:mt-10 md:text-xl">
                {c.intro}
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row md:mt-10">
                <Button href={localePath(lang, "/contact")} className="w-full sm:w-auto">
                  {c.primary}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
                <Button href={localePath(lang, "/projects")} variant="secondary" className="w-full sm:w-auto">
                  {c.secondary}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250} y={48} className="lg:col-span-5">
            <HeroFan items={fanItems} label={c.fan} />
          </Reveal>
        </div>
      </Container>

      <Container className="relative">
        <Reveal delay={150}>
          <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
            {stats.map((value, i) => (
              <div
                key={c.stats[i]}
                className={`flex flex-col-reverse py-7 md:py-10 ${statBorders[i]}`}
              >
                <dt className="mt-2 text-xs text-muted md:text-sm">{c.stats[i]}</dt>
                <dd className="text-4xl font-medium tracking-tight md:text-5xl">
                  <Counter value={value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
