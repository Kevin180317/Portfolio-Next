"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/components/ui/motion";

/** Frase que rota cada `interval` ms con transición vertical enmascarada. */
export default function RotatingWords({
  words,
  interval = 2600,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  return (
    <span className={`relative inline-flex overflow-hidden pb-[0.08em] align-bottom ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <m.span
          key={words[index]}
          className="inline-block whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          {words[index]}
        </m.span>
      </AnimatePresence>
    </span>
  );
}
