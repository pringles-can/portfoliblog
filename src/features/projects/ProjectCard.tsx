import { Card } from "@/shared/ui/Card";
import { ButtonLink } from "@/shared/ui/Button";
import type { Project } from "./projects.types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card variant={project.highlight ? "highlight" : "default"}>
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>

      <div className="mt-4 space-y-4">
        <Field label="Problem">
          <p className="text-sm text-slate-400">{project.problem}</p>
        </Field>

        <Field label="Architecture">
          <p className="text-sm text-slate-400">{project.architecture}</p>
        </Field>

        <Field label="Key Engineering Decisions">
          <ul className="space-y-1">
            {project.keyDecisions.map((decision) => (
              <li key={decision} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
                {decision}
              </li>
            ))}
          </ul>
        </Field>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-5">
          {project.links.map((link) => (
            <ButtonLink
              key={link.label}
              href={link.href}
              variant="ghost"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
              {link.external && (
                <svg
                  aria-hidden="true"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </ButtonLink>
          ))}
        </div>
      )}
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
