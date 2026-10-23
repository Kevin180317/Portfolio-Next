import { testimonialsEN, testimonialsES } from "@/app/data/testimonials";
import type { Lang } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import TestimonialCard from "@/components/TestimonialCard";

const copy = {
  es: {
    label: "Testimonios",
    title: "Lo que dicen quienes confiaron en mi trabajo.",
    reviews: "reseñas",
    rating: "calificación promedio",
  },
  en: {
    label: "Testimonials",
    title: "What people who trusted my work say.",
    reviews: "reviews",
    rating: "average rating",
  },
};

export default function TestimonialsPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const items = lang === "en" ? testimonialsEN : testimonialsES;
  const [featured, ...rest] = items;
  const avg = items.reduce((sum, t) => sum + t.rating, 0) / Math.max(items.length, 1);

  return (
    <main id="main" className="pt-12 md:pt-20">
      <Container>
        <SectionHeader
          as="h1"
          label={c.label}
          title={c.title}
          action={
            <dl className="flex gap-10">
              <div className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted">{c.reviews}</dt>
                <dd className="text-4xl font-medium tracking-tight">{items.length}</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted">{c.rating}</dt>
                <dd className="text-4xl font-medium tracking-tight">{avg.toFixed(1)}</dd>
              </div>
            </dl>
          }
        />

        {featured && (
          <Reveal className="mt-16">
            <TestimonialCard testimonial={featured} large />
          </Reveal>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 100} className="h-full">
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
