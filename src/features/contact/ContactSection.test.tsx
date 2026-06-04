import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContactSection } from "./ContactSection";

describe("ContactSection", () => {
  it("renders the section heading", () => {
    render(<ContactSection />);
    expect(screen.getByRole("heading", { name: "Get in Touch" })).toBeInTheDocument();
  });

  it("renders email contact option", () => {
    render(<ContactSection />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    const emailLink = screen.getByRole("link", { name: /send email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.getAttribute("href")).toMatch(/^mailto:/);
  });

  it("renders LinkedIn contact option", () => {
    render(<ContactSection />);
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("renders GitHub contact option", () => {
    render(<ContactSection />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("renders a CTA to open each external link", () => {
    render(<ContactSection />);
    const openLinks = screen.getAllByRole("link", { name: /open/i });
    expect(openLinks.length).toBeGreaterThanOrEqual(2);
  });
});
