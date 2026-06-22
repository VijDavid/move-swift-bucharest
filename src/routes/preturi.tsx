import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/preturi")({
  head: () => ({
    meta: [
      { title: "Prețuri Mutări București – Pachete și Tarife | Mutări Express" },
      { name: "description", content: "Tarife transparente pentru mutări în București. Pachete pentru garsoniere, apartamente 2-3 camere și birouri. Ofertă personalizată gratuită." },
      { property: "og:title", content: "Prețuri Mutări București | Mutări Express" },
      { property: "og:description", content: "Pachete și tarife transparente. Cere ofertă gratuită." },
      { property: "og:url", content: "/preturi" },
    ],
    links: [{ rel: "canonical", href: "/preturi" }],
  }),
  component: PreturiPage,
});

const PACKAGES = [
  { name: "Garsonieră", price: "de la 450", pop: false, features: ["2 hamali", "Camion 3.5t", "Pături și folie incluse", "Până la 3 ore"] },
  { name: "Apartament 2 camere", price: "de la 650", pop: true, features: ["2-3 hamali", "Camion 3.5t–5t", "Demontare/montare pat", "Pături și folie incluse", "Până la 5 ore"] },
  { name: "Apartament 3 camere", price: "de la 950", pop: false, features: ["3-4 hamali", "Camion 5t–7.5t", "Demontare/montare mobilier", "Materiale ambalare", "Până la 7 ore"] },
  { name: "Birouri", price: "ofertă", pop: false, features: ["Echipă dedicată", "Mutare în afara programului", "Transport IT și servere", "Coordonator dedicat"] },
];

function PreturiPage() {
  return (
    <>
      <PageHero eyebrow="Prețuri" title="Tarife clare, fără surprize" subtitle="Mai jos găsești pachetele noastre de bază. Prețul final depinde de volum, distanță și etaj. Toate ofertele sunt gratuite." />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl border-2 p-7 shadow-sm transition ${
                p.pop ? "border-accent bg-card shadow-lg" : "border-border bg-card"
              }`}
            >
              {p.pop && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent-foreground">
                  Cel mai cerut
                </span>
              )}
              <h3 className="text-lg font-extrabold text-primary">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-black text-foreground">{p.price}</span>
                {p.price !== "ofertă" && <span className="text-sm font-bold text-muted-foreground">lei</span>}
              </div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={SITE.phoneHref}
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition ${
                  p.pop
                    ? "bg-accent text-accent-foreground hover:bg-accent-deep"
                    : "border border-border text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                <Phone className="h-4 w-4" /> Cere ofertă
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-secondary p-8 text-center">
          <h2 className="text-2xl font-extrabold text-foreground">Ai nevoie de o ofertă personalizată?</h2>
          <p className="mt-2 text-muted-foreground">
            Volumele mari, mutările de case sau cele urgente primesc o cotație individuală. Spune-ne ce ai de mutat și îți răspundem în 15 minute.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground hover:bg-accent-deep">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground">
              Formular ofertă
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}