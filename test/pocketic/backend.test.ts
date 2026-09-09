import { PocketIc } from "@dfinity/pic";
import { afterAll, beforeAll, expect, it } from "vitest";

import { idlFactory } from "../../src/frontend/src/declarations/backend.did.js";
import type { _SERVICE } from "../../src/frontend/src/declarations/backend.did";

const PIC_URL = process.env.POCKET_IC_URL ?? "";
const BACKEND_WASM = process.env.BACKEND_WASM ?? "";

let pic: PocketIc | undefined;
let actor: _SERVICE;

beforeAll(async () => {
  pic = await PocketIc.create(PIC_URL);
  ({ actor } = await pic.setupCanister<_SERVICE>({ idlFactory, wasm: BACKEND_WASM }));
});

afterAll(async () => {
  await pic?.tearDown();
});

it("lists the full seeded inventory without trapping", async () => {
  const vehicles = await actor.listVehicles();
  expect(vehicles.length).toBeGreaterThan(0);
  // The catalog must include the dealership's Nissan, Honda, Toyota and luxury
  // stock, each with the fields the frontend renders.
  const makes = new Set(vehicles.map((v) => v.make));
  expect(makes.has("Nissan")).toBe(true);
  expect(makes.has("Honda")).toBe(true);
  expect(makes.has("Toyota")).toBe(true);
  expect(makes.has("Mercedes-Benz")).toBe(true);
  expect(vehicles[0]).toMatchObject({
    stockId: expect.any(String),
    year: expect.any(BigInt),
    make: expect.any(String),
    model: expect.any(String),
    trim: expect.any(String),
    colour: expect.any(String),
    condition: expect.any(Object),
    bodyType: expect.any(Object),
    priceLabel: expect.any(String),
  });
});

it("returns a single vehicle by stock id", async () => {
  const vehicle = await actor.getVehicle("TOY-001");
  expect(vehicle).not.toEqual([]);
  expect(vehicle[0]).toMatchObject({ stockId: "TOY-001", make: "Toyota" });
});

it("returns [] for an unknown stock id", async () => {
  expect(await actor.getVehicle("UNKNOWN")).toEqual([]);
});

it("filters vehicles by make", async () => {
  const nissans = await actor.listVehiclesByMake("Nissan");
  expect(nissans.length).toBeGreaterThan(0);
  expect(nissans.every((v) => v.make === "Nissan")).toBe(true);
});

it("round-trips an inquiry through the real canister", async () => {
  await expect(
    actor.submitInquiry({
      name: "Ada Lovelace",
      phone: "268-NJME (6563)",
      vehicleOfInterest: "TOY-001",
      message: "I would like a test drive.",
      createdAt: 1n,
    }),
  ).resolves.toBeNull();
});
