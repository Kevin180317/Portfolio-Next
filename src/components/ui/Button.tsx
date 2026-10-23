import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary";

const base =
  "group inline-flex items-center justify-center gap-2 min-h-12 rounded-full px-6 py-3 text-sm font-medium transition-[color,background-color,border-color,transform] duration-300 active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary: "bg-accent-fill text-white hover:bg-accent-fill-hover",
  secondary: "border border-line-strong text-fg hover:border-fg",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Abre en otra pestaña (sitios externos, PDFs). */
  external?: boolean;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
