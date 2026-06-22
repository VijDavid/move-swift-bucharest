import { createFileRoute } from "@tanstack/react-router";
import { Award, Truck, Users, Clock, ShieldCheck, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import teamImg from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre Noi – Companie de Mutări București | Mutări Express" },
      { name: "description", content: "Companie locală din București cu peste 500 de mutări realizate. Echipă experimentată, echipamente profesionale și grijă pentru fiecare client." },
      { property: "og:title", content: "Despre Mutări Express București" },
      { property: "og:description", content: "Companie locală cu echipă experimentată și echipamente profesionale." },
      { property: "og:url", content: "/despre" },
    ],
    links: [{ rel: "canonical", href: "/despre" }],
  }),
  component: DesprePage,
});

function DesprePage() {
  const values = [
    { icon: MapPin, t: "Companie locală", d: "Din București, pentru București și Ilfov." },
    { icon: Users, t: "Echipă experimentată", d: "Peste 8 ani de experiență în mutări și transport mobilier." },
    { icon: Truck, t: "Echipamente profesionale", d: "Flotă proprie, chingi, pături, folie, cărucioare de scări." },
    { icon: ShieldCheck, t: "Grijă pentru bunuri", d: "Ambalare profesională și manipulare atentă." },
    { icon: Clock, t: "Timp de răspuns rapid", d: "Sub 15 minute de la apel în program." },
    { icon: Award, t: "Peste 500 de mutări", d: "Realizate cu succes pentru clienți persoane fizice și firme." },
  ];
  return (
    <>
      <PageHero eyebrow="Despre noi" title="O echipă locală pe care te poți baza" subtitle="Suntem o companie din București specializată în mutări și transport mobilier. Construim relații pe termen lung prin profesionalism și transparență." />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <img src={teamImg} alt="Echipa Mutări Express" width={1024} height={768} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Mutări fără bătăi de cap, cu o echipă care își iubește meseria
            </h2>
            <p className="mt-4 text-muted-foreground">
              De peste 8 ani ajutăm bucureșteni și firme să se mute rapid și în siguranță. Ne mândrim cu peste 500 de mutări finalizate cu succes, fără reclamații pentru obiecte deteriorate.
            </p>
            <p className="mt-3 text-muted-foreground">
              Fiecare mutare este planificată în detaliu: cunoaștem orașul, traficul și particularitățile blocurilor vechi din București. Asta face diferența între o mutare stresantă și una rapidă.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {values.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Hai să ne ocupăm noi de mutarea ta" subtitle="Sună acum sau cere ofertă online. Răspundem în maxim 15 minute." />
    </>
  );
}