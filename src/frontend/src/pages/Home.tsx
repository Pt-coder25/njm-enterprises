import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { useVehicles } from "@/hooks/useVehicles";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  HandCoins,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

const BRANDS = [
  "Nissan",
  "Honda",
  "Toyota",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Volvo",
];

const VALUE_PROPS = [
  {
    icon: CarFront,
    title: "Roll On Roll Off & Brand New",
    description:
      "A curated selection of RORO imports and factory-fresh vehicles, sourced to meet the standards of Trinidad & Tobago drivers.",
  },
  {
    icon: HandCoins,
    title: "Transparent TT$ Pricing",
    description:
      "Clear, competitive pricing in Trinidad & Tobago dollars. No hidden fees — just honest value on every vehicle we sell.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Local Dealership",
    description:
      "Proudly serving El Dorado and the wider Tunapuna community with a reputation built on integrity and after-sales care.",
  },
  {
    icon: Wrench,
    title: "Dedicated After-Sales Support",
    description:
      "Our team stands behind every sale with guidance, servicing advice, and support long after you drive off the lot.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/** Home landing page for NJM Enterprises. */
export function HomePage() {
  const { data: vehicles, isLoading } = useVehicles();

  const featured = (vehicles ?? []).filter((v) => v.featured).slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10">
          <img
            src="/assets/generated/hero-sedan.dim_1600x900.jpg"
            alt="Silver luxury sedan on a dark studio backdrop"
            className="size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-background/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
              <BadgeCheck className="size-4" aria-hidden="true" />
              Trinidad &amp; Tobago&apos;s Premier Dealership
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Drive the <span className="text-gradient-royal">Exceptional</span>
              <br />
              Every Day
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Discover a hand-picked collection of Roll On Roll Off and Brand
              New vehicles — sourced, inspected, and delivered with the NJM
              standard of service.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                variant="destructive"
                className="group rounded-sm px-8 py-6 text-base font-semibold uppercase tracking-wide"
                data-ocid="home.explore_button"
              >
                <Link to="/inventory">
                  Explore Inventory
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-sm border-foreground/30 bg-background/40 px-8 py-6 text-base font-semibold uppercase tracking-wide backdrop-blur"
                data-ocid="home.contact_button"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand strip */}
      <section
        className="border-y border-border bg-card"
        aria-label="Manufacturers we stock"
        data-ocid="home.brands"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-8 sm:px-6 lg:px-8">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Featured vehicles */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Handpicked for you
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Vehicles
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              A glimpse of what&apos;s on the lot right now. Explore the full
              inventory to find your next drive.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-sm"
            data-ocid="home.view_all_button"
          >
            <Link to="/inventory">
              View All Inventory
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-ocid="home.featured_list"
        >
          {isLoading
            ? Array.from({ length: 3 }, (_, i) => `skeleton-${i}`).map((id) => (
                <div
                  key={id}
                  className="aspect-[4/3] animate-pulse rounded-sm border border-border bg-muted/40"
                  data-ocid="home.loading_state"
                />
              ))
            : featured.map((vehicle) => (
                <VehicleCard key={vehicle.stockId} vehicle={vehicle} />
              ))}
        </div>

        {!isLoading && featured.length === 0 && (
          <div
            className="mt-10 rounded-sm border border-border bg-card p-10 text-center"
            data-ocid="home.empty_state"
          >
            <CarFront
              className="mx-auto size-10 text-muted-foreground"
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              Featured vehicles coming soon
            </h3>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Our latest arrivals are being prepared for the showroom. Check the
              full inventory for everything currently available.
            </p>
            <Button
              asChild
              className="mt-6 rounded-sm"
              data-ocid="home.empty_cta"
            >
              <Link to="/inventory">Browse Inventory</Link>
            </Button>
          </div>
        )}
      </section>

      {/* Why choose us */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The NJM difference
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose NJM Enterprises
            </h2>
            <p className="mt-4 text-muted-foreground">
              From first enquiry to final handover, we make buying a vehicle in
              Trinidad &amp; Tobago straightforward and trustworthy.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPS.map((prop) => (
              <div
                key={prop.title}
                className="group rounded-sm border border-border bg-background p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                data-ocid="home.value_prop"
              >
                <div className="flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <prop.icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-sm bg-primary px-6 py-16 text-center sm:px-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-[oklch(0.24_0.09_265)]" />
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to find your next vehicle?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Visit us at LP 66 McSeveny Street, El Dorado, or reach out today.
            Our team is ready to help you drive away in the perfect car.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="destructive"
              className="group rounded-sm px-8 py-6 text-base font-semibold uppercase tracking-wide"
              data-ocid="home.cta_contact_button"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-sm border-primary-foreground/40 bg-transparent px-8 py-6 text-base font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-ocid="home.cta_inventory_button"
            >
              <Link to="/inventory">Browse Inventory</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
