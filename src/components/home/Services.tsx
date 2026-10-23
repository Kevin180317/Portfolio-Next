import type { Lang } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

interface Service {
  title: string;
  description: string;
  items: string[];
}

const copy: Record<Lang, { label: string; title: string; description: string; services: Service[] }> = {
  es: {
    label: "Servicios",
    title: "Todo lo que tu negocio necesita para vender en línea.",
    description:
      "Desde una landing page que convierte hasta un sistema a la medida conectado a tu operación. Un solo desarrollador, de principio a fin.",
    services: [
      {
        title: "Sitios web y landing pages",
        description:
          "Sitios rápidos, bilingües y optimizados para buscadores que convierten visitas en pacientes y clientes.",
        items: ["Diseño responsivo", "SEO / AEO", "Multi-idioma", "Astro · Next.js"],
      },
      {
        title: "Web apps y sistemas a la medida",
        description:
          "Dashboards, sistemas administrativos, reservas y bolsas de trabajo que automatizan tu operación diaria.",
        items: ["React · Node.js", "APIs REST", "MySQL", "Integración QuickBooks"],
      },
      {
        title: "Aplicaciones móviles",
        description:
          "Apps Android e iOS con agenda de citas, notificaciones push y sincronización con tu sistema web.",
        items: ["Android · Kotlin", "iOS · Swift", "Firebase", "Push notifications"],
      },
      {
        title: "E-commerce y pagos",
        description:
          "Tiendas en línea y flujos de reserva con checkout seguro para cobrar desde el primer día.",
        items: ["Stripe", "Catálogo de productos", "Reservas y pagos", "Checkout seguro"],
      },
      {
        title: "Analítica y rendimiento",
        description:
          "Medición de resultados y optimización continua para que cada visita cuente.",
        items: ["Google Analytics", "Tag Manager", "Meta Pixel", "Core Web Vitals"],
      },
    ],
  },
  en: {
    label: "Services",
    title: "Everything your business needs to sell online.",
    description:
      "From a landing page that converts to a custom system wired into your operations. One developer, end to end.",
    services: [
      {
        title: "Websites & landing pages",
        description:
          "Fast, bilingual, search-optimized websites that turn visitors into patients and customers.",
        items: ["Responsive design", "SEO / AEO", "Multi-language", "Astro · Next.js"],
      },
      {
        title: "Web apps & custom systems",
        description:
          "Dashboards, admin systems, booking flows, and job boards that automate your daily operations.",
        items: ["React · Node.js", "REST APIs", "MySQL", "QuickBooks integration"],
      },
      {
        title: "Mobile apps",
        description:
          "Android and iOS apps with appointment booking, push notifications, and sync with your web platform.",
        items: ["Android · Kotlin", "iOS · Swift", "Firebase", "Push notifications"],
      },
      {
        title: "E-commerce & payments",
        description:
          "Online stores and booking flows with secure checkout so you can get paid from day one.",
        items: ["Stripe", "Product catalog", "Bookings & payments", "Secure checkout"],
      },
      {
        title: "Analytics & performance",
        description:
          "Results tracking and ongoing optimization so every visit counts.",
        items: ["Google Analytics", "Tag Manager", "Meta Pixel", "Core Web Vitals"],
      },
    ],
  },
};

export default function Services({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader index="02" label={c.label} title={c.title} description={c.description} />
        </Reveal>

        <ol className="mt-16 border-b border-line">
          {c.services.map((service, i) => (
            <li key={service.title} className="border-t border-line">
              <Reveal>
                <div className="group relative grid gap-5 py-9 md:grid-cols-12 md:gap-8 md:py-12">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
                  />
                  <span className="font-mono text-sm text-subtle transition-colors duration-300 group-hover:text-accent md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight transition-transform duration-500 ease-out-expo md:col-span-4 md:text-3xl md:group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted md:col-span-4">{service.description}</p>
                  <ul className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-line-strong group-hover:text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
