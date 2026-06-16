"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/shared/ui/Section";
import { cn } from "@/shared/lib/cn";

type AskState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; answer: string; sources: string[] }
  | { status: "error"; message: string };

const SOURCE_LABELS: Record<string, string> = {
  "#projects": "Projects",
  "#writeups": "Writing",
  "#skills": "Skills",
  "#resume": "Resume",
  "#contact": "Contact",
};

export function AskSection() {
  const [question, setQuestion] = useState("");
  const [state, setState] = useState<AskState>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim() || state.status === "loading") return;

    setState({ status: "loading" });
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });
      const data = await res.json() as { answer?: string; sources?: string[]; error?: string };
      if (!res.ok || data.error) {
        setState({ status: "error", message: data.error ?? "Something went wrong." });
      } else {
        setState({ status: "done", answer: data.answer ?? "", sources: data.sources ?? [] });
      }
    } catch {
      setState({ status: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <Section id="ask" label="Ask My Portfolio">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          title="Ask My Portfolio"
          subtitle="Have a question about my background, projects, or tech stack? Ask anything."
        />
      </div>

      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. What's your experience with distributed systems?"
            rows={3}
            className={cn(
              "w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3",
              "text-sm text-white placeholder:text-slate-500",
              "focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400/30",
              "transition-colors"
            )}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!question.trim() || state.status === "loading"}
              className={cn(
                "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                "bg-indigo-600 text-white border border-indigo-600",
                "hover:bg-indigo-500 hover:border-indigo-500",
                "disabled:opacity-40 disabled:cursor-not-allowed"
              )}
            >
              {state.status === "loading" ? "Thinking…" : "Ask"}
            </button>
          </div>
        </form>

        {state.status === "done" && (
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Answer
              </p>
              <p className="text-sm leading-relaxed text-slate-200 whitespace-pre-wrap">
                {state.answer}
              </p>
            </div>
            {state.sources.length > 0 && (
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Sources
                </p>
                <div className="flex flex-wrap gap-2">
                  {state.sources.map((src) => (
                    <a
                      key={src}
                      href={src}
                      className="rounded-md border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-500 hover:text-indigo-400"
                    >
                      {SOURCE_LABELS[src] ?? src}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {state.status === "error" && (
          <div className="mt-6 rounded-xl border border-red-900/50 bg-slate-900 p-6">
            <p className="text-sm text-red-400">{state.message}</p>
          </div>
        )}
      </div>
    </Section>
  );
}
