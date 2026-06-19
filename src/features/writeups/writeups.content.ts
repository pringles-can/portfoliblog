import type { Writeup } from "./writeups.types";

export const writeups: Writeup[] = [
  {
    id: "javascript-sucks-ass",
    title: "Javascript Is Hot Trash - A Modest Review",
    summary:
      "Today we identify lies (i.e. TypeScript), coercion (see ==, !=), and generally discuss the most dominant programming rush job on the planet.",
    tags: ["Javascript", "Typescript", "", "rant"],
    readTime: "10 min read",
    href: "#",
    publishedAt: "2026-05-16",
  },

  {
    id: "tool-orchestrated-ai-workflows",
    title: "Designing Tool-Orchestrated AI Workflows in .NET",
    summary:
      "A deep dive into building reliable, production-grade agentic workflows using the Claude SDK and .NET 9.  We cover tool design, structured output enforcement, and retry semantics.",
    tags: ["AI Engineering", ".NET", "Claude SDK", "Tool Use"],
    readTime: "12 min read",
    href: "#",
    publishedAt: "2025-04-10",
  },

  {
    id: "human-in-the-loop-agents",
    title: "Building Human-in-the-Loop Agent Systems",
    summary:
      "How to design AI agents that escalate to humans at the right moments.  We cover confidence thresholds, approval workflows, audit trails, and YOU.",
    tags: ["AI Engineering", "System Design", "UX Patterns"],
    readTime: "9 min read",
    href: "#",
    publishedAt: "2025-03-01",
  },

  {
    id: "reducing-support-load-automation",
    title: "Reducing Production Support Load Through Automation",
    summary:
      "How a combination of intelligent triage, automated runbooks, and self-healing workflows cut our team's support ticket load by 60% — and the architecture behind it.",
    tags: ["Automation", ".NET", "Operations", "Azure"],
    readTime: "10 min read",
    href: "#",
    publishedAt: "2025-01-20",
  },

  {
    id: "observability-agentic-ai",
    title: "Observability for Agentic AI Systems",
    summary:
      "Today we debug non-deterministic systems!  Not really.  We talk about structured logging, distributed tracing, and prompt telemetry for AI agents, and how that helps keep things deterministic.",
    tags: ["Observability", "AI Engineering", "OpenTelemetry", "Azure Monitor"],
    readTime: "11 min read",
    href: "#",
    publishedAt: "2025-12-05",
  },
];
