"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolioData";
import { ProjectPin } from "./projects/ProjectPin";
import { ProjectDetails } from "./projects/ProjectDetails";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = portfolioData.projects;

  return (
    <section
      id="projects"
      className="relative w-full overflow-x-clip"
      style={{
        scrollMarginTop: "80px",
        minHeight: "100vh",
        marginTop: "-6rem",
      }}
    >
      {/* ── Full-section background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/workspace-bg.jpg"
          alt="Developer Workspace Cork Board"
          fill
          priority
          className="object-cover object-center select-none"
        />
        {/* Very light vignette — only on edges, keep board visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(3,5,12,0.65) 0%, rgba(3,5,12,0.08) 18%, rgba(3,5,12,0.08) 68%, rgba(3,5,12,0.7) 100%), linear-gradient(to bottom, rgba(3,5,12,1) 0%, rgba(3,5,12,0.6) 12%, rgba(3,5,12,0.0) 22%, rgba(3,5,12,0.0) 62%, rgba(3,5,12,0.88) 100%)",
          }}
        />
      </div>

      {/* ── Top Header — floats above image ── */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 pt-32 pb-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Engineered{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Hover any pin to preview. Click to open full specifications.
          </p>
        </div>
      </div>

      {/* ── CORK BOARD ZONE — precisely overlays the board in the image ── */}
      {/*
        Background image (1376×768) displayed as object-cover in a ~100vh section.
        Cork board in image:
          Left: ~17%   Right: ~68%   Top: ~5%   Bottom: ~68%
        These % values position the overlay exactly on the board.
      */}
      <div
        className="absolute z-10"
        style={{
          left: "17%",
          right: "32%",   /* = 100 - 68 */
          top: "18%",
          bottom: "32%",  /* = 100 - 68 */
        }}
      >
        {/* Render all pins relative to this board zone */}
        {filteredProjects.map((project, idx) => (
          <ProjectPin
            key={project.id}
            project={project}
            index={idx}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* ── Spacer so section has proper height ── */}
      <div className="relative z-0" style={{ minHeight: "100vh" }} />

      {/* ── Seamless bottom transition to blend with Skills section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(3, 5, 12, 0.5) 40%, rgba(3, 5, 12, 0.95) 85%, #03050c 100%)",
        }}
      />

      {/* ── Modal ── */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
