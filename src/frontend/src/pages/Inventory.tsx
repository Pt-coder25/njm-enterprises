import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useVehicles } from "@/hooks/useVehicles";
import { formatBodyType } from "@/lib/format";
import { BodyType, Condition } from "@/types";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo } from "react";

const MAKES = ["Nissan", "Honda", "Toyota", "Luxury"] as const;
const BODY_TYPES = [
  BodyType.SUV,
  BodyType.Sedan,
  BodyType.Hatchback,
  BodyType.Van,
] as const;
const CONDITIONS = [Condition.BrandNew, Condition.Roro] as const;
const PRICE_RANGES = [
  { label: "Any price", min: "", max: "" },
  { label: "Under TT$ 50,000", min: "", max: "50000" },
  { label: "TT$ 50,000 – 100,000", min: "50000", max: "100000" },
  { label: "TT$ 100,000 – 200,000", min: "100000", max: "200000" },
  { label: "Over TT$ 200,000", min: "200000", max: "" },
] as const;
const SORTS = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "year-desc", label: "Year: Newest" },
  { value: "year-asc", label: "Year: Oldest" },
  { value: "model", label: "Model: A to Z" },
] as const;

type SortValue = (typeof SORTS)[number]["value"];

interface InventorySearch {
  q?: string;
  make?: string;
  body?: string;
  condition?: string;
  price?: string;
  year?: string;
  sort?: string;
}

function str(value: unknown): string {
  if (typeof value === "string") return value;
  // TanStack Router's default search parser runs JSON.parse on each value, so
  // a numeric query param like `year=2026` arrives as the number 2026 rather
  // than the string "2026". Coerce numbers back to strings so filters work.
  if (typeof value === "number") return String(value);
  return "";
}

export function InventoryPage() {
  const search = useSearch({ strict: false }) as InventorySearch;
  const navigate = useNavigate({ from: "/inventory" });

  const q = str(search.q);
  const make = str(search.make);
  const body = str(search.body);
  const condition = str(search.condition);
  const priceRange = str(search.price);
  const year = str(search.year);
  const sort = (str(search.sort) || "year-desc") as SortValue;

  const { data: vehicles = [], isLoading } = useVehicles();

  const years = useMemo(
    () =>
      Array.from(
        new Set(
          vehicles.map((v) => Number(v.year)).filter((y) => !Number.isNaN(y)),
        ),
      ).sort((a, b) => b - a),
    [vehicles],
  );

  const update = (patch: Record<string, string>) => {
    void navigate({
      search: (prev) => ({ ...prev, ...patch }),
    });
  };

  const clearFilters = () => {
    void navigate({
      search: (prev) => ({
        ...prev,
        q: "",
        make: "",
        body: "",
        condition: "",
        price: "",
        year: "",
        sort: "year-desc",
      }),
    });
  };

  const filtered = useMemo(() => {
    let list = [...vehicles];

    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      list = list.filter((v) =>
        [v.model, v.colour, v.trim, v.make]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      );
    }

    if (make && make !== "all") {
      if (make.toLowerCase() === "luxury") {
        const luxuryMakes = ["volvo", "mercedes-benz", "audi", "bmw"];
        list = list.filter((v) => luxuryMakes.includes(v.make.toLowerCase()));
      } else {
        list = list.filter((v) => v.make.toLowerCase() === make.toLowerCase());
      }
    }

    if (body && body !== "all") {
      list = list.filter((v) => v.bodyType === body);
    }

    if (condition && condition !== "all") {
      list = list.filter((v) => v.condition === condition);
    }

    if (priceRange) {
      const range = PRICE_RANGES.find((r) => r.label === priceRange);
      if (range) {
        const min = range.min ? Number(range.min) : Number.NEGATIVE_INFINITY;
        const max = range.max ? Number(range.max) : Number.POSITIVE_INFINITY;
        list = list.filter((v) => {
          if (v.price === undefined) return false;
          const price = Number(v.price);
          return price >= min && price <= max;
        });
      }
    }

    if (year && year !== "all") {
      list = list.filter((v) => Number(v.year) === Number(year));
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => Number(a.price ?? 0) - Number(b.price ?? 0));
        break;
      case "price-desc":
        list.sort((a, b) => Number(b.price ?? 0) - Number(a.price ?? 0));
        break;
      case "year-desc":
        list.sort((a, b) => Number(b.year) - Number(a.year));
        break;
      case "year-asc":
        list.sort((a, b) => Number(a.year) - Number(b.year));
        break;
      case "model":
        list.sort((a, b) => a.model.localeCompare(b.model));
        break;
    }

    return list;
  }, [vehicles, q, make, body, condition, priceRange, year, sort]);

  const hasActiveFilters = Boolean(
    q || make || body || condition || priceRange || year,
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Inventory
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
          Browse our current selection of Roll On Roll Off and Brand New
          vehicles.
        </p>
      </div>

      {/* Filter bar */}
      <div className="mt-8 rounded-md border border-border bg-card p-4 shadow-subtle">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => update({ q: e.target.value })}
              placeholder="Search by model, colour, or trim…"
              className="pl-9"
              data-ocid="inventory.search_input"
              aria-label="Search vehicles"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <Select value={make} onValueChange={(v) => update({ make: v })}>
              <SelectTrigger data-ocid="inventory.make_select">
                <SelectValue placeholder="All brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All brands</SelectItem>
                {MAKES.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={body} onValueChange={(v) => update({ body: v })}>
              <SelectTrigger data-ocid="inventory.body_select">
                <SelectValue placeholder="All body types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All body types</SelectItem>
                {BODY_TYPES.map((b) => (
                  <SelectItem key={b} value={b}>
                    {formatBodyType(b)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={condition}
              onValueChange={(v) => update({ condition: v })}
            >
              <SelectTrigger data-ocid="inventory.condition_select">
                <SelectValue placeholder="All conditions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All conditions</SelectItem>
                {CONDITIONS.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c === Condition.BrandNew
                      ? "Brand New"
                      : "Roll On Roll Off"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={priceRange}
              onValueChange={(v) => update({ price: v })}
            >
              <SelectTrigger data-ocid="inventory.price_select">
                <SelectValue placeholder="Any price" />
              </SelectTrigger>
              <SelectContent>
                {PRICE_RANGES.map((r) => (
                  <SelectItem key={r.label} value={r.label}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={year} onValueChange={(v) => update({ year: v })}>
              <SelectTrigger data-ocid="inventory.year_select">
                <SelectValue placeholder="Any year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any year</SelectItem>
                {years.map((y) => (
                  <SelectItem key={y} value={String(y)}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sort} onValueChange={(v) => update({ sort: v })}>
              <SelectTrigger data-ocid="inventory.sort_select">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                {SORTS.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm text-muted-foreground">
                {filtered.length}{" "}
                {filtered.length === 1 ? "vehicle" : "vehicles"} match your
                filters
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
                data-ocid="inventory.reset_button"
              >
                <X className="size-4" />
                Reset filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mt-8">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => `skeleton-${i}`).map((id) => (
              <div
                key={id}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <Skeleton className="aspect-[4/3] w-full rounded-none" />
                <div className="space-y-3 p-5">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center rounded-md border border-dashed border-border bg-card/40 px-6 py-20 text-center"
            data-ocid="inventory.empty_state"
          >
            <SlidersHorizontal className="size-10 text-muted-foreground" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
              No vehicles match your search
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Try adjusting or clearing your filters to see more of our current
              inventory.
            </p>
            <Button
              type="button"
              variant="default"
              className="mt-6"
              onClick={clearFilters}
              data-ocid="inventory.empty_reset_button"
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((vehicle) => (
              <VehicleCard key={vehicle.stockId} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
