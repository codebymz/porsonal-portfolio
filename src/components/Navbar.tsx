"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setIsClosing(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 420);
  };

  const handleToggle = () => {
    if (!menuOpen) openMenu();
    else if (!isClosing) closeMenu();
  };

  const menuOverlay = (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-center items-center p-6 ${
        isClosing ? "menu-overlay-exit" : "menu-overlay-enter"
      }`}
      style={{
        background: "linear-gradient(135deg, rgba(5,7,13,0.93) 0%, rgba(10,16,30,0.90) 50%, rgba(15,5,30,0.93) 100%)",
        backdropFilter: "blur(32px) saturate(180%)",
        WebkitBackdropFilter: "blur(32px) saturate(180%)",
      }}
    >
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)", filter: "blur(50px)" }} />

      {/* MZ Logo */}
      <div className="menu-logo-enter text-center mb-10">
        <span className="text-4xl font-black text-cyan-400 font-mono tracking-widest"
          style={{ textShadow: "0 0 30px rgba(0,212,255,0.9), 0 0 60px rgba(0,212,255,0.4)" }}>
          MZ
        </span>
        <div className="h-px mt-2 mx-auto"
          style={{ width: "80px", background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.7), transparent)" }} />
        <p className="text-xs text-slate-400 font-mono mt-2">
          Muhammad Zain-ul-Abdin &middot; Portfolio
        </p>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col gap-3 text-center max-w-sm w-full">
        {navLinks.map((link, i) => (
          <a key={link.href} href={link.href} onClick={closeMenu}
            className="menu-link-enter py-3.5 px-8 rounded-2xl text-lg font-semibold text-slate-100 font-mono"
            style={{
              animationDelay: `${0.08 + i * 0.07}s`,
              background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08)",
              transition: "all 0.28s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(0,212,255,0.35)";
              el.style.background = "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(139,92,246,0.08))";
              el.style.boxShadow = "0 0 20px rgba(0,212,255,0.15), inset 0 1px 1px rgba(255,255,255,0.15)";
              el.style.transform = "translateY(-2px) scale(1.02)";
              el.style.color = "#67e8f9";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.07)";
              el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))";
              el.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.08)";
              el.style.transform = "translateY(0) scale(1)";
              el.style.color = "#f1f5f9";
            }}
          >
            {link.label}
          </a>
        ))}

        <a href="https://mznexora.vercel.app" target="_blank" rel="noopener noreferrer"
          onClick={closeMenu}
          className="menu-link-enter py-3 px-6 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 mt-3 hover:scale-105 transition-transform duration-300"
          style={{
            animationDelay: `${0.08 + navLinks.length * 0.07}s`,
            background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(139,92,246,0.25))",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(0,212,255,0.4)",
            color: "#a5f3fc",
            boxShadow: "0 0 20px rgba(0,212,255,0.15), inset 0 1px 1px rgba(255,255,255,0.15)",
          }}
        >
          <span>Visit MZ NEXORA Agency</span>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`navbar-glass-header fixed top-0 left-0 right-0 z-[99999] px-6 md:px-16 py-5 flex items-center justify-between${
          scrolled ? " scrolled" : ""
        }`}
      >
        {/* MZ Logo */}
        <a href="#home"
          className="text-2xl md:text-3xl font-black tracking-wider text-cyan-400 font-mono drop-shadow-[0_0_15px_rgba(0,212,255,0.7)] group">
          <span className="group-hover:scale-105 inline-block transition-transform duration-300">MZ</span>
        </a>

        {/* Hamburger / X Button */}
        <button
          onClick={handleToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="navbar-liquid-btn w-11 h-11 rounded-2xl flex flex-col items-center justify-center"
          style={{ gap: "6px" }}
        >
          <span style={{
            display: "block", width: "20px", height: "2px", borderRadius: "2px",
            background: menuOpen && !isClosing ? "linear-gradient(90deg,#00d4ff,#a855f7)" : "linear-gradient(90deg,#e2e8f0,rgba(0,212,255,0.8))",
            transform: menuOpen && !isClosing ? "translateY(8px) rotate(45deg)" : "none",
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s",
          }} />
          <span style={{
            display: "block", width: "20px", height: "2px", borderRadius: "2px",
            background: "linear-gradient(90deg,#e2e8f0,rgba(0,212,255,0.8))",
            opacity: menuOpen && !isClosing ? 0 : 1,
            transition: "opacity 0.3s ease",
          }} />
          <span style={{
            display: "block", width: "20px", height: "2px", borderRadius: "2px",
            background: menuOpen && !isClosing ? "linear-gradient(90deg,#a855f7,#00d4ff)" : "linear-gradient(90deg,#e2e8f0,rgba(0,212,255,0.8))",
            transform: menuOpen && !isClosing ? "translateY(-8px) rotate(-45deg)" : "none",
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s",
          }} />
        </button>
      </header>

      {mounted && menuOpen && createPortal(menuOverlay, document.body)}
    </>
  );
};
