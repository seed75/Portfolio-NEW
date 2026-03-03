import Navbar from "@/components/Navbar";
import Link from "next/link";

const experiences = [
  {
    role: "Manager",
    company: "Tokuya Restaurant",
    period: "2022 – Present",
    desc: "Oversaw day-to-day restaurant operations including staff scheduling, inventory management, and customer service. Coordinated front-of-house and kitchen teams to maintain service quality during peak periods.",
  },
  {
    role: "Sergeant",
    company: "Republic of Korea Army",
    period: "2014 – 2016",
    desc: "Completed mandatory military service. Responsibilities included unit operations, personnel coordination, and maintaining discipline and readiness within the team.",
  },
];

const stackGroups = [
  {
    category: "Design Tools",
    items: [
      { name: "Framer", desc: "Interactive website design & prototyping" },
      { name: "Illustrator", desc: "Vector graphics and brand assets" },
      { name: "Photoshop", desc: "Image editing and visual composition" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", desc: "Component-based UI library" },
      { name: "Next.js", desc: "Production-grade React framework" },
      { name: "TypeScript", desc: "Scalable, type-safe codebases" },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework" },
    ],
  },
  {
    category: "Backend & Infra",
    items: [
      { name: "Node.js", desc: "Server-side JavaScript runtime" },
      { name: "Supabase", desc: "Auth, database, and storage" },
      { name: "Vercel", desc: "Frontend deployment platform" },
      { name: "Git / GitHub", desc: "Version control and collaboration" },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Notion", desc: "Project management and documentation" },
      { name: "Slack", desc: "Team communication" },
      { name: "Linear", desc: "Issue tracking for fast-moving teams" },
    ],
  },
];

const education = [
  { type: "Education", content: "Victoria University Sydney — Bachelor of Information Technology", period: "2022 – 2025" },
  { type: "Education", content: "University of South Australia — Bachelor of Aviation", period: "2017 – 2019" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="mb-20 flex flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            About
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Full-stack developer with a strong sense of{" "}
            <em className="font-normal italic text-zinc-400">design</em>{" "}
            and a drive to build
          </h1>
        </div>

        {/* ── Bio ────────────────────────────────────────────────────── */}
        <div className="mb-20 flex flex-col gap-5 max-w-2xl text-base leading-relaxed text-zinc-500">
          <p>
            I&apos;m a recent graduate and full-stack developer with experience
            building web applications end-to-end from responsive React and
            Next.js frontends to Node.js backends and database integrations
            with Supabase and Firebase.
          </p>
          <p>
            What sets me apart is that I care as much about how things look
            and feel as how they work. I approach every project with both
            an engineering mindset and an eye for clean, user-centered design.
          </p>
          <p>
            I&apos;m actively seeking a junior or entry-level role where I can
            contribute to a real product, learn from experienced teammates
            and grow fast. I&apos;m ready to hit the ground running.
          </p>
        </div>

        <div className="h-px bg-zinc-100 mb-20" />

        {/* ── Work Experience ─────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">
            Work Experience
          </h2>
          <div className="flex flex-col divide-y divide-zinc-100">
            {experiences.map((exp, i) => (
              <div key={i} className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-zinc-900">{exp.role}</span>
                  <span className="text-sm text-zinc-400">{exp.company}</span>
                  <p className="mt-1 text-sm text-zinc-500 max-w-md">{exp.desc}</p>
                </div>
                <span className="text-sm text-zinc-400 shrink-0 mt-0.5">{exp.period}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-zinc-100 mb-20" />

        {/* ── Tech Stack ──────────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {stackGroups.map(({ category, items }) => (
              <div key={category} className="flex flex-col gap-4">
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  {category}
                </span>
                <div className="flex flex-col gap-3">
                  {items.map(({ name, desc }) => (
                    <div key={name} className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-zinc-900">{name}</span>
                      <span className="text-xs text-zinc-400">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-zinc-100 mb-20" />

        {/* ── Education ───────────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">
            Education & Certifications
          </h2>
          <div className="flex flex-col divide-y divide-zinc-100">
            {education.map(({ type, content, period }, i) => (
              <div key={i} className="flex items-center justify-between py-5">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full shrink-0">
                    {type}
                  </span>
                  <span className="text-sm font-medium text-zinc-900">{content}</span>
                </div>
                <span className="text-sm text-zinc-400 shrink-0 ml-4">{period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="mailto:ed75hyeok@gmail.com"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Email Me
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.625 7H11.375M7.875 3.5L11.375 7L7.875 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/works"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            View my works →
          </Link>
        </div>

      </div>
    </main>
  );
}
