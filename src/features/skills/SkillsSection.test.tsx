import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SkillsSection } from "./SkillsSection";
import { skillGroups } from "./skills.content";

describe("SkillsSection", () => {
  it("renders the section heading", () => {
    render(<SkillsSection />);
    expect(screen.getByRole("heading", { name: "Technical Skills" })).toBeInTheDocument();
  });

  it("renders all skill categories", () => {
    render(<SkillsSection />);
    for (const group of skillGroups) {
      expect(screen.getByText(group.category)).toBeInTheDocument();
    }
  });

  it("renders skills within each category", () => {
    render(<SkillsSection />);
    expect(screen.getByText(".NET 8/9")).toBeInTheDocument();
    expect(screen.getByText("Claude SDK / Anthropic API")).toBeInTheDocument();
    expect(screen.getByText("Vertical Slice Architecture")).toBeInTheDocument();
  });
});
