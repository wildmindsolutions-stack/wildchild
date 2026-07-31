import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import SolutionsGrid from "../components/SolutionsGrid";
import LocationHubGrid from "../components/LocationHubGrid";
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

      <section className="section-page">
        <div className="container-wc">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Service &amp; technology pages
          </h2>
          <p className="mt-2 max-w-2xl text-ink-muted">
            Hover any card to preview — click to open the full solution page.
          </p>
          <SolutionsGrid showViewAll={false} className="mt-8" />

          <h2 className="mt-14 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Location pages
          </h2>
          <p className="mt-2 max-w-2xl text-ink-muted">
            Rank for “best … in Ahmedabad / Gujarat / India” with dedicated local hubs.
          </p>
          <LocationHubGrid className="mt-8" />
        </div>
      </section>

      <CTA />
    </>
  );
}
