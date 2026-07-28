import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Icon from "../components/Icon";
import { landingNav } from "../lib/landing-pages";
import { locationHubs } from "../lib/locations";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `All Solutions — Projection Mapping, AR/VR & Immersive Tech | ${siteConfig.name}`
  },
  description:
    "Browse all WildChild Studios solutions: projection mapping, event technology, AR/VR, digital museums, animation, video production and more — Ahmedabad, Gujarat and India.",
  keywords: [
    "WildChild Studios solutions",
    "projection mapping",
    "event technology",
    "AR VR",
    "digital museums",
    "immersive experiences Ahmedabad"
  ],
  alternates: { canonical: "/solutions" }
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Every immersive solution we offer"
        description="Dedicated SEO pages for the services and locations people search for — so you can jump straight to the right expertise."
      />

      <section className="section">
        <div className="container-wc">
          <h2 className="text-2xl font-bold text-ink">Service &amp; technology pages</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {landingNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-ink/[0.06] bg-white px-5 py-4 text-sm font-semibold text-ink transition hover:border-brand-500 hover:text-brand-600"
              >
                {item.label}
                <Icon name="arrow" className="h-4 w-4 opacity-40" />
              </Link>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold text-ink">Location pages</h2>
          <p className="mt-2 text-ink-muted">
            Rank for “best … in Ahmedabad / Gujarat / India” with dedicated local hubs.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {locationHubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="rounded-xl border border-ink/[0.06] bg-ink px-5 py-6 text-center text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Best in {hub.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
