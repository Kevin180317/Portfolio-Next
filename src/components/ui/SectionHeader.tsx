import React from "react";
import RevealText from "./RevealText";

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.2em] text-subtle ${className}`}>
      {children}
    </p>
  );
}

export default function SectionHeader({
  index,
  label,
  title,
  description,
  action,
  as: Heading = "h2",
}: {
  index?: string;
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <Eyebrow>
          {index && <span className="text-accent">({index})</span>} {label}
        </Eyebrow>
        <Heading className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl">
          {typeof title === "string" ? <RevealText text={title} /> : title}
        </Heading>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
