export default function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/[0.06] bg-white">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -right-20 -top-10 h-56 w-56 rounded-full bg-brand-400/15 blur-3xl" />
      <div className="container-wc relative py-16 sm:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{description}</p>
        )}
      </div>
    </section>
  );
}
