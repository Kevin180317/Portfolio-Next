import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import React from "react";
import { projectsComplete } from "../data/projectListComplete";
function page() {
  return (
    <main className="relative z-10">
      <Nav />
      <Projects projects={projectsComplete} />
    </main>
  );
}

export default page;
