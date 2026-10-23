import type { Lang } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const copy: Record<Lang, { label: string; title: string; steps: { title: string; description: string }[] }> = {
  es: {
    label: "Proceso",
    title: "Un proceso claro, sin sorpresas.",
    steps: [
      {
        title: "Descubrimiento",
        description: "Entendemos tu negocio, tus clientes y los objetivos que debe cumplir el proyecto.",
      },
      {
        title: "Diseño",
        description: "Estructura, contenido y diseño visual aprobados por ti antes de escribir código.",
      },
      {
        title: "Desarrollo",
        description: "Construcción con tecnologías modernas y avances visibles en cada etapa.",
      },
      {
        title: "Lanzamiento y soporte",
        description: "Publicación, medición y acompañamiento para que el proyecto siga creciendo.",
      },
    ],
  },
  en: {
    label: "Process",
    title: "A clear process, no surprises.",
    steps: [
      {
        title: "Discovery",
        description: "We get to know your business, your customers, and the goals the project must hit.",
      },
      {
        title: "Design",
        description: "Structure, content, and visual design approved by you before any code is written.",
      },
      {
        title: "Development",
        description: "Built with modern technology, with visible progress at every stage.",
      },
      {
        title: "Launch & support",
        description: "Go-live, measurement, and ongoing support so the project keeps growing.",
      },
    ],
  },
};

export default function Process({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader index="03" label={c.label} title={c.title} />
        </Reveal>

        <ol className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:mt-16 lg:grid-cols-4">
          {c.steps.map((step, i) => (
            <li key={step.title} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <Reveal delay={i * 100} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 transition-colors duration-500 hover:border-line-strong md:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[11px] text-subtle">
                      {String(i + 1).padStart(2, "0")}/{String(c.steps.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-14 text-xl font-medium tracking-tight md:mt-20">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
