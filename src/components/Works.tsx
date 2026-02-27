"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import WorkCard from "@/components/WorkCard";
import { featuredProjects } from "@/data/projects";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Works() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <motion.div className="flex flex-col gap-2" {...fadeUp(0)}>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Selected Works
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Featured projects
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <Link
            href="/works"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors group"
          >
            All Works
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
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

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.div key={project.slug} {...fadeUp(0.15 + index * 0.1)}>
            <WorkCard project={project} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Mobile: All Works link */}
      <motion.div className="mt-10 flex sm:hidden" {...fadeUp(0.3)}>
        <Link
          href="/works"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          All Works
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
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
    </section>
  );
}
