"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import React from "react";

const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

/**
 * LazyMotion: los componentes usan `m.*` y las features de animación se descargan
 * de forma diferida. `strict` falla si alguien usa `motion.*` por error.
 * MotionConfig respeta "reducir movimiento" del sistema.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
