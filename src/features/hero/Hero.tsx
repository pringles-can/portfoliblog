import { ButtonLink } from "@/shared/ui/Button";
import { heroContent } from "./hero.content";

function AgentWorkflowDiagram() {
  return (
    <div
      aria-label="Agent workflow architecture diagram"
      className="relative w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Agentic Workflow Architecture
      </p>
      <div className="flex flex-col gap-3">
        <DiagramNode label="Event / API Trigger" color="indigo" isFirst />
        <DiagramArrow />
        <DiagramNode label="Agent Orchestrator" color="violet" />
        <div className="my-1 flex flex-col sm:flex-row sm:items-start gap-3 pl-4 sm:pl-8">
          <div className="flex sm:flex-col items-center gap-2 sm:gap-1 w-full sm:w-auto">
            <DiagramBranch className="hidden sm:block" />
            <span className="sm:hidden text-slate-600 font-mono text-sm shrink-0" aria-hidden="true">
              ├─
            </span>
            <DiagramNode label="Tool: Retrieval" color="sky" small className="w-full sm:w-auto text-left sm:text-center animate-fade-in" />
          </div>
          <div className="flex sm:flex-col items-center gap-2 sm:gap-1 w-full sm:w-auto">
            <DiagramBranch className="hidden sm:block" />
            <span className="sm:hidden text-slate-600 font-mono text-sm shrink-0" aria-hidden="true">
              ├─
            </span>
            <DiagramNode label="Tool: Database" color="sky" small className="w-full sm:w-auto text-left sm:text-center animate-fade-in" />
          </div>
          <div className="flex sm:flex-col items-center gap-2 sm:gap-1 w-full sm:w-auto">
            <DiagramBranch className="hidden sm:block" />
            <span className="sm:hidden text-slate-600 font-mono text-sm shrink-0" aria-hidden="true">
              └─
            </span>
            <DiagramNode label="Tool: External API" color="sky" small className="w-full sm:w-auto text-left sm:text-center animate-fade-in" />
          </div>
        </div>
        <DiagramArrow />
        <DiagramNode label="Human-in-the-Loop Review" color="amber" />
        <DiagramArrow />
        <DiagramNode label="Structured Output / Action" color="emerald" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
        {["Claude SDK", ".NET 9", "Azure", "Event Grid", "Cosmos DB"].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

interface DiagramNodeProps {
  label: string;
  color: "indigo" | "violet" | "sky" | "amber" | "emerald";
  small?: boolean;
  isFirst?: boolean;
  className?: string;
}

const colorMap: Record<DiagramNodeProps["color"], string> = {
  indigo: "border-indigo-700 bg-indigo-950/60 text-indigo-300",
  violet: "border-violet-700 bg-violet-950/60 text-violet-300",
  sky: "border-sky-700 bg-sky-950/60 text-sky-300",
  amber: "border-amber-700 bg-amber-950/60 text-amber-300",
  emerald: "border-emerald-700 bg-emerald-950/60 text-emerald-300",
};

function DiagramNode({ label, color, small, className }: DiagramNodeProps) {
  return (
    <div
      className={`rounded-lg border px-3 py-1.5 font-mono ${small ? "text-xs" : "text-sm"} ${colorMap[color]} ${className || "text-center"}`}
    >
      {label}
    </div>
  );
}

function DiagramArrow() {
  return (
    <div className="flex justify-center text-slate-600" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 12l-4-4h2.5V4h3v4H12L8 12z" />
      </svg>
    </div>
  );
}

function DiagramBranch({ className }: { className?: string }) {
  return (
    <div className={`h-4 w-px bg-slate-700 ${className || ""}`} aria-hidden="true" />
  );
}

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-800/60 bg-indigo-950/40 px-3 py-1 text-xs font-medium text-indigo-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" aria-hidden="true" />
            Available for senior roles &amp; consulting
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {heroContent.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            {heroContent.subheadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            {heroContent.ctas.map((cta) => (
              <ButtonLink
                key={cta.label}
                href={cta.href}
                variant={cta.variant}
                className="justify-center sm:justify-start"
                {...("external" in cta && cta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {cta.label}
              </ButtonLink>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-6 text-sm text-slate-500">
            <Stat value="8+" label="Years .NET" />
            <div className="hidden sm:block h-4 w-px bg-slate-800" aria-hidden="true" />
            <Stat value="50+" label="Production systems" />
            <div className="hidden sm:block h-4 w-px bg-slate-800" aria-hidden="true" />
            <Stat value="3" label="AI agents shipped" />
          </div>
        </div>
        <div className="lg:justify-self-end">
          <AgentWorkflowDiagram />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="block text-lg font-semibold text-white">{value}</span>
      <span className="text-xs text-slate-500">{label}</span>
    </div>
  );
}
