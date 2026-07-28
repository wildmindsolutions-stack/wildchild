import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import TechIcon from "../components/TechIcon";
import Icon from "../components/Icon";
import { technologies } from "../lib/technologies";

export const metadata: Metadata = {
  title: "Technologies — Projection Mapping, AR/VR, Holograms & More",
  description:
    "Explore the immersive technologies WildChild Studios masters: 3D projection mapping, virtual reality, augmented reality, LIDAR scanning, motion capture, holographic projection, interactive kiosks and more.",
  alternates: { canonical: "/technologies" },
  keywords: [
    "immersive technologies",
    "3D projection mapping",
    "AR VR",
    "holographic projection",
    "motion capture",
    "LIDAR scanning"
  ]
};

export default function TechnologiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technologies we master"
        title="The full immersive technology toolkit."
        description="Our experience across these technologies has grown so much that we've become one of the best creative solution providers in the country. Explore each one in detail."
      />

      <section className="section">
        <div className="container-wc grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <Link key={tech.slug} href={`/technologies/${tech.slug}`} className="card group flex flex-col">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-white transition-colors group-hover:bg-brand-600">
                <TechIcon slug={tech.slug} />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-ink">{tech.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{tech.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Learn more <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
