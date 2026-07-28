import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-wc grid min-h-[50vh] place-items-center text-center">
        <div>
          <p className="font-display text-6xl font-bold text-gradient">404</p>
          <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
          <p className="mt-2 text-ink-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link href="/" className="btn-primary mt-6">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
