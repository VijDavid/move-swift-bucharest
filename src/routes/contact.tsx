import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Mutări București | Mutări Express" },
      { name: "description", content: "Contactează Mutări Express București pentru ofertă gratuită. Telefon, email, formular online. Răspuns în 15 minute." },
      { property: "og:title", content: "Contact Mutări Express București" },
      { property: "og:description", content: "Sună acum sau cere ofertă online. Răspuns rapid garantat." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Cere ofertă gratuită" subtitle="Răspundem la telefon și pe formular în maxim 15 minute. Disponibili 7 zile din 7, între 07:00 și 22:00." />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <QuoteForm />

          <div className="flex flex-col gap-4">
            <a href={SITE.phoneHref} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-accent">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Telefon</div>
                <div className="text-lg font-extrabold text-foreground">{SITE.phone}</div>
                <div className="text-sm text-muted-foreground">Apel direct, răspuns rapid</div>
              </div>
            </a>

            <a href={SITE.whatsappHref} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-accent">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="text-lg font-extrabold text-foreground">{SITE.phone}</div>
                <div className="text-sm text-muted-foreground">Trimite poze cu obiectele de mutat</div>
              </div>
            </a>

            <a href={SITE.emailHref} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-accent">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="text-base font-extrabold text-foreground">{SITE.email}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sediu</div>
                <div className="text-base font-extrabold text-foreground">{SITE.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Program</div>
                <div className="text-base font-extrabold text-foreground">{SITE.hours}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Hartă București"
              src="https://www.google.com/maps?q=Bucuresti,%20Bd.%20Unirii&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="block w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}