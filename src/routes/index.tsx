import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Phone, FileText, Star, Zap, ShieldCheck, Clock, Truck, MapPin,
  Package, Building2, Home, Sofa, Trash2, Refrigerator, HandHelping, Timer,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";
import { SITE } from "@/lib/site";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mutări București – Transport Mobilă Rapid | Mutări Express" },
      { name: "description", content: "Mutări apartamente, case și birouri în București și Ilfov. Peste 500 de mutări realizate. Disponibili 7/7. Ofertă gratuită." },
      { property: "og:title", content: "Mutări București – Rapid și Fără Stres | Mutări Express" },
      { property: "og:description", content: "Servicii profesionale de mutări și transport mobilă în București și Ilfov. Sună acum pentru ofertă gratuită." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Reviews />
      <ServiceAreas />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Camion de mutări Mutări Express în București"
          width={1600}
          height={1100}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-deep/90" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            <Zap className="h-3.5 w-3.5" /> Mutări în aceeași zi disponibile
          </div>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
            Mutări și Transport Mobilă în <span className="text-accent">București</span> – Rapid și Fără Stres
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Echipă profesionistă, camioane echipate complet și prețuri transparente. Peste 500 de mutări realizate în București și Ilfov.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-base font-extrabold text-accent-foreground shadow-lg shadow-accent/30 transition hover:bg-accent-deep"
            >
              <Phone className="h-5 w-5" /> Sună Acum
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/5 px-6 py-4 text-base font-bold text-primary-foreground backdrop-blur transition hover:border-accent hover:text-accent"
            >
              <FileText className="h-5 w-5" /> Cere Ofertă Gratuită
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { n: "500+", l: "Mutări realizate" },
              { n: "7/7", l: "Disponibili" },
              { n: "< 15 min", l: "Răspuns rapid" },
              { n: "4.9★", l: "Recenzii clienți" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-extrabold text-accent">{s.n}</div>
                <div className="text-xs text-primary-foreground/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur">
            <h3 className="text-lg font-extrabold text-accent">De ce ne aleg clienții</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Prețuri transparente, fără costuri ascunse",
                "Echipă punctuală și politicoasă",
                "Materiale de ambalare incluse",
                "Asigurare pentru obiectele transportate",
                "Camioane de la 3.5t până la 7.5t",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Zap, label: "Răspuns rapid" },
    { icon: Clock, label: "Disponibili 7 zile din 7" },
    { icon: ShieldCheck, label: "Peste 500 de mutări realizate" },
    { icon: MapPin, label: "București și Ilfov" },
  ];
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export const SERVICE_LIST = [
  { icon: Home, title: "Mutări apartamente", desc: "Garsoniere, 2, 3 sau 4 camere – mutate rapid și în siguranță." },
  { icon: Building2, title: "Mutări case", desc: "Mutări complete pentru vile și case, indiferent de volum." },
  { icon: Package, title: "Mutări birouri", desc: "Relocări de birouri cu minim de întrerupere a activității." },
  { icon: Sofa, title: "Transport mobilă", desc: "Transport individual sau complet de mobilier nou ori second-hand." },
  { icon: Trash2, title: "Debarasare mobilă veche", desc: "Ridicare și debarasare mobilier vechi sau electrocasnice uzate." },
  { icon: Refrigerator, title: "Transport electrocasnice", desc: "Frigidere, mașini de spălat, cuptoare – ambalate și transportate corect." },
  { icon: HandHelping, title: "Manipulare și cărat mobilier", desc: "Echipă pentru cărat la etaj, demontare și remontare mobilier." },
  { icon: Timer, title: "Mutări urgente", desc: "Intervenții în aceeași zi, inclusiv weekend și sărbători." },
];

function Services() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">Serviciile noastre</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Tot ce ai nevoie pentru o mutare reușită
          </h2>
          <p className="mt-3 text-muted-foreground">
            De la mutări complete de apartamente până la transport individual de mobilier – ne ocupăm de tot.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_LIST.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-accent">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/servicii" className="text-sm font-bold text-accent hover:text-accent-deep">
            Vezi toate serviciile →
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, t: "Prețuri transparente", d: "Cotație clară înainte de mutare, fără surprize." },
    { icon: Clock, t: "Echipă punctuală", d: "Respectăm ora stabilită – timpul tău contează." },
    { icon: Truck, t: "Transport sigur", d: "Camioane echipate cu chingi, pături și folie de protecție." },
    { icon: Package, t: "Mașini complet utilate", d: "Flotă proprie de la 3.5t la 7.5t pentru orice volum." },
    { icon: Zap, t: "Programare flexibilă", d: "Inclusiv în weekend, seara sau în aceeași zi." },
    { icon: CheckCircle2, t: "Grijă pentru obiectele tale", d: "Ambalare profesională și manipulare atentă." },
  ];
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">De ce noi</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Profesionalism dovedit la fiecare mutare
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 rounded-2xl bg-card p-6 shadow-sm">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-extrabold text-foreground">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const REVIEWS = [
  { name: "Andrei M.", area: "Sector 2", text: "Echipa a venit la timp, totul a fost ambalat cu grijă. Mutare reușită fără niciun obiect deteriorat. Recomand cu încredere!", rating: 5 },
  { name: "Ioana P.", area: "Pipera", text: "Prețul comunicat la telefon a fost exact cel final. Băieții au fost rapizi, politicoși și extrem de organizați.", rating: 5 },
  { name: "Cristian D.", area: "Sector 6", text: "Mutare urgentă, m-au scos din încurcătură în aceeași zi. Profesioniști adevărați!", rating: 5 },
  { name: "Mihaela R.", area: "Voluntari", text: "Am avut multă mobilă grea de demontat. Au făcut totul fără probleme și au montat la loc la noua adresă.", rating: 5 },
  { name: "George T.", area: "Sector 3", text: "Birou mutat într-o singură seară, fără să întrerupem activitatea. Calitate-preț excelentă.", rating: 5 },
  { name: "Elena V.", area: "Otopeni", text: "Foarte atenți cu obiectele fragile. Mi-au împachetat ei tot ce era de sticlă. Mulțumesc!", rating: 5 },
];

function Reviews() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Recenzii reale</p>
            <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Ce spun clienții noștri</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4.9 / 5 din peste 200 de recenzii</span>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/recenzii" className="text-sm font-bold text-accent hover:text-accent-deep">
            Vezi toate recenziile →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ReviewCard({ name, area, text, rating }: { name: string; area: string; text: string; rating: number }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-foreground">"{text}"</p>
      <div className="mt-5 border-t border-border pt-4">
        <div className="text-sm font-extrabold text-primary">{name}</div>
        <div className="text-xs text-muted-foreground">{area}, București</div>
      </div>
    </article>
  );
}

function ServiceAreas() {
  const areas = [
    "Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6",
    "Pipera", "Voluntari", "Otopeni", "Popești-Leordeni",
    "Bragadiru", "Chiajna", "Mogoșoaia", "Tunari", "Corbeanca", "Domnești",
  ];
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Zone deservite</p>
            <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
              Acoperim întreaga zonă București și Ilfov
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ajungem rapid în orice sector al Capitalei și în toate localitățile din județul Ilfov. Pentru zone limitrofe, întreabă pe telefon.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition hover:bg-accent-deep"
            >
              <Phone className="h-5 w-5" /> Verifică disponibilitatea: {SITE.phone}
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {areas.map((a) => (
              <span key={a} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" /> {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
