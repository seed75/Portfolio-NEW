"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "N+", label: "Years of experience" },
  { value: "N+", label: "Projects completed" },
  { value: "N+", label: "Happy clients" },
];

const stacks = [
  { category: "Design", items: ["Figma", "Framer", "Illustrator", "Photoshop"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend & Infra", items: ["Node.js", "Supabase", "Vercel", "GitHub"] },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-100">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32">

        {/* ── Left: Bio ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-10">
          <motion.div className="flex flex-col gap-3" {...fadeUp(0)}>
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
              About Me
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              I create strategic and visually compelling digital experiences
            </h2>
          </motion.div>

          <motion.div className="flex flex-col gap-4 text-base leading-relaxed text-zinc-500" {...fadeUp(0.1)}>
            <p>
              As a frontend developer with a strong focus on UI/UX, my focus is
              on creating intuitive user interfaces, seamless interactions, and
              cohesive digital experiences that drive engagement and enhance
              usability.
            </p>
            <p>
              Whether it&apos;s designing SaaS dashboards, mobile apps, or
              high-performance websites, my approach combines creativity with a
              deep understanding of user needs and business goals.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <Link
              href="/about"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors"
            >
              More about me
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2.625 7H11.375M7.875 3.5L11.375 7L7.875 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ── Right: Stats + Stack ──────────────────────────────────── */}
        <div className="flex flex-col gap-12">

          {/* Stats */}
          <motion.div className="grid grid-cols-3 gap-6" {...fadeUp(0.1)}>
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-4xl font-semibold tracking-tight text-zinc-900">
                  {value}
                </span>
                <span className="text-xs text-zinc-400 leading-snug">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-zinc-100" />

          {/* Tech Stack */}
          <motion.div className="flex flex-col gap-6" {...fadeUp(0.2)}>
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
              Tech Stack
            </span>
            <div className="flex flex-col gap-5">
              {stacks.map(({ category, items }) => (
                <div key={category} className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-zinc-400">{category}</span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-sm text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
