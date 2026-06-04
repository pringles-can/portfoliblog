export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: [".NET 8/9", "C#", "ASP.NET Core", "Durable Functions", "Minimal APIs", "gRPC", "Entity Framework Core"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Azure",
      "Azure Functions",
      "Azure Service Bus",
      "Azure Event Grid",
      "Bicep / ARM",
      "GitHub Actions",
      "Docker",
      "Kubernetes (AKS)",
    ],
  },
  {
    category: "Databases",
    skills: ["SQL Server", "Cosmos DB", "PostgreSQL", "Redis", "Azure Table Storage", "Azure Blob Storage"],
  },
  {
    category: "AI Engineering",
    skills: [
      "Claude SDK / Anthropic API",
      "Prompt Engineering",
      "Tool Orchestration",
      "RAG Pipelines",
      "Structured Outputs",
      "Human-in-the-Loop Design",
      "Semantic Kernel",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Vertical Slice Architecture",
      "Event-Driven Design",
      "Saga / Choreography Patterns",
      "CQRS",
      "Domain-Driven Design",
      "Distributed Systems",
      "Observability & OpenTelemetry",
    ],
  },
];
