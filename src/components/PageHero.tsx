export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        {eyebrow && <p className="text-sm font-bold uppercase tracking-wider text-accent">{eyebrow}</p>}
        <h1 className="mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-primary-foreground/80 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}