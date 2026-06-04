import type { Metadata } from "next";
import { Hero } from "@/features/hero/Hero";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { WriteupsSection } from "@/features/writeups/WriteupsSection";
import { SkillsSection } from "@/features/skills/SkillsSection";
import { ResumeSection } from "@/features/resume/ResumeSection";
import { ContactSection } from "@/features/contact/ContactSection";

export const metadata: Metadata = {
  title: "Senior .NET Engineer | Distributed Systems & Agentic AI",
  description:
    "Portfolio of a Senior .NET Engineer specializing in distributed systems, enterprise automation, and production agentic AI.",
};

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Nav />
      <Hero />
      <Divider />
      <ProjectsSection />
      <Divider />
      <WriteupsSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <ResumeSection />
      <Divider />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav
      aria-label="Site navigation"
      className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <span className="font-mono text-sm font-semibold text-indigo-400">
          &lt;YourName /&gt; {/* TODO: replace with your name */}
        </span>
        <div className="flex items-center gap-1">
          {[
            { href: "#projects", label: "Projects" },
            { href: "#writeups", label: "Writing" },
            { href: "#skills", label: "Skills" },
            { href: "#resume", label: "Resume" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-slate-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Divider() {
  return (
    <hr className="mx-auto max-w-6xl border-slate-800 px-4 sm:px-6 lg:px-8" aria-hidden="true" />
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4 text-center text-sm text-slate-600">
      <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
    </footer>
  );
}
