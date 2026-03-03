export type Category = "Frontend Development" | "Full-Stack" | "AI Tools";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: Category[];
  tags: string[];
  image: string;
  images?: string[];
  year: string;
  link?: string;
  github?: string;
  featured: boolean;
  details?: {
    overview: string;
    role: string;
    outcome: string;
  };
}

export const projects: Project[] = [
  {
    slug: "yservice",
    title: "YService — Timesheet & Payroll",
    description:
      "A full-stack payroll management app built around real small-business workflows. Employees log daily clock-in/out times; the system automatically calculates weekly hours and bi-weekly pay runs. Started as an internal tool, later adapted into a public demo.",
    category: ["Full-Stack"],
    tags: ["TypeScript", "Next.js", "Full-Stack", "Payroll"],
    image: "/works/yservice.jpg",
    images: [
      "/works/yservice-employees.png",
      "/works/yservice-timesheet.png",
      "/works/yservice-timesheet-confirmed.png",
      "/works/yservice-payrun.png",
      "/works/yservice-login.png",
    ],
    year: "2026",
    link: "https://yservice-web.vercel.app",
    github: "https://github.com/seed75/yservice-web",
    featured: true,
    details: {
      overview:
        "A small business was managing employee hours in spreadsheets — error-prone, time-consuming, and hard to audit. The owner needed something purpose-built: a simple tool to log daily clock-in/out times and automatically calculate weekly hours and bi-weekly pay runs, without paying for enterprise software.",
      role:
        "Built the full stack solo using Next.js and TypeScript. Designed the data model around real payroll logic — daily time entries, weekly hour totals, and bi-weekly pay cycles. The frontend handles employee login, daily time submission, and a manager dashboard for reviewing and approving pay runs. The backend enforces business rules like overtime thresholds and handles all calculations server-side.",
      outcome:
        "The app handles real employee data and is used by an actual small business. Building around a real-world workflow forced me to think carefully about data integrity, edge cases (e.g. missed clock-outs, part-week periods), and how to design a UI that non-technical users can operate confidently.",
    },
  },
  {
    slug: "job-application-tracker",
    title: "Job Application Tracker",
    description:
      "A full-stack app I built to manage my own job search — tracking every company, position, and application stage in one place. Features JWT-based authentication, bcrypt password hashing, and full CRUD with status filtering (Applied, Screening, Interview, Offer, Rejected).",
    category: ["Full-Stack"],
    tags: ["JavaScript", "Node.js", "JWT", "Full-Stack"],
    image: "/works/job-application-tracker.jpg",
    images: [
      "/works/job-application-tracker.jpg",
      "/works/job-application-tracker-2.jpg",
    ],
    year: "2026",
    link: "https://job-apptracker.vercel.app",
    github: "https://github.com/seed75/job-application-tracker",
    featured: true,
    details: {
      overview:
        "While actively job hunting, I was losing track of which companies I'd applied to, what stage each application was at, and which ones I'd never heard back from. Spreadsheets worked for a while but didn't scale. I decided to build a proper tool — something with real authentication, a clean UI, and status filtering I could actually rely on.",
      role:
        "Built the backend with Node.js and Express, using bcrypt for password hashing and JWT for stateless session management. The REST API covers full CRUD for applications, with filtering by status (Applied, Screening, Interview, Offer, Rejected). The frontend lets you add new applications, update stages, and get a clear overview of where everything stands.",
      outcome:
        "Used it throughout my own job search. Beyond the practical use, it gave me solid hands-on experience with authentication flows — handling token storage, protected routes, and session expiry. A good reminder that building tools for yourself is one of the best ways to learn.",
    },
  },
  {
    slug: "kanghire-ai",
    title: "KangHire AI",
    description:
      "An AI-powered hiring assistant with a React/Vite frontend and a Python backend. Built to streamline the early stages of hiring — resume parsing, candidate screening, and AI-generated summaries — using OpenAI's API.",
    category: ["AI Tools", "Full-Stack"],
    tags: ["Python", "React", "OpenAI", "Vite", "TypeScript"],
    image: "/works/kanghire-ai.jpg",
    year: "2025",
    link: "https://kang-hire-ai.vercel.app",
    github: "https://github.com/seed75/KangHire-AI",
    featured: true,
    details: {
      overview:
        "Wanted to go beyond building a chatbot and explore what AI could actually do for a real workflow. Resume screening is something that takes a lot of time and is full of subjective judgment — I thought it was a good fit for an AI assistant that could give structured, role-specific feedback at scale.",
      role:
        "Built a Python/FastAPI backend that handles both plain text and PDF/DOCX file uploads, parses the content, and sends it to the OpenAI API with a carefully engineered prompt. The React + Vite frontend provides two input modes (paste text or upload a file), a target-role selector, and a clean results panel. Implemented both a rule-based analyzer and an AI-powered one so users can compare outputs.",
      outcome:
        "First project where I connected a Python backend to a React frontend across separate deployed services. Got hands-on with CORS configuration, async API design, and prompt engineering — specifically, how to structure prompts to reliably get consistent, formatted output rather than free-form text.",
    },
  },
  {
    slug: "chatkangrp",
    title: "ChatKangTP — AI Chat Agent",
    description:
      "My first AI agent web app — a ChatGPT-style chat interface built with Next.js and connected to the OpenRouter API (Claude / GPT models). Built to practice frontend skills and real API integration. Fully responsive and deployed on Vercel.",
    category: ["AI Tools", "Frontend Development"],
    tags: ["Next.js", "OpenRouter API", "AI", "JavaScript"],
    image: "/works/chatkangrp.jpg",
    year: "2025",
    link: "https://chat-kang-tp-myfirstagent.vercel.app",
    github: "https://github.com/seed75/ChatKangTP_myfirstagent",
    featured: false,
    details: {
      overview:
        "I wanted to understand how chat interfaces actually work — not just use one, but build one from scratch. This was my first time wiring up a live language model to a UI I built myself, and it was mostly a learning exercise to understand state management, API design, and what it takes to ship something that feels responsive.",
      role:
        "Built the full frontend in Next.js — chat message state, conversation history rendering, and the API route connecting to OpenRouter, which provides access to both Claude and GPT models. Added dark mode, made it fully mobile responsive, and deployed it to Vercel.",
      outcome:
        "Shipped my first AI-connected app end-to-end. The main things I took away: how to manage growing message arrays in React without performance issues, how to handle streaming API responses, and the practical difference between using an API key server-side vs. exposing it client-side.",
    },
  },
  {
    slug: "pte-wfd-simulator",
    title: "PTE Write From Dictation Simulator",
    description:
      "A lightweight exam prep tool that simulates the Write From Dictation section of the PTE Academic test. Auto-plays audio with a countdown timer, highlights incorrect words in real time, and cycles through 338 official WFD sentences — built because every other option was paywalled.",
    category: ["Frontend Development"],
    tags: ["HTML", "JavaScript", "Education", "Tool"],
    image: "/works/pte-wfd-simulator.jpg",
    year: "2025",
    link: "https://pte-wfd-simulator.vercel.app",
    github: "https://github.com/seed75/PTE-wfd-simulator",
    featured: false,
    details: {
      overview:
        "I was preparing for the PTE Academic exam and needed to practice Write From Dictation every day — a section where you listen to a spoken sentence and type it word-for-word. Every decent practice tool I found was paywalled or required a subscription. So I scraped together the 338 most common official WFD sentences and built my own simulator.",
      role:
        "Built entirely in vanilla HTML, CSS, and JavaScript — no frameworks, no build step. It auto-plays audio using the Web Speech API, runs a countdown timer during playback, accepts typed input, and on submission highlights correct words in green and missed or wrong words in red. Sentences cycle randomly so repeated sessions feel fresh.",
      outcome:
        "Used it daily during my PTE prep and passed the exam. It was a good reminder that you don't always need a framework — a focused, well-scoped vanilla JS tool can be the right call. Also taught me a lot about the Web Speech API and how browsers handle audio timing.",
    },
  },
  {
    slug: "khl-portfolio",
    title: "Portfolio v1 — KHL",
    description:
      "My first portfolio — a single-page React site with scroll-snap slides, Framer Motion micro-interactions, a case-study modal with image gallery, and a Formspree-connected contact form. Built with accessibility in mind: focusable cards, ESC-to-close, and reduced-motion support.",
    category: ["Frontend Development"],
    tags: ["React", "Framer Motion", "CSS", "Formspree"],
    image: "/works/khl-portfolio.jpg",
    year: "2025",
    link: "https://khl.vercel.app",
    github: "https://github.com/seed75/khl",
    featured: false,
    details: {
      overview:
        "My first real portfolio — built when I was still learning React properly, so it doubled as a learning project. I wanted something that felt personal and had a bit of energy to it, rather than just a static list of skills and links. The bold gradient hero and heavy typography were a deliberate choice to stand out.",
      role:
        "Built with React and Framer Motion for page transitions and entrance animations. Used CSS scroll-snap for the full-page slide layout, built a project case-study modal with an image gallery from scratch, and connected the contact form to Formspree. Paid attention to accessibility: cards are keyboard-focusable, the modal closes on ESC, and animations respect prefers-reduced-motion.",
      outcome:
        "My first deployed React project and the first thing I could actually show people. Looking back, I'd structure the components differently and lean less on inline styles — but it got me comfortable with React's component model, Framer Motion's animation API, and the full process of going from design to deployed site.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
