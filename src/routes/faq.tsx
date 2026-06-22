import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Cât costă o mutare în București?", a: "Prețul depinde de volum, distanță, etaj și prezența liftului. O garsonieră pornește de la 450 lei, un apartament 2 camere de la 650 lei. Pentru ofertă exactă, sună-ne sau completează formularul – răspundem în 15 minute." },
  { q: "Oferiți ajutor cu ambalarea?", a: "Da. Furnizăm cutii, folie cu bule, pături și benzi adezive. Putem împacheta noi totul sau doar obiectele fragile, în funcție de preferința ta." },
  { q: "Mutați și mobilă grea?", a: "Absolut. Avem hamali experimentați, cărucioare de scări și echipamente pentru piane, seifuri, frigidere mari și mobilier voluminos." },
  { q: "Oferiți mutări în weekend?", a: "Da, suntem disponibili 7 zile din 7, inclusiv sâmbătă, duminică și sărbători legale, fără tarife suplimentare semnificative." },
  { q: "Ce zone deserviți?", a: "Acoperim întreaga zonă București (toate cele 6 sectoare) și județul Ilfov: Pipera, Voluntari, Otopeni, Popești-Leordeni, Bragadiru, Chiajna, Mogoșoaia, Tunari și altele." },
  { q: "Cât de repede puteți veni?", a: "În program putem ajunge în aceeași zi pentru mutări urgente, în funcție de disponibilitatea echipelor. Răspundem la telefon în maxim 15 minute." },
  { q: "Demontați și montați mobila?", a: "Da, echipa noastră demontează mobila la adresa veche și o remontează la noua adresă, cu sculele necesare." },
  { q: "Cum se plătește?", a: "Plata se face după finalizarea mutării, în numerar sau prin transfer bancar. Pentru firme, emitem factură fiscală." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Întrebări Frecvente – Mutări București | Mutări Express" },
      { name: "description", content: "Răspunsuri la întrebările frecvente despre serviciile de mutări și transport mobilă în București și Ilfov." },
      { property: "og:title", content: "FAQ Mutări București" },
      { property: "og:description", content: "Tot ce trebuie să știi despre mutările noastre." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Întrebări frecvente" subtitle="Răspunsuri rapide la cele mai comune întrebări. Dacă nu găsești ce cauți, sună-ne direct." />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base font-bold text-foreground hover:text-accent">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CTASection />
    </>
  );
}