"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

type PolicyType = "privacy" | "terms" | "cookie";

const policies: Record<PolicyType, { title: string; subtitle: string; content: string }> = {
  privacy: {
    title: "Privacy Policy",
    subtitle: "Data protection & privacy commitment",
    content:
      "Your privacy is important to us. This portfolio collects only minimal and necessary information for communication purposes (such as when you send a message through the contact form or email). No third-party tracking, advertising pixels, or invasive tracking cookies are used. Any information submitted is treated with complete confidentiality and will never be shared or sold."
  },
  terms: {
    title: "Terms of Service",
    subtitle: "Usage guidelines & intellectual property",
    content:
      "By using this portfolio website, you agree to interact with it respectfully. The projects, code samples, design elements, and content showcased here represent intellectual property created by Muhammad Zain-ul-Abdin and respective project collaborators. Open-source repositories may be used under their specified licenses. You may not duplicate or misrepresent this portfolio as your own work."
  },
  cookie: {
    title: "Cookie Policy",
    subtitle: "Minimal & essential storage only",
    content:
      "This website utilizes strictly essential browser storage to preserve UI preferences (such as audio preferences or theme states) and ensure optimal navigation performance. We do not use advertising, marketing, or third-party behavioral tracking cookies. By continuing to browse this site, you consent to these essential cookies."
  }
};

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl pt-16 pb-10 px-6 md:px-16 overflow-hidden">
        {/* Subtle Ambient Glow Behind Footer */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
          {/* ── Top Row: Brand & Availability + Quick Actions ── */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/10">
            <div className="flex items-center gap-4">
              <a
                href="#home"
                className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 flex items-center justify-center text-white text-lg font-mono font-black shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:scale-105 transition-transform"
              >
                MZ
              </a>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {portfolioData.personal.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Work
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Full-Stack AI Engineer &middot; Founder of{" "}
                  <a
                    href="https://mznexora.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    MZ NEXORA
                  </a>
                </p>
              </div>
            </div>

            {/* Top Right Action Buttons */}
            <div className="flex items-center gap-3 self-stretch sm:self-auto">
              <a
                href={portfolioData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-emerald-500/30 hover:border-emerald-400 text-xs font-medium text-emerald-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.657.738 5.143 2.019 7.266L2.348 29.652l6.568-1.633A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                  <path d="M22.88 19.34c-.38-.19-2.24-1.1-2.59-1.23-.35-.13-.6-.19-.85.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.29-.82.1-.38-.19-1.61-.59-3.07-1.89-1.14-1.02-1.9-2.27-2.13-2.65-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.85-2.06-1.17-2.82-.31-.74-.63-.64-.85-.65h-.73c-.25 0-.66.09-1.01.47-.35.38-1.33 1.3-1.33 3.17 0 1.87 1.36 3.67 1.55 3.92.19.25 2.68 4.09 6.49 5.73.91.39 1.61.63 2.16.81.91.29 1.74.25 2.4.15.73-.11 2.24-.91 2.56-1.8.31-.88.31-1.64.22-1.8-.09-.16-.34-.25-.72-.44z" fill="#FFFFFF"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="group px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
              >
                <span>Top</span>
                <svg
                  className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Middle: 4 Columns Clean Professional Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
            {/* Col 1: Bio & Location (Span 4) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                // About The Engineer
              </span>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Specialized in building full-stack applications, autonomous AI agents, production RAG systems, and seamless cloud workflows with high architectural standards.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-1">
                <svg className="w-3.5 h-3.5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Faisalabad, Pakistan &middot; PKT (UTC+5)</span>
              </div>
            </div>

            {/* Col 2: Navigation Links (Span 2) */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                // Navigation
              </span>
              <ul className="space-y-2 text-xs text-slate-400">
                {["Home", "Projects", "Skills", "About", "Experience", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="text-slate-600 text-[10px]">&rsaquo;</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Featured Work (Span 3) */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                // Shipped Work
              </span>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a
                    href="https://paper-genai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block group"
                  >
                    <span className="text-slate-200 group-hover:text-cyan-300 font-medium">Paper GenAI</span>
                    <span className="block text-[10px] text-slate-500">Board Exam Paper Generator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://speed-lab.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block group"
                  >
                    <span className="text-slate-200 group-hover:text-cyan-300 font-medium">Speed Lab</span>
                    <span className="block text-[10px] text-slate-500">Network &amp; Diagnostics Suite</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://mznexora.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block group"
                  >
                    <span className="text-slate-200 group-hover:text-cyan-300 font-medium">MZ NEXORA Platform</span>
                    <span className="block text-[10px] text-slate-500">Agency &amp; Solutions Portal</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Connect & Socials (Span 3) */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                // Direct Connect
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="px-3.5 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-2.5"
                >
                  <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">{portfolioData.contact.email}</span>
                </a>

                {/* Social Icon Row */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={portfolioData.contact.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105 shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  <a
                    href={portfolioData.contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105 shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  <a
                    href={portfolioData.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-9 h-9 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/50 flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.657.738 5.143 2.019 7.266L2.348 29.652l6.568-1.633A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                      <path d="M22.88 19.34c-.38-.19-2.24-1.1-2.59-1.23-.35-.13-.6-.19-.85.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.29-.82.1-.38-.19-1.61-.59-3.07-1.89-1.14-1.02-1.9-2.27-2.13-2.65-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.85-2.06-1.17-2.82-.31-.74-.63-.64-.85-.65h-.73c-.25 0-.66.09-1.01.47-.35.38-1.33 1.3-1.33 3.17 0 1.87 1.36 3.67 1.55 3.92.19.25 2.68 4.09 6.49 5.73.91.39 1.61.63 2.16.81.91.29 1.74.25 2.4.15.73-.11 2.24-.91 2.56-1.8.31-.88.31-1.64.22-1.8-.09-.16-.34-.25-.72-.44z" fill="#FFFFFF"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Bar: Policies, Status & Copyright ── */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
            {/* Copyright */}
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">
                {portfolioData.personal.name}
              </span>
              . All rights reserved.
            </div>

            {/* Policy Modals Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
              <button
                onClick={() => setActivePolicy("privacy")}
                className="hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">&bull;</span>
              <button
                onClick={() => setActivePolicy("terms")}
                className="hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
              <span className="text-slate-700">&bull;</span>
              <button
                onClick={() => setActivePolicy("cookie")}
                className="hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
              >
                Cookie Policy
              </button>
            </div>

            {/* System Status / Built With */}
            <div className="flex items-center gap-2 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Next.js 16 &middot; TypeScript &middot; Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Professional Policy Modal ── */}
      {activePolicy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            onClick={() => setActivePolicy(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in"
          />

          {/* Modal Card */}
          <div className="relative z-10 w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-slate-950/95 border border-cyan-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,212,255,0.25)] backdrop-blur-2xl text-left">
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  // Legal &amp; Compliance
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {policies[activePolicy].title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {policies[activePolicy].subtitle}
                </p>
              </div>

              <button
                onClick={() => setActivePolicy(null)}
                aria-label="Close modal"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="text-sm text-slate-300 leading-relaxed space-y-4">
              <p>{policies[activePolicy].content}</p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">
                Last updated: 2026 &middot; Muhammad Zain-ul-Abdin
              </span>
              <button
                onClick={() => setActivePolicy(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-mono font-medium shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:scale-105 transition-all"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
