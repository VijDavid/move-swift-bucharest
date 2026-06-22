import { Phone, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function CTASection({
  title = "Ai nevoie de o mutare rapidă?",
  subtitle = "Sună acum pentru o ofertă gratuită în mai puțin de 5 minute. Disponibili 7 zile din 7.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition hover:bg-accent-deep"
          >
            <Phone className="h-5 w-5" /> Sună: {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-transparent px-6 py-3.5 text-base font-bold text-primary-foreground transition hover:border-accent hover:text-accent"
          >
            <FileText className="h-5 w-5" /> Cere ofertă
          </Link>
        </div>
      </div>
    </section>
  );
}