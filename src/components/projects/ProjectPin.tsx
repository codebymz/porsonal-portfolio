"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolioData";
import { ProjectTooltip } from "./ProjectTooltip";

interface ProjectPinProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectPin: React.FC<ProjectPinProps> = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showTooltip = isHovered || isFocused;
  const color = project.pinColor || "#3b82f6";
  const floatDelay = `${(index * 0.55) % 2.8}s`;

  return (
    <div
      className="absolute"
      style={{
        left: `${project.pinPosition.x}%`,
        top: `${project.pinPosition.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: showTooltip ? 50 : 20,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* Floating wrapper */}
      <div
        style={{
          animation: "pinFloat 4s ease-in-out infinite",
          animationDelay: floatDelay,
        }}
        className="relative flex flex-col items-center cursor-pointer"
      >
        {/* ── Glow halo behind pin head ── */}
        <div
          className="absolute rounded-full pointer-events-none transition-all duration-300"
          style={{
            width: showTooltip ? "52px" : "36px",
            height: showTooltip ? "52px" : "36px",
            background: color,
            opacity: showTooltip ? 0.35 : 0.18,
            filter: "blur(12px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* ── Real Thumbtack SVG ── */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(project);
            }
          }}
          aria-label={`View details for ${project.title}`}
          aria-haspopup="dialog"
          className="relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
          style={{ focusRingColor: color } as React.CSSProperties}
        >
          <svg
            width={showTooltip ? "46" : "38"}
            height={showTooltip ? "64" : "54"}
            viewBox="0 0 38 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
              filter: showTooltip
                ? `drop-shadow(0 6px 18px ${color}99) drop-shadow(0 2px 6px rgba(0,0,0,0.8))`
                : `drop-shadow(0 4px 10px ${color}55) drop-shadow(0 2px 5px rgba(0,0,0,0.7))`,
            }}
          >
            {/* Pin body / rim */}
            <circle
              cx="19"
              cy="16"
              r="15"
              fill={color}
            />

            {/* Darker bottom arc for 3-D depth */}
            <ellipse
              cx="19"
              cy="24"
              rx="14"
              ry="7"
              fill="rgba(0,0,0,0.30)"
            />

            {/* Main dome gradient — sphere sheen */}
            <circle
              cx="19"
              cy="16"
              r="14"
              fill="url(#dome)"
            />

            {/* Specular highlight (top-left glint) */}
            <ellipse
              cx="13"
              cy="10"
              rx="5.5"
              ry="3.5"
              fill="rgba(255,255,255,0.48)"
              transform="rotate(-20 13 10)"
            />

            {/* Small center highlight dot */}
            <circle cx="15" cy="10" r="1.5" fill="rgba(255,255,255,0.55)" />

            {/* Needle */}
            <path
              d="M17.5 30 L19 54 L20.5 30 Z"
              fill="rgba(0,0,0,0.55)"
            />
            <path
              d="M18 30 L19 52 L20 30 Z"
              fill="url(#needle)"
            />

            <defs>
              {/* Dome gradient: light at top, dark at bottom */}
              <radialGradient
                id="dome"
                cx="38%"
                cy="30%"
                r="70%"
                fx="38%"
                fy="30%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.38)" />
                <stop offset="55%" stopColor={color} stopOpacity="0.92" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
              </radialGradient>

              {/* Needle: metallic silver taper */}
              <linearGradient id="needle" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#b0b0b0" />
                <stop offset="40%" stopColor="#e8e8e8" />
                <stop offset="100%" stopColor="#888" />
              </linearGradient>
            </defs>
          </svg>
        </button>

        {/* ── Label tag below pin ── */}
        <div
          onClick={() => onSelect(project)}
          className={`mt-1 px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide
            whitespace-nowrap select-none cursor-pointer transition-all duration-200
            backdrop-blur-sm border shadow-md
            ${showTooltip
              ? "opacity-100 scale-100"
              : "opacity-70 scale-95 hover:opacity-100 hover:scale-100"
            }
          `}
          style={{
            background: "rgba(5,8,20,0.82)",
            borderColor: showTooltip ? color : "rgba(255,255,255,0.12)",
            color: showTooltip ? color : "rgba(220,230,255,0.85)",
            boxShadow: showTooltip ? `0 0 10px ${color}44` : "none",
          }}
        >
          {project.title}
        </div>

        {/* ── Tooltip on hover ── */}
        {showTooltip && (
          <ProjectTooltip
            project={project}
            placement={project.pinPosition.tooltipPlacement || "right"}
          />
        )}
      </div>
    </div>
  );
};
