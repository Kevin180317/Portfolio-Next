import Nav from "@/components/Nav";
import React from "react";
import DockDemo from "@/components/Dock";
import Hero from "@/components/Hero";

function page() {
  return (
    <main className="relative z-10">
      <Nav />
      <Hero />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
        <DockDemo />
      </div>
    </main>
  );
}

export default page;
