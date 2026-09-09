import App from "@/App";
import type { Backend } from "@/backend";
import { BodyType, Condition } from "@/types";
import type { Vehicle } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { createElement } from "react";
import { vi } from "vitest";

/** Render the real app (router + providers) at a given URL path. */
export function renderApp(path: string) {
  window.history.pushState({}, "", path);
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    createElement(
      QueryClientProvider,
      { client: queryClient },
      createElement(App),
    ),
  );
}

/**
 * A small, representative slice of the dealership inventory used across the
 * frontend suite. It mirrors the shape the backend returns (via the generated
 * `Vehicle` type) so the pages render real data without a live canister.
 */
export const SAMPLE_VEHICLES: Vehicle[] = [
  {
    stockId: "TOY-001",
    year: 2025n,
    make: "Toyota",
    model: "Hyryder",
    trim: "V",
    colour: "Silver",
    condition: Condition.BrandNew,
    bodyType: BodyType.SUV,
    price: 179000n,
    priceLabel: "From TT$ 179,000",
    description: "Brand new 2025 Toyota Hyryder V in silver.",
    imageUrl: "https://placehold.co/800x600/002366/ffffff?text=Toyota+Hyryder",
    featured: false,
  },
  {
    stockId: "TOY-010",
    year: 2026n,
    make: "Toyota",
    model: "Taisor",
    trim: "V Spec",
    colour: "White",
    condition: Condition.BrandNew,
    bodyType: BodyType.SUV,
    price: 175000n,
    priceLabel: "TT$ 175,000",
    description: "Brand new 2026 Toyota Taisor V Spec in white.",
    imageUrl: "https://placehold.co/800x600/002366/ffffff?text=Toyota+Taisor",
    featured: true,
  },
  {
    stockId: "NIS-006",
    year: 2022n,
    make: "Nissan",
    model: "Note",
    trim: "Standard",
    colour: "White",
    condition: Condition.Roro,
    bodyType: BodyType.Hatchback,
    price: undefined,
    priceLabel: "Price on request",
    description: "2022 Nissan Note hatchback in white.",
    imageUrl: "https://placehold.co/800x600/002366/ffffff?text=Nissan+Note",
    featured: false,
  },
  {
    stockId: "LUX-003",
    year: 2022n,
    make: "Mercedes-Benz",
    model: "C-Class",
    trim: "C200 AMG",
    colour: "Grey",
    condition: Condition.Roro,
    bodyType: BodyType.Sedan,
    price: 349000n,
    priceLabel: "TT$ 349,000",
    description: "2022 Mercedes-Benz C200 AMG sedan in grey.",
    imageUrl:
      "https://placehold.co/800x600/002366/ffffff?text=Mercedes+C-Class",
    featured: false,
  },
];

/** A controllable mock of the generated `Backend` actor used by the app hooks. */
export function createMockActor(overrides: Partial<Backend> = {}) {
  return {
    listVehicles: vi.fn(async () => SAMPLE_VEHICLES),
    getVehicle: vi.fn(
      async (stockId: string) =>
        SAMPLE_VEHICLES.find((v) => v.stockId === stockId) ?? null,
    ),
    listVehiclesByMake: vi.fn(async (make: string) =>
      SAMPLE_VEHICLES.filter((v) => v.make === make),
    ),
    submitInquiry: vi.fn(async () => undefined),
    ...overrides,
  } as unknown as Backend;
}
