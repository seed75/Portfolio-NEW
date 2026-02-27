import Navbar from "@/components/Navbar";
import Link from "next/link";

// skill.md → Work Experience 섹션 참조
const experiences = [
  {
    role: "[직책]",           // TODO: 예) "Frontend Developer"
    company: "[회사명]",      // TODO: 예) "ABC Corp."
    period: "20XX – Present",
    desc: "주요 담당 업무 및 성과를 작성하세요.", // TODO
  },
  {
    role: "[직책]",
    company: "[회사명]",
    period: "20XX – 20XX",
    desc: "주요 담당 업무 및 성과를 작성하세요.",
  },
  {
    role: "[직책]",
    company: "[회사명]",
    period: "20XX – 20XX",
    desc: "주요 담당 업무 및 성과를 작성하세요.",
  },
];

// skill.md → Tech Stack 섹션 참조
const stackGroups = [
  {
    category: "Design Tools",
    items: [
      { name: "Figma", desc: "UI/UX 디자인 및 디자인 시스템 구축" },
      { name: "Framer", desc: "인터랙티브 웹사이트 제작" },
      { name: "Illustrator", desc: "벡터 그래픽 및 브랜드 에셋" },
      { name: "Photoshop", desc: "이미지 편집 및 비주얼 컴포지션" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", desc: "컴포넌트 기반 UI 라이브러리" },
      { name: "Next.js", desc: "프로덕션급 React 프레임워크" },
      { name: "TypeScript", desc: "확장 가능한 타입 안전 코드" },
      { name: "Tailwind CSS", desc: "유틸리티 퍼스트 CSS 프레임워크" },
    ],
  },
  {
    category: "Backend & Infra",
    items: [
      { name: "Node.js", desc: "서버사이드 JavaScript 런타임" },
      { name: "Supabase", desc: "인증, 데이터베이스, 스토리지" },
      { name: "Vercel", desc: "프론트엔드 배포 플랫폼" },
      { name: "Git / GitHub", desc: "버전 관리 및 협업" },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Notion", desc: "프로젝트 관리 및 문서화" },
      { name: "Slack", desc: "팀 커뮤니케이션" },
      { name: "Linear", desc: "이슈 트래킹" },
    ],
  },
];

// skill.md → Education & Certifications 참조
const education = [
  { type: "학력", content: "[학교명] — [전공]", period: "20XX – 20XX" }, // TODO
  { type: "자격증", content: "[자격증명]", period: "20XX" },              // TODO
  { type: "수료", content: "[부트캠프 / 코스명]", period: "20XX" },       // TODO
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
            I create strategic and visually{" "}
            <em className="font-normal italic text-zinc-400">compelling</em>{" "}
            digital experiences
          </h1>
        </div>

        {/* ── Bio ────────────────────────────────────────────────────── */}
        <div className="mb-20 flex flex-col gap-5 max-w-2xl text-base leading-relaxed text-zinc-500">
          <p>
            As a frontend developer with a strong focus on UI/UX, my focus is on
            creating intuitive user interfaces, seamless interactions, and cohesive
            digital experiences that drive engagement and enhance usability.
          </p>
          <p>
            Whether it&apos;s designing SaaS dashboards, mobile apps, or
            high-performance websites, my approach combines creativity with a deep
            understanding of user needs and business goals.
          </p>
          <p>
            Over the years, I&apos;ve collaborated with startups, established
            companies, and entrepreneurs to bring their ideas to life through
            thoughtful design and development solutions.
          </p>
          {/* TODO: 위 세 단락을 본인의 실제 소개문으로 수정하세요. */}
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
        {/* skill.md → Tech Stack 섹션 참조 */}
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
        {/* skill.md → Education & Certifications 참조 */}
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
