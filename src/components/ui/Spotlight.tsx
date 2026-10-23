"use client";

import React, { useRef } from "react";
import { m } from "framer-motion";

/**
 * Contenedor con brillo que sigue al cursor (fondo + borde) y feedback al tocar.
 * Los hijos pueden ser Server Components.
 */
export default function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <m.div
      ref={ref}
      onPointerMove={onPointerMove}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`group/spot relative h-full ${className}`}
    >
      <span
        aria-hidden="true"
        className="spotlight pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
      />
      <span
        aria-hidden="true"
        className="spotlight-border pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
      />
      <div className="relative z-10 h-full">{children}</div>
    </m.div>
  );
}
