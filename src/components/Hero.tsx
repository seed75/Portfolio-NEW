"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950">

      {/* ── Silhouette image — bleeds from top, fades into dark bg ───────── */}
      <motion.div
        className="absolute inset-x-0 top-0 flex justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="relative h-screen w-[600px] max-w-[75vw]">
          <Image
            src="/hero-silhouette.jpg"
            alt="Kanghyeok Lee"
            fill
            className="object-cover object-[55%_center]"
            priority
          />

          {/* Side fades — blend black photo edges into section bg */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

          {/* Bottom fade — text content sits above this */}
          <div className="absolute bottom-0 inset-x-0 h-[55%] bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent" />
        </div>
      </motion.div>

      {/* ── Bottom content ─────────────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-14 sm:pb-20">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-8">

          {/* Left: badge + heading */}
          <div className="flex flex-col gap-5 max-w-xl">
            {/* Availability badge */}
            <motion.div
              className="flex items-center gap-2"
              {...fadeUp(0.3)}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm text-zinc-400">
                Open to Junior / Entry-level Roles
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-white"
              {...fadeUp(0.42)}
            >
              Where clean code<br />
              meets <em className="font-normal italic text-zinc-400">thoughtful</em><br />
              design
            </motion.h1>
          </div>

          {/* Right: bio + CTA */}
          <div className="hidden sm:flex flex-col items-start gap-5 max-w-[300px] shrink-0">
            <motion.p
              className="text-base leading-relaxed text-zinc-400"
              {...fadeUp(0.55)}
            >
              Full-stack developer with a strong sense of design.
              I build end-to-end web apps using React, Next.js and Node.js
              and I take the user experience seriously at every layer.
              Actively seeking a junior role where real-world experience comes first.
            </motion.p>

            <motion.div {...fadeUp(0.68)}>
              <Link
                href="mailto:ed75hyeok@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
              >
                Email Me
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
          </div>
        </div>

        {/* Mobile: bio + button below heading */}
        <div className="mx-auto max-w-7xl mt-6 flex flex-col gap-4 sm:hidden">
          <motion.p
            className="text-base leading-relaxed text-zinc-400"
            {...fadeUp(0.55)}
          >
            Full-stack developer with a strong sense of design.
            Building end-to-end web apps and actively seeking a junior role
            where real-world experience comes first.
          </motion.p>
          <motion.div {...fadeUp(0.65)}>
            <Link
              href="mailto:ed75hyeok@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-zinc-900"
            >
              Email Me
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
