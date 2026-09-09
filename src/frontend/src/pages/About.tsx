import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trusted & Transparent",
    body: "Every vehicle is inspected and honestly represented, so you know exactly what you are driving away with.",
  },
  {
    icon: Truck,
    title: "Roll On Roll Off Expertise",
    body: "We specialise in importing and delivering Roll On Roll Off vehicles, handled end-to-end with care.",
  },
  {
    icon: BadgeCheck,
    title: "Brand New Selection",
    body: "A curated range of Brand New vehicles backed by manufacturer standards and the NJM service promise.",
  },
  {
    icon: Sparkles,
    title: "Premium Service",
    body: "From first enquiry to handover, our team treats every customer with the attention a premium purchase deserves.",
  },
];

const PHONES = [
  "268-NJME (6563)",
  "488-NJME (6563)",
  "487-NJME (6563)",
  "+1 868-656-6268",
];

/** 'Who We Are' page for NJM Enterprises. */
export function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero / intro */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 gradient-primary opacity-20"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Who We Are
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Trinidad &amp; Tobago&apos;s Premium Automotive Destination
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg">
            NJM Enterprises is a premium car dealership based in El Dorado,
            Trinidad &amp; Tobago. We bring the world&apos;s finest vehicles to
            our customers through a carefully curated selection of Brand New and
            Roll-On/Roll-Off cars — delivered with the NJM standard of service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" data-ocid="about.inventory_button">
              <Link to="/inventory">
                Browse Inventory
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-ocid="about.contact_button"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values / why choose us */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The NJM Standard
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We built our reputation on honesty, expertise, and an uncompromising
            commitment to quality — the values behind every vehicle we sell.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                data-ocid={`about.value.${value.title.toLowerCase().replace(/\s+/g, "_")}`}
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact info */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Visit Us
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Find Our Showroom
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      Address
                    </p>
                    <address className="mt-1 text-sm not-italic leading-relaxed text-muted-foreground">
                      NJM Enterprises, LP
                      <br />
                      66 McSeveny Street, El Dorado
                      <br />
                      Tunapuna Village, Saint George
                      <br />
                      Trinidad &amp; Tobago
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      Phone
                    </p>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      {PHONES.map((phone) => (
                        <li key={phone}>{phone}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      Opening Hours
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Mon–Fri: 9am–5pm
                      <br />
                      Sat: 9am–2pm
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-xl border border-border bg-card p-8 lg:p-10">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Car className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
                Ready to find your next vehicle?
              </h3>
              <p className="mt-3 text-base text-muted-foreground">
                Explore our current inventory or reach out to our team for a
                personalised consultation. We&apos;re here to help you drive
                away in the car you deserve.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  data-ocid="about.cta_inventory_button"
                >
                  <Link to="/inventory">
                    View Inventory
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  data-ocid="about.cta_contact_button"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
