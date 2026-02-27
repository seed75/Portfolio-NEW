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
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* ── Center profile image ──────────────────────────────────────── */}
      <motion.div
        className="absolute inset-x-0 top-0 flex justify-center"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative h-screen w-[460px] max-w-[55vw]">
          {/*
            TODO: /public/profile.jpg 에 본인 사진을 추가하고 아래 Image 주석을 해제하세요.
            사진은 배경 제거(Remove.bg 등)된 인물 사진이 가장 잘 어울립니다.

            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover object-top"
              priority
            />
          */}

          {/* 이미지 플레이스홀더 */}
          <div className="absolute inset-0 flex items-start justify-center pt-24 text-zinc-300 text-sm select-none">
            프로필 사진 추가 필요
          </div>
          <div className="absolute inset-0 rounded-b-full bg-zinc-100/60" />

          {/* Bottom gradient — 이미지가 흰 배경으로 자연스럽게 페이드 */}
          <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-white via-white/80 to-transparent" />
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
              <span className="text-sm text-zinc-500">
                Available for new projects {/* TODO: 상태에 맞게 변경 */}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-zinc-900"
              {...fadeUp(0.42)}
            >
              Crafting seamless<br />
              digital experiences<br />
              through design & code
              {/* TODO: 본인의 강점 문장으로 수정 */}
            </motion.h1>
          </div>

          {/* Right: bio + CTA */}
          <div className="hidden sm:flex flex-col items-start gap-5 max-w-[300px] shrink-0">
            <motion.p
              className="text-base leading-relaxed text-zinc-500"
              {...fadeUp(0.55)}
            >
              As a frontend developer with a strong focus on UI/UX, I collaborate
              closely with teams to craft seamless, user-centered experiences.
              A reliable partner in bringing ideas to life.
              {/* TODO: 본인 소개문으로 수정 */}
            </motion.p>

            <motion.div {...fadeUp(0.68)}>
              <Link
                href="mailto:ed75hyeok@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
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
            className="text-base leading-relaxed text-zinc-500"
            {...fadeUp(0.55)}
          >
            As a frontend developer with a strong focus on UI/UX, I collaborate
            closely with teams to craft seamless, user-centered experiences.
          </motion.p>
          <motion.div {...fadeUp(0.65)}>
            <Link
              href="mailto:ed75hyeok@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white"
            >
              Email Me
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
