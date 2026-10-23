"use client";

import { m } from "framer-motion";

/** Retícula + orbes de luz que se mueven lentamente detrás del hero. */
export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <m.div
        className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[120px] md:h-[44rem] md:w-[44rem]"
        animate={{ x: [0, -60, 20, 0], y: [0, 40, -20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="absolute -left-40 top-1/2 h-[26rem] w-[26rem] rounded-full bg-white/[0.04] blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
