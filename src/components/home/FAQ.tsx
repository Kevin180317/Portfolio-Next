import type { Lang } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { Plus } from "@/components/ui/Icons";

interface FaqItem {
  question: string;
  answer: string;
}

const copy: Record<Lang, { label: string; title: string; items: FaqItem[] }> = {
  es: {
    label: "Preguntas frecuentes",
    title: "Lo que suelen preguntarme.",
    items: [
      {
        question: "¿Qué hace Kevin Okhuysen?",
        answer:
          "Es desarrollador Full Stack en Tijuana, Baja California, especializado en crear sitios web, web apps y aplicaciones móviles de alto impacto para el sector salud, dental, industrial y negocios de servicios.",
      },
      {
        question: "¿Qué tipo de proyectos desarrollas?",
        answer:
          "Landing pages, sitios corporativos, sistemas administrativos, dashboards, e-commerce con Stripe y apps móviles Android/iOS, tanto para clientes freelance como para estudios como Ecommetrica y Prometheus.",
      },
      {
        question: "¿Trabajas con clientes fuera de Tijuana?",
        answer:
          "Sí. Trabajo de forma remota con clientes en México y Estados Unidos, en español o inglés, y entrego sitios bilingües cuando el negocio lo necesita.",
      },
      {
        question: "¿Con qué tecnologías trabajas?",
        answer:
          "Astro, Next.js, React, Tailwind CSS, Node.js, Express, Python, Kotlin, Swift, MySQL, Firebase, Supabase y Stripe, entre otras.",
      },
      {
        question: "¿Cómo empezamos?",
        answer: `Escríbeme desde la página de contacto o a ${CONTACT_EMAIL} con una breve descripción de tu negocio y lo que necesitas. Te respondo con los siguientes pasos.`,
      },
    ],
  },
  en: {
    label: "FAQ",
    title: "What clients usually ask.",
    items: [
      {
        question: "What does Kevin Okhuysen do?",
        answer:
          "He's a Full Stack Developer based in Tijuana, Baja California, specialized in building high-impact websites, web apps, and mobile apps for healthcare, dental, industrial, and service businesses.",
      },
      {
        question: "What kind of projects do you build?",
        answer:
          "Landing pages, corporate websites, admin systems, dashboards, Stripe-powered e-commerce, and Android/iOS mobile apps — for freelance clients as well as studios like Ecommetrica and Prometheus.",
      },
      {
        question: "Do you work with clients outside Tijuana?",
        answer:
          "Yes. I work remotely with clients in Mexico and the United States, in English or Spanish, and deliver bilingual websites when the business needs it.",
      },
      {
        question: "What technologies do you work with?",
        answer:
          "Astro, Next.js, React, Tailwind CSS, Node.js, Express, Python, Kotlin, Swift, MySQL, Firebase, Supabase, and Stripe, among others.",
      },
      {
        question: "How do we get started?",
        answer: `Reach out through the contact page or at ${CONTACT_EMAIL} with a short description of your business and what you need. I'll reply with next steps.`,
      },
    ],
  },
};

export default function FAQ({ lang }: { lang: Lang }) {
  const c = copy[lang];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <SectionHeader index="06" label={c.label} title={c.title} />
          </Reveal>

          <Reveal className="md:col-span-7">
            <div className="divide-y divide-line border-y border-line">
              {c.items.map((item, i) => (
                <details key={item.question} className="group" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-tight transition-colors hover:text-accent">
                    {item.question}
                    <Plus className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
