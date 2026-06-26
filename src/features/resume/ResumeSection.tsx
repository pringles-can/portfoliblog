import { Section, SectionHeading } from "@/shared/ui/Section";
import { ButtonLink } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";

const summary =
  "Senior Software Engineer with 8+ years building high-throughput distributed systems, enterprise workflow automation, and — more recently — production agentic AI solutions on .NET and Azure. I focus on clear system boundaries, observable systems, and shipping things that actually work in production. I care deeply about the engineering decisions that happen before the first line of code.";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "LeadingAgile/LiminalArc",
    period: "2025 – 2026",
    highlights: [
      "Architected and delivered a .NET-based service request and work assignment notification platform, enabling real-time tracking and reliable event-driven workflows across distributed systems.",
      "Utilized Azure DevOps (ADO) for backlog management, pull request governance, and CI/CD pipelines to ensure traceable, high-quality releases.",
      "Mentored junior engineers through mobbing/ensemble programming, improving code quality, shared ownership, and delivery consistency.",
    ],
  },
  {
    role: "Senior Software Engineer II",
    company: "Daugherty Business Solutions/CGI",
    period: "2024 – 2025",
    highlights: [
      "Established foundational pattern and organization's first cloud venture to transform incoming data into outgoing Benefit Verifications and Prior Authorizations ",
      "Implemented state machine to better manage prescription and enrollment status changes and transform data into Benefit Verifications and Prior Auths.",
      "Created Oracle views to manage complex data sets derived from multiple database transactions, leading to up to 80% faster load times on common pages.",
    ],
  },
  {
    role: "Consultant - Senior Software Engineer II",
    company: "Daugherty Business Solutions/CGI",
    period: "2023 – 2024",
    highlights: [
      "Recognized improper parsing of EDI files from inhouse Java rules engine, resulting in an additional $10,000 in monthly revenue.",
      "Developed greenfield Coverage Eligibility Request ETL workflow in C#, resulting in 10% increase in automated Benefits Verification.",
      "Provisioned AWS API Gateway, Kafka, S3 buckets, and downstream data stores using Terraform for a new provider onboarding service.",
      "Developed C# services to consume SOAP messages, map data to FHIR responses, and publish to public Kafka topic.",
    ],
  },
];

export function ResumeSection() {
  return (
    <Section id="resume" label="Resume">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SectionHeading title="Resume" />
        <ButtonLink
          href="/Steven_Prindle_Resume.pdf"
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
