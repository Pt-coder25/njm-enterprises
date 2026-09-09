import { screen } from "@testing-library/react";
import { it, vi } from "vitest";
import { createMockActor, renderApp } from "./helpers";

const actor = createMockActor();
vi.mock("@caffeineai/core-infrastructure", () => ({
  useActor: () => ({ actor, isFetching: false }),
}));

it("debug year filter", async () => {
  renderApp("/inventory?year=2026");
  await screen.findByText("2026 Toyota Taisor");
  const headings = screen
    .getAllByRole("heading")
    .map((h) => h.textContent)
    .filter(Boolean);
  console.log("YEAR HEADINGS:", JSON.stringify(headings));
});

it("debug make filter", async () => {
  renderApp("/inventory?make=Nissan");
  await screen.findByText("2022 Nissan Note");
  const headings = screen
    .getAllByRole("heading")
    .map((h) => h.textContent)
    .filter(Boolean);
  console.log("MAKE HEADINGS:", JSON.stringify(headings));
});
