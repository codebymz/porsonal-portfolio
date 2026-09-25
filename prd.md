# Product Requirements Document

## mzainulabdin.xyz — Personal Developer Portfolio

| | |
|---|---|
| **Owner** | Zain Ul Abdin |
| **Role** | Backend Developer |
| **Project** | MZAINULABDIN.xyz |
| **Document type** | Product Requirements Document (PRD) |
| **Intended audience** | Product owner, designers, and AI coding agents implementing the frontend |
| **Status** | Draft v1.0 — ready for implementation planning |

> **How to use this document.** This PRD is written so it can be handed directly to an AI coding agent. Requirements use "must" (mandatory), "should" (strongly recommended) and "may" (optional). Where a value is given (colors, sizes, durations), treat it as the default starting point that can be tuned during implementation without changing the intent.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Goals](#2-project-goals)
3. [Target Audience](#3-target-audience)
4. [Design Philosophy](#4-design-philosophy)
5. [Brand Identity](#5-brand-identity)
6. [Opening Experience](#6-opening-experience)
7. [Hero Section](#7-hero-section)
8. [Navigation](#8-navigation)
9. [About Section](#9-about-section)
10. [Skills Section](#10-skills-section)
11. [Work / Projects Section](#11-work--projects-section)
12. [Experience / Journey](#12-experience--journey)
13. [Contact Section](#13-contact-section)
14. [Footer](#14-footer)
15. [Animation System](#15-animation-system)
16. [Glassmorphism System](#16-glassmorphism-system)
17. [Typography System](#17-typography-system)
18. [Color System](#18-color-system)
19. [Responsive Design](#19-responsive-design)
20. [Accessibility](#20-accessibility)
21. [Performance](#21-performance)
22. [SEO](#22-seo)
23. [Technical Architecture](#23-technical-architecture)
24. [Project Structure](#24-project-structure)
25. [Content Requirements](#25-content-requirements)
26. [Future Scalability](#26-future-scalability)
27. [Non-Goals](#27-non-goals)
28. [Success Criteria](#28-success-criteria)
29. [Implementation Phases](#29-implementation-phases)
30. [Final Design Principle](#30-final-design-principle)

---

## 1. Executive Summary

**mzainulabdin.xyz** is the personal developer portfolio of **Zain Ul Abdin**, a backend developer focused on backend development, APIs, automation, and software development.

The site has one job: to present Zain as a credible, skilled, and memorable professional, and to make it easy for visitors to view his work and get in touch.

**Vision.** A premium, modern, dark-first portfolio website whose visual language is *inspired by* the aesthetics of macOS Tahoe: elegant typography, translucent glass surfaces, soft gradients, subtle borders, large rounded corners, layered depth, refined shadows, and fluid transitions.

**What it is.** A professional, single-page (section-based) portfolio website with a short cinematic opening ("Hello"), a confident hero, and clear sections for About, Skills, Work, Experience, and Contact.

**What it is not.** It is not a desktop operating system, not a macOS clone, and not a Dock/Finder/window-based interface. The inspiration is limited to visual aesthetics only. The result must look like an original, professional developer portfolio.

**Key outcomes.**

- A strong first impression within the first three seconds.
- Clear presentation of projects, skills, and background.
- Fast, accessible, and responsive on every device.
- A maintainable codebase that can grow into a blog, CMS, and backend-connected features.

---

## 2. Project Goals

| # | Goal | Description | How it is achieved |
|---|------|-------------|--------------------|
| G1 | Professional developer identity | Present Zain as a serious backend developer | Clear headline, focused copy, consistent branding |
| G2 | Strong first impression | Make the first seconds memorable | Cinematic "Hello" opening, polished hero |
| G3 | Showcase development projects | Make projects the centerpiece | Premium, readable project cards with links and previews |
| G4 | Showcase technical skills | Communicate expertise honestly | Grouped, confirmed-only skills section |
| G5 | Present experience and background | Give context and credibility | Clean timeline / structured experience |
| G6 | Provide contact options | Make it effortless to reach Zain | Email, GitHub, LinkedIn, optional form, strong final CTA |
| G7 | Premium, memorable UX | Feel refined, not generic | Glass system, subtle motion, strong typography |
| G8 | Performance and responsiveness | Fast on real devices and networks | Minimal JS, optimized assets, mobile-first layout |

**Priority order when goals conflict:** usability and accessibility → performance → clarity of content → visual polish → decorative effects.

---

## 3. Target Audience

| Audience | What they want | What the site must give them |
|----------|----------------|------------------------------|
| **Recruiters** | Quick assessment of skills and fit | Scannable skills, clear role, resume link, easy contact |
| **Potential clients** | Proof of ability and reliability | Strong project showcase, professional tone, clear CTA |
| **Developers** | Technical depth and code quality | GitHub links, tech stacks per project, clean writing |
| **Technical professionals** | Evidence of engineering thinking | Project descriptions with problem/solution framing |
| **Companies** | Confidence in professionalism | Polished design, performance, accessibility |
| **Collaborators** | A way to connect and work together | Contact options, open-to-collaboration message |

**Primary visitor behavior to design for:** most visitors spend under a minute. The site must communicate *who Zain is, what he builds, and how to contact him* within that time.

---

## 4. Design Philosophy

The design is **professional first, aesthetic second**.

| Principle | Meaning in practice |
|-----------|---------------------|
| **Professional** | Content-led, restrained, credible; no gimmicks |
| **Minimal** | Generous whitespace, few elements per view, one clear focus at a time |
| **Premium** | High-quality spacing, refined shadows, careful details |
| **Modern** | Current layout patterns, fluid type scale, contemporary UI |
| **Developer-focused** | Monospace accents, tech tags, code-flavored details used sparingly |
| **Dark-first** | Dark theme is the primary and default design; light mode is out of scope for v1 |
| **macOS Tahoe-inspired** | Borrow the *feeling*: layered translucency, soft light, large radii — never the desktop metaphor |
| **Glassmorphism** | Subtle, readable translucent surfaces (see Section 16) |
| **Subtle motion** | Motion supports comprehension and delight, never distracts |
| **Strong typography** | Type carries the design; clear scale and hierarchy |
| **Visual hierarchy** | One primary action per section; consistent emphasis rules |

**Inspiration is limited to:** elegant typography, smooth animations, premium glassmorphism, translucent surfaces, soft gradients, subtle borders, large rounded corners, layered depth, refined shadows, fluid transitions, minimal UI, premium dark interface, and subtle lighting effects.

**Explicitly avoided:** fake desktop, Finder-style layouts, Dock navigation, macOS windows as page structure, Apple/macOS cloning, and any Apple proprietary assets (logos, wallpapers, icons, SF Pro font files).

---

## 5. Brand Identity

| Attribute | Definition |
|-----------|------------|
| **Website name** | MZAINULABDIN.xyz |
| **Personal name** | Zain Ul Abdin |
| **Professional identity** | Backend Developer — backend development, APIs, automation, software development |
| **Tone of voice** | Confident, clear, calm, direct. Professional but human. No buzzword stuffing, no exaggeration |
| **Visual personality** | Refined, quiet, precise, modern; "engineered elegance" |
| **Typography direction** | Clean geometric/neo-grotesque sans for UI and headings; monospace for technical accents |
| **Color direction** | Deep near-black base, cool neutral grays, one restrained accent (blue-violet range) with soft gradients |

**Writing guidelines**

- Use first person ("I build…") for About and hero copy.
- Prefer short sentences and concrete claims over vague superlatives.
- Never claim skills, employers, or achievements that cannot be verified.

**Logo / wordmark.** A simple text wordmark ("MZ" monogram or "Zain Ul Abdin") in the primary font. No complex logo is required for v1.

---

## 6. Opening Experience

The site opens with a short cinematic sequence that transitions into the hero.

### 6.1 Sequence

| Step | Time (approx.) | Event |
|------|----------------|-------|
| 1 | 0 – 0.4 s | Completely black screen (`#000`) |
| 2 | 0.4 – 1.2 s | The word **"Hello"** fades in smoothly (opacity + slight blur-to-sharp + subtle upward drift) |
| 3 | 1.2 – 2.0 s | Elegant typography animation: soft gradient sweep / light pass across the letters |
| 4 | 2.0 – 2.8 s | "Hello" gently fades and scales slightly; black background dissolves |
| 5 | 2.8 – 3.4 s | Hero section reveals with staggered entrance |

**Total target duration:** ≤ 3.5 seconds.

### 6.2 Requirements

- **Minimal.** Only the word "Hello" on black. No logos, loaders, or progress bars.
- **Fast enough not to annoy.** Must be skippable (click, tap, or key press) and must not replay on every internal navigation.
- **Smooth.** Use opacity, transform, and filter blur only; no layout-triggering properties.
- **Premium and professional.** Elegant typeface, restrained gradient, no bounce or novelty effects.
- **Performance-friendly.** No large assets; text-only; must not delay Largest Contentful Paint of the hero beyond target (see Section 21).
- **Original.** Must not imitate or copy any Apple boot or setup animation. Use a distinct type treatment and timing.

### 6.3 Behavior rules

| Rule | Requirement |
|------|-------------|
| First visit | Play the full sequence |
| Repeat visit in same session | Skip automatically (`sessionStorage` flag) |
| `prefers-reduced-motion: reduce` | Skip animation; show hero immediately with a simple fade |
| JavaScript disabled | Hero content is visible immediately; opening overlay is never blocking |
| Skip control | Click/tap anywhere or press `Esc`/`Enter`; a visually subtle "Skip" affordance is available to keyboard users |
| Screen readers | Overlay is `aria-hidden` and must not trap focus; main content is available in DOM from the start |
| Scroll | Body scroll is locked only during the sequence, then restored |

### 6.4 Suggested implementation notes

- Render the overlay as a fixed full-screen element above the page with `pointer-events` enabled only while active.
- Hide it with `visibility: hidden` after completion and remove it from the DOM.
- Prefer CSS/Framer Motion transitions; do not add a heavy animation library for this alone.

---

## 7. Hero Section

### 7.1 Content direction

```text
Hello, I'm
Zain Ul Abdin

Backend Developer

I design and build reliable backend systems, APIs, and automation
workflows — focused on clean, maintainable software.

[ View My Work ]   [ Contact Me ]
```

> The description above is placeholder direction. Final copy must be supplied or approved by Zain (see Section 25).

### 7.2 Requirements

| Element | Requirement |
|---------|-------------|
| Greeting | Small line "Hello, I'm" in secondary text color |
| Name | Largest text on the page; strong weight; tight letter spacing |
| Role | "Backend Developer" in accent or gradient-tinted text |
| Description | 1–2 sentences, maximum ~160 characters, focused on backend, APIs, automation, software development |
| Primary CTA | **View My Work** — scrolls smoothly to the Work section |
| Secondary CTA | **Contact Me** — scrolls smoothly to the Contact section |
| Visual layer | Soft animated background lighting (blurred gradient orbs), subtle noise/grain, optional glass card element |
| Motion | Staggered text reveal, slow ambient light drift, subtle CTA hover effects |
| Scroll cue | Optional minimal scroll indicator |
| Height | Fills the viewport (`min-height: 100svh`) |

### 7.3 Optional hero elements

- A small glass "status" pill (e.g., "Open to opportunities") — only if Zain confirms it is accurate.
- A subtle code-flavored detail (e.g., monospace tag line) used sparingly.
- A profile image is **not required** in the hero; if used, it must be in a glass frame and lazily optimized.

---

## 8. Navigation

### 8.1 Items

| Label | Target |
|-------|--------|
| Home | `#home` (hero) |
| About | `#about` |
| Work | `#work` |
| Skills | `#skills` |
| Experience | `#experience` |
| Contact | `#contact` |

> Section order on the page may follow the navigation order above or place Skills before Work; this must be confirmed during Phase 2 and kept consistent between nav and page.

### 8.2 Behavior

| Feature | Requirement |
|---------|-------------|
| **Style** | Floating, horizontally centered glass bar with large rounded corners; simple text links. Must look like a website header, not a Dock or menu bar |
| **Sticky behavior** | Fixed at the top; slightly compresses and increases blur/opacity after scrolling past ~40 px; hides on scroll down and reappears on scroll up (optional) |
| **Active section indicator** | Determined with `IntersectionObserver`; active link shows a soft pill highlight or animated underline |
| **Smooth scrolling** | Anchor clicks scroll smoothly with offset for the fixed header (`scroll-margin-top`); disabled when reduced motion is requested |
| **Hover states** | Subtle background lift and text color change, 150–200 ms |
| **Focus states** | Clearly visible focus ring (see Section 20) |
| **Mobile navigation** | Menu button opens a full-width glass panel/sheet with large tap targets; closes on link tap, `Esc`, or outside tap; focus is trapped while open and restored on close |
| **Brand link** | Wordmark on the left returns to top |
| **CTA in nav** | Optional "Contact" button styled as the primary action |

### 8.3 Constraints

- No Dock, no traffic-light window buttons, no menu-bar clone, no icon-magnification effects.
- Navigation must remain usable without JavaScript (plain anchor links).

---

## 9. About Section

**Purpose:** a concise, human introduction.

### 9.1 Content structure

| Block | Description | Length |
|-------|-------------|--------|
| Developer introduction | Who Zain is and what he does | 2–3 sentences |
| Technical interests | Backend architecture, APIs, automation, and related areas | 1–2 sentences or short tags |
| Development focus | What he currently builds and cares about | 1–2 sentences |
| Professional background | Short summary of journey/education/experience | 2–3 sentences |
| Working philosophy | A short personal principle (e.g., clarity, reliability, maintainability) | 1 sentence, optionally styled as a pull quote |

### 9.2 Layout

- Two-column on desktop: text on one side; a glass card with key facts (location, focus, availability) or profile image on the other.
- Single column on mobile.
- Maximum text width ~65 characters per line for readability.
- **Avoid excessive text.** Total About copy should stay under roughly 150–180 words.

---

## 10. Skills Section

### 10.1 Rules

> **Only include technologies that are actually confirmed by Zain during implementation.** The list below is a *candidate* list, not a final claim.

**Candidate technologies:** Python, FastAPI, REST APIs, SQL, Git, GitHub, Linux, n8n, Automation, Backend Development.

### 10.2 Presentation

| Aspect | Requirement |
|--------|-------------|
| Grouping | Group by category, e.g., **Languages & Frameworks**, **Data**, **Tools & Workflow**, **Automation** |
| Visual style | Glass cards or pill chips with icon (optional) and label |
| No fake metrics | Do **not** use percentage bars or star ratings; they are misleading and non-informative |
| Icons | Use original or properly licensed icons; keep them monochrome or lightly tinted for consistency |
| Motion | Staggered reveal on scroll; subtle hover lift; no continuous looping animation |
| Data source | Skills defined in a typed data file (see Section 24) so they can be edited without touching components |

### 10.3 Suggested category model

| Category | Example items (pending confirmation) |
|----------|--------------------------------------|
| Languages & Frameworks | Python, FastAPI |
| APIs & Data | REST APIs, SQL |
| Tools & Workflow | Git, GitHub, Linux |
| Automation | n8n, Automation |
| Focus areas | Backend Development |

---

## 11. Work / Projects Section

This is **one of the most important sections** of the website.

### 11.1 Project card requirements

Each project card must support:

| Field | Required | Notes |
|-------|----------|-------|
| Project name | Yes | Short and clear |
| Short description | Yes | 1–2 sentences: what it does and why it matters |
| Technologies | Yes | Tag list, max ~6 shown |
| Project image / preview | Yes | Screenshot, diagram, or generated preview; consistent aspect ratio (16:10 recommended) |
| GitHub link | Yes (if public) | Opens in new tab with `rel="noopener noreferrer"` |
| Live demo link | When available | Hidden when not provided |
| Hover animation | Yes | Subtle lift, light sweep on the border, gentle image scale (≤ 1.03) |
| Glass styling | Yes | Uses the glass system (Section 16) |

### 11.2 Layout

| Breakpoint | Layout |
|------------|--------|
| Desktop | 2-column grid (or featured project full-width, followed by a 2-column grid) |
| Tablet | 2-column or 1-column, depending on width |
| Mobile | 1-column stack |

### 11.3 Data model (TypeScript)

```ts
export type Project = {
  slug: string;
  title: string;
  summary: string;               // 1–2 sentences
  description?: string;          // optional longer text for case study
  technologies: string[];
  image: { src: string; alt: string; width: number; height: number };
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;          // future use
  };
  featured?: boolean;
  year?: number;
};
```

### 11.4 Quality bar

- Cards must be highly readable: title, description, and tags must meet contrast requirements over glass.
- Preview images must have descriptive `alt` text and reserved dimensions to avoid layout shift.
- Optional filtering (e.g., by technology) may be added later but is **not required** for v1.
- If there are few projects, prefer fewer, better-presented cards over filler.

---

## 12. Experience / Journey

A clean, simple, professional presentation of background.

### 12.1 Format

- Vertical timeline on desktop and mobile: thin vertical line with markers, glass entry cards.
- Reverse-chronological order.
- Each entry: **role/title**, **organization or context**, **date range**, **2–3 concise bullet points**.

### 12.2 Entry types

| Type | Examples |
|------|----------|
| Work | Jobs, internships, freelance work |
| Education | Degree, courses, bootcamps |
| Projects / milestones | Notable builds, certifications, open-source contributions |

### 12.3 Requirements

- Only verified information supplied by Zain.
- If formal work experience is limited, present it as a "Journey" combining education, learning, and projects.
- Provide a **Download Resume** link if a resume is supplied (see Section 25).
- Motion: entries reveal on scroll; timeline line may draw progressively; respect reduced motion.

---

## 13. Contact Section

### 13.1 Content

| Element | Requirement |
|---------|-------------|
| Heading | Strong final call to action, e.g., "Let's build something reliable." |
| Supporting text | One short sentence inviting collaboration or opportunities |
| Email | Visible `mailto:` link with a copy-to-clipboard button |
| GitHub | Link to profile |
| LinkedIn | Link to profile |
| Contact form | **Optional** (see below) |

### 13.2 Optional contact form

If included:

| Field | Type | Validation |
|-------|------|------------|
| Name | text | required |
| Email | email | required, valid format |
| Message | textarea | required, minimum length |
| Honeypot | hidden | spam protection |

- Must have accessible labels, inline error messages, and clear success/error states.
- v1 may submit to a third-party form service or a simple serverless route; a full backend is a future item (Section 26).
- If the form is not implemented in v1, the section must still work well with email and social links only.

### 13.3 Design

- Large glass panel with soft lighting behind it.
- Primary CTA button (e.g., "Email Me") with strong contrast.
- Visible confirmation when the email is copied.

---

## 14. Footer

| Element | Requirement |
|---------|-------------|
| Name / brand | "Zain Ul Abdin" and/or MZAINULABDIN.xyz wordmark |
| Copyright | `© {currentYear} Zain Ul Abdin. All rights reserved.` (year generated dynamically) |
| Social links | GitHub, LinkedIn, Email (icon + accessible label) |
| Minimal navigation | Same section links as the main nav, in a compact row |
| Back to top | Optional small button |
| Style | Quiet, low-contrast border on top, no heavy glass; must not compete with the Contact section |

---

## 15. Animation System

### 15.1 Principles

1. **Purposeful.** Every animation should guide attention, confirm interaction, or add polish.
2. **Subtle.** Small distances (8–24 px), soft easing, short durations.
3. **Consistent.** Use shared tokens for duration and easing across the site.
4. **Performant.** Animate `transform` and `opacity` (and limited `filter`); avoid animating layout properties.
5. **Accessible.** Respect user preferences and never hide content behind animation.

### 15.2 Animation inventory

| Type | Behavior | Suggested timing |
|------|----------|------------------|
| Page entrance | Opening sequence → hero reveal (Section 6) | ~3 s total |
| Section reveal | Fade + rise (16–24 px) when entering viewport, once | 500–700 ms |
| Text reveal | Headings reveal by line or word with slight stagger | 600–800 ms, 40–80 ms stagger |
| Hover interactions | Color/opacity/background shifts | 150–250 ms |
| Card movement | Lift (translateY −4 to −8 px) and light-border highlight | 250–350 ms |
| Button interactions | Slight scale (1.02), glow, press state (0.98) | 150–200 ms |
| Background lighting | Very slow drifting blurred gradient orbs | 20–40 s loops |
| Glass effects | Border/highlight shifts on hover; optional cursor-following sheen on desktop only | 200–300 ms |
| Smooth scrolling | Anchor navigation with easing | Native `scroll-behavior` or lightweight lib if needed |

### 15.3 Motion tokens

```css
:root {
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast:   150ms;
  --dur-base:   250ms;
  --dur-slow:   600ms;
  --dur-reveal: 700ms;
}
```

### 15.4 Rules

- Avoid excessive animation; no more than one "hero-level" animation in view at a time.
- **Must respect `prefers-reduced-motion`:** disable parallax, ambient drifting, large transforms, and text-splitting; keep simple opacity fades or none.
- Maintain **60 fps** where possible; test on mid-range mobile devices.
- Pause off-screen or continuous animations; use `will-change` sparingly and remove after use.
- **Never sacrifice usability for visual effects.** Content must be readable and interactive at all times.

---

## 16. Glassmorphism System

The glass effect is a **subtle supporting element**, not a decoration overload. Text must always remain readable.

### 16.1 Glass levels

| Level | Use | Background | Blur | Border | Shadow |
|-------|-----|------------|------|--------|--------|
| **Glass 1 — Subtle** | Large sections, footer panels | `rgba(255,255,255,0.03)` | 12 px | `rgba(255,255,255,0.06)` | Very soft |
| **Glass 2 — Standard** | Cards, skill chips, timeline entries | `rgba(255,255,255,0.05)` | 20 px | `rgba(255,255,255,0.09)` | Soft |
| **Glass 3 — Elevated** | Navigation bar, modals, mobile menu | `rgba(20,22,30,0.55)` | 28 px | `rgba(255,255,255,0.12)` | Medium |

### 16.2 Treatments

| Property | Specification |
|----------|---------------|
| **Transparency** | 3–8% white overlays on dark base; higher opacity dark tint for text-heavy or overlapping surfaces |
| **Backdrop blur** | `backdrop-filter: blur(12–28px) saturate(140%)` with `-webkit-` prefix |
| **Border** | 1 px translucent border; optional gradient border (lighter top-left, dimmer bottom-right) to simulate edge light |
| **Radius** | Large: 20–32 px for cards, 999 px for pills and buttons |
| **Shadow** | Layered: `0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 30px rgba(0,0,0,0.35)` |
| **Highlight** | Faint inner top highlight and optional soft radial sheen |
| **Hover state** | Border brightens (+3–5% opacity), background lifts slightly, shadow deepens, translateY −4 px |
| **Active/pressed** | Slightly reduced lift and opacity |
| **Focus** | Distinct accent ring, not only a glow |

### 16.3 Reference CSS

```css
.glass {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  backdrop-filter: blur(20px) saturate(140%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 8px 30px rgba(0, 0, 0, 0.35);
  transition:
    transform var(--dur-base) var(--ease-standard),
    border-color var(--dur-base) var(--ease-standard),
    background-color var(--dur-base) var(--ease-standard);
}

.glass:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.16);
}

/* Fallback when backdrop-filter is unsupported */
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass { background: rgba(24, 26, 34, 0.92); }
}
```

### 16.4 Guardrails

- Limit the number of simultaneously visible blurred layers (performance).
- Never place body text directly on a low-opacity glass layer over a busy background; ensure contrast ≥ WCAG AA.
- Reduce blur radius on low-power/mobile devices.
- Provide a solid fallback for browsers without `backdrop-filter` and for `prefers-reduced-transparency` where supported.

---

## 17. Typography System

Typography should feel **premium and modern**. Apple's proprietary SF Pro must **not** be bundled or copied.

### 17.1 Font selection

| Role | Recommended | Alternatives |
|------|-------------|--------------|
| **Primary (headings + UI + body)** | **Inter** (variable) | Geist Sans, Plus Jakarta Sans |
| **Monospace (labels, tags, code accents)** | **JetBrains Mono** | Geist Mono, IBM Plex Mono |
| **Fallback stack** | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | — |

> Load fonts through the framework's font optimization (e.g., `next/font`) with `display: swap`, subsetting, and self-hosting. Limit to one variable sans and one mono at most.

### 17.2 Type scale (fluid)

| Token | Usage | Desktop | Mobile | Weight | Line height | Letter spacing |
|-------|-------|---------|--------|--------|-------------|----------------|
| `display` | Hero name | 88–96 px | 44–52 px | 700 | 1.0–1.05 | −0.035em |
| `h1` | Section titles | 56 px | 36 px | 650 | 1.1 | −0.025em |
| `h2` | Sub-headings | 40 px | 28 px | 600 | 1.15 | −0.02em |
| `h3` | Card titles | 24 px | 20 px | 600 | 1.25 | −0.01em |
| `body-lg` | Lead paragraphs | 20 px | 18 px | 400 | 1.6 | −0.005em |
| `body` | Default text | 16–17 px | 16 px | 400 | 1.65 | 0 |
| `small` | Captions, meta | 14 px | 14 px | 400 | 1.5 | 0 |
| `label` | Tags, overlines | 12–13 px | 12 px | 500 | 1.4 | +0.08em (uppercase) |
| `button` | Buttons | 15–16 px | 15 px | 550 | 1 | 0 |
| `mono` | Code accents | 13–14 px | 13 px | 450 | 1.5 | 0 |

Use `clamp()` for fluid sizing, for example:

```css
--text-display: clamp(2.75rem, 7vw + 1rem, 6rem);
--text-h1:      clamp(2.25rem, 4vw + 0.5rem, 3.5rem);
```

### 17.3 Rules

- Maximum body line length: 60–70 characters.
- Use tighter tracking only on large headings; never on small text.
- Use font weight and color for hierarchy rather than many sizes.
- Avoid all-caps except for short labels.
- Enable `font-feature-settings` (e.g., `"cv11", "ss01"` for Inter) only if visually verified.

---

## 18. Color System

A restrained, dark-first palette. Values are defaults and may be fine-tuned during implementation while preserving contrast requirements.

### 18.1 Core palette

| Token | Purpose | Value |
|-------|---------|-------|
| `--bg` | Page background | `#07080B` |
| `--bg-elevated` | Raised background areas | `#0C0E13` |
| `--surface` | Solid cards/panels | `#11141A` |
| `--glass-bg` | Glass surface fill | `rgba(255, 255, 255, 0.05)` |
| `--glass-bg-strong` | Nav / overlays | `rgba(20, 22, 30, 0.55)` |
| `--text-primary` | Headings, key text | `#F4F5F7` |
| `--text-secondary` | Body text | `#B4B9C4` |
| `--text-muted` | Meta, captions | `#7C8291` |
| `--border` | Default border | `rgba(255, 255, 255, 0.08)` |
| `--border-strong` | Hover/focus-adjacent border | `rgba(255, 255, 255, 0.16)` |
| `--accent` | Links, highlights, focus | `#7C8CFF` |
| `--accent-strong` | Primary button, active state | `#5B6CFF` |
| `--accent-soft` | Accent tints | `rgba(124, 140, 255, 0.16)` |
| `--success` | Form success | `#4ADE80` |
| `--danger` | Form error | `#FF6B6B` |

### 18.2 Gradients

| Name | Definition | Use |
|------|------------|-----|
| `--grad-accent` | `linear-gradient(135deg, #7C8CFF 0%, #A78BFA 55%, #5EC8FF 100%)` | Role text, primary CTA highlights |
| `--grad-glow-1` | `radial-gradient(60% 60% at 50% 50%, rgba(91,108,255,0.35), transparent 70%)` | Hero background orb |
| `--grad-glow-2` | `radial-gradient(60% 60% at 50% 50%, rgba(167,139,250,0.25), transparent 70%)` | Secondary ambient orb |
| `--grad-border` | `linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.02))` | Gradient glass borders |

### 18.3 Rules

- One accent hue family only; do not introduce additional bright colors.
- Body text contrast against background must be **≥ 4.5:1**; large text **≥ 3:1**.
- Gradients are used sparingly (role text, buttons, ambient light), never behind long paragraphs.
- Define all colors as CSS variables / Tailwind theme tokens; avoid hard-coded values in components.
- Ship a `color-scheme: dark` declaration.

---

## 19. Responsive Design

### 19.1 Breakpoints

| Name | Range | Target |
|------|-------|--------|
| Mobile | 320 – 639 px | Phones |
| Tablet | 640 – 1023 px | Tablets, large phones landscape |
| Laptop | 1024 – 1439 px | Laptops, small desktops |
| Desktop | ≥ 1440 px | Large screens (content max-width ~1200–1280 px) |

Design **mobile-first**; enhance upward.

### 19.2 Behavior matrix

| Area | Mobile | Tablet | Laptop / Desktop |
|------|--------|--------|------------------|
| **Navigation** | Menu button + glass sheet, large tap targets (≥ 44 px) | Compact bar or menu | Full floating glass bar |
| **Hero** | Single column, left-aligned or centered; CTAs stacked full-width | Single column, larger type | Large type, ambient lighting, CTAs side by side |
| **Typography** | Fluid scale (Section 17), smaller display | Mid scale | Full scale |
| **Project cards** | 1 column | 1–2 columns | 2 columns (+ featured) |
| **Glass effects** | Reduced blur (≈ 12–16 px), fewer layered elements | Standard | Full effects, optional cursor sheen |
| **Spacing** | Section padding ~64–80 px vertical; 20 px side padding | ~88–104 px; 32 px sides | ~120–160 px; 48+ px sides |
| **Animations** | Simplified, shorter distances, no cursor effects | Standard | Full (still restrained) |
| **Timeline** | Single-column with left rail | Single-column | Optional alternating or single column |

### 19.3 Requirements

- No horizontal scrolling at any width.
- Use `100svh`/`dvh` for viewport-height sections to avoid mobile browser UI issues.
- Touch targets ≥ 44×44 px; hover-only interactions must have touch/keyboard equivalents.
- Support safe-area insets on notched devices.
- Test in portrait and landscape.

---

## 20. Accessibility

Target: **WCAG 2.2 Level AA**.

| Area | Requirement |
|------|-------------|
| **Keyboard navigation** | All interactive elements reachable and operable by keyboard in a logical order; no keyboard traps except managed focus in the mobile menu |
| **Skip link** | "Skip to main content" link as the first focusable element |
| **Semantic HTML** | Use `header`, `nav`, `main`, `section` (with headings), `article`, `footer`, `ul/li`, `button`, `a` correctly; one `h1` per page; logical heading order |
| **Landmarks & labels** | `aria-label` for nav and icon-only buttons; `aria-current="page"` (or `location`) for active nav item |
| **Color contrast** | Text ≥ 4.5:1 (large text ≥ 3:1); UI components and focus indicators ≥ 3:1 — verified over glass surfaces |
| **Alt text** | Meaningful `alt` for project images and profile photo; empty `alt=""` for decorative images; decorative SVG/orbs use `aria-hidden` |
| **Focus states** | Always visible: 2 px accent outline with offset; never `outline: none` without replacement |
| **Reduced motion** | Honor `prefers-reduced-motion`; provide a non-animated experience |
| **Reduced transparency** | Provide higher-opacity fallbacks where `prefers-reduced-transparency` is supported |
| **Buttons & links** | Buttons perform actions; links navigate. Descriptive text (avoid "click here"); external links indicate new tab where applicable |
| **Forms** | Visible `<label>`s, `aria-describedby` for errors, `aria-live` for status messages |
| **Opening animation** | Skippable, non-blocking for assistive tech, no flashing content |
| **Zoom & text size** | Layout works at 200% zoom and with increased text size without loss of content |
| **Language** | `<html lang="en">` |

**Testing tools:** axe DevTools, Lighthouse accessibility audit, keyboard-only pass, and at least one screen reader pass (VoiceOver or NVDA).

---

## 21. Performance

### 21.1 Targets

| Metric | Target (mobile, 4G, mid-range device) |
|--------|----------------------------------------|
| Lighthouse Performance | ≥ 95 (desktop), ≥ 90 (mobile) |
| Largest Contentful Paint (LCP) | ≤ 2.5 s |
| Interaction to Next Paint (INP) | ≤ 200 ms |
| Cumulative Layout Shift (CLS) | ≤ 0.1 |
| Total Blocking Time | ≤ 200 ms |
| Initial JS (compressed) | Keep as small as practical; aim ≤ ~150 KB gzip for the initial route |

### 21.2 Requirements

| Area | Requirement |
|------|-------------|
| **Optimized images** | Use `next/image`; modern formats (AVIF/WebP); responsive `sizes`; explicit width/height |
| **Lazy loading** | Lazy-load below-the-fold images and heavy components; prioritize hero assets only |
| **Minimal JavaScript** | Prefer Server Components; add `"use client"` only where interactivity is required |
| **Animation optimization** | Animate `transform`/`opacity`; avoid layout thrash; limit concurrent blur layers; pause off-screen loops |
| **Font optimization** | Self-hosted, subsetted variable fonts via `next/font`; `display: swap`; preload only critical weights |
| **Avoid unnecessary dependencies** | Justify every dependency; prefer native CSS/HTML features |
| **Fast initial page load** | Static generation; CDN hosting; compression (Brotli); long-lived caching for static assets |
| **Opening animation** | Must not block hero rendering; text-only, no additional network requests |
| **Third-party scripts** | None in v1 except optional privacy-friendly analytics, loaded after interaction/idle |

---

## 22. SEO

| Item | Requirement |
|------|-------------|
| **Page title** | `Zain Ul Abdin — Backend Developer | MZAINULABDIN.xyz` (≤ 60 characters where possible) |
| **Meta description** | ~150–160 characters summarizing role and focus (backend, APIs, automation); unique and accurate |
| **Canonical URL** | `https://mzainulabdin.xyz/` |
| **Open Graph** | `og:title`, `og:description`, `og:type=website`, `og:url`, `og:image` (1200×630, original design), `og:site_name` |
| **Twitter/X card** | `summary_large_image` with matching title, description, image |
| **Semantic HTML** | Single `h1`, logical `h2`/`h3`, meaningful landmarks (see Section 20) |
| **Sitemap** | Auto-generated `sitemap.xml` (via framework metadata route) |
| **Robots** | `robots.txt` allowing indexing and referencing the sitemap |
| **Structured data** | JSON-LD `Person` (and `WebSite`) with name, jobTitle, url, sameAs (GitHub, LinkedIn) |
| **Favicon & icons** | Favicon, Apple touch icon (original design), web manifest |
| **Performance & a11y** | Treated as SEO factors; must meet Section 20 and 21 targets |

Example JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Zain Ul Abdin",
  "jobTitle": "Backend Developer",
  "url": "https://mzainulabdin.xyz",
  "sameAs": [
    "https://github.com/<username>",
    "https://www.linkedin.com/in/<username>"
  ]
}
```

> Replace placeholder usernames and confirm the final domain casing before launch.

---

## 23. Technical Architecture

### 23.1 Evaluation

| Technology | Decision | Rationale |
|------------|----------|-----------|
| **Next.js (App Router)** | ✅ Selected | Static generation, excellent performance defaults, built-in image/font optimization, metadata API for SEO, and a clear path to blog/CMS/API routes later |
| **React** | ✅ Selected (via Next.js) | Component model suited to reusable sections/cards; strong ecosystem |
| **TypeScript** | ✅ Selected | Type-safe content models (projects, skills, experience), safer refactors, better AI-agent output quality |
| **Tailwind CSS** | ✅ Selected | Fast, consistent styling with design tokens; excellent for glass utilities; small production CSS |
| **Framer Motion (Motion)** | ✅ Selected (scoped use) | Declarative reveal, stagger, and layout animations with reduced-motion support; use for opening sequence, reveals, and nav indicator |
| **GSAP** | ⛔ Not selected by default | Adds weight; only adopt if a specific effect (e.g., complex scroll-linked timeline) cannot be done cleanly with CSS/Framer Motion |
| **Smooth-scroll libraries (e.g., Lenis)** | ⛔ Not selected by default | Native `scroll-behavior: smooth` is sufficient; add only if user-tested need arises, ensuring accessibility |
| **UI kits (MUI, Chakra, etc.)** | ⛔ Not selected | Would impose template-like visuals and extra weight |
| **Three.js / WebGL** | ⛔ Not selected | Unnecessary for this design; conflicts with performance goals |
| **State management libs** | ⛔ Not selected | Local state and props are sufficient |

### 23.2 Recommended stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js (latest stable, App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + CSS variables for design tokens |
| Animation | Framer Motion (scoped) + CSS transitions |
| Icons | `lucide-react` or inline SVGs (import only what is used) |
| Fonts | `next/font` (Inter + JetBrains Mono or chosen alternatives) |
| Linting/format | ESLint + Prettier |
| Hosting | Vercel (or equivalent static/edge host) |
| Analytics (optional) | Privacy-friendly (e.g., Vercel Analytics, Plausible) |

### 23.3 Architectural principles

- **Content separated from presentation.** Projects, skills, and experience live in typed data files.
- **Server Components by default;** client components only for interactivity (nav, animations, form).
- **Design tokens first.** Colors, radii, spacing, and motion tokens defined once and reused.
- **Composable UI primitives** (`GlassCard`, `Button`, `Section`, `Reveal`) used everywhere for consistency.
- **Progressive enhancement.** Site remains usable without JS animations.

---

## 24. Project Structure

```text
mzainulabdin-portfolio/
├── public/
│   ├── images/
│   │   ├── projects/            # Project previews (optimized)
│   │   ├── og/                  # Open Graph image
│   │   └── profile/             # Profile image (optional)
│   ├── resume/                  # Resume PDF (optional)
│   ├── favicon.ico
│   └── robots.txt               # or generated via app/robots.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, fonts, metadata, providers
│   │   ├── page.tsx             # Home page composing all sections
│   │   ├── globals.css          # Design tokens, base styles, glass utilities
│   │   ├── sitemap.ts           # Sitemap generation
│   │   ├── robots.ts            # Robots rules
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts     # Optional contact endpoint (future/optional)
│   ├── components/
│   │   ├── ui/                  # Primitives
│   │   │   ├── Button.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Reveal.tsx       # Scroll-reveal wrapper
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   ├── intro/
│   │   │   └── OpeningSequence.tsx   # "Hello" cinematic opening
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx
│   │   └── background/
│   │       └── AmbientLight.tsx # Blurred gradient orbs
│   ├── data/
│   │   ├── site.ts              # Name, title, links, SEO defaults
│   │   ├── projects.ts          # Typed project data
│   │   ├── skills.ts            # Typed skills data (confirmed only)
│   │   └── experience.ts        # Typed timeline data
│   ├── hooks/
│   │   ├── useActiveSection.ts  # IntersectionObserver for nav state
│   │   ├── useReducedMotion.ts
│   │   └── useScrollDirection.ts
│   ├── lib/
│   │   ├── utils.ts             # cn(), helpers
│   │   ├── motion.ts            # Shared variants, easing, durations
│   │   └── seo.ts               # Metadata + JSON-LD helpers
│   ├── styles/
│   │   └── tokens.css           # (optional) split-out design tokens
│   └── types/
│       └── index.ts             # Project, Skill, ExperienceItem types
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── PRD.md
└── README.md
```

---

## 25. Content Requirements

The following content must be provided by Zain **before or during** implementation. Placeholder content must be clearly marked and replaced before launch.

| # | Content | Details | Required |
|---|---------|---------|----------|
| 1 | **Bio** | Short (≈100–150 words) About text and a 1–2 sentence hero description | Yes |
| 2 | **Skills** | Final confirmed list, grouped by category | Yes |
| 3 | **Projects** | Per project: name, summary, technologies, screenshots/preview, year | Yes |
| 4 | **Project links** | GitHub repository URL; live demo URL if available | Yes (GitHub) |
| 5 | **GitHub** | Profile URL | Yes |
| 6 | **LinkedIn** | Profile URL | Yes |
| 7 | **Email** | Public contact email | Yes |
| 8 | **Profile image** | Professional photo (square or portrait, high resolution) | Optional |
| 9 | **Resume** | Up-to-date PDF for download | Recommended |
| 10 | **Experience / education** | Roles, dates, short bullet points | Yes |
| 11 | **Domain details** | Final domain and casing for canonical URL | Yes |
| 12 | **Availability statement** | e.g., open to work / freelance (only if accurate) | Optional |

**Content rules**

- Only verified, truthful information will be published.
- Any image used must be owned by Zain or properly licensed.
- No Apple proprietary assets (wallpapers, logos, icons, fonts).

---

## 26. Future Scalability

The architecture must accommodate the following without a rewrite:

| Future feature | How the architecture supports it |
|----------------|----------------------------------|
| **Blog** | Next.js routes (`/blog`, `/blog/[slug]`); MDX or CMS content; typed post model; RSS feed |
| **CMS** | Data-file abstraction (`src/data`) can be swapped for a headless CMS (Sanity, Contentful, Payload) with the same TypeScript types |
| **Backend API** | Next.js route handlers now; can point to a separate backend (e.g., FastAPI) later via a thin `lib/api` client |
| **Contact form backend** | `app/api/contact/route.ts` with validation, rate limiting, and email service (Resend, SMTP) |
| **Analytics** | Provider component in `layout.tsx`; consent-aware if required |
| **More projects** | Data-driven cards; optional filtering/pagination |
| **Case studies** | `/work/[slug]` detail pages using the `Project.description` and `caseStudy` fields |
| **Additional locales** | Content isolated in data files; routing can adopt i18n later |
| **Light theme** | Design tokens as CSS variables allow a future theme layer |

**Principles:** keep components small and typed, keep content out of components, and keep dependencies minimal so future additions remain easy.

---

## 27. Non-Goals

This project will **not** be:

- ❌ A macOS clone
- ❌ A desktop simulator or fake operating system
- ❌ An Apple website or Apple-branded experience
- ❌ An excessive animation showcase
- ❌ A template-looking portfolio

Additionally, v1 will not include:

- A full backend or database
- User accounts or authentication
- A light theme
- 3D/WebGL scenes
- Heavy scroll-jacking or non-native scrolling behavior

---

## 28. Success Criteria

| Criterion | Measurable definition |
|-----------|-----------------------|
| **Professional appearance** | Design review confirms consistency with this PRD; no macOS-clone elements; feedback from at least 3 peers/reviewers rates it "professional" |
| **Fast loading** | LCP ≤ 2.5 s, CLS ≤ 0.1, INP ≤ 200 ms on mobile; Lighthouse Performance ≥ 90 (mobile) |
| **Responsive** | Verified with no layout breakage from 320 px to 1920 px on major browsers (Chrome, Safari, Firefox, Edge) and on real devices |
| **Accessible** | Lighthouse Accessibility ≥ 95; zero critical axe issues; full keyboard and screen-reader pass |
| **Strong project presentation** | Every project has description, tech tags, preview, and working links; cards remain legible on all breakpoints |
| **Clear personal branding** | A new visitor can state Zain's name, role, and how to contact him within 10 seconds of arrival |
| **Smooth interactions** | Animations run at ~60 fps on a mid-range device; reduced-motion mode fully functional |
| **Easy navigation** | Any section reachable in ≤ 1 interaction; active section indicator accurate |
| **Maintainable codebase** | TypeScript strict with no type errors; ESLint clean; content in data files; new project can be added by editing one data entry |
| **SEO readiness** | Valid metadata, Open Graph preview, sitemap, robots, and structured data pass validation |

---

## 29. Implementation Phases

| Phase | Name | Key deliverables | Exit criteria |
|-------|------|------------------|---------------|
| **1** | PRD and design system | Approved PRD; design tokens (color, type, spacing, radius, motion); glass specs | PRD signed off; tokens documented |
| **2** | Frontend architecture | Next.js + TypeScript + Tailwind setup; folder structure; base layout; primitives (`GlassCard`, `Button`, `Section`); typed data files | Project builds; lint and type checks pass |
| **3** | Opening animation | `OpeningSequence` with black screen → "Hello" → hero transition; skip and reduced-motion handling | Sequence ≤ 3.5 s; skippable; no layout shift |
| **4** | Hero | Hero layout, text reveal, CTAs, ambient lighting | Hero matches Section 7; CTAs scroll correctly |
| **5** | About and Skills | About content and layout; categorized skills (confirmed only) | Sections responsive; content verified |
| **6** | Projects | `ProjectCard`, grid, hover effects, images, links | All projects display with correct data and links |
| **7** | Experience and Contact | Timeline; contact panel; email copy; optional form | Contact methods work; form validated (if included) |
| **8** | Animations and micro-interactions | Section reveals, hover states, button interactions, nav indicator | Motion consistent with tokens; reduced-motion verified |
| **9** | Responsive optimization | Tuning for mobile, tablet, laptop, desktop; mobile menu polish | No layout issues 320–1920 px |
| **10** | Accessibility, SEO and performance | A11y audit fixes; metadata, OG, sitemap, robots, JSON-LD; image/font/JS optimization | Targets in Sections 20–22 met |
| **11** | Testing and deployment | Cross-browser/device tests; final content review; deploy; domain + HTTPS; post-launch checks | Live at MZAINULABDIN.xyz; success criteria verified |

**Working rule for AI coding agents:** complete one phase at a time, confirm exit criteria, and do not begin later phases (or add features outside this PRD) without approval.

---

## 30. Final Design Principle

> **"Build a professional developer portfolio first, and use macOS Tahoe-inspired visual design only as a source of visual inspiration. The website must remain original, accessible, performant, and clearly identifiable as Zain Ul Abdin's personal developer portfolio."**