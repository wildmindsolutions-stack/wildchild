import Link from "next/link";
import type { LocationHub } from "../lib/locations";
import { landingNav } from "../lib/landing-pages";
import { siteConfig } from "../lib/site";
import PageHeader from "./PageHeader";
import CTA from "./CTA";
import Icon from "./Icon";
import GeoTargeting from "./GeoTargeting";

export default function LocalHub({ hub }: { hub: LocationHub }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} — ${hub.name}`,
    url: `${siteConfig.siteUrl}${hub.href}`,
    description: hub.metaDescription,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "511 Satyamev Eminence, Science City Road, Sola",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380060",
      addressCountry: "IN"
    },
    areaServed: hub.name
  };

  const servicePhrase =
    hub.slug === "ahmedabad"
      ? "immersive technology studio"
      : hub.slug === "gujarat"
        ? "immersive technology company"
        : "immersive technology studio";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader eyebrow={`Serving ${hub.name}`} title={hub.h1} description={hub.lead} />

      <section className="section-cream">
        <div className="container-wc grid gap-12 lg:grid-cols-[1.3fr,1fr]">
          <div>
            {hub.overview.map((p) => (
              <p key={p.slice(0, 32)} className="mt-5 text-lg leading-relaxed text-ink-soft first:mt-0">
                {p}
              </p>
            ))}
            <h2 className="mt-12 font-display text-2xl font-semibold text-ink">
              Why choose us in {hub.name}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {hub.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-olive text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-ink-soft">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="accent-panel p-6">
            <h3 className="text-lg font-semibold">Start a project in {hub.name}</h3>
            <p className="mt-2 text-sm text-white/85">
              Tell us about your event, museum, exhibition or brand experience.
            </p>
            <Link href="/contact" className="btn mt-5 w-full bg-surface text-ink hover:bg-paper">
              Contact us
            </Link>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="mt-3 block text-center text-sm text-white/80 hover:text-white"
            >
              {siteConfig.phone}
            </a>
          </aside>
        </div>
      </section>

      <section className="section-white">
        <div className="container-wc">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Services people search for in {hub.name}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Explore dedicated pages optimised for “best … in {hub.name}” searches.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {landingNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-ink/[0.08] bg-paper px-5 py-4 text-sm font-semibold text-ink transition hover:border-ink/25"
              >
                {item.label}
                <Icon name="arrow" className="h-4 w-4 opacity-40" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GeoTargeting servicePhrase={servicePhrase} />
      <CTA />
    </>
  );
}
