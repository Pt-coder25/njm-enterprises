import { formatBodyType, formatCondition, formatPrice } from "@/lib/format";
import { BodyType, Condition } from "@/types";
import { describe, expect, it } from "vitest";

describe("formatPrice", () => {
  it("surfaces a priceLabel verbatim when present", () => {
    expect(formatPrice(179000n, "From TT$ 179,000")).toBe("From TT$ 179,000");
  });

  it("formats a numeric price in TT$ with thousands separators", () => {
    expect(formatPrice(179000n)).toBe("TT$ 179,000");
  });

  it("falls back to 'Price on request' when no price is known", () => {
    expect(formatPrice(undefined)).toBe("Price on request");
    expect(formatPrice(undefined, "")).toBe("Price on request");
  });
});

describe("formatCondition", () => {
  it("labels brand new and RORO conditions", () => {
    expect(formatCondition(Condition.BrandNew)).toBe("Brand New");
    expect(formatCondition(Condition.Roro)).toBe("Roll On Roll Off");
  });
});

describe("formatBodyType", () => {
  it("labels every supported body type", () => {
    expect(formatBodyType(BodyType.SUV)).toBe("SUV");
    expect(formatBodyType(BodyType.Sedan)).toBe("Sedan");
    expect(formatBodyType(BodyType.Hatchback)).toBe("Hatchback");
    expect(formatBodyType(BodyType.Van)).toBe("Van");
    expect(formatBodyType(BodyType.Coupe)).toBe("Coupe");
    expect(formatBodyType(BodyType.Wagon)).toBe("Wagon");
  });
});
