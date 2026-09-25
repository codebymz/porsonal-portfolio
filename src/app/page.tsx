import React from "react";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { CustomCursor } from "@/components/CustomCursor";
import { OpeningExperience } from "@/components/OpeningExperience";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SideNav } from "@/components/SideNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden" suppressHydrationWarning>
      {/* 1. Liquid Organic Background & Dynamic Mouse Spotlight */}
      <BackgroundEffects />

      {/* 2. Precision Liquid Trailing Cursor */}
      <CustomCursor />

      {/* 3. Cinematic Opening Sequence */}
      <OpeningExperience />

      {/* 4. Floating Glass Navbar */}
      <Navbar />

      {/* 5. Fixed Side Navigation Dots */}
      <SideNav />

      {/* 5. Hero Section */}
      <Hero />

      {/* 6. Projects (Workspace Pin Board) */}
      <Projects />

      {/* 7. Skills & Tech Stack */}
      <Skills />

      {/* 8. About Me */}
      <About />

      {/* 9. Experience & Education Timeline */}
      <Experience />

      {/* 10. Contact & Socials */}
      <Contact />

      {/* 11. Minimalist Footer */}
      <Footer />
    </main>
  );
}
