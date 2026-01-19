"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-medium">
          Evander Mendonca
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resume.pdf" className="rounded-full border px-4 py-1.5">
            Resume
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-5 bg-neutral-900 mb-1" />
          <span className="block h-0.5 w-5 bg-neutral-900 mb-1" />
          <span className="block h-0.5 w-5 bg-neutral-900" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="px-4 py-4 flex flex-col gap-4 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/experience" onClick={() => setOpen(false)}>
              Experience
            </Link>
            <Link href="/writing" onClick={() => setOpen(false)}>
              Writing
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link
              href="/resume.pdf"
              className="mt-2 inline-block rounded-full border px-4 py-2 w-fit"
              onClick={() => setOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
