"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectImageSlider({ images, title }: Props) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;

  function prev() {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }

  function next() {
    setCurrent((c) => (c + 1) % images.length);
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden aspect-video mb-16 group bg-zinc-100">
      <Image
        src={images[current]}
        alt={`${title} — screenshot ${current + 1}`}
        fill
        className="object-cover transition-opacity duration-400"
      />

      {hasMultiple && (
        <>
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow-sm"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M8.75 2.625L4.375 7L8.75 11.375" stroke="#27272a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow-sm"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5.25 2.625L9.625 7L5.25 11.375" stroke="#27272a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white w-5" : "bg-white/60 w-1.5 hover:bg-white/90"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="absolute top-4 right-4 text-xs font-medium text-white bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
