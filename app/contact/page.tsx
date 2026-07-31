import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
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

      <section className="section-page">
        <div className="container-wc grid gap-10 lg:grid-cols-[1fr,1.15fr] lg:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
