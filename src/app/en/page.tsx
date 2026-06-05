"use client";

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import { projectsEN, projectsES } from "@/app/data/projectsList";
import { useLanguage } from "@/app/context/LanguageContext";

function Page() {
  const { Lang } = useLanguage();

  const projects = Lang ? projectsEN : projectsES;

  return (
    <main className="relative z-10">
      <Hero />
      <Projects projects={projects} />
      <Certifications />
    </main>
  );
}

export default Page;
