import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMockActor, renderApp } from "./helpers";

const actor = createMockActor();
vi.mock("@caffeineai/core-infrastructure", () => ({
  useActor: () => ({ actor, isFetching: false }),
}));

describe("Home page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("loads on the default route without a blank screen", async () => {
    renderApp("/");

    expect(
      await screen.findByRole("heading", {
        name: /Drive the Exceptional Every Day/,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Explore Inventory/ }),
    ).toBeInTheDocument();
  });

  it("shows featured vehicles from the inventory", async () => {
    renderApp("/");

    expect(
      await screen.findByRole("heading", { name: "Featured Vehicles" }),
    ).toBeInTheDocument();
    expect(await screen.findByText("2026 Toyota Taisor")).toBeInTheDocument();
  });

  it("links to the inventory and contact pages", async () => {
    renderApp("/");

    await screen.findByRole("heading", {
      name: /Drive the Exceptional Every Day/,
    });

    expect(
      screen.getByRole("link", { name: /Explore Inventory/ }),
    ).toHaveAttribute("href", expect.stringContaining("/inventory"));
    expect(screen.getByRole("link", { name: /Get In Touch/ })).toHaveAttribute(
      "href",
      expect.stringContaining("/contact"),
    );
  });
});
