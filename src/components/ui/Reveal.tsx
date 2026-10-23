"use client";

import React from "react";
import { m } from "framer-motion";
import { EASE_OUT_EXPO } from "./motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  /** Retraso en ms para escalonar elementos. */
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: delay / 1000 }}
    >
      {children}
    </m.div>
  );
}
