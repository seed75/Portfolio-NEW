"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

// skill.md → Channels 섹션 참조
const contactInfo = [
  {
    label: "Email",
    value: "ed75hyeok@gmail.com",
    href: "mailto:ed75hyeok@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/seed75",
    href: "https://github.com/seed75",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kanghyeoklee62",
    href: "https://www.linkedin.com/in/kanghyeoklee62/",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 폼 제출 로직 연결 (Formspree, EmailJS, API Route 등)
    // 예) fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Contact
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Let&apos;s work{" "}
            <em className="font-normal italic text-zinc-400">together</em>
          </h1>
          <p className="max-w-md text-base text-zinc-500 leading-relaxed">
            새로운 프로젝트, 협업, 또는 궁금한 점이 있으시면 편하게 연락주세요.
            보통 24시간 이내에 답변드립니다.
            {/* TODO: 본인 메시지로 수정 */}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">

          {/* ── Left: Contact Info ───────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {contactInfo.map(({ label, value, href }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                    {label}
                  </span>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>

            <div className="h-px bg-zinc-100" />

            {/* Availability */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                Availability
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm text-zinc-600">
                  Available for new projects
                  {/* TODO: 상태에 맞게 변경 */}
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ──────────────────────────────────── */}
          {submitted ? (
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3.75 9L7.5 12.75L14.25 5.25" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-zinc-900">메시지를 받았습니다!</h2>
              <p className="text-sm text-zinc-500">빠른 시일 내에 답변드릴게요.</p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                className="mt-2 text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors"
              >
                다시 보내기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-400 focus:ring-0"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-400 focus:ring-0"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-400 focus:ring-0"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                Send Message
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.625 7H11.375M7.875 3.5L11.375 7L7.875 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
