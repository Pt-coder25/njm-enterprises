import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMockActor, renderApp } from "./helpers";

// The app's hooks obtain their actor through `useActor` from
// `@caffeineai/core-infrastructure`. We mock that seam so the pages render
// against a controllable typed actor instead of a live canister.
const actor = createMockActor();
vi.mock("@caffeineai/core-infrastructure", () => ({
  useActor: () => ({ actor, isFetching: false }),
}));

describe("Inventory page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the full inventory list as cards", async () => {
    renderApp("/inventory");

    expect(
      await screen.findByRole("heading", { name: "Inventory" }),
    ).toBeInTheDocument();
    expect(await screen.findByText("2025 Toyota Hyryder")).toBeInTheDocument();
    expect(await screen.findByText("2026 Toyota Taisor")).toBeInTheDocument();
    expect(await screen.findByText("2022 Nissan Note")).toBeInTheDocument();
    expect(
      await screen.findByText("2022 Mercedes-Benz C-Class"),
    ).toBeInTheDocument();
  });

  it("opens the vehicle detail page when an inventory card is clicked", async () => {
    const user = userEvent.setup();
    renderApp("/inventory");

    await screen.findByText("2025 Toyota Hyryder");

    await user.click(screen.getByRole("link", { name: /2025 Toyota Hyryder/ }));

    expect(
      await screen.findByRole("heading", { name: "2025 Toyota Hyryder" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Inquire Now" })).toHaveAttribute(
      "href",
      expect.stringContaining("/contact"),
    );
  });

  it("filters by brand", async () => {
    renderApp("/inventory?make=Nissan");

    await screen.findByText("2022 Nissan Note");
    expect(screen.queryByText("2025 Toyota Hyryder")).not.toBeInTheDocument();
    expect(
      screen.queryByText("2022 Mercedes-Benz C-Class"),
    ).not.toBeInTheDocument();
  });

  it("filters by body type", async () => {
    renderApp("/inventory?body=SUV");

    await screen.findByText("2025 Toyota Hyryder");
    expect(screen.queryByText("2022 Nissan Note")).not.toBeInTheDocument();
    expect(
      screen.queryByText("2022 Mercedes-Benz C-Class"),
    ).not.toBeInTheDocument();
  });

  it("filters by condition", async () => {
    renderApp("/inventory?condition=Roro");

    await screen.findByText("2022 Nissan Note");
    expect(screen.queryByText("2025 Toyota Hyryder")).not.toBeInTheDocument();
  });

  it("filters by price range", async () => {
    renderApp("/inventory?price=Over%20TT%24%20200%2C000");

    await screen.findByText("2022 Mercedes-Benz C-Class");
    expect(screen.queryByText("2025 Toyota Hyryder")).not.toBeInTheDocument();
  });

  it("filters by year", async () => {
    renderApp("/inventory?year=2026");

    await screen.findByText("2026 Toyota Taisor");
    expect(screen.queryByText("2025 Toyota Hyryder")).not.toBeInTheDocument();
  });

  it("searches by model text", async () => {
    const user = userEvent.setup();
    renderApp("/inventory");

    await screen.findByText("2025 Toyota Hyryder");

    await user.type(
      screen.getByRole("textbox", { name: "Search vehicles" }),
      "Taisor",
    );

    expect(screen.getByText("2026 Toyota Taisor")).toBeInTheDocument();
    expect(screen.queryByText("2025 Toyota Hyryder")).not.toBeInTheDocument();
  });

  it("sorts by price low to high", async () => {
    renderApp("/inventory?sort=price-asc");

    await screen.findByText("2025 Toyota Hyryder");

    const cards = screen.getAllByTestId("vehicle.card");
    const titles = cards.map(
      (card) => within(card).getByRole("heading").textContent,
    );
    // The Nissan Note has no known price, so it sorts to the front (treated as
    // 0), followed by the priced vehicles in ascending order.
    expect(titles[0]).toBe("2022 Nissan Note");
    expect(titles[1]).toBe("2026 Toyota Taisor");
    expect(titles[2]).toBe("2025 Toyota Hyryder");
    expect(titles[3]).toBe("2022 Mercedes-Benz C-Class");
  });

  it("shows an empty state when no vehicles match and resets filters", async () => {
    const user = userEvent.setup();
    renderApp("/inventory");

    await screen.findByText("2025 Toyota Hyryder");

    await user.type(
      screen.getByRole("textbox", { name: "Search vehicles" }),
      "nonexistent-model",
    );

    expect(
      await screen.findByText("No vehicles match your search"),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /clear all filters/i }),
    );

    expect(await screen.findByText("2025 Toyota Hyryder")).toBeInTheDocument();
  });
});
