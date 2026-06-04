import type { Project } from "./projects.types";

export const projects: Project[] = [
  {
    id: "ai-support-triage",
    title: "AI Support Triage Agent",
    problem:
      "A support team was drowning in 2,000+ daily tickets with inconsistent routing, slow mean-time-to-resolve, and no systematic escalation logic.",
    architecture:
      "Event-driven agent built on .NET 9 using Claude SDK for intent classification, sentiment scoring, and tool-orchestrated triage. Tickets flow through Azure Service Bus, get enriched by retrieval tools against a knowledge base, then are routed to human queues or auto-resolved based on confidence thresholds.",
    techStack: [".NET 9", "Claude SDK", "Azure Service Bus", "Cosmos DB", "Azure Functions", "Bicep"],
    keyDecisions: [
      "Confidence thresholds over auto-resolve to keep humans in the loop for ambiguous tickets",
      "Retry-safe idempotent processing using Cosmos DB change feed as the source of truth",
      "Structured output schema enforcement so downstream routing logic is deterministic",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/", external: true }, // TODO: replace with project URL
      { label: "Case Study", href: "#writeups" },
    ],
    highlight: true,
  },
  {
    id: "workflow-automation-platform",
    title: "Enterprise Workflow Automation Platform",
    problem:
      "Manual approval chains across five business units were causing 3–5 day delays and high error rates due to misrouted tasks and missing audit trails.",
    architecture:
      "Orchestration platform using .NET Durable Functions for stateful workflows, a React SPA for approval UIs, and a plugin model for custom step logic. Webhooks publish to an Event Grid topic so any system can trigger or subscribe to workflow lifecycle events.",
    techStack: [".NET 8", "Durable Functions", "Azure Event Grid", "SQL Server", "React", "TypeScript"],
    keyDecisions: [
      "Durable Functions saga pattern to handle long-running workflows with built-in compensation",
      "Plugin architecture using MEF to allow business units to ship custom step logic independently",
      "Append-only event log for audit trail to satisfy compliance requirements without modifying live records",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/", external: true }, // TODO: replace with project URL
      { label: "Demo", href: "#", external: true },
    ],
  },
  {
    id: "realtime-ops-dashboard",
    title: "Real-Time Operations Dashboard",
    problem:
      "Ops teams had no unified visibility into distributed service health, SLA metrics, and deployment status — leading to slow incident response and reactive fire-fighting.",
    architecture:
      "ASP.NET Core backend aggregating telemetry from Application Insights, custom health probes, and deployment pipelines via REST + SignalR for real-time push. React frontend with time-series charts and configurable alert thresholds stored per-team in Azure Table Storage.",
    techStack: [
      "ASP.NET Core",
      "SignalR",
      "Application Insights SDK",
      "Azure Table Storage",
      "React",
      "TypeScript",
    ],
    keyDecisions: [
      "SignalR with fallback to long-polling for environments with restrictive firewalls",
      "Push-on-change model rather than polling to reduce unnecessary load on telemetry endpoints",
      "Per-team threshold configuration stored as JSON blobs to avoid a settings database entirely",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/", external: true }, // TODO: replace with project URL
    ],
  },
];
