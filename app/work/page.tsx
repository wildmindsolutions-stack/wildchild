import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import { work } from "../lib/content";

export const metadata: Metadata = {
  title: "Our Work — Projection Mapping & Immersive Project Portfolio",
  description:
    "A selection of WildChild Studios projects: large-scale projection mapping, interactive exhibitions, digital museums and immersive events delivered across India.",
  alternates: { canonical: "/work" },
  keywords: [
    "projection mapping portfolio",
    "immersive experience projects India",
    "exhibition case studies"
  ]
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Projects worth boasting about."
        description="We've worked on some awesome projects across events, exhibitions and cultural showcases. Here's a taste of what we build."
      />

      <section className="section">
        <div className="container-wc grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                  {project.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-ink">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
