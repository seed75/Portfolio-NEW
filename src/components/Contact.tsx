"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/seed75" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kanghyeoklee62/" },
  { label: "Email", href: "mailto:ed75hyeok@gmail.com" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 pb-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-zinc-900 px-10 py-16 sm:px-16 sm:py-20"
        {...fadeUp(0)}
      >
        {/* 배경 그라디언트 장식 */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-zinc-700/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-zinc-700/20 blur-3xl" />

        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

          {/* Text */}
          <motion.div className="flex flex-col gap-4 max-w-xl" {...fadeUp(0.1)}>
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
              Contact
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Have a project in mind?{" "}
              <em className="font-normal italic text-zinc-400">
                Let&apos;s work together.
              </em>
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              새로운 프로젝트, 협업 제안, 또는 궁금한 점이 있다면 편하게 연락주세요.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-col gap-3 sm:items-end shrink-0" {...fadeUp(0.2)}>
            <Link
              href="mailto:ed75hyeok@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Email Me
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.625 7H11.375M7.875 3.5L11.375 7L7.875 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Contact Form
            </Link>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          className="relative mt-12 flex flex-wrap items-center gap-6 border-t border-zinc-800 pt-8"
          {...fadeUp(0.3)}
        >
          <span className="text-xs text-zinc-500 uppercase tracking-widest">Find me on</span>
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {label} ↗
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
