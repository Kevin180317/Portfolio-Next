export interface Testimonial {
  id: number;
  project: string;
  testimonial: string;
  rating: number;
  author?: string;
}

export const testimonialsES: Testimonial[] = [
  {
    id: 1,
    project: "Crioste",
    testimonial:
      "Excelente servicio me brindó Kevin. Me ayudó a generar mi página web y el PDF de mi negocio, y el trabajo quedó excelente y profesional. Además, Kevin es una persona que explica a detalle cada paso del proceso y es muy atento y profesional. Lo recomiendo de manera muy segura.",
    rating: 5,
    author: "Alejandro"
  },
  {
    id: 2,
    project: "Ovalle Consejeros Legales",
    testimonial:
      "Por el servicio entregado todo fue excelente, siempre comprometido a ayudar y solucionar problemas y dudas. Espero tener más servicios contigo ya que todo fue súper bien. ¡100% recomendado!",
    rating: 5,
    author: "Francisco"
  },
  {
    id: 3,
    project: "Transtime",
    testimonial:
      "Servicio excelente. Siempre hubo comunicación clara, atención rápida y el sistema quedó justo como lo necesitábamos para operar sin complicaciones.",
    rating: 5,
    author: "Juan"
  },
  {
    id: 4,
    project: "Macoti",
    testimonial:
      "Siempre resolvió lo que se ocupó para la página, siendo paciente y ajustado a los tiempos de nosotros.",
    rating: 5,
    author: "Ricardo"
  },
  {
    id: 5,
    project: "Psicología e Hipnosis",
    testimonial:
      "El trabajo fue de lo mejor, lo recomiendo porque fue honesto y comprometido en cumplir, si tienes dudas sobre las cosas él te las resuelve.",
    rating: 5,
    author: "Iruy"
  }
];

export const testimonialsEN: Testimonial[] = [
  {
    id: 1,
    project: "Crioste",
    testimonial:
      "Kevin provided excellent service. He helped me create my website and business PDF, and the final result was professional and high-quality. Kevin explains every step in detail and is always attentive and professional. Highly recommended.",
    rating: 5,
    author: "Alejandro"
  },
  {
    id: 2,
    project: "Ovalle Legal Advisors",
    testimonial:
      "The service provided was excellent — always committed, helpful, and ready to solve doubts or issues. I look forward to working together again, everything was perfect. 100% recommended!",
    rating: 5,
    author: "Francisco"
  },
  {
    id: 3,
    project: "Transtime",
    testimonial:
      "Excellent service. Clear communication, fast response times, and the system worked exactly as we needed.",
    rating: 5,
    author: "Juan"
  },
  {
    id: 4,
    project: "Macoti",
    testimonial:
      "I would rate it 5 stars. You solved everything we needed with patience and adapted to our timelines perfectly.",
    rating: 5,
    author: "Ricardo"
  },
  {
    id: 5,
    project: "Psicología e Hipnosis",
    testimonial:
      "The work was excellent — honest, committed and reliable. If you have questions, he helps you clarify everything. Highly recommended.",
    rating: 5,
    author: "Iruy"
  }
];
