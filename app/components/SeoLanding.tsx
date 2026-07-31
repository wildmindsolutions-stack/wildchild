import Link from "next/link";
import type { LandingPage } from "../lib/landing-pages";
import { siteConfig } from "../lib/site";
import PageHeader from "./PageHeader";
import CTA from "./CTA";
import Icon from "./Icon";
import GeoTargeting from "./GeoTargeting";

export default function SeoLanding({ page }: { page: LandingPage }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Best ${page.searchPhrase} in Ahmedabad`,
    alternateName: [
      `Best ${page.searchPhrase} in Gujarat`,
      `Best ${page.searchPhrase} in India`,
      page.searchPhrase
    ],
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "511 Satyamev Eminence, Science City Road, Sola",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380060",
        addressCountry: "IN"
      }
    },
    description: page.metaDescription,
    areaServed: [
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" }
    ],
    url: `${siteConfig.siteUrl}${page.href}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.h1} description={page.lead} />

      <section className="section-page">
        <div className="container-wc grid gap-12 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <span className="eyebrow">Why WildChild Studios</span>
            {page.overview.map((para) => (
              <p key={para.slice(0, 40)} className="mt-5 text-lg leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}

            <h2 className="mt-12 text-2xl font-bold text-ink">What you get</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="check-dot mt-0.5">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="accent-panel p-6">
              <h3 className="text-lg font-semibold">Ready to start?</h3>
              <p className="mt-2 text-sm text-white/85">
                Tell us about your brief. We&apos;ll recommend the right technology and creative
                approach.
              </p>
              <Link
                href="/contact"
                className="btn mt-5 w-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-ink"
              >
                Get a quote
              </Link>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="mt-3 block text-center text-sm text-white/80 hover:text-white"
              >
                Or call {siteConfig.phone}
              </a>
            </div>

            <div className="rounded-2xl border border-ink/[0.08] bg-surface p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                People also search
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li>Best {page.searchPhrase.toLowerCase()} in Ahmedabad</li>
                <li>Best {page.searchPhrase.toLowerCase()} in Gujarat</li>
                <li>Best {page.searchPhrase.toLowerCase()} in India</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-ink/[0.08] bg-surface p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Related
              </h3>
              <ul className="mt-4 space-y-3">
                {page.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-500"
                    >
                      {r.label} <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <GeoTargeting servicePhrase={page.searchPhrase} />
      <CTA />
    </>
  );
}
