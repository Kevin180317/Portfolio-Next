"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  link: string;
}

function Projects({ projects }: { projects: Project[] }) {
  const { Lang } = useLanguage();
  const pathname = usePathname();
  const [filter, setFilter] = useState<string>("all");
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const projectTypes = Array.from(
    new Set(projects.map((p) => p.type).filter(Boolean))
  ) as string[];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  const cleanPath = pathname.replace(/^\/en/, "") || "/";
  const isHomepage = cleanPath === "/" || cleanPath === "/en";

  return (
    <div
      ref={ref}
      className={`px-6 mb-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header — homepage only */}
        {isHomepage && (
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-light text-orange-500">
              {Lang ? "Projects" : "Proyectos"}
            </h2>
            <Link
              href={Lang ? "/en/projects" : "/projects"}
              className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
            >
              <span>{Lang ? "view all" : "ver todos"}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        {/* Header + Filter — /projects page only */}
        {cleanPath === "/projects" && (
          <div className="mb-8">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="text-orange-500 text-xs tracking-widest uppercase mb-1">
                  {Lang ? "Portfolio" : "Portafolio"}
                </p>
                <h1 className="text-3xl font-bold text-white">
                  {Lang ? "All Projects" : "Todos los Proyectos"}
                </h1>
              </div>
              <span className="text-gray-600 text-sm">{filteredProjects.length}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {["all", ...projectTypes.reverse()].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                    filter === type
                      ? "bg-orange-500 text-white border-orange-500"
                      : "border-gray-600 text-gray-400 hover:border-orange-500 hover:text-white"
                  }`}
                >
                  {type === "all" ? (Lang ? "All" : "Todos") : type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {filteredProjects.map((project, i) => (
            <Link
              href={`${Lang ? "/en/projects" : "/projects"}${project.link}`}
              key={project.id}
              className="group relative bg-gray-900/40 border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 flex flex-col"
              style={{
                transitionDelay: isHomepage ? `${i * 80}ms` : "0ms",
              }}
            >
              {/* Image thumbnail */}
              {project.image && (
                <div className="relative w-full h-40 overflow-hidden bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {!project.image && (
                      <div className="w-7 h-7 bg-gray-800 rounded-md flex items-center justify-center text-xs">
                        📁
                      </div>
                    )}
                    <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors duration-200">
                      {project.name}
                    </h3>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors duration-200 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-800/60 border border-gray-700/50"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                        alt={tech.name}
                        className="w-3.5 h-3.5"
                      />
                      <span className="text-xs text-gray-400">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
