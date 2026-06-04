import { Section, SectionHeading } from "@/shared/ui/Section";
import { ButtonLink } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";

const summary =
  "Senior Software Engineer with 8+ years building high-throughput distributed systems, enterprise workflow automation, and — more recently — production agentic AI solutions on .NET and Azure. I focus on clear system boundaries, observable systems, and shipping things that actually work in production. I care deeply about the engineering decisions that happen before the first line of code.";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Company Name", // TODO: replace with your actual company
    period: "2022 – Present",
    highlights: [
      "Designed and shipped AI support triage agent reducing average resolution time by 40%",
      "Led enterprise workflow automation platform adopted by 5 business units",
      "Established observability standards across 12 distributed .NET services using OpenTelemetry",
      "Mentored 3 mid-level engineers; introduced vertical slice architecture to a 10-person team",
    ],
  },
  {
    role: "Software Engineer",
    company: "Previous Company", // TODO: replace with your actual company
    period: "2019 – 2022",
    highlights: [
      "Built real-time operations dashboard with SignalR serving 200+ concurrent users",
      "Migrated legacy monolith to distributed microservices architecture on Azure",
      "Reduced infrastructure costs by 35% through workload right-sizing and autoscaling",
      "Led migration from on-premise SQL Server to Cosmos DB with zero downtime",
    ],
  },
  {
    role: "Software Engineer",
    company: "First Company", // TODO: replace with your actual company
    period: "2017 – 2019",
    highlights: [
      "Delivered ASP.NET Core REST APIs for fintech integrations serving 50k daily transactions",
      "Built automated test suite reducing regression cycle from 4 days to 2 hours",
      "Implemented CI/CD pipeline using Azure DevOps for 6 microservices",
    ],
  },
];

export function ResumeSection() {
  return (
    <Section id="resume" label="Resume">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SectionHeading title="Resume" />
        <ButtonLink
          href="/resume.pdf"
          variant="secondary"
          download
          className="self-start sm:self-auto"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Resume
        </ButtonLink>
      </div>

      <Card className="mb-8">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Summary
        </h3>
        <p className="text-sm leading-relaxed text-slate-300">{summary}</p>
      </Card>

      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={job.role + job.company}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-semibold text-white">{job.role}</h3>
              <span className="text-sm text-slate-500">{job.period}</span>
            </div>
            <p className="mb-3 text-sm text-indigo-400">{job.company}</p>
            <ul className="space-y-1.5">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
