import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ResumeSection } from "./ResumeSection";

describe("ResumeSection", () => {
  it("renders the section heading", () => {
    render(<ResumeSection />);
    expect(screen.getByRole("heading", { name: "Resume" })).toBeInTheDocument();
  });

  it("renders the download resume button", () => {
    render(<ResumeSection />);
    const link = screen.getByRole("link", { name: /download resume/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/resume.pdf");
  });

  it("renders the career summary", () => {
    render(<ResumeSection />);
    expect(screen.getByText("Summary")).toBeInTheDocument();
  });

  it("renders experience entries", () => {
    render(<ResumeSection />);
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(1);
  });
});
