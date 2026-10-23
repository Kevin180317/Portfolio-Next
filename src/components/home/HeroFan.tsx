"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  m,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { ArrowUpRight } from "@/components/ui/Icons";
import { EASE_OUT_EXPO } from "@/components/ui/motion";

export interface FanItem {
  slug: string;
  name: string;
  category: string;
  image: string;
  host?: string;
  href: string;
}

const AUTOPLAY_MS = 3800;

// Posición de cada tarjeta según su profundidad (0 = al frente)
const slots = [
  { x: "0%", y: "0%", rotate: -2, scale: 1, opacity: 1, zIndex: 40 },
  { x: "16%", y: "-6%", rotate: 7, scale: 0.9, opacity: 0.85, zIndex: 30 },
  { x: "-16%", y: "-6%", rotate: -9, scale: 0.9, opacity: 0.7, zIndex: 20 },
  { x: "0%", y: "-13%", rotate: 2, scale: 0.8, opacity: 0.4, zIndex: 10 },
];

function BrowserCard({ item, priority }: { item: FanItem; priority: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_40px_80px_-20px_rgb(0_0_0/0.8)]">
      <div className="flex h-7 items-center gap-1.5 border-b border-line bg-surface-2 px-3 md:h-8">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        {item.host && (
          <span className="mx-auto max-w-[60%] truncate rounded-md bg-bg px-3 py-0.5 font-mono text-[10px] text-subtle md:text-[11px]">
            {item.host}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] bg-bg">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover object-top"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function HeroFan({ items, label }: { items: FanItem[]; label: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const n = items.length;

  const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);
  const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);

  useEffect(() => {
    if (paused || !inView || reduce) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, paused, inView, reduce, next]);

  // Inclinación 3D siguiendo el mouse (solo desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
    setPaused(false);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  const current = items[active];

  return (
    <div
      ref={ref}
      className="relative"
      onPointerMove={onPointerMove}
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={onPointerLeave}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="[perspective:1400px]">
        <m.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative mx-auto aspect-[16/12] w-full max-w-xl"
        >
          {items.map((item, i) => {
            const depth = (i - active + n) % n;
            const slot = slots[Math.min(depth, slots.length - 1)];
            const isFront = depth === 0;
            return (
              <m.div
                key={item.slug}
                className={`absolute inset-x-[8%] top-[16%] ${isFront ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
                initial={{ opacity: 0, y: 60, rotate: 0, scale: 0.9 }}
                animate={slot}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 22,
                  mass: 0.9,
                  opacity: { duration: 0.5 },
                }}
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={isFront ? onDragEnd : undefined}
                onClick={() => !isFront && setActive(i)}
                aria-hidden={!isFront}
              >
                <BrowserCard item={item} priority={i === 0} />
              </m.div>
            );
          })}
        </m.div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-6">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={current.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="min-w-0"
          >
            <Link
              href={current.href}
              className="group inline-flex min-h-11 items-center gap-3"
            >
              <span className="font-mono text-xs text-accent">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="truncate">
                <span className="text-muted">{current.category} · </span>
                <span className="font-medium">{current.name}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </m.div>
        </AnimatePresence>

        <div className="flex shrink-0 items-center gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${item.name} (${i + 1}/${n})`}
              aria-current={i === active}
              className="flex h-11 items-center"
            >
              <span className="relative block h-0.5 w-6 overflow-hidden rounded-full bg-line-strong md:w-8">
                {i === active && (
                  <m.span
                    key={`${active}-${paused}`}
                    className="absolute inset-0 origin-left bg-accent"
                    initial={{ scaleX: reduce || paused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: reduce || paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
