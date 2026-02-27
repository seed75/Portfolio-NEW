"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import WorkCard from "@/components/WorkCard";
import { projects, Category } from "@/data/projects";

const categories: ("All" | Category)[] = [
  "All",
  "UI/UX Design",
  "Frontend Development",
  "Branding",
];

export default function WorksPage() {
  const [selected, setSelected] = useState<"All" | Category>("All");

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category.includes(selected));

  return (
    <main>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Works
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            All projects
          </h1>
          <p className="max-w-md text-base text-zinc-500 leading-relaxed">
            UI/UX 디자인, 프론트엔드 개발, 브랜딩 전반에 걸친 프로젝트 모음입니다.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                selected === cat
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-zinc-400 mt-8">No projects in this category yet.</p>
        )}
      </div>
    </main>
  );
}
