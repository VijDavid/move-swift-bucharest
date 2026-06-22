import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { REVIEWS, ReviewCard } from "./index";

export const Route = createFileRoute("/recenzii")({
  head: () => ({
    meta: [
      { title: "Recenzii Clienți – Mutări București | Mutări Express" },
      { name: "description", content: "Citește recenziile reale ale clienților Mutări Express București. Peste 200 de recenzii, scor mediu 4.9 / 5." },
      { property: "og:title", content: "Recenzii clienți | Mutări Express" },
      { property: "og:description", content: "Peste 200 de recenzii reale de la clienți din București și Ilfov." },
      { property: "og:url", content: "/recenzii" },
    ],
    links: [{ rel: "canonical", href: "/recenzii" }],
  }),
  component: RecenziiPage,
});

function RecenziiPage() {
  return (
    <>
      <PageHero eyebrow="Recenzii" title="Ce spun clienții noștri" subtitle="Punctualitate, profesionalism și grijă pentru bunurile tale – asta auzim cel mai des." />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary p-5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <div>
              <div className="text-xl font-extrabold text-foreground">4.9 din 5</div>
              <div className="text-sm text-muted-foreground">Bazat pe peste 200 de recenzii ale clienților</div>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}