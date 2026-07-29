import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "../../components/PageHeader";
import CTA from "../../components/CTA";
import Icon from "../../components/Icon";
import TechIcon from "../../components/TechIcon";
import GeoTargeting from "../../components/GeoTargeting";
import { technologies, getTechnology } from "../../lib/technologies";
import { siteConfig } from "../../lib/site";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return technologies.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const tech = getTechnology(params.slug);
  if (!tech) return {};
  return {
    title: { absolute: tech.metaTitle },
    description: tech.metaDescription,
    keywords: tech.keywords,
    alternates: { canonical: `/technologies/${tech.slug}` },
    openGraph: {
      title: tech.metaTitle,
      description: tech.metaDescription,
      url: `${siteConfig.siteUrl}/technologies/${tech.slug}`,
      type: "article",
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title: tech.metaTitle,
      description: tech.metaDescription
    }
  };
}

export default function TechnologyDetail({ params }: Params) {
  const tech = getTechnology(params.slug);
  if (!tech) notFound();

  const others = technologies.filter((t) => t.slug !== tech.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Best ${tech.searchPhrase} in Ahmedabad`,
    alternateName: [
      `Best ${tech.searchPhrase} in Gujarat`,
      `Best ${tech.searchPhrase} in India`
    ],
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "511 Satyamev Eminence, Science City Road, Sola",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380060",
        addressCountry: "IN"
      }
    },
    description: tech.metaDescription,
    areaServed: [
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" }
    ],
    url: `${siteConfig.siteUrl}/technologies/${tech.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Technology"
        title={`Best ${tech.searchPhrase} in Ahmedabad`}
        description={`${tech.short} Also serving Gujarat and India.`}
      />

      <section className="section">
        <div className="container-wc grid gap-12 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <span className="eyebrow">Overview</span>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{tech.overview}</p>

            <h2 className="mt-12 text-2xl font-bold text-ink">What we deliver</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {tech.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-olive text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink/[0.06] bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-olive text-white">
                <TechIcon slug={tech.slug} />
              </div>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Ideal for
              </h3>
              <ul className="mt-3 space-y-2">
                {tech.useCases.map((u) => (
                  <li key={u} className="text-sm font-medium text-ink">
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink/[0.06] bg-paper p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                People also search
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>Best {tech.searchPhrase.toLowerCase()} in Ahmedabad</li>
                <li>Best {tech.searchPhrase.toLowerCase()} in Gujarat</li>
                <li>Best {tech.searchPhrase.toLowerCase()} in India</li>
              </ul>
            </div>
            <div className="accent-panel p-6">
              <h3 className="text-lg font-semibold">Have a project in mind?</h3>
              <p className="mt-2 text-sm text-white/85">
                Tell us your idea and we&apos;ll shape the right technology around it.
              </p>
              <Link
                href="/contact"
                className="btn mt-5 w-full bg-surface text-ink hover:bg-paper"
              >
                Get in touch
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <GeoTargeting servicePhrase={tech.searchPhrase} />

      <section className="section-white">
        <div className="container-wc">
          <h2 className="h-section">Explore more technologies</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((t) => (
              <Link key={t.slug} href={`/technologies/${t.slug}`} className="card group">
                <div className="icon-well h-11 w-11 transition-colors group-hover:bg-olive group-hover:text-white">
                  <TechIcon slug={t.slug} />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{t.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{t.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
