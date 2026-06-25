import type { Metadata } from "next";
import { Nav } from "@/features/nav/Nav";
import { Hero } from "@/features/hero/Hero";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { WriteupsSection } from "@/features/writeups/WriteupsSection";
import { SkillsSection } from "@/features/skills/SkillsSection";
import { ResumeSection } from "@/features/resume/ResumeSection";
import { ContactSection } from "@/features/contact/ContactSection";
import { AskSection } from "@/features/ask/AskSection";

export const metadata: Metadata = {
  title: "Senior .NET Engineer | Distributed Systems & Agentic AI",
  description:
    "Portfolio, projects, deployments, and ramblings of a Senior .NET Engineer specializing in distributed systems, enterprise automation, and production agentic AI.",
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
      <Divider />
      <AskSection />
      <Footer />
    </main>
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
