"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape & Lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const images = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : [project.image];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-300"
    >
      {/* Dark Blurred Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl transition-opacity cursor-pointer"
      />

      {/* Main Liquid-Glass Modal Card */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_40px_rgba(0,212,255,0.2)] flex flex-col text-left"
        style={{
          background: "linear-gradient(155deg, rgba(10, 16, 32, 0.96) 0%, rgba(6, 10, 22, 0.98) 100%)",
        }}
      >
        {/* Top Accent Gradient Bar */}
        <div
          className="h-1.5 w-full flex-shrink-0"
          style={{
            background: "linear-gradient(90deg, #00d4ff 0%, #38bdf8 30%, #818cf8 70%, #c084fc 100%)",
          }}
        />

        {/* Modal Header Bar */}
        <div className="p-6 md:px-8 pb-4 flex items-center justify-between border-b border-white/10 sticky top-0 bg-slate-950/70 backdrop-blur-md z-20">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-cyan-300 hover:text-white transition-all duration-200"
          >
            <span>&larr;</span>
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              {project.category}
            </span>
            <span
              className={`text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                project.status === "Live"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  project.status === "Live" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              {project.status}
            </span>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="w-8 h-8 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white flex items-center justify-center transition-colors ml-1"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2
              id="project-modal-title"
              className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
            >
              {project.title}
            </h2>
            <p className="text-sm md:text-base font-mono text-cyan-400/90 mt-2 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Screenshot / Gallery Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900/60 aspect-video w-full group shadow-2xl">
            <Image
              src={images[activeImageIndex]}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Gallery thumbnails if multiple */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 overflow-x-auto p-1.5 bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/10 w-fit">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-10 rounded-lg overflow-hidden border transition-all ${
                      idx === activeImageIndex
                        ? "border-cyan-400 ring-2 ring-cyan-400/40 scale-105"
                        : "border-white/20 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Full Project Description */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
              // Overview &amp; Architecture
            </h3>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Solved & Contribution Dual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.problemsSolved && (
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xs font-mono uppercase text-amber-300 mb-2 flex items-center gap-2 font-semibold">
                  <span>⚡ Problem Solved</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problemsSolved}
                </p>
              </div>
            )}

            {project.contribution && (
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xs font-mono uppercase text-cyan-300 mb-2 flex items-center gap-2 font-semibold">
                  <span>🛠️ My Engineering Contribution</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            )}
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
                // Key Features &amp; Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/50 border border-white/10 flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <span className="text-cyan-400 font-bold mt-0.5">&#10003;</span>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
              // Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-mono text-cyan-200 bg-cyan-500/10 border border-cyan-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold tracking-wide flex items-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:scale-105 transition-all"
                >
                  <span>Launch Live Demo</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 text-slate-200 hover:text-white text-xs font-medium tracking-wide flex items-center gap-2 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.57.23 2.73.11 3.02.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A10.5 10.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                  </svg>
                  <span>View Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              [ Close Window ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
