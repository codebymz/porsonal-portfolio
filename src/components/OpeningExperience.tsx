"use client";

import React, { useEffect, useState } from "react";

export const OpeningExperience: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [animState, setAnimState] = useState<"enter" | "shine" | "exit" | "done">("enter");

  useEffect(() => {
    // Check if user already saw opening in this session
    try {
      const hasSeen = sessionStorage.getItem("mz_opening_seen");
      if (hasSeen === "true") {
        setVisible(false);
        setAnimState("done");
        return;
      }
    } catch {
      // ignore storage errors
    }

    // Step 1: Initial fade in
    const t1 = setTimeout(() => {
      setAnimState("shine");
    }, 800);

    // Step 2: Exit sequence
    const t2 = setTimeout(() => {
      setAnimState("exit");
    }, 2200);

    // Step 3: Complete & unmount
    const t3 = setTimeout(() => {
      setAnimState("done");
      setVisible(false);
      try {
        sessionStorage.setItem("mz_opening_seen", "true");
      } catch {}
    }, 2800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        skipOpening();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const skipOpening = () => {
    setAnimState("done");
    setVisible(false);
    try {
      sessionStorage.setItem("mz_opening_seen", "true");
    } catch {}
  };

  if (!visible || animState === "done") {
    return null;
  }

  return (
    <div
      onClick={skipOpening}
      role="dialog"
      aria-label="Opening sequence"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] cursor-pointer transition-opacity duration-700 ease-out select-none ${
        animState === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Soft radial glow behind Hello */}
        <div
          className={`absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl transition-transform duration-1000 ${
            animState === "shine" ? "scale-125 opacity-100" : "scale-75 opacity-40"
          }`}
        />

        {/* Hello Text */}
        <h1
          className={`relative text-6xl md:text-8xl font-semibold tracking-tight transition-all duration-1000 ease-out ${
            animState === "enter"
              ? "opacity-0 scale-95 blur-sm translate-y-3"
              : "opacity-100 scale-100 blur-0 translate-y-0"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-cyan-200 to-indigo-300">
            Hello
          </span>
        </h1>

        <p className="mt-4 text-xs font-mono text-slate-500 tracking-widest uppercase animate-pulse">
          Muhammad Zain-ul-Abdin
        </p>
      </div>

      {/* Subtle skip indicator */}
      <div className="absolute bottom-10 flex items-center gap-2 text-xs text-slate-600 hover:text-slate-400 transition-colors">
        <span>Click or press ESC to skip</span>
      </div>
    </div>
  );
};
