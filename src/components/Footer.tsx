import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Truck, Clock } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground">
              <Truck className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold">Mutări Express</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Mutări și transport mobilă în București și Ilfov. Peste 500 de mutări realizate cu profesionalism și grijă.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Navigare</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-primary-foreground/80 hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={SITE.phoneHref} className="hover:text-accent">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={SITE.emailHref} className="hover:text-accent">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Zone deservite</h4>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Sector 1, 2, 3, 4, 5, 6, Pipera, Voluntari, Otopeni, Popești-Leordeni, Bragadiru, Chiajna și restul județului Ilfov.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Mutări Express București. Toate drepturile rezervate.</p>
          <p>Disponibili 7 zile din 7 · Răspuns rapid garantat</p>
        </div>
      </div>
    </footer>
  );
}