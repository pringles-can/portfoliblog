"use client";

import { useState } from "react";
import { cn } from "@/shared/lib/cn";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#writeups", label: "Writing" },
    { href: "#skills", label: "Skills" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
    { href: "#ask", label: "Ask" },
  ];

  return (
    <nav
      aria-label="Site navigation"
      className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <span className="font-mono text-sm font-semibold text-indigo-400">
          &lt;Steven Prindle /&gt;
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-slate-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="inline-flex md:hidden items-center justify-center rounded-md p-1.5 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          <svg
            className="h-6 w-6 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-950/95 backdrop-blur-sm border-t border-slate-800/40",
          isOpen ? "max-h-80 opacity-100 py-3" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col px-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
