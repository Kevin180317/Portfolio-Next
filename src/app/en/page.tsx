"use client";

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Stack from "@/components/Stack";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import Certifications from "@/components/Certifications";
import { projectsEN, projectsES } from "@/app/data/projectsList";
import { useLanguage } from "@/app/context/LanguageContext";

function Page() {
  const { Lang } = useLanguage();
  const projects = Lang ? projectsEN : projectsES;

  return (
    <main className="relative z-10">
      <Hero />
      <Stats />
      <Stack />
      <Projects projects={projects} />
      <TestimonialsPreview />
      <Certifications />
    </main>
  );
}

export default Page;
