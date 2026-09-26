"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden select-none min-h-screen py-24 sm:py-28"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* ── Background Image of Modern Dev Studio at Night with City Bokeh ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-bg.jpg"
          alt="Developer Studio Interior at Night"
          fill
          priority
          className="object-cover object-center select-none"
        />

        {/* Seamless top & bottom transitions into adjacent sections */}
        <div
          className="absolute inset-x-0 top-0 h-36 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, #03050c 0%, rgba(3,5,12,0.6) 45%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, #03050c 0%, rgba(3,5,12,0.6) 45%, transparent 100%)",
          }}
        />

        {/*
          Directional shadow vignette:
          Darkens the left 60% where text & terminal sit for 100% razor-sharp contrast,
          while keeping the right 40% transparent to showcase the warm lamp, books, and glowing city bokeh!
        */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(3,5,12,0.92) 0%, rgba(3,5,12,0.82) 42%, rgba(3,5,12,0.3) 72%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Main Content Container ── */}
      {/*
        Alignment tailored to the image:
        Content is aligned to the left and center-left (max-w-4xl),
        leaving the right side completely clear to show the glowing desk lamp and city view.
      */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="lg:w-[62%] xl:w-[58%] flex flex-col gap-10 text-left">
          {/* Section Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">
                // Background &amp; Vision
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Full-Stack AI Engineer building high-availability architectures, autonomous agents, and resilient web applications.
            </p>
          </div>

          {/* Liquid Terminal Card & Engineering Standard */}
          <div className="flex flex-col gap-5">
            {/* Terminal Window */}
            <div className="rounded-3xl p-6 sm:p-7 border border-white/15 bg-slate-950/85 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-[0_0_8px_#f43f5e]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-[0_0_8px_#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_#10b981]" />
                </div>
                <span className="text-[11px] font-mono text-cyan-300">
                  zain@engineer ~ %
                </span>
              </div>

              {/* Code Content */}
              <div className="font-mono text-xs text-slate-300 space-y-2 leading-relaxed">
                <p className="text-cyan-400 font-bold">$ cat profile.json</p>
                <p>
                  <span className="text-indigo-300">&quot;name&quot;</span>:{" "}
                  <span className="text-emerald-300">&quot;Muhammad Zain-ul-Abdin&quot;</span>,
                </p>
                <p>
                  <span className="text-indigo-300">&quot;role&quot;</span>:{" "}
                  <span className="text-cyan-300">&quot;Full-Stack AI Engineer&quot;</span>,
                </p>
                <p>
                  <span className="text-indigo-300">&quot;company&quot;</span>:{" "}
                  <span className="text-amber-300">&quot;MZ NEXORA (mznexora.vercel.app)&quot;</span>,
                </p>
                <p>
                  <span className="text-indigo-300">&quot;location&quot;</span>:{" "}
                  <span className="text-emerald-300">&quot;Faisalabad, Pakistan 🇵🇰&quot;</span>,
                </p>
                <p>
                  <span className="text-indigo-300">&quot;education&quot;</span>: [
                  <br />
                  &nbsp;&nbsp;<span className="text-amber-300">&quot;AI &amp; Data Science @ SMIT&quot;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-amber-300">&quot;ICS @ Faisalabad Board&quot;</span>
                  <br />
                  ],
                </p>
                <p>
                  <span className="text-indigo-300">&quot;motto&quot;</span>:{" "}
                  <span className="text-emerald-300">&quot;Ship it. Iterate. Level up.&quot;</span>
                </p>
              </div>
            </div>
          </div>

          {/* Story & Biography */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Engineering with</span>
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h3>
            <p>{portfolioData.personal.about.intro}</p>
            <p>{portfolioData.personal.about.journey}</p>
            <p>{portfolioData.personal.about.focus}</p>
          </div>

          {/* 3 Core Capability Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Fast APIs</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                Async FastAPI backends and type-safe microservices.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl hover:border-indigo-500/40 transition-all hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">AI Agents</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                OpenAI SDK, agentic reasoning, and custom tools.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl hover:border-purple-500/40 transition-all hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">RAG &amp; Vector</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                Pinecone embeddings and semantic retrieval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
