import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

const PHONES = ["268-NJME (6563)", "488-NJME (6563)", "487-NJME (6563)"];

/** Site footer with dealership contact info, hours, and address. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            NJM Enterprises
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Premium Roll On Roll Off and Brand New vehicles for Trinidad &amp;
            Tobago.
          </p>
        </div>

        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Visit Us
          </p>
          <address className="mt-3 text-sm not-italic text-muted-foreground">
            NJM Enterprises, LP
            <br />
            66 McSeveny Street, El Dorado
            <br />
            Tunapuna Village, Saint George
            <br />
            Trinidad &amp; Tobago
          </address>
        </div>

        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            Contact
          </p>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {PHONES.map((phone) => (
              <li key={phone}>{phone}</li>
            ))}
          </ul>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <Clock
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              Mon–Fri: 9am–5pm
              <br />
              Sat: 9am–2pm
              <br />
              Sun: Closed
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} NJM Enterprises. All rights reserved.</p>
          <Link
            to="/contact"
            className="transition-smooth hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            data-ocid="footer.contact"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
