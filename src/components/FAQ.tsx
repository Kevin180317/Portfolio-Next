"use client";

import React, { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqsES: FaqItem[] = [
  {
    question: "¿Qué hace Kevin Okhuysen?",
    answer:
      "Es desarrollador Full Stack en Tijuana, Baja California, especializado en crear sitios web y aplicaciones móviles de alto impacto para el sector salud, startups y negocios locales.",
  },
  {
    question: "¿Con qué tecnologías trabaja?",
    answer:
      "Astro, Next.js, React, Tailwind CSS, Node.js, Express, Python, Kotlin, MySQL, Firebase, Supabase, Stripe y Android Studio, entre otras herramientas de su stack.",
  },
  {
    question: "¿Dónde está ubicado?",
    answer: "En Tijuana, Baja California, México.",
  },
  {
    question: "¿Qué tipo de proyectos ha desarrollado?",
    answer:
      "Landing pages, sistemas administrativos, apps móviles y plataformas web, tanto para clientes freelance como para Prometheus y Ecommetrica, incluyendo varios proyectos del sector médico y dental.",
  },
  {
    question: "¿Cómo puedo contactarlo?",
    answer:
      "A través del formulario en la página de contacto o por correo a okhuysen.dev@gmail.com.",
  },
];

const faqsEN: FaqItem[] = [
  {
    question: "What does Kevin Okhuysen do?",
    answer:
      "He's a Full Stack Developer based in Tijuana, Baja California, specialized in building high-impact websites and mobile apps for the healthcare sector, startups, and local businesses.",
  },
  {
    question: "What technologies does he work with?",
    answer:
      "Astro, Next.js, React, Tailwind CSS, Node.js, Express, Python, Kotlin, MySQL, Firebase, Supabase, Stripe, and Android Studio, among other tools in his stack.",
  },
  {
    question: "Where is he located?",
    answer: "In Tijuana, Baja California, Mexico.",
  },
  {
    question: "What kind of projects has he built?",
    answer:
      "Landing pages, admin systems, mobile apps, and web platforms for freelance clients as well as for Prometheus and Ecommetrica, including several healthcare and dental projects.",
  },
  {
    question: "How can I get in touch?",
    answer: "Through the contact form on the contact page, or by email at okhuysen.dev@gmail.com.",
  },
];

function FAQ() {
  const { Lang } = useLanguage();
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = Lang ? faqsEN : faqsES;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      ref={ref}
      className={`py-16 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">
          {Lang ? "Frequently asked questions" : "Preguntas frecuentes"}
        </h2>

        <div className="divide-y divide-gray-800 border-t border-b border-gray-800">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-orange-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed overflow-hidden">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
