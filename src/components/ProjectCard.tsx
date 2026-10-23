import Image from "next/image";
import Link from "next/link";
import {
  categoryLabels,
  kindLabels,
  projectName,
  type Project,
} from "@/app/data/projects";
import { localePath, type Lang } from "@/lib/i18n";
import Spotlight from "@/components/ui/Spotlight";
import { ArrowUpRight } from "@/components/ui/Icons";

const MAX_TECH_ICONS = 4;

export default function ProjectCard({
  project,
  lang,
  index,
  priority = false,
}: {
  project: Project;
  lang: Lang;
  index: number;
  priority?: boolean;
}) {
  const name = projectName(project, lang);
  const host = project.url?.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const icons = project.tech.slice(0, MAX_TECH_ICONS);
  const extra = project.tech.length - icons.length;

  return (
    <Spotlight className="rounded-2xl">
      <Link
        href={localePath(lang, `/projects/${project.slug}`)}
        className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-2 transition-colors duration-500 hover:border-line-strong md:p-2.5"
      >
        {/* Vista tipo navegador */}
        <div className="overflow-hidden rounded-xl border border-line bg-bg">
          <div className="flex h-8 items-center gap-1.5 border-b border-line px-3">
            <span className="h-2 w-2 rounded-full bg-line-strong transition-colors duration-500 group-hover:bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-line-strong transition-colors delay-75 duration-500 group-hover:bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-line-strong transition-colors delay-150 duration-500 group-hover:bg-[#28c840]" />
            <span className="mx-auto max-w-[65%] truncate font-mono text-[11px] text-subtle">
              {host ?? `${project.slug}.app`}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={name}
                fill
                priority={priority}
                sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.06]"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-3xl font-medium tracking-tight text-subtle">
                {name}
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-3 pb-3 pt-5 md:px-4 md:pb-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted">
                {categoryLabels[project.category][lang]}
              </span>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight />
            </span>
          </div>

          <h3 className="mt-4 text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-2xl">
            {name}
          </h3>
          <p className="mb-5 mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description[lang]}
          </p>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4">
            <div className="flex items-center gap-1.5">
              {icons.map((tech) => (
                <span
                  key={tech.name}
                  title={tech.name}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/icons/${tech.icon}-${tech.color}.svg`}
                    alt={tech.name}
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5"
                    loading="lazy"
                  />
                </span>
              ))}
              {extra > 0 && (
                <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-line bg-bg px-1.5 font-mono text-[10px] text-subtle">
                  +{extra}
                </span>
              )}
            </div>
            <span className="truncate text-right text-xs text-subtle">
              {project.kind.map((k) => kindLabels[k][lang]).join(" · ")}
            </span>
          </div>
        </div>
      </Link>
    </Spotlight>
  );
}
