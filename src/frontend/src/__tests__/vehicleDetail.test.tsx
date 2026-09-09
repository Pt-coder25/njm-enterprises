import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMockActor, renderApp } from "./helpers";

const actor = createMockActor();
vi.mock("@caffeineai/core-infrastructure", () => ({
  useActor: () => ({ actor, isFetching: false }),
}));

describe("Vehicle detail page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders full specs and an Inquire Now action for a vehicle", async () => {
    renderApp("/inventory/TOY-001");

    expect(
      await screen.findByRole("heading", { name: "2025 Toyota Hyryder" }),
    ).toBeInTheDocument();

    // Spec rows
    expect(screen.getByText("2025")).toBeInTheDocument();
    expect(screen.getByText("Toyota")).toBeInTheDocument();
    expect(screen.getByText("Hyryder")).toBeInTheDocument();
    // "V" (transmission) also appears in the vehicle subtitle, so assert
    // presence rather than uniqueness.
    expect(screen.getAllByText("V").length).toBeGreaterThan(0);
    expect(screen.getByText("Silver")).toBeInTheDocument();
    // "Brand New" also appears in the vehicle subtitle, so assert presence.
    expect(screen.getAllByText("Brand New").length).toBeGreaterThan(0);
    expect(screen.getByText("SUV")).toBeInTheDocument();

    // Price in TT$ and the Inquire Now action
    expect(screen.getByText("From TT$ 179,000")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Inquire Now" })).toHaveAttribute(
      "href",
      expect.stringContaining("/contact"),
    );
  });

  it("shows a not-found state for an unknown stock id", async () => {
    renderApp("/inventory/UNKNOWN");

    expect(
      await screen.findByRole("heading", { name: "Vehicle not found" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Browse current inventory" }),
    ).toBeInTheDocument();
  });
});
