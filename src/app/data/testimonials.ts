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
      "El sistema administrativo superó nuestras expectativas. Fluido, seguro y adaptado a nuestras operaciones internas.",
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
}
,
  {
  id: 4,
  project: "Macoti",
  testimonial:
    "Siempre resolvio lo que se ocupó para la página, siendo paciente y ajustado a los tiempos de nosotros.",
  rating: 5,
  author: "Ricardo"
}

];

export const testimonialsEN: Testimonial[] = [
  {
    id: 1,
    project: "Crioste",
   testimonial:
    "Kevin provided excellent service. He helped me create my website and business PDF, and the final result was professional and high-quality. Kevin explains every step of the process in detail and is always attentive and professional. I highly recommend him with full confidence.",
  rating: 5,
    author: "Alejandro"
  },
  {
    id: 2,
    project: "Ovalle Legal Advisors",
    testimonial:
      "The administrative system exceeded our expectations. Smooth, secure, and tailored to our internal workflow.",
    rating: 5,
    author: "Francisco"
  },
{
  id: 3,
  project: "Transtime",
  testimonial:
    "Excellent service. Communication was always clear, responses were quick, and the system turned out exactly as we needed to operate smoothly.",
  rating: 5,
  author: "Juan"
},
  {
  id: 4,
  project: "Macoti",
  testimonial:
    "I would rate it a 5. You always solved everything we needed, with patience and always adapting to our timelines.",
  rating: 5,
  author: "Ricardo"
}

];
