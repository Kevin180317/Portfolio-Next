import { featuredProjects, projects, type Lang } from "@/app/data/projects";
import { localePath } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "@/components/ui/Icons";

const copy = {
  es: {
    label: "Trabajo seleccionado",
    title: "Proyectos para clínicas, marcas e industrias que quieren crecer.",
    all: "Ver los",
    projects: "proyectos",
  },
  en: {
    label: "Selected work",
    title: "Projects for clinics, brands, and industries ready to grow.",
    all: "View all",
    projects: "projects",
  },
};

export default function FeaturedWork({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const allLabel = `${c.all} ${projects.length} ${c.projects}`;

  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            index="01"
            label={c.label}
            title={c.title}
            action={
              <Button href={localePath(lang, "/projects")} variant="secondary">
                {allLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 120}>
              <ProjectCard project={project} lang={lang} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
