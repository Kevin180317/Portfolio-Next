interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: Technology[];
  link: string;
}

const projectsES: Project[] = [
  {
    id: 1,
    name: "Macoti",
    description:
      "Landing Page enfocado en una empresa dedicada el desarrollo con el uso de herramientas CNC",
    technologies: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    link: "/macoti",
  },
  {
    id: 2,
    name: "Transtime",
    description:
      "Landing page para una empresa donde se especializan en transporte internacional y servicios logísticos.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    link: "/transtime",
  },
  {
    id: 3,
    name: "PrometheusTij",
    description:
      "Página de PrometheusTij donde se muestran los servicios principales de tecnologías de Prometheus",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Node", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    link: "/prometheus",
  },
  {
    id: 4,
    name: "Akerlundhinteriorismo",
    description:
      "Página para Akerlundh enfocado en mobiliario dentro de San Diego y Tijuana",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    link: "/akerlundh",
  },
];

const projectsEN: Project[] = [
  {
    id: 1,
    name: "Macoti",
    description:
      "Landing page focused on a company dedicated to development using CNC tools",
    technologies: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    link: "/macoti",
  },
  {
    id: 2,
    name: "Transtime",
    description:
      "Landing page for a company specializing in international transport and logistics services.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    link: "/transtime",
  },
  {
    id: 3,
    name: "PrometheusTij",
    description:
      "PrometheusTij page showcasing the main technology services offered by Prometheus",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Node", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    link: "/prometheus",
  },
  {
    id: 4,
    name: "Akerlundhinteriorismo",
    description:
      "Page for Akerlundh focused on furniture in San Diego and Tijuana",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    link: "/akerlundh",
  },
];

export { projectsES, projectsEN };
