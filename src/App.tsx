import React from "react";
import Hero from "./assets/Hero";
import Skills from "./assets/Skills";
import Projects from "./assets/Projects";
import CTA from "./assets/CTA";
import Footer from "./assets/Footer";

import "./App.css";

export default function App(): React.JSX.Element {
  return (
    <main className="font-sans bg-[#fff9ed] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Projects />
       <CTA />
      </div>
      <Footer />
    </main>
  );
}
