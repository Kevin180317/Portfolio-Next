"use client";

import React from "react";
import { m } from "framer-motion";
import { EASE_OUT_EXPO } from "./motion";

/** Texto que aparece palabra por palabra con efecto de máscara. */
export default function RevealText({
  text,
  delay = 0,
  stagger = 0.045,
  className = "",
}: {
  text: string;
  /** Retraso en segundos. */
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <m.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <m.span
              className="inline-block"
              variants={{
                hidden: { y: "105%" },
                visible: { y: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
              }}
            >
              {word}
            </m.span>
          </span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </m.span>
  );
}
