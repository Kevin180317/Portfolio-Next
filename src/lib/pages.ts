import type { Lang } from "@/lib/i18n";

/** Títulos y descripciones SEO de las páginas estáticas. */
export const pageSeo = {
  projects: {
    es: {
      title: "Trabajo",
      description:
        "Proyectos de Kevin Okhuysen: sitios web, web apps y apps móviles para el sector médico, dental, industrial, consultoría y comercio.",
    },
    en: {
      title: "Work",
      description:
        "Projects by Kevin Okhuysen: websites, web apps, and mobile apps for medical, dental, industrial, consulting, and commerce clients.",
    },
  },
  contact: {
    es: {
      title: "Contacto",
      description: "Cuéntame sobre tu proyecto: sitio web, web app o app móvil. Desarrollo full stack en Tijuana y remoto.",
    },
    en: {
      title: "Contact",
      description: "Tell me about your project: website, web app, or mobile app. Full stack development in Tijuana and remote.",
    },
  },
  experience: {
    es: {
      title: "Experiencia",
      description: "Experiencia profesional, educación, certificaciones y stack técnico de Kevin Okhuysen, desarrollador full stack.",
    },
    en: {
      title: "Experience",
      description: "Professional experience, education, certifications, and tech stack of Kevin Okhuysen, full stack developer.",
    },
  },
  testimonials: {
    es: {
      title: "Testimonios",
      description: "Opiniones reales de clientes que trabajaron con Kevin Okhuysen en sitios web y sistemas a la medida.",
    },
    en: {
      title: "Testimonials",
      description: "Real reviews from clients who worked with Kevin Okhuysen on websites and custom systems.",
    },
  },
} satisfies Record<string, Record<Lang, { title: string; description: string }>>;
