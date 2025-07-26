"use client";
import Projects from "@/components/Projects";
import React from "react";
import {
  projectsEnglish,
  projectsSpanish,
} from "@/app/data/projectListComplete";
import { useLanguage } from "@/app/context/LanguageContext";
import Stack from "@/components/Stack";
function Page() {
  const { Lang } = useLanguage();

  const projects = Lang ? projectsEnglish : projectsSpanish;
  return (
    <main className="relative z-10">
      <Stack />
      <Projects projects={projects} />
    </main>
  );
}

export default Page;
