import { testimonialsEN, testimonialsES } from "@/app/data/testimonials";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import TestimonialCard from "@/components/TestimonialCard";

const copy = {
  es: {
    label: "Testimonios",
    title: "Clientes que volverían a trabajar conmigo.",
    all: "Ver todos",
  },
  en: {
    label: "Testimonials",
    title: "Clients who would work with me again.",
    all: "View all",
  },
};

export default function Testimonials({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const items = (lang === "en" ? testimonialsEN : testimonialsES).slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            index="04"
            label={c.label}
            title={c.title}
            action={
              <Button href={localePath(lang, "/testimonials")} variant="secondary">
                {c.all}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            }
          />
        </Reveal>

        <ul className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 md:mt-16 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0">
          {items.map((t, i) => (
            <li key={t.id} className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-auto">
              <Reveal delay={i * 100} className="h-full">
                <TestimonialCard testimonial={t} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
