import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projectName, projects } from "@/app/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ project: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ project: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { project } = await params;
  const p = getProject(project);
  if (!p) return {};
  return pageMetadata({
    lang: "es",
    path: `/projects/${p.slug}`,
    title: projectName(p, "es"),
    description: p.description.es,
    image: p.image,
  });
}

export default async function Page({ params }: Params) {
  const { project } = await params;
  const p = getProject(project);
  if (!p) notFound();

  return <ProjectDetail project={p} lang="es" />;
}
