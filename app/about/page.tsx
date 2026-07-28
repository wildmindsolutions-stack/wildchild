import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Icon from "../components/Icon";
import { stats } from "../lib/content";

export const metadata: Metadata = {
  title: "About Us — Best Creative Studio in Ahmedabad, Gujarat & India",
  description:
    "WildChild Studios is a leading creative studio and immersive technology company in Ahmedabad, Gujarat and India — merging projection mapping, AR/VR, animation and event technology.",
  alternates: { canonical: "/about" },
  keywords: [
    "about WildChild Studios",
    "best creative studio in Ahmedabad",
    "immersive technology studio Ahmedabad",
    "creative technology company Gujarat",
    "creative agency India",
    "creative studio near me"
  ]
};

const values = [
  {
    title: "Technology know-how",
    body: "Deep, hands-on mastery of nine immersive technologies — from projection mapping to motion capture."
  },
  {
    title: "Concept explorers",
    body: "We start with the idea. Every project begins by exploring what will genuinely move an audience."
  },
  {
    title: "Never-give-up spirit",
    body: "Ambitious briefs are our favourite kind. We solve the hard problems others walk away from."
  },
  {
    title: "On time, precise",
    body: "Show days don't move. We deliver the best result, on schedule and calibrated to the last pixel."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="We merge technology, creativity and content."
        description="A perfect mix of technical know-how, concept explorers, a never-give-up spirit and hard work — we are a team of people who deliver the best, in time and precise."
      />

      <section className="section">
        <div className="container-wc grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
              alt="The WildChild Studios team collaborating on immersive technology projects"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-5 h-section">Built for the best use of technology</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              WildChild Studios began with a simple belief: technology is at its best when it
              creates wonder. Over a decade of projects — from digital museums and interactive
              exhibitions to large-scale projection mapping and holographic showcases — we&apos;ve
              become one of India&apos;s most versatile creative solution providers.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              With studios in Ahmedabad and a presence in the USA, we partner with brands,
              governments and cultural institutions to design experiences audiences remember long
              after the lights go down.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/[0.08] bg-surface">
        <div className="container-wc grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-cream">
        <div className="container-wc">
          <div className="max-w-2xl">
            <span className="eyebrow">What drives us</span>
            <h2 className="mt-5 h-section">Our values</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="icon-well h-11 w-11">
                  <Icon name="check" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
