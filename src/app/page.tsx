import Nav from "@/components/Nav";
import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { projects } from "./data/projectsList";
function page() {
  return (
    <main className="relative z-10">
      <Nav />
      <Hero />
      <Projects projects={projects} />
    </main>
  );
}

export default page;
