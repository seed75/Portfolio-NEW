"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Project } from "@/data/projects";

interface WorkCardProps {
  project: Project;
  index: number;
}

export default function WorkCard({ project, index }: WorkCardProps) {
  const images = project.images ?? [project.image];
  const hasMultiple = images.length > 1;
  const [current, setCurrent] = useState(0);

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  }

  function dot(e: React.MouseEvent, i: number) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent(i);
  }

  return (
    <Link
      href={`/works/${project.slug}`}
      className="group flex flex-col gap-4 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/3]">
        <Image
          src={images[current]}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
        />

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

        {/* Slider controls */}
        {hasMultiple && (
          <>
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M7.5 2.5L3.5 6L7.5 9.5" stroke="#27272a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4.5 2.5L8.5 6L4.5 9.5" stroke="#27272a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => dot(e, i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === current
                      ? "bg-white w-4"
                      : "bg-white/60 hover:bg-white/90"
                  }`}
                />
              ))}
            </div>
          </>
        )}
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
