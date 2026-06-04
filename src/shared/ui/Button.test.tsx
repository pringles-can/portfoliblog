import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ButtonLink } from "./Button";

describe("ButtonLink", () => {
  it("renders with primary variant by default", () => {
    render(<ButtonLink href="/test">Click me</ButtonLink>);
    const link = screen.getByRole("link", { name: "Click me" });
    expect(link).toHaveAttribute("href", "/test");
    expect(link.className).toContain("bg-indigo-600");
  });

  it("renders with secondary variant", () => {
    render(
      <ButtonLink href="/test" variant="secondary">
        Secondary
      </ButtonLink>
    );
    const link = screen.getByRole("link", { name: "Secondary" });
    expect(link.className).toContain("text-indigo-400");
  });

  it("renders with ghost variant", () => {
    render(
      <ButtonLink href="/test" variant="ghost">
        Ghost
      </ButtonLink>
    );
    const link = screen.getByRole("link", { name: "Ghost" });
    expect(link.className).toContain("text-slate-300");
  });

  it("forwards additional props", () => {
    render(
      <ButtonLink href="/test" target="_blank" rel="noopener noreferrer">
        External
      </ButtonLink>
    );
    const link = screen.getByRole("link", { name: "External" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
