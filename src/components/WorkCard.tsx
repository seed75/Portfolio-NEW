import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface WorkCardProps {
  project: Project;
  index: number;
}

export default function WorkCard({ project, index }: WorkCardProps) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group flex flex-col gap-4 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/3]">
        {/* TODO: 이미지를 추가하면 아래 Image 컴포넌트 주석 해제 */}
        {/*
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        */}

        {/* 이미지 플레이스홀더 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-zinc-300 text-sm font-medium">
            {project.title}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-zinc-900/0 transition-colors duration-300 group-hover:bg-zinc-900/10 rounded-2xl" />

        {/* Index number */}
        <span className="absolute top-4 left-4 text-xs font-medium text-zinc-400 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Year badge */}
        <span className="absolute top-4 right-4 text-xs font-medium text-zinc-500 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {project.year}
        </span>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center transition-all duration-200 group-hover:bg-zinc-900 group-hover:border-zinc-900">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-zinc-400 group-hover:text-white transition-colors duration-200"
            aria-hidden="true"
          >
            <path
              d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
