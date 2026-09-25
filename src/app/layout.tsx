import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Zain-ul-Abdin — Full-Stack AI Engineer",
  description:
    "Portfolio of Muhammad Zain-ul-Abdin — Full-Stack AI Engineer. I build modern web applications, AI agents, RAG systems, and workflow automations.",
  keywords: [
    "Muhammad Zain-ul-Abdin",
    "Full-Stack AI Engineer",
    "AI Agents",
    "RAG Systems",
    "Workflow Automations",
    "FastAPI",
    "Next.js",
    "Python Developer",
    "SMIT Faisalabad",
    "PostgreSQL"
  ],
  authors: [{ name: "Muhammad Zain-ul-Abdin" }],
  creator: "Muhammad Zain-ul-Abdin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zainulabdin-project.vercel.app",
    title: "Muhammad Zain-ul-Abdin — Backend & Full-Stack Developer",
    description:
      "Backend Developer and AI & Data Science student at SMIT. Real-world FastAPI, PostgreSQL & AI projects.",
    siteName: "Muhammad Zain-ul-Abdin Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zain-ul-Abdin — Backend & Full-Stack Developer",
    description:
      "Backend Developer and AI & Data Science student at SMIT. Real-world FastAPI, PostgreSQL & AI projects."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
