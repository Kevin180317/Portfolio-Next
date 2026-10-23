import type { Technology } from "@/app/data/projects";

export default function TechBadge({ tech }: { tech: Technology }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/icons/${tech.icon}-${tech.color}.svg`}
        alt=""
        width={14}
        height={14}
        className="h-3.5 w-3.5"
        loading="lazy"
      />
      {tech.name}
    </span>
  );
}
