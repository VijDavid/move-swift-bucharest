import { useState } from "react";
import { toast } from "sonner";

const SERVICES = [
  "Mutare apartament",
  "Mutare casă",
  "Mutare birou",
  "Transport mobilă",
  "Debarasare mobilă veche",
  "Transport electrocasnice",
  "Mutare urgentă",
  "Altele",
];

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          (e.target as HTMLFormElement).reset();
          toast.success("Cererea ta a fost trimisă! Te contactăm în maxim 15 minute.");
        }, 700);
      }}
      className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold text-foreground">
          Nume complet
          <input
            required
            name="name"
            className="rounded-lg border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="Ion Popescu"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-foreground">
          Telefon
          <input
            required
            type="tel"
            name="phone"
            className="rounded-lg border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="07xx xxx xxx"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold text-foreground">
        Tip serviciu
        <select
          name="service"
          className="rounded-lg border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        >
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold text-foreground">
          Adresa de plecare
          <input
            name="from"
            className="rounded-lg border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="Sector 3, București"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-foreground">
          Adresa de destinație
          <input
            name="to"
            className="rounded-lg border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder="Pipera, Voluntari"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold text-foreground">
        Detalii suplimentare
        <textarea
          name="message"
          rows={4}
          className="rounded-lg border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          placeholder="Etaj, lift, dată dorită, obiecte voluminoase..."
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-4 text-base font-extrabold text-accent-foreground transition hover:bg-accent-deep disabled:opacity-60"
      >
        {submitting ? "Se trimite..." : "Cere ofertă gratuită"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Răspundem în maxim 15 minute, în program. Datele tale sunt confidențiale.
      </p>
    </form>
  );
}