import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Inventory", to: "/inventory" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

/** Site header with brand mark and primary navigation. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 transition-smooth hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          data-ocid="header.brand"
        >
          <span className="flex size-9 items-center justify-center rounded-sm bg-primary font-display text-sm font-bold text-primary-foreground">
            NJM
          </span>
          <span className="hidden font-display text-lg font-semibold tracking-tight text-foreground sm:block">
            NJM Enterprises
          </span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "rounded-sm px-3 py-2 text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "text-muted-foreground hover:text-foreground",
              )}
              activeProps={{
                className: "text-foreground",
              }}
              data-ocid="header.nav"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
