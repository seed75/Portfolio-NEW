import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main>
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back */}
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-12"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M11.375 7H2.625M6.125 3.5L2.625 7L6.125 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All Works
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full"
            >
              {cat}
            </span>
          ))}
          <span className="text-xs text-zinc-400">{project.year}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4 sm:text-5xl">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-2xl">
          {project.description}
        </p>

        {/* Links */}
        {(project.link || project.github) && (
          <div className="flex flex-wrap gap-3 mb-16">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
              >
                Live Site
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                GitHub
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        )}

        {/* Project image */}
        <div className="w-full rounded-2xl bg-zinc-100 aspect-video flex items-center justify-center mb-16">
          {/*
            TODO: 프로젝트 이미지 추가 후 아래 주석 해제
            <Image src={project.image} alt={project.title} fill className="object-cover rounded-2xl" />
          */}
          <span className="text-zinc-300 text-sm">프로젝트 이미지</span>
        </div>

        {/* TODO: 프로젝트 상세 내용 추가 영역 */}
        <div className="flex flex-col gap-8 text-zinc-600 leading-relaxed">
          <div className="h-px bg-zinc-100" />
          <p className="text-zinc-400 text-sm italic">
            TODO: 프로젝트 상세 내용을 여기에 작성하세요.
            (배경, 역할, 해결 과정, 결과 등)
          </p>
        </div>

        {/* Tags */}
        <div className="mt-16 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-zinc-500 border border-zinc-200 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}
