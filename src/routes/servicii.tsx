import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home, Building2, Package, Sofa, Trash2, Refrigerator, HandHelping, Timer, Phone, CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii Mutări București – Apartamente, Case, Birouri | Mutări Express" },
      { name: "description", content: "Servicii complete de mutări în București și Ilfov: apartamente, case, birouri, transport mobilă, debarasare, mutări urgente." },
      { property: "og:title", content: "Servicii Mutări București | Mutări Express" },
      { property: "og:description", content: "De la mutări complete la transport individual de mobilier – ne ocupăm de tot." },
      { property: "og:url", content: "/servicii" },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
  }),
  component: ServiciiPage,
});

const SERVICES = [
  { icon: Home, title: "Mutări apartamente", desc: "Garsoniere, 2, 3 sau 4 camere – planificate și executate rapid de echipa noastră.", points: ["Demontare și montare mobilă", "Ambalare obiecte fragile", "Cărat la etaj fără lift"] },
  { icon: Building2, title: "Mutări case", desc: "Mutări complete pentru vile și case, indiferent de volum sau zonă.", points: ["Echipă mărită pentru volume mari", "Camioane 7.5t disponibile", "Coordonare logistică completă"] },
  { icon: Package, title: "Mutări birouri", desc: "Relocări de birouri cu minim de întrerupere a activității – inclusiv seara sau weekend.", points: ["Mutare în afara programului", "Transport servere și echipamente IT", "Reasamblare mobilier birou"] },
  { icon: Sofa, title: "Transport mobilă", desc: "Transport individual sau complet de mobilier nou ori second-hand.", points: ["Transport canapele, dulapuri, paturi", "Livrare mobilă cumpărată online", "Ridicare din magazine și depozite"] },
  { icon: Trash2, title: "Debarasare mobilă veche", desc: "Ridicăm și debarasăm mobilierul vechi sau electrocasnicele uzate.", points: ["Ridicare la cerere", "Eliminare conform reglementărilor", "Eliberare apartament rapidă"] },
  { icon: Refrigerator, title: "Transport electrocasnice", desc: "Frigidere, mașini de spălat, cuptoare – ambalate și transportate corect.", points: ["Manipulare verticală corectă", "Folie de protecție inclusă", "Conectare la noua adresă (opțional)"] },
  { icon: HandHelping, title: "Manipulare și cărat mobilier", desc: "Echipă pentru cărat la etaj, demontare și remontare mobilier.", points: ["Cărat la orice etaj", "Demontare/montare profesională", "Hamali experimentați"] },
  { icon: Timer, title: "Mutări urgente", desc: "Intervenții în aceeași zi, inclusiv weekend și sărbători legale.", points: ["Răspuns sub 15 minute", "Echipă on-call 7/7", "Mutare same-day disponibilă"] },
];

function ServiciiPage() {
  return (
    <>
      <PageHero eyebrow="Servicii" title="Servicii complete de mutări în București" subtitle="Indiferent de complexitatea mutării, avem echipa, camioanele și experiența necesară pentru a o face fără stres." />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:px-8">
          {SERVICES.map(({ icon: Icon, title, desc, points }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-extrabold text-foreground">{title}</h2>
                  <p className="mt-1 text-muted-foreground">{desc}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground hover:bg-accent-deep">
                  <Phone className="h-4 w-4" /> Sună acum
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-bold text-foreground hover:border-accent hover:text-accent">
                  Cere ofertă
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}