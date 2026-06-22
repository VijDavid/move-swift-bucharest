import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCallButton() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-4 text-base font-extrabold text-accent-foreground shadow-2xl shadow-accent/40 ring-1 ring-accent-deep/30 transition active:scale-[0.98] sm:hidden"
    >
      <Phone className="h-5 w-5" />
      Sună Acum · {SITE.phone}
    </a>
  );
}