"use client";

import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "About", href: "#about", id: "about" },
  { label: "Journey", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Side navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[9990] flex flex-col items-end gap-3"
    >
      {navLinks.map(({ label, href, id }) => {
        const isActive = activeSection === id;
        const isHovered = hovered === id;

        return (
          <a
            key={id}
            href={href}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={label}
            className="flex items-center gap-2.5 group"
            style={{ textDecoration: "none" }}
          >
            {/* Label — slides in on hover */}
            <span
              style={{
                color: isActive ? "#00d4ff" : "#94a3b8",
                fontSize: "11px",
                fontFamily: "monospace",
                fontWeight: isActive ? "700" : "400",
                letterSpacing: "0.08em",
                opacity: isHovered || isActive ? 1 : 0,
                transform: isHovered || isActive ? "translateX(0)" : "translateX(8px)",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                textShadow: isActive ? "0 0 10px rgba(0,212,255,0.6)" : "none",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>

            {/* Dot */}
            <span
              style={{
                display: "block",
                width: isActive ? "12px" : isHovered ? "10px" : "6px",
                height: isActive ? "12px" : isHovered ? "10px" : "6px",
                borderRadius: "50%",
                background: isActive
                  ? "linear-gradient(135deg, #00d4ff, #a855f7)"
                  : isHovered
                  ? "rgba(0,212,255,0.6)"
                  : "rgba(148,163,184,0.4)",
                boxShadow: isActive
                  ? "0 0 12px rgba(0,212,255,0.8), 0 0 24px rgba(0,212,255,0.3)"
                  : isHovered
                  ? "0 0 8px rgba(0,212,255,0.5)"
                  : "none",
                border: isActive
                  ? "1.5px solid rgba(0,212,255,0.6)"
                  : "1.5px solid rgba(148,163,184,0.2)",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                flexShrink: 0,
              }}
            />
          </a>
        );
      })}
    </nav>
  );
};
