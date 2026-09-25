"use client";

import React from "react";
import { Project } from "@/data/portfolioData";

interface ProjectTooltipProps {
  project: Project;
  placement?: "left" | "right" | "top" | "bottom";
}

export const ProjectTooltip: React.FC<ProjectTooltipProps> = ({
  project,
  placement = "right",
}) => {
  // Placement styling offsets
  const placementClasses = {
    right: "left-full ml-4 top-1/2 -translate-y-1/2 origin-left",
    left: "right-full mr-4 top-1/2 -translate-y-1/2 origin-right",
    top: "bottom-full mb-4 left-1/2 -translate-x-1/2 origin-bottom",
    bottom: "top-full mt-4 left-1/2 -translate-x-1/2 origin-top",
  }[placement];

  return (
    <div
      role="tooltip"
      className={`absolute z-30 pointer-events-none w-72 sm:w-80 p-4 rounded-2xl ${placementClasses} animate-in fade-in zoom-in-95 duration-200`}
      style={{
        background: "linear-gradient(145deg, rgba(8, 14, 28, 0.94) 0%, rgba(13, 20, 38, 0.92) 100%)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(0, 212, 255, 0.35)",
        boxShadow:
          "0 20px 45px rgba(0, 0, 0, 0.75), 0 0 25px rgba(0, 212, 255, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
      }}
    >
      {/* Top Header Badge */}
      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {project.category}
        </span>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          {project.status}
        </span>
      </div>

      {/* Project Title */}
      <h4 className="text-base font-bold text-white tracking-tight flex items-center justify-between gap-2">
        <span>{project.title}</span>
        <span className="text-cyan-400 text-xs font-mono">↗</span>
      </h4>

      {/* 2-line Short Description */}
      <p className="text-xs text-slate-300 mt-1.5 mb-3 leading-relaxed line-clamp-2">
        {project.shortDescription}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-cyan-200">
        {project.techStack.slice(0, 4).map((tech, idx) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-slate-200 text-[10px]"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="text-[10px] text-slate-400 font-mono">
            +{project.techStack.length - 4} more
          </span>
        )}
      </div>

      {/* Interaction prompt hint */}
      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="text-cyan-300/80">Click pin to open specs</span>
        <span className="text-slate-500">ESC to close</span>
      </div>
    </div>
  );
};
