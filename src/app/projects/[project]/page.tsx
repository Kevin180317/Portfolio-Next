import Nav from "@/components/Nav";
import { projectsComplete } from "@/app/data/projectListComplete";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 🔍 Buscar proyecto por slug
function getProjectBySlug(slug: string) {
  return projectsComplete.find((project) => {
    const projectSlug = project.link.replace("/", ""); // "/transtime" → "transtime"
    return projectSlug === slug;
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  // Await the params Promise
  const { project } = await params;

  const matchedProject = getProjectBySlug(project);

  if (!matchedProject) {
    notFound();
  }

  return (
    <div>
      <Nav />
      <main className="container mx-auto px-4 py-8">
        {/* Header del proyecto */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/projects" className="text-orange-500 hover:text-white">
              Projects
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-white">{matchedProject.name}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📦</span>
            <p className="text-gray-300">{matchedProject.description}</p>
          </div>
        </div>

        {/* Imagen del proyecto */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          {matchedProject.image && (
            <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={matchedProject.image}
                alt={matchedProject.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* Información adicional */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Tecnologías Utilizadas</h2>
            <div className="grid grid-cols-2 gap-4">
              {matchedProject.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-gray-900 p-4 rounded-lg flex items-center gap-3"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                    alt={tech.name}
                    className="w-5 h-5 brightness-75 hover:brightness-100 transition-all duration-200"
                  />
                  <span className="text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Detalles del Proyecto</h2>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">Tipo:</span>
                  <span className="ml-2 text-white">{matchedProject.type}</span>
                </div>
                <div>
                  <span className="text-gray-400">Estado:</span>
                  <span className="ml-2 text-green-400">Completado</span>
                </div>
              </div>

              {matchedProject.externalLink && (
                <div className="mt-6">
                  <a
                    href={matchedProject.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Ver Proyecto Live
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return projectsComplete.map((project) => ({
    project: project.link.replace("/", ""),
  }));
}
