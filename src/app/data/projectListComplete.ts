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
  image?: string;
  type?: string;
  externalLink?: string;
  github?: string;
  link: string;
}

const projectsSpanish: Project[] = [
  {
    id: 1,
    name: "Macoti",
    description: "Landing Page enfocado en una empresa dedicada el desarrollo con el uso de herramientas CNC",
    technologies: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/macoti.webp",
    link: "/macoti",
    type: "FreeLancer",
    externalLink: "https://macoti.com.mx/"
  },
  {
    id: 2,
    name: "Transtime",
    description: "Landing page para una empresa donde se especializan en transporte internacional y servicios logísticos.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/transtime.png",
    link: "/transtime",
    type: "FreeLancer",
    externalLink: "https://transtime.site/"
  },
  {
    id: 3,
    name: "PrometheusTij",
    description: "Pagina de PrometheusTij donde se muestran los servicios principales de tecnologias de Prometheus",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    image: "/PrometheusPage.png",
    link: "/prometheustij",
    type: "Prometheus",
    externalLink: "https://prometheustij.com"
  },
  {
    id: 4,
    name: "Akerlundhinteriorismo",
    description: "Pagina para Akerlundh enfocado en una forniture dentro de San diego y Tijuana",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    image: "/akerlundh.png",
    link: "/akerlundhinteriorismo",
    type: "Prometheus",
    externalLink: "https://akerlundhinteriorismo.com/"
  },
  {
    id: 5,
    name: "Portafolio Médico",
    description: "Aplicación que permite al usuario agendar una cita con el médico más adecuado para sus necesidades.",
    technologies: [
      { name: "Android", icon: "android", color: "3DDC84" },
      { name: "Swift", icon: "swift", color: "FA7343" },
    ],
    image: "/1.webp",
    link: "medical-potfolio",
    type: "Prometheus",
  },
  {
    id: 6,
    name: "Cenyca Universidad ",
    description: "Cuenta con su propia plataforma dividida en tres partes: alumnos, profesores y personal administrativo.",
    technologies: [
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Laravel", icon: "laravel", color: "FF2D20" },
      { name: "Vue.js", icon: "vuedotjs", color: "42B883" },
    ],
    image: "/laravel.png",
    link: "cenyca",
    type: "FreeLancer",
  },
  {
    id: 7,
    name: "Reforma Dental",
    description: "Reforma dental es una landing page donde se puede encontrar informacion sobre los servicios que ofrece la clinica dental. Y asi mismo poder agendar tu cita con nuestro metodo de calendario y pasarela de pagos con stripe.",
    technologies: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Stripe", icon: "stripe", color: "635BFF" },
    ],
    image: "/reformapage.webp",
    link: "/reformadental",
    type: "Ecommetrica",
    externalLink: "https://reformadental.com"
  },
  {
    id: 8,
    name: "Dr Arturo Lopez",
    description: "Dr Arturo Lopez es una landing page donde se puede encontrar toda informacion que realiza el Dr y poder realizar una cita con el.",
    technologies: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/arturopage.webp",
    link: "/doctorarturolopez",
    type: "Ecommetrica",
    externalLink: "https://doctorarturolopez.com"
  },
  {
    id: 9,
    name: "Ecommetrica",
    description: "Consultoría de comercio electrónico con un equipo de expertos digitales en marketing y desarrollo técnico, especialmente ensamblado para B2B y B2C.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "React", icon: "react", color: "61DAFB" },
    ],
    image: "/eommetrica.webp",
    link: "/ecommetrica",
    type: "Ecommetrica",
    externalLink: "https://ecommetrica.com"
  },
  {
    id: 10,
    name: "E-commetrics",
    description: "Pagina Oficial de PrometheusTij utilizando las tecnologias mas innovadoras del mercado facilitando las tareas que se ofrece e integrando una experiencia de Usuario impresionante.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/dashboard.png",
    link: "/e-commetrics",
    type: "Ecommetrica",
    externalLink: "https://e-commetrics.com"
  },
  {
    id: 11,
    name: "Ricardo Monge",
    description: "Recibe la atención en ortopedia con el Dr. Ricardo Monge especializado en lesiones musculoesqueléticas en rodillas, cadera y columna en Tijuana.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/mongepage.webp",
    link: "/mongeortopedia",
    type: "Ecommetrica",
    externalLink: "https://mongeortopedia.com/"
  },
  {
    id: 12,
    name: "Jareddo Sushi",
    description: "Menú rápido para tienda de Sushi, accesible desde celulares.",
    technologies: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/jareddo.png",
    link: "/jareddosushi",
    type: "FreeLancer",
    externalLink: "https://jareddosushi.com/"
  },
  {
    id: 13,
    name: "Bites Creadores de Sonrisas",
    description: "Pagina enfocada al negocio de Bites CDS dirigido al temaa de dentistas con uso de Agendar citas, Metodos de Pago e integracion de sus blogs.",
    technologies: [
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/bitespage.webp",
    link: "/bitescreadoresdesonrisas",
    type: "Ecommetrica",
    externalLink: "https://bitescreadoresdesonrisas.com"
  },
  {
    id: 14,
    name: "Central Toreo",
    description: "Landing Page para torres disponibles en Central Toreo en Tijuana.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/centraltoreopage.webp",
    link: "/centraltoreo",
    type: "Ecommetrica",
    externalLink: "https://centraltoreo.com/"
  },
  {
    id: 15,
    name: "Cesia Borjon",
    description: "Pagina para Cesia Borjon una excelente Ginecologa con gran impacto en el area de Tijuana",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/cesiapage.png",
    link: "/cesiaborjon",
    type: "Ecommetrica",
    externalLink: "https://cesiaborjon.com/"
  },
  {
    id: 16,
    name: "The Condor Vision",
    description: "Pagina realizada para condor vision para mostrar la experiencia y los servicios que ofrecen con el uso de Drones en el sector de Baja California",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/condorpage.webp",
    link: "/thecondorvision",
    type: "Ecommetrica",
  },
  {
    id: 17,
    name: "GPE Consultores",
    description: "Pagina para GPE Consultores, son contadores con una gran trayectoria en Tijuana que quieren llegar a mas publico con sus blogs y servicios en temas legales y de gran valor.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/gpepage.webp",
    link: "/gpeconsultores",
    type: "Ecommetrica",
    externalLink: "https://gpeconsultores.com.mx/"
  },
  {
    id: 18,
    name: "Doctor Martin",
    description: "Landing Page para el Dr Martin con gran impacto en Tijuana con especialidad en Otorrinologo.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/martin.png",
    link: "/otorrinomartingonzalez",
    type: "Ecommetrica",
    externalLink: "http://otorrinomartingonzalez.com/"
  },
  {
    id: 19,
    name: "Syl Industrial",
    description: "Landing Page enfocada a Syl Industrial con sus servicios que ofrecen en todo baja california enfocado mas en el municipio de Mexicali.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/sylindustrialpage.webp",
    link: "/sylindustrial",
    type: "Ecommetrica",
    externalLink: "https://sylindustrial.com/"
  },
  {
    id: 20,
    name: "Syl Talento",
    description: "Pagina Oficial de Syl Talento enfocada a sus servicios de reclutamiento y su webapp integrada de postulantes estilo Linkedin.",
    technologies: [
      { name: "Next.js", icon: "nextdotjs", color: "000000" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/sylpage.webp",
    link: "/syltalento",
    type: "Ecommetrica",
    externalLink: "https://syltalento.com/"
  },
  {
    id: 21,
    name: "Wislin Farm",
    description: "Landing Page de Wislin Farm enfocada a los servicios de Quesos y Chorizo que ofrece en todo el sector de Mexico",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/wislinpage.webp",
    link: "/wislinfarm",
    type: "Ecommetrica",
    externalLink: "https://wislinfarm.com/"
  },
  {
    id: 22,
    name: "Doctora Pamela Perez",
    description: "Pagina creada en Astro y usando React Components Pamela perez es especialista en otorrinolaringología y cirugía de cabeza y cuello.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/pamela.webp",
    link: "/doctorapamelaperez",
    type: "Ecommetrica",
    externalLink: "https://www.doctorapamelaperez.com/"
  },
  {
    id: 23,
    name: "Seiza",
    description: "La pagina de seiza.shop creada en Next con Stripe y usando React Components es un e-commerce enfocado a la venta de un banquito moderno para la meditacion de la postura seiza",
    technologies: [
      { name: "Next.js", icon: "nextdotjs", color: "000000" },
      { name: "Stripe", icon: "stripe", color: "635BFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/seiza.webp",
    link: "/seiza",
    type: "Ecommetrica",
    externalLink: "https://seiza.shop"
  },
  {
    id: 24,
    name: "Dentista Reforma",
    description: "Dentista Reforma es una pagina donde se puede encontrar informacion sobre los servicios que ofrece la clinica dental. Y asi mismo poder agendar tu cita en nuestro calendario",
    technologies: [
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/dentistareforma.webp",
    link: "/dentistareforma",
    type: "Ecommetrica",
    externalLink: "https://dentistareforma.com"
  },
  {
    id: 25,
    name: "Crioste",
    description: "Landing Page de Crioste enfocada en las investigaciones privadas y servicios que ofrecen en todo el sector de Mexico",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/crioste.webp",
    link: "/crioste",
    type: "FreeLancer",
    externalLink: "https://crioste.com/"
  }
] as const;

const projectsEnglish: Project[] = [
  {
    id: 1,
    name: "Macoti",
    description: "Landing page focused on a company dedicated to development using CNC tools",
    technologies: [
      { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/macoti.webp",
    link: "/macoti",
    type: "FreeLancer",
    externalLink: "https://macoti.com.mx/"
  },
  {
    id: 2,
    name: "Transtime",
    description: "Landing page for a company specialized in international transportation and logistics services.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/transtime.png",
    link: "/transtime",
    type: "FreeLancer",
    externalLink: "https://transtime.site/"
  },
  {
    id: 3,
    name: "PrometheusTij",
    description: "PrometheusTij page showing the main technology services offered by Prometheus",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    image: "/PrometheusPage.png",
    link: "/prometheustij",
    type: "Prometheus",
    externalLink: "https://prometheustij.com"
  },
  {
    id: 4,
    name: "Akerlundhinteriorismo",
    description: "Page for Akerlundh focused on furniture in San Diego and Tijuana",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Express", icon: "express", color: "FFFFFF" },
    ],
    image: "/akerlundh.png",
    link: "/akerlundhinteriorismo",
    type: "Prometheus",
    externalLink: "https://akerlundhinteriorismo.com/"
  },
  {
    id: 5,
    name: "Medical Portfolio",
    description: "Application that allows users to schedule appointments with the most suitable doctor for their needs.",
    technologies: [
      { name: "Android", icon: "android", color: "3DDC84" },
      { name: "Swift", icon: "swift", color: "FA7343" },
    ],
    image: "/1.webp",
    link: "medical-potfolio",
    type: "Prometheus",
  },
  {
    id: 6,
    name: "Cenyca University",
    description: "Has its own platform divided into three parts: students, teachers, and administrative staff.",
    technologies: [
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Laravel", icon: "laravel", color: "FF2D20" },
      { name: "Vue.js", icon: "vuedotjs", color: "42B883" },
    ],
    image: "/laravel.png",
    link: "cenyca",
    type: "FreeLancer",
  },
  {
    id: 7,
    name: "Reforma Dental",
    description: "Reforma Dental is a landing page where you can find information about the services offered by the dental clinic. Also, you can schedule your appointment using our calendar method and payment gateway with Stripe.",
    technologies: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "Stripe", icon: "stripe", color: "635BFF" },
    ],
    image: "/reformapage.webp",
    link: "/reformadental",
    type: "Ecommetrica",
    externalLink: "https://reformadental.com"
  },
  {
    id: 8,
    name: "Dr Arturo Lopez",
    description: "Dr Arturo Lopez is a landing page where you can find all the information about the doctor and schedule an appointment.",
    technologies: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/arturopage.webp",
    link: "/doctorarturolopez",
    type: "Ecommetrica",
    externalLink: "https://doctorarturolopez.com"
  },
  {
    id: 9,
    name: "Ecommetrica",
    description: "E-commerce consultancy with a team of digital marketing and technical development experts, specially assembled for B2B and B2C.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "React", icon: "react", color: "61DAFB" },
    ],
    image: "/eommetrica.webp",
    link: "/ecommetrica",
    type: "Ecommetrica",
    externalLink: "https://ecommetrica.com"
  },
  {
    id: 10,
    name: "E-commetrics",
    description: "Official page of PrometheusTij using the most innovative technologies in the market facilitating the offered tasks and integrating an impressive user experience.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/dashboard.png",
    link: "/e-commetrics",
    type: "Ecommetrica",
    externalLink: "https://e-commetrics.com"
  },
  {
    id: 11,
    name: "Ricardo Monge",
    description: "Receive orthopedic care with Dr. Ricardo Monge specialized in musculoskeletal injuries in knees, hips, and spine in Tijuana.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/mongepage.webp",
    link: "/mongeortopedia",
    type: "Ecommetrica",
    externalLink: "https://mongeortopedia.com/"
  },
  {
    id: 12,
    name: "Jareddo Sushi",
    description: "Quick menu for a sushi shop, accessible from mobile phones.",
    technologies: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/jareddo.png",
    link: "/jareddosushi",
    type: "FreeLancer",
    externalLink: "https://jareddosushi.com/"
  },
  {
    id: 13,
    name: "Bites Creadores de Sonrisas",
    description: "Page focused on the Bites CDS business directed at dentists with appointment scheduling, payment methods, and blog integration.",
    technologies: [
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/bitespage.webp",
    link: "/bitescreadoresdesonrisas",
    type: "Ecommetrica",
    externalLink: "https://bitescreadoresdesonrisas.com"
  },
  {
    id: 14,
    name: "Central Toreo",
    description: "Landing page for available towers in Central Toreo in Tijuana.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/centraltoreopage.webp",
    link: "/centraltoreo",
    type: "Ecommetrica",
    externalLink: "https://centraltoreo.com/"
  },
  {
    id: 15,
    name: "Cesia Borjon",
    description: "Page for Cesia Borjon, an excellent gynecologist with great impact in the Tijuana area.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/cesiapage.png",
    link: "/cesiaborjon",
    type: "Ecommetrica",
    externalLink: "https://cesiaborjon.com/"
  },
  {
    id: 16,
    name: "The Condor Vision",
    description: "Page created for Condor Vision to showcase the experience and services offered using drones in the Baja California region.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/condorpage.webp",
    link: "/thecondorvision",
    type: "Ecommetrica",
  },
  {
    id: 17,
    name: "GPE Consultores",
    description: "Page for GPE Consultores, accountants with a great track record in Tijuana aiming to reach a wider audience with their blogs and valuable legal services.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/gpepage.webp",
    link: "/gpeconsultores",
    type: "Ecommetrica",
    externalLink: "https://gpeconsultores.com.mx/"
  },
  {
    id: 18,
    name: "Doctor Martin",
    description: "Landing page for Dr. Martin with a great impact in Tijuana specializing in Otolaryngology.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/martin.png",
    link: "/otorrinomartingonzalez",
    type: "Ecommetrica",
    externalLink: "http://otorrinomartingonzalez.com/"
  },
  {
    id: 19,
    name: "Syl Industrial",
    description: "Landing page focused on Syl Industrial with services offered throughout Baja California, mainly in the municipality of Mexicali.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/sylindustrialpage.webp",
    link: "/sylindustrial",
    type: "Ecommetrica",
    externalLink: "https://sylindustrial.com/"
  },
  {
    id: 20,
    name: "Syl Talento",
    description: "Official page of Syl Talento focused on recruitment services and its integrated applicant web app similar to LinkedIn.",
    technologies: [
      { name: "Next.js", icon: "nextdotjs", color: "000000" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/sylpage.webp",
    link: "/syltalento",
    type: "Ecommetrica",
    externalLink: "https://syltalento.com/"
  },
  {
    id: 21,
    name: "Wislin Farm",
    description: "Landing page for Wislin Farm focused on cheese and chorizo services offered throughout Mexico.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/wislinpage.webp",
    link: "/wislinfarm",
    type: "Ecommetrica",
    externalLink: "https://wislinfarm.com/"
  },
  {
    id: 22,
    name: "Doctor Pamela Perez",
    description: "Page created in Astro using React components. Pamela Perez specializes in otolaryngology and head and neck surgery.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/pamela.webp",
    link: "/doctorapamelaperez",
    type: "Ecommetrica",
    externalLink: "https://www.doctorapamelaperez.com/"
  },
  {
    id: 23,
    name: "Seiza",
    description: "The seiza.shop page created with Next.js and Stripe using React components is an e-commerce focused on selling a modern meditation posture bench called 'seiza'.",
    technologies: [
      { name: "Next.js", icon: "nextdotjs", color: "000000" },
      { name: "Stripe", icon: "stripe", color: "635BFF" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/seiza.webp",
    link: "/seiza",
    type: "Ecommetrica",
    externalLink: "https://seiza.shop"
  },
  {
    id: 24,
    name: "Dentista Reforma",
    description: "Dentista Reforma is a page where you can find information about the services offered by the dental clinic and schedule your appointment in our calendar.",
    technologies: [
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Express", icon: "express", color: "FFFFFF" },
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/dentistareforma.webp",
    link: "/dentistareforma",
    type: "Ecommetrica",
    externalLink: "https://dentistareforma.com"
  },
  {
    id: 25,
    name: "Crioste",
    description: "Landing page for Crioste focused on private investigations and services offered throughout Mexico.",
    technologies: [
      { name: "Astro", icon: "astro", color: "BC52EE" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwindcss", icon: "tailwindcss", color: "06B6D4" },
    ],
    image: "/crioste.webp",
    link: "/crioste",
    type: "FreeLancer",
    externalLink: "https://crioste.com/"
  }
] as const;

export { projectsSpanish, projectsEnglish };
