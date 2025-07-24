"use client";
import Link from "next/link";
import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "macoti.com.mx",
      description: "Landing Page",
      technologies: [
        { name: "Next.js", color: "text-green-400" },
        { name: "TypeScript", color: "text-blue-400" },
        { name: "Tailwind", color: "text-cyan-400" },
        { name: "PostgreSQL", color: "text-indigo-400" },
      ],
    },
    {
      id: 2,
      name: "Transtime.com",
      description:
        "Landing page for the safety, occupational health, environment and quality company",
      technologies: [
        { name: "Astro", color: "text-purple-400" },
        { name: "Tailwind", color: "text-cyan-400" },
      ],
    },
    {
      id: 3,
      name: "PrometheusTij.com",
      description:
        "Videogame inspired by Only Up, where you jump and overcome obstacles",
      technologies: [
        { name: "Unity", color: "text-gray-400" },
        { name: "C#", color: "text-purple-400" },
      ],
    },
    {
      id: 4,
      name: "Akerlundhinteriorismo.com",
      description: "Tracking international shipments by DHL and import quotes",
      technologies: [
        { name: "React", color: "text-blue-400" },
        { name: "Node.js", color: "text-green-400" },
      ],
    },
  ];

  return (
    <div className="px-6 mb-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300 hover:bg-gray-800/80 cursor-pointer"
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

              {/* Project Description */}
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    <div
                      className={`w-3 h-3 rounded-full ${tech.color.replace("text-", "bg-")}`}
                    ></div>
                    <span className={`text-sm ${tech.color}`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
