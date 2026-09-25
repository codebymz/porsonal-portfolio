"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

// Color palettes per category for mobile cards
const CATEGORY_COLORS: Record<
  string,
  {
    pin: string;
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
  }
> = {
  Frontend: {
    pin: "#00d4ff",
    border: "rgba(0, 212, 255, 0.4)",
    glow: "rgba(0, 212, 255, 0.25)",
    badgeBg: "rgba(0, 212, 255, 0.12)",
    badgeText: "#38bdf8",
  },
  "Backend & APIs": {
    pin: "#818cf8",
    border: "rgba(129, 140, 248, 0.4)",
    glow: "rgba(129, 140, 248, 0.25)",
    badgeBg: "rgba(129, 140, 248, 0.12)",
    badgeText: "#a5b4fc",
  },
  Databases: {
    pin: "#34d399",
    border: "rgba(52, 211, 153, 0.4)",
    glow: "rgba(52, 211, 153, 0.25)",
    badgeBg: "rgba(52, 211, 153, 0.12)",
    badgeText: "#6ee7b7",
  },
  "AI & Data Science": {
    pin: "#38bdf8",
    border: "rgba(56, 189, 248, 0.4)",
    glow: "rgba(56, 189, 248, 0.25)",
    badgeBg: "rgba(56, 189, 248, 0.12)",
    badgeText: "#7dd3fc",
  },
  "Automation & Tools": {
    pin: "#c084fc",
    border: "rgba(192, 132, 252, 0.4)",
    glow: "rgba(192, 132, 252, 0.25)",
    badgeBg: "rgba(192, 132, 252, 0.12)",
    badgeText: "#d8b4fe",
  },
  "Vector Search": {
    pin: "#22d3ee",
    border: "rgba(34, 211, 238, 0.4)",
    glow: "rgba(34, 211, 238, 0.25)",
    badgeBg: "rgba(34, 211, 238, 0.12)",
    badgeText: "#67e8f9",
  },
};

// Physical Pushpin Component for Mobile Cards
const Pushpin: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 26,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: `drop-shadow(0 3px 8px ${color}88) drop-shadow(0 1px 3px rgba(0,0,0,0.8))`,
    }}
  >
    <line
      x1="12"
      y1="16"
      x2="12"
      y2="22"
      stroke="#e2e8f0"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="11" r="5" fill={color} />
    <circle cx="10.5" cy="9" r="1.5" fill="#ffffff" opacity="0.8" />
  </svg>
);

export const Skills: React.FC = () => {
  const [activeModalCat, setActiveModalCat] = useState<SkillCategory | null>(
    null
  );

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden select-none"
      style={{
        scrollMarginTop: "80px",
        minHeight: "100vh",
      }}
    >
      {/* ── Background Image of the Studio Workspace & Skills Board ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/skills-board.jpg"
          alt="Skills Board Workspace"
          fill
          priority
          className="object-cover object-center select-none"
        />

        {/* Soft, natural blends at top and bottom to seamlessly transition sections */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, #03050c 0%, rgba(3,5,12,0.5) 45%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-36 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, #03050c 0%, rgba(3,5,12,0.5) 45%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Clean Left-Aligned Header (Positioned high above board cards) ── */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 pt-5 sm:pt-7 pb-1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-300 mt-1 max-w-lg font-normal leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Core engineering stack across Agentic AI, modern web, and backend architectures.
          </p>
        </div>
      </div>

      {/* ── Desktop Spacer — Board displays clean without any empty glowing hover boxes ── */}
      <div className="hidden lg:block relative z-10" style={{ minHeight: "780px" }} />

      {/* ── MOBILE & TABLET FALLBACK (Screens < lg) ── */}
      {/*
        Ensures comfortable reading on mobile devices.
      */}
      <div className="lg:hidden relative z-20 max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.skills.map((cat, idx) => {
            const colors =
              CATEGORY_COLORS[cat.title] || CATEGORY_COLORS["Frontend"];

            return (
              <div
                key={idx}
                className="relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(3, 7, 18, 0.95) 100%)",
                  border: `1px solid ${colors.border}`,
                  boxShadow: `0 12px 30px -10px rgba(0,0,0,0.8), 0 0 16px ${colors.glow}`,
                  backdropFilter: "blur(16px)",
                }}
                onClick={() => setActiveModalCat(cat)}
              >
                {/* Pin on top center of mobile card */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 pointer-events-none">
                  <Pushpin color={colors.pin} size={26} />
                </div>

                {/* Card Title & Badge */}
                <div className="flex items-center justify-between mt-2 mb-4">
                  <h3 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.pin }}
                    />
                    {cat.title}
                  </h3>
                  <span
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-white/10 uppercase tracking-wider"
                    style={{
                      backgroundColor: colors.badgeBg,
                      color: colors.badgeText,
                    }}
                  >
                    {cat.badge}
                  </span>
                </div>

                {/* Skill Chips Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: colors.pin }}
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile Modal Details ── */}
      {activeModalCat && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setActiveModalCat(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-slate-900/95 border border-white/15 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalCat(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition-colors"
            >
              &times;
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    (CATEGORY_COLORS[activeModalCat.title] || CATEGORY_COLORS["Frontend"]).pin,
                }}
              />
              <h3 className="text-2xl font-black text-white">
                {activeModalCat.title}
              </h3>
            </div>

            <div className="space-y-2.5 mt-4">
              {activeModalCat.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between"
                >
                  <span className="font-semibold text-white text-sm">
                    {skill.name}
                  </span>
                  {skill.description && (
                    <span className="text-xs text-slate-400">
                      {skill.description}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModalCat(null)}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
