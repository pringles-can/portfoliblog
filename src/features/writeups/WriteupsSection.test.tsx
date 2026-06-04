import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WriteupsSection } from "./WriteupsSection";
import { writeups } from "./writeups.content";

describe("WriteupsSection", () => {
  it("renders the section heading", () => {
    render(<WriteupsSection />);
    expect(screen.getByRole("heading", { name: "Technical Writeups" })).toBeInTheDocument();
  });

  it("renders a card for each writeup", () => {
    render(<WriteupsSection />);
    for (const writeup of writeups) {
      expect(screen.getByRole("link", { name: writeup.title })).toBeInTheDocument();
    }
  });

  it("renders tags for writeups", () => {
    render(<WriteupsSection />);
    expect(screen.getAllByText("AI Engineering").length).toBeGreaterThan(0);
  });

  it("renders read time for each writeup", () => {
    render(<WriteupsSection />);
    for (const writeup of writeups) {
      expect(screen.getByText(writeup.readTime)).toBeInTheDocument();
    }
  });
});
