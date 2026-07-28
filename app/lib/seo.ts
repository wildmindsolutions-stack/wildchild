// Shared SEO helpers: geo keyword expansion, titles, location sections & FAQs.
// Goal: rank for searches like "best event technology company in Ahmedabad / Gujarat / India".

export const GEO_LOCATIONS = ["Ahmedabad", "Gujarat", "India"] as const;

/** Builds keyword variants users type for each location. */
export function geoKeywords(...bases: string[]): string[] {
  const out = new Set<string>();
  for (const base of bases) {
    const clean = base.trim();
    if (!clean) continue;
    out.add(clean);
    out.add(`best ${clean}`);
    for (const loc of GEO_LOCATIONS) {
      out.add(`${clean} in ${loc}`);
      out.add(`best ${clean} in ${loc}`);
      out.add(`${clean} ${loc}`);
      out.add(`best ${clean} ${loc}`);
      out.add(`${clean} company in ${loc}`);
      out.add(`best ${clean} company in ${loc}`);
    }
  }
  return Array.from(out);
}

/**
 * Title focuses on Ahmedabad (home city — strongest local query).
 * Gujarat & India are covered in description, H2s and FAQs.
 */
export function geoTitle(service: string, brand = "WildChild Studios"): string {
  return `Best ${service} in Ahmedabad | ${brand}`;
}

export function geoDescription(service: string, extra?: string): string {
  const core = `Looking for the best ${service.toLowerCase()} in Ahmedabad, Gujarat or India? WildChild Studios is a trusted ${service.toLowerCase()} based in Ahmedabad, serving clients across Gujarat and pan-India.`;
  return extra ? `${core} ${extra}` : core;
}

export type GeoSection = {
  location: (typeof GEO_LOCATIONS)[number];
  heading: string;
  body: string;
};

/** On-page H2 blocks that match exact search queries per city/state/country. */
export function geoLocationSections(service: string): GeoSection[] {
  const s = service.toLowerCase();
  return [
    {
      location: "Ahmedabad",
      heading: `Best ${service} in Ahmedabad`,
      body: `If you searched for the best ${s} in Ahmedabad, you are in the right place. WildChild Studios is headquartered in Ahmedabad (Science City Road, Sola) and delivers ${s} projects for events, exhibitions, museums, brands and government clients across the city. From concept and content to on-site execution, our Ahmedabad team handles end-to-end delivery.`
    },
    {
      location: "Gujarat",
      heading: `Best ${service} in Gujarat`,
      body: `Looking for the best ${s} in Gujarat? We serve clients across the state — Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot and beyond. Whether it is a state showcase, tourism installation, corporate launch or cultural event, WildChild Studios brings proven ${s} expertise with reliable show-day support throughout Gujarat.`
    },
    {
      location: "India",
      heading: `Best ${service} in India`,
      body: `Searching for the best ${s} in India? WildChild Studios partners with brands, institutions and agencies nationwide. Our Ahmedabad studio produces the creative and technical work, then deploys teams wherever your project needs us — so you get the same quality of ${s} whether the venue is in Gujarat or anywhere else in India.`
    }
  ];
}

export type GeoFaq = { question: string; answer: string };

/** FAQ copy + schema that mirrors how people type in Google. */
export function geoFaqs(service: string): GeoFaq[] {
  const s = service.toLowerCase();
  return [
    {
      question: `Who is the best ${s} in Ahmedabad?`,
      answer: `WildChild Studios is a leading ${s} in Ahmedabad, known for immersive technology, projection mapping, AR/VR and creative event solutions. Visit us at 511 Satyamev Eminence, Science City Road, Sola, Ahmedabad, or call ${"+91 92274 28262"}.`
    },
    {
      question: `Which is the best ${s} in Gujarat?`,
      answer: `WildChild Studios is widely chosen as a top ${s} in Gujarat for government campaigns, exhibitions, tourism installations and corporate experiences. We combine creative direction with hands-on technical execution across the state.`
    },
    {
      question: `How do I find the best ${s} in India?`,
      answer: `Choose a studio with proven projects, in-house technology and pan-India delivery. WildChild Studios offers ${s} services from Ahmedabad with nationwide installation and show support — ideal if you need the best ${s} in India with a single accountable partner.`
    },
    {
      question: `Do you provide ${s} near me in Ahmedabad?`,
      answer: `Yes. Our head office is in Ahmedabad, so local clients get fast meetings, site surveys and on-ground support for ${s} projects. Contact info@wildchildstudios.com to discuss your brief.`
    }
  ];
}

export function faqJsonLd(faqs: GeoFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };
}
