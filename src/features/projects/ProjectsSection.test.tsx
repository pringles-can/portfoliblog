import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectsSection } from "./ProjectsSection";
import { projects } from "./projects.content";

describe("ProjectsSection", () => {
  it("renders the section heading", () => {
    render(<ProjectsSection />);
    expect(screen.getByRole("heading", { name: "Selected Projects" })).toBeInTheDocument();
  });

  it("renders a card for each project", () => {
    render(<ProjectsSection />);
    for (const project of projects) {
      expect(screen.getByRole("heading", { name: project.title })).toBeInTheDocument();
    }
  });

  it("renders the tech stack for each project", () => {
    render(<ProjectsSection />);
    expect(screen.getAllByText(".NET 9").length).toBeGreaterThan(0);
  });

  it("renders project links", () => {
    render(<ProjectsSection />);
    const githubLinks = screen.getAllByRole("link", { name: /GitHub/i });
    expect(githubLinks.length).toBeGreaterThan(0);
  });
});
