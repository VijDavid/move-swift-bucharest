import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const IMAGES = [
  { src: g4, alt: "Echipa Mutări Express" },
  { src: g1, alt: "Cărat mobilier pe scări" },
  { src: g2, alt: "Camion încărcat cu mobilier ambalat" },
  { src: g3, alt: "Mutare birouri în București" },
  { src: g5, alt: "Ambalare frigider" },
  { src: g6, alt: "Cutii de mutare etichetate" },
];

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie – Mutări București | Mutări Express" },
      { name: "description", content: "Imagini din timpul mutărilor noastre: camioane, transport mobilier, relocări de birouri și echipa de profesioniști." },
      { property: "og:title", content: "Galerie Mutări Express București" },
      { property: "og:description", content: "Vezi echipa, camioanele și mutările noastre." },
      { property: "og:url", content: "/galerie" },
      { property: "og:image", content: g4 },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
  component: GaleriePage,
});

function GaleriePage() {
  return (
    <>
      <PageHero eyebrow="Galerie" title="Mutări reale, echipă reală" subtitle="O privire în culisele muncii noastre zilnice în București și Ilfov." />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {IMAGES.map((img, i) => (
            <figure key={i} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="px-4 py-3 text-sm font-semibold text-foreground">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}