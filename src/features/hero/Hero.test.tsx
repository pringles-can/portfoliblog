import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "./Hero";
import { heroContent } from "./hero.content";

describe("Hero", () => {
  it("renders the headline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(heroContent.headline);
  });

  it("renders the subheadline", () => {
    render(<Hero />);
    expect(screen.getByText(heroContent.subheadline)).toBeInTheDocument();
  });

  it("renders all CTA links", () => {
    render(<Hero />);
    for (const cta of heroContent.ctas) {
      const link = screen.getByRole("link", { name: cta.label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", cta.href);
    }
  });

  it("renders the architecture diagram", () => {
    render(<Hero />);
    expect(screen.getByLabelText("Agent workflow architecture diagram")).toBeInTheDocument();
  });
});
