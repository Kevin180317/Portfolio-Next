import { projectsSpanish } from "@/app/data/projectListComplete";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function getProjectBySlug(slug: string) {
  return projectsSpanish.find(
    (p) => p.link.replace("/", "") === slug
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const p = getProjectBySlug(project);
  if (!p) notFound();

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8">
        <Link href="/projects" className="text-orange-500 hover:text-orange-400 transition-colors">
          Proyectos
        </Link>
        <span className="text-gray-600">›</span>
        <span className="text-gray-400">{p.name}</span>
      </nav>

      {/* Title block */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          {p.type && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wide">
              {p.type}
            </span>
          )}
          <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
            Completado
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{p.name}</h1>
        <p className="text-gray-300 leading-relaxed">{p.description}</p>
      </div>

      {/* Hero image */}
      {p.image && (
        <div className="relative w-full rounded-2xl overflow-hidden mb-10 border border-gray-800">
          <Image
            src={p.image}
            alt={p.name}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      )}

      {/* Technologies */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">Tecnologías utilizadas</h2>
        <div className="flex flex-wrap gap-3">
          {p.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-3 py-2 border border-gray-700 rounded-lg hover:border-orange-500/50 transition-all duration-200 bg-gray-900/30"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                alt={tech.name}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-800">
        {p.externalLink && (
          <a
            href={p.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            Ver proyecto live
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-orange-500 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Ver todos los proyectos
        </Link>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return projectsSpanish.map((p) => ({
    project: p.link.replace("/", ""),
  }));
}
