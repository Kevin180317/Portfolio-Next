"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { ArrowLeft } from "@/components/ui/Icons";

export default function NotFound() {
  const pathname = usePathname();
  const isEN = pathname?.startsWith("/en");

  return (
    <main id="main">
      <Container className="flex min-h-[70vh] flex-col justify-center py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Error 404</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1] tracking-tight md:text-8xl">
          {isEN ? "This page doesn't exist." : "Esta página no existe."}
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted">
          {isEN
            ? "It may have been moved or the link is incorrect."
            : "Puede que haya sido movida o que el enlace sea incorrecto."}
        </p>
        <Link
          href={isEN ? "/en" : "/"}
          className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-accent-fill px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-fill-hover"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          {isEN ? "Back to home" : "Volver al inicio"}
        </Link>
      </Container>
    </main>
  );
}
