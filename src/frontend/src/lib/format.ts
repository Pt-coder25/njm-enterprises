import { BodyType, Condition } from "@/backend";

/**
 * Format a vehicle price in Trinidad & Tobago dollars (TT$). When the backend
 * supplies a `priceLabel` qualifier (e.g. "From TT$ 179,000" or "TT$ 175,000")
 * it is surfaced verbatim; otherwise the numeric price is formatted, falling
 * back to "Price on request".
 */
export function formatPrice(price?: bigint, priceLabel?: string): string {
  if (priceLabel && priceLabel.trim().length > 0) return priceLabel;
  if (price === undefined) return "Price on request";
  const value = Number(price);
  if (!Number.isFinite(value)) return "Price on request";
  return `TT$ ${value.toLocaleString("en-US")}`;
}

/** Human-readable label for a vehicle's condition. */
export function formatCondition(condition: Condition): string {
  switch (condition) {
    case Condition.BrandNew:
      return "Brand New";
    case Condition.Roro:
      return "Roll On Roll Off";
  }
}

/** Human-readable label for a vehicle's body type. */
export function formatBodyType(bodyType: BodyType): string {
  switch (bodyType) {
    case BodyType.SUV:
      return "SUV";
    case BodyType.Sedan:
      return "Sedan";
    case BodyType.Hatchback:
      return "Hatchback";
    case BodyType.Van:
      return "Van";
    case BodyType.Coupe:
      return "Coupe";
    case BodyType.Wagon:
      return "Wagon";
  }
}
