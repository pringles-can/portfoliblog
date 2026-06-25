import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { AskSection } from "./AskSection";

describe("AskSection", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders the heading and form", () => {
    render(<AskSection />);
    expect(screen.getByRole("heading", { name: "Ask My Portfolio" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/What's your experience with distributed systems/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ask" })).toBeInTheDocument();
  });

  it("handles successful question submission and hides sources", async () => {
    const mockResponse = {
      answer: "This is a mock answer about distributed systems.",
      sources: ["#projects", "#skills"],
    };

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    render(<AskSection />);

    const textarea = screen.getByPlaceholderText(/What's your experience with distributed systems/i);
    const button = screen.getByRole("button", { name: "Ask" });

    fireEvent.change(textarea, { target: { value: "Tell me about your distributed systems experience" } });
    fireEvent.click(button);

    // Wait for response to be displayed
    await waitFor(() => {
      expect(screen.getByText("Answer")).toBeInTheDocument();
    });

    expect(screen.getByText("This is a mock answer about distributed systems.")).toBeInTheDocument();
    
    // The "Sources" text/section should not be rendered
    expect(screen.queryByText("Sources")).not.toBeInTheDocument();
    expect(screen.queryByText("Projects")).not.toBeInTheDocument();
    expect(screen.queryByText("Skills")).not.toBeInTheDocument();
  });
});
