export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  category: "Full-Stack" | "Frontend" | "Backend" | "AI & Data";
  status: "Live" | "Private Code" | "Active Build";
  techStack: string[];
  features: string[];
  role: string;
  problemsSolved?: string;
  contribution?: string;
  image: string;
  screenshots: string[];
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlight?: boolean;
  pinColor: string; // CSS color for the physical pin head
  pinPosition: {
    x: number; // percentage 0-100 from left
    y: number; // percentage 0-100 from top
    tooltipPlacement?: "left" | "right" | "top" | "bottom";
  };
}

export interface SkillCategory {
  title: string;
  badge: string;
  pinColor?: string;
  skills: { name: string; icon?: string; description?: string }[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  badge?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    brand: string;
    role: string;
    company?: {
      name: string;
      url: string;
      description: string;
    };
    titles: string[];
    tagline: string;
    location: string;
    availability: string;
    motto: string;
    about: {
      intro: string;
      journey: string;
      focus: string;
    };
  };
  contact: {
    email: string;
    whatsapp: string;
    whatsappFormatted: string;
    location: string;
    companyUrl?: string;
    social: {
      github: string;
      linkedin: string;
      instagram: string;
      facebook?: string;
      company?: string;
      portfolio: string;
    };
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Muhammad Zain-ul-Abdin",
    brand: "MZ",
    role: "Full-Stack AI Engineer",
    company: {
      name: "MZ NEXORA",
      url: "https://mznexora.vercel.app",
      description: "Digital Solutions & Software Agency"
    },
    titles: [
      "Full-Stack AI Engineer",
      "AI Agents & RAG Systems Builder",
      "Modern Web Applications Developer",
      "Workflow Automations Specialist",
      "FastAPI & Next.js Architect"
    ],
    tagline: "I build modern web applications, AI agents, RAG systems, and workflow automations.",
    location: "Faisalabad, Pakistan",
    availability: "Available for internships, freelance & full-time roles",
    motto: "Ship it. Iterate. Level up.",
    about: {
      intro: "I am a dedicated Full-Stack AI Engineer and an AI & Data Science student at SMIT (Saylani Mass IT Training) in Faisalabad.",
      journey: "With a strong computer science foundation from ICS at M.C. Model Higher Secondary School and practical certifications from Cisco Networking Academy, I build scalable web applications, agentic workflows, and high-performance APIs.",
      focus: "My core expertise lies in developing performant Python/FastAPI backends, serverless PostgreSQL architectures, integrating OpenAI/LLaMA agents, building vector search (RAG) pipelines, and delivering modern Next.js user interfaces."
    }
  },
  contact: {
    email: "zzawar521@gmail.com",
    whatsapp: "https://wa.me/923269656457",
    whatsappFormatted: "+92 326 9656457",
    location: "Faisalabad, Pakistan",
    companyUrl: "https://mznexora.vercel.app",
    social: {
      github: "https://github.com/zaini12121",
      linkedin: "https://www.linkedin.com/in/zain-ul-abdin-281985378",
      instagram: "https://instagram.com/mz.dev2026",
      facebook: "https://facebook.com",
      company: "https://mznexora.vercel.app",
      portfolio: "https://zainulabdin-project.vercel.app"
    }
  },
  skills: [
    {
      title: "Frontend",
      badge: "UI / Client",
      pinColor: "#00d4ff",
      skills: [
        { name: "HTML5", description: "Semantic, accessible modern markup" },
        { name: "CSS3", description: "Responsive layouts, animations & glassmorphism" },
        { name: "JavaScript", description: "Modern ES6+, async/await & DOM logic" },
        { name: "React", description: "Component architecture, hooks & state" },
        { name: "TypeScript", description: "Static typing, interfaces & robust contracts" },
        { name: "Next.js", description: "App Router, SSR, Turbopack & SEO" }
      ]
    },
    {
      title: "Backend & APIs",
      badge: "Core Architecture",
      pinColor: "#6366f1",
      skills: [
        { name: "Python", description: "Async backend logic, data structures & typing" },
        { name: "FastAPI", description: "High-performance async RESTful microservices" },
        { name: "SQLAlchemy", description: "ORM, query building, relationships & migrations" },
        { name: "SQL", description: "Relational queries, complex joins & indexing" }
      ]
    },
    {
      title: "Databases",
      badge: "Data Layer",
      pinColor: "#10b981",
      skills: [
        { name: "PostgreSQL", description: "Enterprise relational database modeling" },
        { name: "Neon", description: "Serverless cloud PostgreSQL with branching" },
        { name: "Supabase", description: "Cloud database, real-time auth & storage" }
      ]
    },
    {
      title: "AI & Data Science",
      badge: "Intelligent Systems",
      pinColor: "#00d4ff",
      skills: [
        { name: "NumPy", description: "Fast multi-dimensional numerical computing" },
        { name: "Pandas", description: "Data manipulation, cleaning & time-series analysis" },
        { name: "Matplotlib", description: "Data visualization, statistical plotting & charts" },
        { name: "Jupyter", description: "Exploratory data analysis & model prototyping" },
        { name: "Scikit-learn", description: "Classical machine learning, regression & classification" },
        { name: "OpenAI Agents SDK", description: "Autonomous agents with tool calling & multi-step logic" }
      ]
    },
    {
      title: "Automation & Tools",
      badge: "Workflows & DevOps",
      pinColor: "#a855f7",
      skills: [
        { name: "n8n", description: "Visual node-based workflow automation & triggers" },
        { name: "Workflows", description: "End-to-end automated business process logic" },
        { name: "Webhooks", description: "Event-driven asynchronous webhooks & endpoints" },
        { name: "GitHub", description: "Version control, collaborative workflows & CI/CD" },
        { name: "Postman", description: "API design, automated testing & documentation" }
      ]
    },
    {
      title: "Vector Search",
      badge: "Semantic Retrieval",
      pinColor: "#00d4ff",
      skills: [
        { name: "Pinecone", description: "High-scale managed vector index & cosine similarity" },
        { name: "Embeddings", description: "High-dimensional text embeddings & semantic vectors" },
        { name: "Semantic Search", description: "Context-aware hybrid retrieval & RAG pipelines" }
      ]
    }
  ],
  projects: [
    {
      id: "paper-genai",
      title: "Paper Generator",
      tagline: "AI-Powered Board-Aligned Exam Paper Generator",
      shortDescription: "AI-powered paper generation system using RAG and modern LLM APIs.",
      description: "An intelligent assessment platform designed specifically for Pakistani secondary and higher secondary education (Classes 9–12, Punjab Board). Generates structured, syllabus-aligned exam papers in seconds with automatic PDF compilation and custom marking schemes.",
      category: "AI & Data",
      status: "Live",
      techStack: ["React", "FastAPI", "Gemini", "Groq (LLaMA 3)", "Neon PostgreSQL", "PyMuPDF"],
      features: [
        "Automated Punjab Board-aligned exam paper generation with custom marks breakdown",
        "Ultra-fast question synthesis powered by Groq LLaMA 3 70B & Google Gemini",
        "High-resolution PDF generation with custom school header & styling via PyMuPDF",
        "Cloud storage with Neon serverless PostgreSQL"
      ],
      problemsSolved: "Manual exam paper preparation required teachers to spend hours formatting questions and balancing marks. Paper Generator automates the process in under 15 seconds while guaranteeing complete curriculum fidelity.",
      contribution: "Architected the backend async pipelines in FastAPI, engineered structured prompt templates with JSON schemas, and built the automated PDF generation engine.",
      image: "/projects/paper-genai.jpg",
      screenshots: ["/projects/paper-genai.jpg"],
      role: "Full-Stack Developer & AI Systems Architect",
      liveUrl: "https://paper-genai.vercel.app",
      githubUrl: "https://github.com/zaini12121",
      highlight: true,
      pinColor: "#3b82f6",
      pinPosition: {
        x: 22,
        y: 30,
        tooltipPlacement: "right"
      }
    },
    {
      id: "speed-lab",
      title: "Speed Lab",
      tagline: "High-Precision Typing Speed & Network Analytics Tool",
      shortDescription: "High-precision typing engine with live WPM, latency benchmarking and performance metrics.",
      description: "A comprehensive developer and user testing suite featuring real-time WPM calculation, accuracy telemetry, latency benchmarking, and performance metrics presented in a sleek dark glass interface.",
      category: "Frontend",
      status: "Live",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Web Audio API", "Vercel"],
      features: [
        "Real-time words-per-minute (WPM) and accuracy calculation engine",
        "Network diagnostic & latency tracking utilities",
        "Interactive analytics charts and performance breakdown",
        "Responsive, mobile-optimized modern glassmorphic interface"
      ],
      problemsSolved: "Standard typing speed tests lack granular real-time cadence metrics and modern responsive ergonomics. Speed Lab delivers millisecond-accurate telemetry with fluid feedback.",
      contribution: "Designed the UI/UX architecture, built the calculation algorithms, and optimized layout rendering for 60fps responsiveness.",
      image: "/projects/speed-lab.jpg",
      screenshots: ["/projects/speed-lab.jpg"],
      role: "Frontend Developer & UI/UX Designer",
      liveUrl: "https://speed-lab.vercel.app",
      githubUrl: "https://github.com/zaini12121",
      highlight: true,
      pinColor: "#a855f7",
      pinPosition: {
        x: 42,
        y: 25,
        tooltipPlacement: "right"
      }
    },
    {
      id: "student-portal",
      title: "Madrasa Attendance System",
      tagline: "Enterprise Academic & Attendance Management Platform",
      shortDescription: "Dual-role student & administrative portal with real-time session attendance tracking and fee ledger.",
      description: "A scalable academic and madrasa management system featuring role-based access control (Admin & Student), attendance logging, dynamic fee tracking (paid/unpaid status with timestamps), and secure cloud persistence.",
      category: "Backend",
      status: "Private Code",
      techStack: ["FastAPI", "PostgreSQL", "Neon DB", "JWT", "bcrypt", "SQLAlchemy"],
      features: [
        "Dual-role authentication system with JWT and salted bcrypt password hashing",
        "Real-time attendance tracking with administrative review dashboards",
        "Automated fee management system with monthly invoice status",
        "Relational database schema with strict foreign key integrity"
      ],
      problemsSolved: "Eliminated paper attendance registers and manual fee record discrepancies with automated audit logs and instantaneous search.",
      contribution: "Designed the relational database schema, built the FastAPI CRUD endpoints, and implemented secure role-based middleware.",
      image: "/projects/attendance-portal.jpg",
      screenshots: ["/projects/attendance-portal.jpg"],
      role: "Backend Architect & Database Designer",
      githubUrl: "https://github.com/zaini12121",
      highlight: true,
      pinColor: "#22c55e",
      pinPosition: {
        x: 27,
        y: 55,
        tooltipPlacement: "right"
      }
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      tagline: "Cinematic Glassmorphic Developer Portfolio",
      shortDescription: "Modern dark-first digital experience with 3D workspace transitions, interactive pinboard and liquid glass aesthetics.",
      description: "Personal developer portfolio engineered with Next.js 16, TypeScript, and modern glassmorphism. Highlights full-stack architectures, interactive 3D scene transitions, responsive mobile ergonomics, and strict SEO compliance.",
      category: "Frontend",
      status: "Live",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      features: [
        "Cinematic 3D scroll scene transitions and realistic workspace pinboard",
        "Liquid-glass surfacing and dynamic ambient spotlight cursor",
        "Comprehensive project showcase with deep modal specifications",
        "Full accessibility, dark mode fidelity and 100% responsive layout"
      ],
      problemsSolved: "Transformed standard static resume websites into an unforgettable, interactive engineering presentation.",
      contribution: "Sole developer and designer — concept, typography, interactive systems, and production deployment.",
      image: "/projects/portfolio-site.jpg",
      screenshots: ["/projects/portfolio-site.jpg"],
      role: "Sole Developer & Designer",
      liveUrl: "https://zainulabdin-project.vercel.app",
      githubUrl: "https://github.com/zaini12121",
      highlight: true,
      pinColor: "#f59e0b",
      pinPosition: {
        x: 47,
        y: 50,
        tooltipPlacement: "right"
      }
    },
    {
      id: "ai-rag-engine",
      title: "AI/RAG Project",
      tagline: "Autonomous Multi-Agent Retrieval-Augmented Generation Architecture",
      shortDescription: "Vector search pipeline with Pinecone and OpenAI SDK for semantic document retrieval and contextual synthesis.",
      description: "An enterprise RAG system that transforms unstructured technical documentation into semantic embeddings. Features multi-hop agent reasoning, query reformulation, vector similarity search via Pinecone, and citation-backed answer generation.",
      category: "AI & Data",
      status: "Live",
      techStack: ["Python", "OpenAI SDK", "Pinecone", "FastAPI", "LangChain", "Vector Embeddings"],
      features: [
        "Hybrid semantic search combining dense vector embeddings and BM25 re-ranking",
        "Autonomous tool-calling agents capable of querying external knowledge APIs",
        "Zero-hallucination guardrails with inline reference citations",
        "Low-latency streaming responses via SSE"
      ],
      problemsSolved: "Solved the context-window limitation and knowledge cutoff of vanilla LLMs by dynamically grounding answers on custom private enterprise knowledge bases.",
      contribution: "Engineered embedding ingestion pipelines, chunking strategies, and FastAPI streaming endpoints.",
      image: "/projects/ai-rag-engine.jpg",
      screenshots: ["/projects/ai-rag-engine.jpg"],
      role: "AI Systems Engineer",
      liveUrl: "https://mznexora.vercel.app",
      githubUrl: "https://github.com/zaini12121",
      highlight: true,
      pinColor: "#ef4444",
      pinPosition: {
        x: 63,
        y: 27,
        tooltipPlacement: "bottom"
      }
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation Engine",
      tagline: "Event-Driven n8n & Webhook Automation Pipeline",
      shortDescription: "Scalable async automation architecture orchestrating webhooks, background tasks and CRM syncing.",
      description: "A high-throughput automation framework built with n8n, FastAPI webhooks, and Redis message queues. Designed to connect disparate digital platforms, sync leads, trigger instant notifications, and execute scheduled workflows autonomously.",
      category: "Full-Stack",
      status: "Active Build",
      techStack: ["n8n", "Webhooks", "FastAPI", "Python", "Redis", "PostgreSQL"],
      features: [
        "Event-driven webhook listeners with retry policies and exponential backoff",
        "Multi-node asynchronous business workflows and CRM synchronization",
        "Real-time alerting through WhatsApp and Telegram bot integration",
        "Modular pipeline architecture ready for custom integrations"
      ],
      problemsSolved: "Automated manual administrative data transfer between forms, spreadsheets, and databases, eliminating human input errors.",
      contribution: "Built webhook endpoints, configured workflow nodes, and handled error-recovery fallbacks.",
      image: "/projects/nexora-cloud.jpg",
      screenshots: ["/projects/nexora-cloud.jpg"],
      role: "Lead Automation Engineer",
      liveUrl: "https://mznexora.vercel.app",
      githubUrl: "https://github.com/zaini12121",
      highlight: true,
      pinColor: "#06b6d4",
      pinPosition: {
        x: 78,
        y: 35,
        tooltipPlacement: "left"
      }
    }
  ],
  experience: [
    {
      period: "2025 — Present",
      title: "AI & Data Science Trainee",
      organization: "SMIT — Saylani Mass IT Training",
      location: "Faisalabad, Pakistan",
      description: "Intensive hands-on program mastering Python, data analytics, predictive modeling, machine learning algorithms, and real-world AI applications.",
      badge: "Active Traineeship"
    },
    {
      period: "2025",
      title: "Introduction to Modern AI Certification",
      organization: "Cisco Networking Academy",
      location: "Online / Global",
      description: "Comprehensive foundational certification exploring modern artificial intelligence architectures, ethics, generative models, and industry use cases.",
      badge: "Certified"
    },
    {
      period: "2024 — Present",
      title: "Self-Directed Backend & Web Development",
      organization: "Independent Projects & Open Source",
      location: "Faisalabad, Pakistan",
      description: "Designed, engineered, and deployed full-stack products including Paper GenAI, Speed Lab, and cloud-backed Student Portal using FastAPI and PostgreSQL.",
      badge: "Milestone"
    },
    {
      period: "Completed",
      title: "Intermediate in Computer Science (ICS)",
      organization: "M.C. Model Higher Secondary School",
      location: "Faisalabad Board",
      description: "Built strong mathematical and computer science foundations covering procedural programming, algorithms, database basics, and discrete logic.",
      badge: "Academic"
    },
    {
      period: "Completed",
      title: "Secondary School Certificate (SSC / Matric)",
      organization: "Hassan Bin Sabit High School",
      location: "Faisalabad Board",
      description: "Completed secondary education with high academic achievement in science and mathematics.",
      badge: "Academic"
    }
  ]
};
