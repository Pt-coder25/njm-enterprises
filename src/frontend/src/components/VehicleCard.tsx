import { Badge } from "@/components/ui/badge";
import { formatBodyType, formatCondition, formatPrice } from "@/lib/format";
import { getVehicleImage } from "@/lib/vehicles";
import type { Vehicle } from "@/types";
import { Link } from "@tanstack/react-router";

interface VehicleCardProps {
  vehicle: Vehicle;
}

/** Reusable inventory card linking to the vehicle detail page. */
export function VehicleCard({ vehicle }: VehicleCardProps) {
  const year = Number(vehicle.year);
  const title = `${year} ${vehicle.make} ${vehicle.model}`;

  return (
    <Link
      to="/inventory/$stockId"
      params={{ stockId: vehicle.stockId }}
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-subtle transition-smooth hover:-translate-y-1 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      data-ocid="vehicle.card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/40">
        <img
          src={getVehicleImage(vehicle)}
          alt={title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          variant="destructive"
          className="absolute right-3 top-3 rounded-sm px-3 py-1 font-display text-sm font-semibold"
          data-ocid="vehicle.price"
        >
          {formatPrice(vehicle.price, vehicle.priceLabel)}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {vehicle.trim} · {formatBodyType(vehicle.bodyType)}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <Badge
            variant="outline"
            className="rounded-sm border-primary/40 text-primary"
            data-ocid="vehicle.condition"
          >
            {formatCondition(vehicle.condition)}
          </Badge>
          <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}
