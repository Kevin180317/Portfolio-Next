"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
  const urlActual = usePathname();

  // Estado para filtrar por tipo
  const [filter, setFilter] = useState<string>("all");

  // Lista de tipos únicos + "all"
  const projectTypes = Array.from(
    new Set(projects.map((p) => p.type).filter(Boolean))
  ) as string[];

  // Filtramos los proyectos según el filtro
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className="px-6 mb-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        {urlActual === "/" && (
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-2 text-gray-400">
              <h2 className="text-2xl font-light text-orange-500">Projects</h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <span>view all</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
        {urlActual === "/projects" && (
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            {/* Botón para ver todos */}
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1 rounded-full border transition-colors duration-200 ${
                filter === "all"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-600 text-gray-400 hover:bg-orange-500 hover:text-white"
              }`}
            >
              All
            </button>

            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1 rounded-full border transition-colors duration-200 ${
                  filter === type
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-600 text-gray-400 hover:bg-orange-500 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Link
              href={`/projects${project.link}`}
              key={project.id}
              className="group relative bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300 hover:bg-gray-800/80 cursor-pointer"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center">
                    <span className="text-sm">📁</span>
                  </div>
                  <h3 className="text-white font-medium group-hover:text-orange-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              {project.image && (
                <Image
                  src={project.image}
                  width={300}
                  height={300}
                  alt={project.name}
                />
              )}
              {/* Project Description */}
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                      alt={tech.name}
                      className="w-5 h-5 brightness-75 hover:brightness-100 transition-all duration-200"
                    />
                    <span className={`text-sm transition-opacity duration-200`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
