import type { Lang } from "@/lib/i18n";
import { CONTACT_EMAIL, GITHUB_URL } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { ArrowUpRight, GitHub, Mail } from "@/components/ui/Icons";
import Form from "@/components/Form";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";

const copy = {
  es: {
    label: "Contacto",
    title: "Hablemos de tu proyecto.",
    intro:
      "Cuéntame sobre tu negocio y lo que necesitas. Respondo personalmente a cada mensaje.",
    direct: "Contacto directo",
    based: "Ubicación",
    location: "Tijuana, Baja California — trabajo remoto con clientes en México y EE.UU.",
    next: "Qué sigue",
    steps: [
      "Reviso tu mensaje y te respondo con preguntas clave.",
      "Agendamos una llamada para definir alcance y objetivos.",
      "Recibes una propuesta clara con tiempos y costo.",
    ],
  },
  en: {
    label: "Contact",
    title: "Let's talk about your project.",
    intro:
      "Tell me about your business and what you need. I personally reply to every message.",
    direct: "Direct contact",
    based: "Location",
    location: "Tijuana, Baja California — working remotely with clients in Mexico and the US.",
    next: "What happens next",
    steps: [
      "I review your message and reply with a few key questions.",
      "We schedule a call to define scope and goals.",
      "You get a clear proposal with timeline and cost.",
    ],
  },
};

export default function ContactPage({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <main id="main" className="pt-12 md:pt-20">
      <Container>
        <div className="grid gap-16 border-t border-line pt-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>{c.label}</Eyebrow>
            <h1 className="mt-5 text-5xl font-medium leading-[1] tracking-tight text-balance md:text-7xl">
              <RevealText text={c.title} stagger={0.06} />
            </h1>
            <Reveal delay={250}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{c.intro}</p>
            </Reveal>

            <Reveal delay={350} className="mt-14 space-y-10">
              <div>
                <Eyebrow>{c.direct}</Eyebrow>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-3 text-lg transition-colors hover:text-accent">
                      <Mail className="h-5 w-5 text-muted" />
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg transition-colors hover:text-accent">
                      <GitHub className="h-5 w-5 text-muted" />
                      github.com/kevin180317
                      <ArrowUpRight className="h-4 w-4 text-muted" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Eyebrow>{c.based}</Eyebrow>
                <p className="mt-4 max-w-sm text-muted">{c.location}</p>
              </div>
              <div>
                <Eyebrow>{c.next}</Eyebrow>
                <ol className="mt-4 space-y-3">
                  {c.steps.map((step, i) => (
                    <li key={step} className="flex gap-4 text-muted">
                      <span className="font-mono text-sm text-accent">0{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="md:col-span-6 md:col-start-7">
            <Form lang={lang} />
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
