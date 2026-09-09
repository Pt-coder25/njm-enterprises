import { BodyType } from "@/types";
import type { Vehicle } from "@/types";

/**
 * Generated studio imagery on a consistent dark navy backdrop matching the
 * NJM brand. Each asset covers a representative body type / colour so every
 * inventory card shows a real vehicle photo instead of a text placeholder.
 */
const VEHICLE_IMAGES = {
  silverSuv: "/assets/generated/vehicle-silver-suv.dim_800x600.jpg",
  whiteHatchback: "/assets/generated/vehicle-white-hatchback.dim_800x600.jpg",
  blackSedan: "/assets/generated/vehicle-black-sedan.dim_800x600.jpg",
  redSuv: "/assets/generated/vehicle-red-suv.dim_800x600.jpg",
  whiteVan: "/assets/generated/vehicle-white-van.dim_800x600.jpg",
  goldSuv: "/assets/generated/vehicle-gold-suv.dim_800x600.jpg",
  blueSuv: "/assets/generated/vehicle-blue-suv.dim_800x600.jpg",
  blackSuv: "/assets/generated/vehicle-black-suv.dim_800x600.jpg",
} as const;

const FALLBACK_IMAGE = "/assets/images/placeholder.svg";

/**
 * Resolve a vehicle's display image. Body type takes priority (a van is always
 * the van shot, a sedan the luxury sedan shot), then colour refines the SUV /
 * wagon / hatchback selection so the photo reads as the right vehicle.
 */
export function getVehicleImage(
  vehicle: Pick<Vehicle, "make" | "bodyType" | "colour">,
): string {
  const colour = vehicle.colour.toLowerCase();

  switch (vehicle.bodyType) {
    case BodyType.Van:
      return VEHICLE_IMAGES.whiteVan;
    case BodyType.Sedan:
      return VEHICLE_IMAGES.blackSedan;
    case BodyType.Hatchback:
      return VEHICLE_IMAGES.whiteHatchback;
    case BodyType.SUV:
    case BodyType.Wagon:
    case BodyType.Coupe:
      return pickSuvImage(colour);
    default:
      return FALLBACK_IMAGE;
  }
}

/** Choose the closest SUV / wagon studio shot for a given colour description. */
function pickSuvImage(colour: string): string {
  if (colour.includes("red")) return VEHICLE_IMAGES.redSuv;
  if (colour.includes("blue")) return VEHICLE_IMAGES.blueSuv;
  if (colour.includes("gold")) return VEHICLE_IMAGES.goldSuv;
  if (colour.includes("black")) return VEHICLE_IMAGES.blackSuv;
  if (
    colour.includes("silver") ||
    colour.includes("grey") ||
    colour.includes("gray") ||
    colour.includes("nano")
  ) {
    return VEHICLE_IMAGES.silverSuv;
  }
  // White, pearl, green and other light neutrals read best on the silver shot.
  return VEHICLE_IMAGES.silverSuv;
}
