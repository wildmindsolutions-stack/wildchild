import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Icon from "../components/Icon";
import { services } from "../lib/content";

export const metadata: Metadata = {
  title: "Services — Best Immersive Experience Services in Ahmedabad, Gujarat & India",
  description:
    "End-to-end immersive services from WildChild Studios in Ahmedabad: digital museums, virtual tours, exhibitions, event technology and Museum Experience Packages across Gujarat and India.",
  alternates: { canonical: "/services" },
  keywords: [
    "digital museum solutions",
    "museum experiences",
    "Museum Experience Package",
    "virtual tour services",
    "interactive exhibition design",
    "event technology company India",
    "best event technology in Ahmedabad",
    "immersive experiences Gujarat"
  ]
};

const detail: Record<string, string[]> = {
  "digital-museums": [
    "Interactive galleries & storytelling",
    "Touch tables, kiosks & AR guides",
    "Character-led narration",
    "Projection & holographic exhibits"
  ],
  "virtual-tours": [
    "360° capture & production",
    "Web & headset delivery",
    "Guided narration & hotspots",
    "Heritage & real-estate walkthroughs"
  ],
  exhibitions: [
    "Concept & experience design",
    "Interactive product displays",
    "Custom content & software",
    "On-site setup & support"
  ],
  events: [
    "Projection mapping & stage visuals",
    "Immersive brand activations",
    "Live show content",
    "Turnkey technical execution"
  ]
};

const serviceLinks: Record<string, string> = {
  "digital-museums": "/digital-museums",
  "virtual-tours": "/virtual-tours",
  exhibitions: "/exhibitions",
  events: "/event-technology"
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="End-to-end immersive experiences."
        description="Product display is easy — making it interesting and interactive is our job. From concept to show day, we handle it all."
      />

      <section className="section-page">
        <div className="container-wc space-y-6">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="grid gap-8 rounded-3xl border border-ink/[0.06] bg-white p-8 shadow-sm lg:grid-cols-[0.9fr,1.1fr] lg:items-center"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <div className="icon-well h-14 w-14 rounded-2xl">
                  <Icon name={service.icon} className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-ink">{service.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">{service.description}</p>
                <Link
                  href={serviceLinks[service.slug]}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-500"
                >
                  Learn more <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <ul className={`grid gap-3 sm:grid-cols-2 ${i % 2 ? "lg:order-1" : ""}`}>
                {detail[service.slug].map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 rounded-xl bg-paper px-4 py-3"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-olive text-white">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium text-ink-soft">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
