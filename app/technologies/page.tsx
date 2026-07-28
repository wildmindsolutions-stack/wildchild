import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import TechIcon from "../components/TechIcon";
import Icon from "../components/Icon";
import { technologies } from "../lib/technologies";

export const metadata: Metadata = {
  title: "Technologies — Best AR VR & Projection Mapping Tech in Ahmedabad, Gujarat & India",
  description:
    "Master immersive technologies with WildChild Studios in Ahmedabad: 3D projection mapping, VR technology, AR technology, LIDAR, motion capture, holographic projection and interactive kiosks across Gujarat and India.",
  alternates: { canonical: "/technologies" },
  keywords: [
    "immersive technologies India",
    "best 3D projection mapping Ahmedabad",
    "AR VR technology Gujarat",
    "VR technology India",
    "AR technology Ahmedabad",
    "holographic projection India",
    "motion capture Gujarat",
    "LIDAR scanning India"
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
              <div className="icon-well h-12 w-12 transition-colors group-hover:bg-ink group-hover:text-white">
                <TechIcon slug={tech.slug} />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-ink">{tech.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{tech.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
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
