export const heroContent = {
  headline: "Senior .NET Engineer Building Intelligent Automation Systems",
  subheadline:
    "I build scalable backend systems, production automation, and AI-orchestrated workflows using .NET, cloud infrastructure, and emerging agentic AI patterns.",
  ctas: [
    { label: "View Projects", href: "#projects", variant: "primary" as const },
    { label: "Resume", href: "/resume.pdf", variant: "secondary" as const },
    {
      label: "GitHub",
      href: "https://github.com/pringles-can",
      variant: "ghost" as const,
      external: true,
    },
    { label: "Contact", href: "#contact", variant: "ghost" as const },
  ],
  architectureDiagram: {
    nodes: [
      { id: "trigger", label: "Event / API Trigger", color: "indigo" },
      { id: "orchestrator", label: "Agent Orchestrator", color: "violet" },
      { id: "toolA", label: "Tool: Retrieval", color: "sky" },
      { id: "toolB", label: "Tool: Database", color: "sky" },
      { id: "human", label: "Human-in-the-Loop", color: "amber" },
      { id: "output", label: "Structured Output", color: "emerald" },
    ],
  },
} as const;

export type HeroCta = (typeof heroContent.ctas)[number];
