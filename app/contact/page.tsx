import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Best Immersive Studio in Ahmedabad, Gujarat & India",
  description:
    "Contact WildChild Studios in Ahmedabad for projection mapping, AR/VR technology, museum experiences, animation, video production and event technology across Gujarat and India.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact WildChild Studios",
    "projection mapping enquiry Ahmedabad",
    "creative studio near me Ahmedabad",
    "event technology company Gujarat",
    "AR VR company India contact"
  ]
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.siteUrl}/images/logo.png`,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "511 Satyamev Eminence, Science City Road, Sola",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380060",
      addressCountry: "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's start something immersive."
        description="Tell us about your event, exhibition or space and we'll get back to you quickly."
      />

      <section className="section">
        <div className="container-wc grid gap-12 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Talk to us
              </h2>
              <div className="mt-4 space-y-2">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="block text-lg font-semibold text-ink hover:text-brand-600"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-lg font-semibold text-ink hover:text-brand-600"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {siteConfig.offices.map((office) => (
              <div key={office.label}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                  {office.label}
                </h3>
                <address className="mt-3 not-italic text-ink-soft">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-ink/[0.06] bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
