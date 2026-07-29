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
    <section className="relative overflow-hidden border-b border-ink/[0.08] bg-paper">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="container-wc relative py-16 sm:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{description}</p>
        )}
        <div className="mt-8 h-1 w-20 rounded-full bg-olive" />
      </div>
    </section>
  );
}
