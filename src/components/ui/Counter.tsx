"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const DURATION_MS = 1600;

// Equivalente a EASE_OUT_EXPO, sin cargar el motor de animación de motion
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Cuenta desde 0 hasta el número de `value` ("33+", "5.0") al entrar en pantalla. */
export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!el || !inView || !match || reduce) return;

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].split(".")[1]?.length ?? 0;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      el.textContent = `${(target * easeOutExpo(t)).toFixed(decimals)}${suffix}`;
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduce]);

  return <span ref={ref}>{value}</span>;
}
