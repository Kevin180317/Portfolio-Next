import type { Lang } from "@/lib/i18n";

export type { Lang };

export type Category =
  | "medical"
  | "dental"
  | "industrial"
  | "consulting"
  | "commerce"
  | "software"
  | "other";

export type Kind = "website" | "landing" | "webapp" | "mobile" | "ecommerce";

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  slug: string;
  name: string;
  /** Nombre alterno para la versión en inglés, si difiere. */
  nameEn?: string;
  category: Category;
  kind: Kind[];
  featured?: boolean;
  origin: "freelance" | "ecommetrica" | "prometheus";
  image?: string;
  url?: string;
  tech: Technology[];
  description: Record<Lang, string>;
}

// Ordenados del más reciente al más antiguo.
export const projects: Project[] = [
  {
    slug: "enriqueciapara",
    name: "Enrique Ciapara",
    category: "other",
    kind: ["website"],
    featured: true,
    origin: "ecommetrica",
    image: "/enriqueciapara.webp",
    url: "https://enriqueciapara.com/",
    tech: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Framer Motion", icon: "framer", color: "0055FF" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Cloudflare R2", icon: "cloudflare", color: "F38020" },
    ],
    description: {
      es: "Portafolio del artista visual Enrique Ciapara, pintor de Tijuana con 35 años de trayectoria, mostrando sus obras, series y exhibiciones recientes con soporte multilenguaje (i18n).",
      en: "Portfolio for visual artist Enrique Ciapara, a Tijuana-based painter with 35 years of career, showcasing his works, series, and recent exhibitions with multi-language (i18n) support.",
    },
  },
  {
    slug: "excellentiafoods",
    name: "Excellentia Foods",
    category: "commerce",
    kind: ["website", "webapp", "mobile"],
    featured: true,
    origin: "ecommetrica",
    image: "/excellentiafoods.png",
    url: "https://excellentiafoods.com",
    tech: [
      { name: "Express", icon: "express", color: "FFFFFF" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Android Studio", icon: "androidstudio", color: "3DDC84" },
      { name: "QuickBooks", icon: "quickbooks", color: "2CA01C" },
    ],
    description: {
      es: "Landing page + dashboard empresarial para Excellentia Foods. El dashboard (app.excellentiafoods) integra QuickBooks Online / Intuit para gestión financiera y contable, sincronizado con una app Android que maneja todo el flujo operativo.",
      en: "Landing page + business dashboard for Excellentia Foods. The dashboard (app.excellentiafoods) integrates QuickBooks Online / Intuit for financial and accounting management, synced with an Android app that handles the full operational flow.",
    },
  },
  {
    slug: "luckytracker",
    name: "Lucky Tracker",
    category: "software",
    kind: ["webapp"],
    origin: "prometheus",
    image: "/luckytracker.webp",
    url: "https://la-peturnidad.vercel.app/",
    tech: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Aplicación para encontrar mascotas perdidas mediante alertas impulsadas por la comunidad y seguimiento de ubicación en tiempo real.",
      en: "App for finding lost pets through community-driven alerts and real-time location tracking.",
    },
  },
  {
    slug: "diazconstructions",
    name: "Diaz Constructions",
    category: "industrial",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/diazconstructions.webp",
    url: "https://diazconstructions.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Empresa de construcción general en San Francisco especializada en remodelaciones, ADUs, cocinas, baños, paisajismo y construcción residencial y comercial.",
      en: "General construction company in San Francisco specialized in remodels, ADUs, kitchens, bathrooms, landscaping, and residential and commercial construction.",
    },
  },
  {
    slug: "scaneat",
    name: "ScanEat",
    category: "software",
    kind: ["webapp"],
    featured: true,
    origin: "ecommetrica",
    image: "/scaneatmx.png",
    url: "https://scaneat.mx/",
    tech: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Web app para restaurantes que digitaliza el servicio con menú digital QR, sistema de comandas en tiempo real, KDS, facturación y reportes.",
      en: "Web app for restaurants that digitizes service with QR digital menus, real-time order system, KDS, invoicing, and reports.",
    },
  },
  {
    slug: "palmasrecovery",
    name: "Palmas Recovery",
    category: "medical",
    kind: ["website"],
    featured: true,
    origin: "ecommetrica",
    image: "/palmasrecovery.webp",
    url: "https://palmasrecovery.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Casa de recuperación postoperatoria en Tijuana con enfermería 24/7 y médicos internos, especializada en cuidados posteriores a cirugía plástica.",
      en: "Post-operative recovery house in Tijuana with 24/7 nursing and in-house doctors, specialized in post-plastic surgery care.",
    },
  },
  {
    slug: "doctorlumban",
    name: "Dr. Jaime Lumbán",
    category: "medical",
    kind: ["website"],
    featured: true,
    origin: "ecommetrica",
    image: "/drlumban.png",
    url: "https://drlumban.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Página del Dr. Jaime Lumbán, otorrinolaringólogo en Tijuana con más de 33 años de experiencia en rinoplastia estética y funcional, y tratamiento integral de oídos, nariz y garganta.",
      en: "Page for Dr. Jaime Lumbán, otorhinolaryngologist in Tijuana with over 33 years of experience in aesthetic and functional rhinoplasty, and comprehensive treatment of ears, nose, and throat.",
    },
  },
  {
    slug: "sistema-admin",
    name: "Sistema Administrativo Interno",
    nameEn: "Internal Administrative System",
    category: "software",
    kind: ["webapp"],
    origin: "freelance",
    image: "/sistema.webp",
    tech: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Express", icon: "express", color: "FFFFFF" },
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Sistema interno de gestión administrativa diseñado para un bufete de abogados, que proporciona un control centralizado de los clientes, los recibos, las solicitudes de dietas, los informes de gastos, la creación de usuarios y las notificaciones internas.",
      en: "Internal administrative management system designed for a law firm, providing centralized control of clients, receipts, per diem requests, expense reports, user creation, and internal notifications.",
    },
  },
  {
    slug: "crioste",
    name: "Crioste",
    category: "consulting",
    kind: ["landing"],
    origin: "freelance",
    image: "/crioste.webp",
    url: "https://crioste.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Landing Page de Crioste enfocada en las investigaciones privadas y servicios que ofrecen en todo el sector de Mexico",
      en: "Landing page for Crioste focused on private investigations and services offered throughout Mexico.",
    },
  },
  {
    slug: "dentistareforma",
    name: "Dentista Reforma",
    category: "dental",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/dentistareforma.webp",
    url: "https://dentistareforma.com",
    tech: [
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Dentista Reforma es una pagina donde se puede encontrar informacion sobre los servicios que ofrece la clinica dental. Y asi mismo poder agendar tu cita en nuestro calendario",
      en: "Dentista Reforma is a page where you can find information about the services offered by the dental clinic and schedule your appointment in our calendar.",
    },
  },
  {
    slug: "seiza",
    name: "Seiza",
    category: "commerce",
    kind: ["ecommerce"],
    origin: "ecommetrica",
    image: "/seiza.webp",
    url: "https://seiza.shop",
    tech: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "Stripe", icon: "stripe", color: "635BFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "La pagina de seiza.shop creada en Next con Stripe y usando React Components es un e-commerce enfocado a la venta de un banquito moderno para la meditacion de la postura seiza",
      en: "The seiza.shop page created with Next.js and Stripe using React components is an e-commerce focused on selling a modern meditation posture bench called 'seiza'.",
    },
  },
  {
    slug: "doctorapamelaperez",
    name: "Doctora Pamela Perez",
    nameEn: "Doctor Pamela Perez",
    category: "medical",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/pamela.webp",
    url: "https://www.doctorapamelaperez.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Pagina creada en Astro y usando React Components Pamela perez es especialista en otorrinolaringología y cirugía de cabeza y cuello.",
      en: "Page created in Astro using React components. Pamela Perez specializes in otolaryngology and head and neck surgery.",
    },
  },
  {
    slug: "wislinfarm",
    name: "Wislin Farm",
    category: "industrial",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/wislinpage.webp",
    url: "https://wislinfarm.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Landing Page de Wislin Farm enfocada a los servicios de Quesos y Chorizo que ofrece en todo el sector de Mexico",
      en: "Landing page for Wislin Farm focused on cheese and chorizo services offered throughout Mexico.",
    },
  },
  {
    slug: "syltalento",
    name: "Syl Talento",
    category: "consulting",
    kind: ["website", "webapp"],
    featured: true,
    origin: "ecommetrica",
    image: "/sylpage.webp",
    url: "https://syltalento.com/",
    tech: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Pagina Oficial de Syl Talento enfocada a sus servicios de reclutamiento y su webapp integrada de postulantes estilo Linkedin.",
      en: "Official page of Syl Talento focused on recruitment services and its integrated applicant web app similar to LinkedIn.",
    },
  },
  {
    slug: "sylindustrial",
    name: "Syl Industrial",
    category: "industrial",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/sylindustrialpage.webp",
    url: "https://sylindustrial.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Landing Page enfocada a Syl Industrial con sus servicios que ofrecen en todo baja california enfocado mas en el municipio de Mexicali.",
      en: "Landing page focused on Syl Industrial with services offered throughout Baja California, mainly in the municipality of Mexicali.",
    },
  },
  {
    slug: "otorrinomartingonzalez",
    name: "Doctor Martin",
    category: "medical",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/martin.webp",
    url: "http://otorrinomartingonzalez.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Landing Page para el Dr Martin con gran impacto en Tijuana con especialidad en Otorrinologo.",
      en: "Landing page for Dr. Martin with a great impact in Tijuana specializing in Otolaryngology.",
    },
  },
  {
    slug: "gpeconsultores",
    name: "GPE Consultores",
    category: "consulting",
    kind: ["website", "webapp"],
    origin: "ecommetrica",
    image: "/gpepage.webp",
    url: "https://gpeconsultores.com.mx/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Pagina para GPE Consultores, son contadores con una gran trayectoria en Tijuana que quieren llegar a mas publico con sus blogs y servicios en temas legales y de gran valor.",
      en: "Page for GPE Consultores, accountants with a great track record in Tijuana aiming to reach a wider audience with their blogs and valuable legal services.",
    },
  },
  {
    slug: "thecondorvision",
    name: "The Condor Vision",
    category: "industrial",
    kind: ["landing"],
    origin: "ecommetrica",
    image: "/condorpage.webp",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Pagina realizada para condor vision para mostrar la experiencia y los servicios que ofrecen con el uso de Drones en el sector de Baja California",
      en: "Page created for Condor Vision to showcase the experience and services offered using drones in the Baja California region.",
    },
  },
  {
    slug: "cesiaborjon",
    name: "Cesia Borjon",
    category: "medical",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/cesiapage.webp",
    url: "https://cesiaborjon.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Pagina para Cesia Borjon una excelente Ginecologa con gran impacto en el area de Tijuana",
      en: "Page for Cesia Borjon, an excellent gynecologist with great impact in the Tijuana area.",
    },
  },
  {
    slug: "centraltoreo",
    name: "Central Toreo",
    category: "other",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/centraltoreopage.webp",
    url: "https://centraltoreo.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Landing Page para torres disponibles en Central Toreo en Tijuana.",
      en: "Landing page for available towers in Central Toreo in Tijuana.",
    },
  },
  {
    slug: "bitescreadoresdesonrisas",
    name: "Bites Creadores de Sonrisas",
    category: "dental",
    kind: ["website", "webapp"],
    featured: true,
    origin: "ecommetrica",
    image: "/bitespage.webp",
    url: "https://bitescreadoresdesonrisas.com",
    tech: [
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Pagina enfocada al negocio de Bites CDS dirigido al temaa de dentistas con uso de Agendar citas, Metodos de Pago e integracion de sus blogs.",
      en: "Page focused on the Bites CDS business directed at dentists with appointment scheduling, payment methods, and blog integration.",
    },
  },
  {
    slug: "jareddosushi",
    name: "Jareddo Sushi",
    category: "commerce",
    kind: ["website"],
    origin: "freelance",
    image: "/jareddo.webp",
    url: "https://jareddosushi.com/",
    tech: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Menú rápido para tienda de Sushi, accesible desde celulares.",
      en: "Quick menu for a sushi shop, accessible from mobile phones.",
    },
  },
  {
    slug: "mongeortopedia",
    name: "Ricardo Monge",
    category: "medical",
    kind: ["website"],
    featured: true,
    origin: "ecommetrica",
    image: "/mongepage.webp",
    url: "https://mongeortopedia.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Recibe la atención en ortopedia con el Dr. Ricardo Monge especializado en lesiones musculoesqueléticas en rodillas, cadera y columna en Tijuana.",
      en: "Receive orthopedic care with Dr. Ricardo Monge specialized in musculoskeletal injuries in knees, hips, and spine in Tijuana.",
    },
  },
  {
    slug: "e-commetrics",
    name: "E-commetrics",
    category: "software",
    kind: ["webapp"],
    origin: "ecommetrica",
    image: "/dashboard.webp",
    url: "https://e-commetrics.com",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Pagina Oficial de PrometheusTij utilizando las tecnologias mas innovadoras del mercado facilitando las tareas que se ofrece e integrando una experiencia de Usuario impresionante.",
      en: "Official page of PrometheusTij using the most innovative technologies in the market facilitating the offered tasks and integrating an impressive user experience.",
    },
  },
  {
    slug: "ecommetrica",
    name: "Ecommetrica",
    category: "consulting",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/eommetrica.webp",
    url: "https://ecommetrica.com",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "React", icon: "react", color: "61DAFB" },
    ],
    description: {
      es: "Consultoría de comercio electrónico con un equipo de expertos digitales en marketing y desarrollo técnico, especialmente ensamblado para B2B y B2C.",
      en: "E-commerce consultancy with a team of digital marketing and technical development experts, specially assembled for B2B and B2C.",
    },
  },
  {
    slug: "doctorarturolopez",
    name: "Dr Arturo Lopez",
    category: "medical",
    kind: ["landing"],
    origin: "ecommetrica",
    image: "/arturopage.webp",
    url: "https://doctorarturolopez.com",
    tech: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Dr Arturo Lopez es una landing page donde se puede encontrar toda informacion que realiza el Dr y poder realizar una cita con el.",
      en: "Dr Arturo Lopez is a landing page where you can find all the information about the doctor and schedule an appointment.",
    },
  },
  {
    slug: "reformadental",
    name: "Reforma Dental",
    category: "dental",
    kind: ["website"],
    origin: "ecommetrica",
    image: "/reformapage.webp",
    url: "https://reformadental.com",
    tech: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Stripe", icon: "stripe", color: "635BFF" },
    ],
    description: {
      es: "Reforma dental es una landing page donde se puede encontrar informacion sobre los servicios que ofrece la clinica dental. Y asi mismo poder agendar tu cita con nuestro metodo de calendario y pasarela de pagos con stripe.",
      en: "Reforma Dental is a landing page where you can find information about the services offered by the dental clinic. Also, you can schedule your appointment using our calendar method and payment gateway with Stripe.",
    },
  },
  {
    slug: "cenyca",
    name: "Cenyca Universidad",
    nameEn: "Cenyca University",
    category: "software",
    kind: ["webapp"],
    origin: "freelance",
    image: "/laravel.png",
    tech: [
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Laravel", icon: "laravel", color: "FF2D20" },
      { name: "Vue.js", icon: "vuedotjs", color: "42B883" },
    ],
    description: {
      es: "Cuenta con su propia plataforma dividida en tres partes: alumnos, profesores y personal administrativo.",
      en: "Has its own platform divided into three parts: students, teachers, and administrative staff.",
    },
  },
  {
    slug: "medical-potfolio",
    name: "Portafolio Médico",
    nameEn: "Medical Portfolio",
    category: "medical",
    kind: ["mobile"],
    origin: "prometheus",
    image: "/1.webp",
    tech: [
      { name: "Android", icon: "android", color: "3DDC84" },
      { name: "Swift", icon: "swift", color: "FA7343" },
    ],
    description: {
      es: "Aplicación que permite al usuario agendar una cita con el médico más adecuado para sus necesidades.",
      en: "Application that allows users to schedule appointments with the most suitable doctor for their needs.",
    },
  },
  {
    slug: "akerlundhinteriorismo",
    name: "Akerlundhinteriorismo",
    category: "other",
    kind: ["website"],
    origin: "prometheus",
    image: "/akerlundh.webp",
    url: "https://akerlundhinteriorismo.com/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    description: {
      es: "Pagina para Akerlundh enfocado en una forniture dentro de San diego y Tijuana",
      en: "Page for Akerlundh focused on furniture in San Diego and Tijuana",
    },
  },
  {
    slug: "prometheustij",
    name: "PrometheusTij",
    category: "consulting",
    kind: ["website"],
    origin: "prometheus",
    image: "/prometheustij.png",
    url: "https://prometheustij.com",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    description: {
      es: "Pagina de PrometheusTij donde se muestran los servicios principales de tecnologias de Prometheus",
      en: "PrometheusTij page showing the main technology services offered by Prometheus",
    },
  },
  {
    slug: "transtime",
    name: "Transtime",
    category: "industrial",
    kind: ["landing"],
    origin: "freelance",
    image: "/transtime.png",
    url: "https://transtime.site/",
    tech: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Landing page para una empresa donde se especializan en transporte internacional y servicios logísticos.",
      en: "Landing page for a company specialized in international transportation and logistics services.",
    },
  },
  {
    slug: "macoti",
    name: "Macoti",
    category: "industrial",
    kind: ["landing"],
    origin: "freelance",
    image: "/macoti.webp",
    url: "https://macoti.com.mx/",
    tech: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
    description: {
      es: "Landing Page enfocado en una empresa dedicada el desarrollo con el uso de herramientas CNC",
      en: "Landing page focused on a company dedicated to development using CNC tools",
    },
  },
];

export const categoryLabels: Record<Category, Record<Lang, string>> = {
  medical: { es: "Médico", en: "Medical" },
  dental: { es: "Dental", en: "Dental" },
  industrial: { es: "Industrial", en: "Industrial" },
  consulting: { es: "Consultoría", en: "Consulting" },
  commerce: { es: "Comercio", en: "Commerce" },
  software: { es: "Software", en: "Software" },
  other: { es: "Otro", en: "Other" },
};

export const kindLabels: Record<Kind, Record<Lang, string>> = {
  website: { es: "Sitio web", en: "Website" },
  landing: { es: "Landing page", en: "Landing page" },
  webapp: { es: "Web app", en: "Web app" },
  mobile: { es: "App móvil", en: "Mobile app" },
  ecommerce: { es: "E-commerce", en: "E-commerce" },
};

export const categoryOrder: Category[] = [
  "medical",
  "dental",
  "industrial",
  "consulting",
  "commerce",
  "software",
  "other",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectName(p: Project, lang: Lang) {
  return lang === "en" && p.nameEn ? p.nameEn : p.name;
}

export const featuredProjects = projects.filter((p) => p.featured);
