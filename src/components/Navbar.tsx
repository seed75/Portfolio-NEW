"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/works", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          Kanghyeok Lee {/* TODO: 본인 이름으로 변경 */}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="mailto:ed75hyeok@gmail.com"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          Contact Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-zinc-900 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-zinc-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="mailto:ed75hyeok@gmail.com"
            className="mt-2 inline-flex w-fit items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white"
          >
            Contact Me
          </Link>
        </div>
      )}
    </header>
  );
}
