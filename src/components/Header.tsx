import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, Truck, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Truck className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold leading-tight text-primary sm:text-base">
              Mutări Express
            </span>
            <span className="block truncate text-[11px] font-medium text-muted-foreground">
              București &amp; Ilfov
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-accent" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-semibold transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-sm transition hover:bg-accent-deep sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-accent" }}
                inactiveProps={{ className: "text-foreground" }}
                className="border-b border-border/60 py-3 text-base font-semibold last:border-b-0"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-base font-bold text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}