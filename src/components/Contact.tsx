"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const payload = new FormData();
      payload.append("access_key", "66800f8e-e641-4519-8c1b-170e662560d6");
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("message", formData.message.trim());

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden select-none min-h-screen py-24 sm:py-28"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* ── Background Image of Modern Executive Consultation Studio at Night ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact-bg.jpg"
          alt="Executive Developer Consultation Studio at Night"
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
              "linear-gradient(to top, #03050c 0%, rgba(3,5,12,0.7) 45%, transparent 100%)",
          }}
        />

        {/* Directional darkening on left side for crystal-clear readability, keeping right city lights & lamp visible */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(3,5,12,0.92) 0%, rgba(3,5,12,0.80) 48%, rgba(3,5,12,0.25) 78%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Main Content Container ── */}
      {/*
        Content card aligned to left/center-left,
        leaving the right 35-40% completely unobstructed to show the glowing brass lamp, notebook, and city skyline!
      */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="lg:w-[68%] xl:w-[64%]">
          <div className="p-7 sm:p-10 md:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
              {/* Left Column: Direct Connect & Socials */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">
                      // Direct Communication
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
                    Let&apos;s{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                      Connect
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    Looking for an AI engineer, custom web app, or workflow automation? Let&apos;s build something exceptional.
                  </p>

                  {/* Direct Quick Links */}
                  <div className="space-y-3">
                    {/* WhatsApp */}
                    <a
                      href={portfolioData.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 flex items-center gap-3 text-sm text-slate-200 hover:text-emerald-400 transition-all group"
                    >
                      <span className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.657.738 5.143 2.019 7.266L2.348 29.652l6.568-1.633A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                          <path d="M22.88 19.34c-.38-.19-2.24-1.1-2.59-1.23-.35-.13-.6-.19-.85.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.29-.82.1-.38-.19-1.61-.59-3.07-1.89-1.14-1.02-1.9-2.27-2.13-2.65-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.85-2.06-1.17-2.82-.31-.74-.63-.64-.85-.65h-.73c-.25 0-.66.09-1.01.47-.35.38-1.33 1.3-1.33 3.17 0 1.87 1.36 3.67 1.55 3.92.19.25 2.68 4.09 6.49 5.73.91.39 1.61.63 2.16.81.91.29 1.74.25 2.4.15.73-.11 2.24-.91 2.56-1.8.31-.88.31-1.64.22-1.8-.09-.16-.34-.25-.72-.44z" fill="#FFFFFF"/>
                        </svg>
                      </span>
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Instant Chat</span>
                        <span className="font-semibold text-slate-100 text-xs sm:text-sm">{portfolioData.contact.whatsappFormatted}</span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 flex items-center gap-3 text-sm text-slate-200 hover:text-cyan-400 transition-all group"
                    >
                      <span className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(0,212,255,0.3)]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Email Inquiry</span>
                        <span className="font-semibold text-slate-100 text-xs sm:text-sm">{portfolioData.contact.email}</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Social Icons Row */}
                <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-3">
                  <a
                    href={portfolioData.contact.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.57.23 2.73.11 3.02.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A10.5 10.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                    </svg>
                  </a>

                  <a
                    href={portfolioData.contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-cyan-500/40 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
                    </svg>
                  </a>

                  <a
                    href={portfolioData.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all hover:scale-105"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.657.738 5.143 2.019 7.266L2.348 29.652l6.568-1.633A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                      <path d="M22.88 19.34c-.38-.19-2.24-1.1-2.59-1.23-.35-.13-.6-.19-.85.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.29-.82.1-.38-.19-1.61-.59-3.07-1.89-1.14-1.02-1.9-2.27-2.13-2.65-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.85-2.06-1.17-2.82-.31-.74-.63-.64-.85-.65h-.73c-.25 0-.66.09-1.01.47-.35.38-1.33 1.3-1.33 3.17 0 1.87 1.36 3.67 1.55 3.92.19.25 2.68 4.09 6.49 5.73.91.39 1.61.63 2.16.81.91.29 1.74.25 2.4.15.73-.11 2.24-.91 2.56-1.8.31-.88.31-1.64.22-1.8-.09-.16-.34-.25-.72-.44z" fill="#FFFFFF"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="md:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-cyan-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-cyan-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        maxLength={120}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-cyan-300 mb-1.5">
                      Project Scope &amp; Details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or company requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-liquid-primary px-7 py-3 text-xs font-semibold tracking-wide flex items-center gap-2 disabled:opacity-50"
                    >
                      {status === "sending" ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    {status === "success" && (
                      <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 font-mono">
                        &check; Message received! I will reply promptly.
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
