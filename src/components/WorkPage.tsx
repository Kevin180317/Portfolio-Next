import { projects, type Lang } from "@/app/data/projects";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Projects from "@/components/Projects";

const copy = {
  es: {
    label: "Trabajo",
    title: "Proyectos que construyen negocios digitales.",
    description: (n: number) =>
      `${n} sitios, web apps y apps móviles para el sector médico, dental, industrial, consultoría y comercio.`,
  },
  en: {
    label: "Work",
    title: "Projects that build digital businesses.",
    description: (n: number) =>
      `${n} websites, web apps, and mobile apps for medical, dental, industrial, consulting, and commerce clients.`,
  },
};

export default function WorkPage({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <main id="main" className="pt-12 md:pt-20">
      <Container>
        <SectionHeader as="h1" label={c.label} title={c.title} description={c.description(projects.length)} />
        <div className="mt-14">
          <Projects projects={projects} lang={lang} />
        </div>
      </Container>
    </main>
  );
}
