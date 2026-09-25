"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.titles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroProgress = Math.min(Math.max(scrollY / 800, 0), 1);
  const heroOpacity = Math.max(0.3, 1 - heroProgress * 0.7);
  const heroScale = 1 - heroProgress * 0.06;
  const heroBlur = heroProgress * 4;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 md:px-16 overflow-hidden bg-cover bg-center bg-no-repeat transition-[filter] duration-75"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(5, 7, 13, 0.94) 0%, rgba(5, 7, 13, 0.82) 45%, rgba(5, 7, 13, 0.4) 100%), url('/hero-bg.jpg')`,
        transform: `scale(${heroScale})`,
        filter: `blur(${heroBlur}px)`,
        opacity: heroOpacity,
        transformOrigin: "center 40%",
      }}
    >
      {/* Ambient Neon Atmosphere Overlays */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Content: Left-Aligned Grid */}
      <div className="relative z-10 max-w-2xl flex flex-col items-start text-left mt-8 md:mt-12">
        {/* Hello World Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono tracking-widest text-cyan-300 uppercase mb-5 shadow-[0_0_15px_rgba(0,212,255,0.15)]">
          <span>HELLO WORLD</span>
          <span className="text-slate-500">&middot;</span>
          <span>I AM &mdash;</span>
        </div>

        {/* Big Name Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-5 leading-[1.08]">
          <span className="block text-slate-100 drop-shadow-[0_4px_24px_rgba(0,212,255,0.2)]">
            Muhammad
          </span>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(168,85,247,0.3)]">
            Zain-ul-Abdin
          </span>
        </h1>

        {/* Dynamic Typewriter Role Pill (Fixed height & zero layout shift) */}
        <div className="h-11 min-h-[44px] inline-flex items-center px-4 py-2 rounded-xl bg-slate-950/70 backdrop-blur-md border border-cyan-500/40 mb-6 shadow-[0_0_20px_rgba(0,212,255,0.15)] select-none">
          <span className="text-base sm:text-lg font-medium text-slate-100 font-mono tracking-wide whitespace-nowrap inline-block leading-none">
            {text || "\u00A0"}
          </span>
          <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-1.5 animate-pulse shadow-[0_0_8px_#00d4ff] flex-shrink-0" />
        </div>

        {/* Concise Pitch Statement */}
        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
          I build modern web applications, AI agents, RAG systems, and workflow automations. Founder of{" "}
          <a
            href="https://mznexora.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-semibold hover:underline"
          >
            MZ NEXORA
          </a>{" "}
          and AI &amp; Data Science student at{" "}
          <strong className="text-white font-bold">SMIT</strong> Faisalabad.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold tracking-wide flex items-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] hover:scale-105 transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>Explore Projects</span>
            <span>&rarr;</span>
          </a>

          <a
            href="/Muhammad_Zain_CV.pdf"
            download="Muhammad_Zain_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/15 hover:border-cyan-500/50 text-slate-200 hover:text-white text-xs font-medium tracking-wide flex items-center gap-2 backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download CV</span>
          </a>

          <a
            href="https://mznexora.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/15 hover:border-cyan-500/50 text-slate-200 hover:text-white text-xs font-medium tracking-wide flex items-center gap-1.5 backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <span>MZ NEXORA Agency</span>
            <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href={portfolioData.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/15 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 text-xs font-medium tracking-wide flex items-center gap-2 backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.657.738 5.143 2.019 7.266L2.348 29.652l6.568-1.633A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
              <path d="M22.88 19.34c-.38-.19-2.24-1.1-2.59-1.23-.35-.13-.6-.19-.85.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.29-.82.1-.38-.19-1.61-.59-3.07-1.89-1.14-1.02-1.9-2.27-2.13-2.65-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.85-2.06-1.17-2.82-.31-.74-.63-.64-.85-.65h-.73c-.25 0-.66.09-1.01.47-.35.38-1.33 1.3-1.33 3.17 0 1.87 1.36 3.67 1.55 3.92.19.25 2.68 4.09 6.49 5.73.91.39 1.61.63 2.16.81.91.29 1.74.25 2.4.15.73-.11 2.24-.91 2.56-1.8.31-.88.31-1.64.22-1.8-.09-.16-.34-.25-.72-.44z" fill="#FFFFFF"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* 3 Metric Glass Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">
          <div className="px-4 py-3.5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md flex items-center gap-3 hover:border-cyan-500/40 transition-all hover:scale-105">
            <div className="w-8 h-8 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16 8a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 font-mono">
                5+ Real Apps
              </span>
              <span className="block text-[10px] text-slate-400 font-mono">
                Shipped &amp; Tested
              </span>
            </div>
          </div>

          <div className="px-4 py-3.5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md flex items-center gap-3 hover:border-cyan-500/40 transition-all hover:scale-105">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-mono">
                SMIT Faisalabad
              </span>
              <span className="block text-[10px] text-slate-400 font-mono">
                AI &amp; Data Science
              </span>
            </div>
          </div>

          <div className="px-4 py-3.5 rounded-2xl bg-slate-950/70 border border-purple-500/30 backdrop-blur-md flex items-center gap-3 hover:border-purple-400/50 transition-all hover:scale-105">
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0 font-mono text-xs font-bold">
              &lt;/&gt;
            </div>
            <div>
              <span className="block text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-mono">
                Full-Stack AI
              </span>
              <span className="block text-[10px] text-slate-400 font-mono">
                Agents &middot; RAG &middot; APIs
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Seamless bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(3, 5, 12, 0.6) 50%, rgba(3, 5, 12, 1) 100%)",
        }}
      />

    </section>
  );
};
