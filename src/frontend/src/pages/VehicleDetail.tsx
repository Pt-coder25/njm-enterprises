import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useVehicle } from "@/hooks/useVehicles";
import { formatBodyType, formatCondition, formatPrice } from "@/lib/format";
import { getVehicleImage } from "@/lib/vehicles";
import type { Vehicle } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Car, MapPin } from "lucide-react";

/** Spec rows shown on the vehicle detail page. */
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/60 py-3 last:border-0">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  );
}

/** Loading skeleton matching the detail layout. */
function VehicleDetailSkeleton() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Skeleton className="h-5 w-32" data-ocid="vehicle_detail.loading_state" />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Skeleton className="aspect-[4/3] w-full rounded-sm" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    </div>
  );
}

/** Full vehicle detail view. */
function VehicleDetailContent({ vehicle }: { vehicle: Vehicle }) {
  const year = Number(vehicle.year);
  const title = `${year} ${vehicle.make} ${vehicle.model}`;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/inventory"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        data-ocid="vehicle_detail.back_link"
      >
        <ArrowLeft className="size-4" />
        Back to inventory
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Large imagery */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted/40 shadow-elevated">
          <img
            src={getVehicleImage(vehicle)}
            alt={title}
            className="size-full object-cover"
          />
          <Badge
            variant="destructive"
            className="absolute right-4 top-4 rounded-sm px-4 py-1.5 font-display text-base font-semibold"
            data-ocid="vehicle_detail.price"
          >
            {formatPrice(vehicle.price, vehicle.priceLabel)}
          </Badge>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                {formatCondition(vehicle.condition)}
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {vehicle.trim}
              </p>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {vehicle.description}
          </p>

          <dl className="mt-8 rounded-sm border border-border bg-card p-6">
            <SpecRow label="Year" value={String(year)} />
            <SpecRow label="Make" value={vehicle.make} />
            <SpecRow label="Model" value={vehicle.model} />
            <SpecRow label="Trim" value={vehicle.trim} />
            <SpecRow label="Colour" value={vehicle.colour} />
            <SpecRow
              label="Condition"
              value={formatCondition(vehicle.condition)}
            />
            <SpecRow
              label="Body Type"
              value={formatBodyType(vehicle.bodyType)}
            />
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              data-ocid="vehicle_detail.inquire_button"
            >
              <Link to="/contact" search={{ vehicle: vehicle.stockId }}>
                Inquire Now
              </Link>
            </Button>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              El Dorado, Trinidad &amp; Tobago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Not-found state with a clear recovery path. */
function VehicleNotFound() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="flex size-16 items-center justify-center rounded-full bg-muted">
        <Car className="size-8 text-muted-foreground" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Vehicle not found
      </h1>
      <p className="mt-4 max-w-md text-base text-muted-foreground">
        We couldn't find the vehicle you were looking for. It may have been sold
        or the link may be out of date.
      </p>
      <Button
        asChild
        size="lg"
        className="mt-8"
        data-ocid="vehicle_detail.empty_state"
      >
        <Link to="/inventory">Browse current inventory</Link>
      </Button>
    </div>
  );
}

/** Vehicle detail page: reads stockId from the route and renders the vehicle. */
export function VehicleDetailPage() {
  const { stockId } = useParams({ strict: false });
  const { data: vehicle, isLoading } = useVehicle(stockId ?? "");

  if (isLoading) {
    return <VehicleDetailSkeleton />;
  }

  if (!vehicle) {
    return <VehicleNotFound />;
  }

  return <VehicleDetailContent vehicle={vehicle} />;
}
