"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, m } from "framer-motion";
import {
  categoryLabels,
  categoryOrder,
  type Category,
  type Project,
} from "@/app/data/projects";
import type { Lang } from "@/lib/i18n";
import ProjectCard from "@/components/ProjectCard";
import { EASE_OUT_EXPO } from "@/components/ui/motion";

type Filter = Category | "all";

/** Grid de proyectos con filtro por industria (página /projects). */
function Projects({ projects, lang }: { projects: Project[]; lang: Lang }) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const map = new Map<Category, number>();
    projects.forEach((p) => map.set(p.category, (map.get(p.category) ?? 0) + 1));
    return map;
  }, [projects]);

  const filters: Filter[] = ["all", ...categoryOrder.filter((c) => counts.has(c))];
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const select = (f: Filter) => {
    setFilter(f);
    // Lleva el inicio del grid a la vista si el usuario ya bajó
    const grid = document.getElementById("projects-grid");
    if (grid && grid.getBoundingClientRect().top < 0) {
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-6 border-b border-line bg-bg/85 py-3 backdrop-blur-xl md:top-20 md:mx-0 md:border-0 md:bg-transparent md:py-4 md:backdrop-blur-none">
        <LayoutGroup id="project-filters">
          <div
            role="toolbar"
            aria-label={lang === "en" ? "Filter by industry" : "Filtrar por industria"}
            className="no-scrollbar fade-x flex gap-2 overflow-x-auto px-6 md:flex-wrap md:overflow-visible md:px-0 md:[mask-image:none]"
          >
            {filters.map((f) => {
              const active = filter === f;
              const count = f === "all" ? projects.length : counts.get(f);
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => select(f)}
                  aria-pressed={active}
                  className={`relative inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm transition-colors duration-300 ${
                    active
                      ? "border-fg text-bg"
                      : "border-line bg-bg/60 text-muted hover:border-line-strong hover:text-fg"
                  }`}
                >
                  {active && (
                    <m.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-fg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">
                    {f === "all" ? (lang === "en" ? "All" : "Todos") : categoryLabels[f][lang]}
                  </span>
                  <span className={`relative font-mono text-[11px] ${active ? "text-bg/60" : "text-subtle"}`}>
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </div>

      <m.div
        id="projects-grid"
        layout
        className="mt-8 grid scroll-mt-36 gap-6 md:mt-10 md:grid-cols-2 md:gap-8"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, i) => (
            <m.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: (i % 2) * 0.08 }}
            >
              <ProjectCard project={project} lang={lang} index={i} priority={i < 2} />
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>
    </div>
  );
}

export default Projects;
