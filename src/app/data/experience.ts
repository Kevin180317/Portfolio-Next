export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface ExperienceData {
  professionalExperience: ExperienceItem[];
  education: EducationItem[];
}

export const experienceES: ExperienceData = {
  professionalExperience: [
    {
      title: "Desarrollador Front-end & Back-end",
      company: "Ecommetrica",
      period: "Sep 2023 – Presente",
      responsibilities: [
        "Desarrollo web con React, Vite, Next.js, Astro",
        "Back-end con Express, APIs REST, JWT, OAuth, MySQL",
        "Diseño de interfaces con Figma · gestión de tareas con Todoist",
        "SEO con Google Analytics, Meta Pixel, Google Tag Manager",
      ],
    },
    {
      title: "Desarrollador Full Stack",
      company: "Universidad Cenyca",
      period: "Oct 2022 – Jul 2023",
      responsibilities: [
        "Plataforma académica dividida en 3 módulos: Alumnos, Docentes, Control Académico",
        "Laravel PHP / Vue.js / Tailwind CSS / MySQL",
      ],
    },
    {
      title: "Desarrollador de Apps Móviles",
      company: "Prometheus · Freelancer",
      period: "",
      responsibilities: [
        "App móvil para cuidados paliativos: agenda de citas con catálogo de médicos (flujo tipo Doctoralia)",
        "Android Java + iOS Swift · Firebase + OneSignal notificaciones push",
      ],
    },
  ],
  education: [
    {
      degree: "Lic. Tecnologías en Sistemas Inteligentes",
      institution: "UDCI",
      period: "2017–2021",
      details: [
        "Software y Hardware, Python, seguidor de línea, sprinter y juice bot 5–15 kg",
      ],
    },
  ],
};

export const experienceEN: ExperienceData = {
  professionalExperience: [
    {
      title: "Front-end & Back-end Developer",
      company: "Ecommetrica",
      period: "Sep 2023 – Present",
      responsibilities: [
        "Web development with React, Vite, Next.js, Astro",
        "Back-end with Express, REST APIs, JWT, OAuth, MySQL",
        "UI design with Figma · task management with Todoist",
        "SEO with Google Analytics, Meta Pixel, Google Tag Manager",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Universidad Cenyca",
      period: "Oct 2022 – Jul 2023",
      responsibilities: [
        "Academic platform divided into 3 modules: Students, Teachers, Academic Control",
        "Laravel PHP / Vue.js / Tailwind CSS / MySQL",
      ],
    },
    {
      title: "Mobile App Developer",
      company: "Prometheus · Freelancer",
      period: "",
      responsibilities: [
        "Palliative care mobile app: appointment scheduling with doctor catalog (Doctoralia-like flow)",
        "Android Java + iOS Swift · Firebase + OneSignal push notifications",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's in Intelligent Systems Technology",
      institution: "UDCI",
      period: "2017–2021",
      details: [
        "Software and Hardware, Python, line follower, sprinter and juice bot 5–15 kg",
      ],
    },
  ],
};
