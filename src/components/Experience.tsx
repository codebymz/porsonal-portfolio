"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden select-none min-h-screen py-24 sm:py-28"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* ── Background Image of Tech Library & Research Study at Night ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/journey-bg.jpg"
          alt="Tech Library and Research Study at Night"
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
          Darkens the left 60% where the timeline and cards sit for 100% crystal-clear readability,
          while keeping the right 40% transparent to showcase the warm glowing library shelves & framed certificates!
        */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(3,5,12,0.92) 0%, rgba(3,5,12,0.82) 42%, rgba(3,5,12,0.25) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Main Content Container ── */}
      {/*
        Content is aligned to the left and center-left (lg:w-[62%]),
        leaving the right side completely clear to show the illuminated library shelves, certificates, and desk.
      */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="lg:w-[64%] xl:w-[60%] flex flex-col gap-10 text-left">
          {/* Section Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">
                // Progression &amp; Milestones
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              Education &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              The continuous engineering trajectory shaping my technical expertise across AI, backend engineering, and foundational sciences.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-cyan-500/30 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
            {portfolioData.experience.map((item, index) => (
              <div key={index} className="relative group">
                {/* Glowing Pulsing Timeline Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00d4ff] group-hover:scale-125 transition-transform duration-300 border-2 border-slate-950" />

                {/* Timeline Card */}
                <div className="rounded-3xl p-6 sm:p-7 bg-slate-950/85 border border-white/10 backdrop-blur-xl shadow-xl group-hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.01]">
                  {/* Period & Badge Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-indigo-300 mb-3 mt-1 font-mono">
                    {item.organization} {item.location && `· ${item.location}`}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
