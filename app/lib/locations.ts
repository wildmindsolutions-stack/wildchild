// Local SEO hub pages: /ahmedabad, /gujarat, /india

export type LocationHub = {
  slug: string;
  href: string;
  name: string;
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string[];
  highlights: string[];
};

export const locationHubs: LocationHub[] = [
  {
    slug: "ahmedabad",
    href: "/ahmedabad",
    name: "Ahmedabad",
    h1: "WildChild Studios Ahmedabad — Best Immersive Technology Studio",
    lead: "Based in Ahmedabad, we are the local creative and event technology studio for projection mapping, AR/VR, digital museums, animation and immersive experiences.",
    metaTitle: "Best Immersive Technology Studio in Ahmedabad | WildChild Studios",
    metaDescription:
      "WildChild Studios Ahmedabad — best projection mapping, AR/VR, event technology, digital museums and creative studio in Ahmedabad, Gujarat. Visit us at Science City Road, Sola.",
    keywords: [
      "WildChild Studios Ahmedabad",
      "best immersive studio in Ahmedabad",
      "projection mapping company Ahmedabad",
      "AR VR company Ahmedabad",
      "creative studio Ahmedabad",
      "creative studio near me Ahmedabad",
      "event technology company Ahmedabad",
      "animation studio in Ahmedabad",
      "video production company Ahmedabad"
    ],
    overview: [
      "If you searched for a creative studio near you in Ahmedabad, WildChild Studios is headquartered here — 511 Satyamev Eminence, Science City Road, Sola, Ahmedabad 380060.",
      "Our Ahmedabad team delivers projection mapping, AR/VR, museum experiences, animation, video production and full event technology for brands, government and cultural clients."
    ],
    highlights: [
      "Local Ahmedabad studio — fast site visits and meetings",
      "End-to-end immersive technology under one roof",
      "Proven work on Gujarat and national showcases",
      "Call +91 92274 28262 for Ahmedabad projects"
    ]
  },
  {
    slug: "gujarat",
    href: "/gujarat",
    name: "Gujarat",
    h1: "Best Immersive Technology & Event Company in Gujarat",
    lead: "WildChild Studios serves Gujarat — Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot and beyond — with projection mapping, exhibitions, tourism installations and AR/VR.",
    metaTitle: "Best Immersive Technology Company in Gujarat | WildChild Studios",
    metaDescription:
      "Looking for the best projection mapping, event technology or AR/VR company in Gujarat? WildChild Studios delivers immersive experiences statewide from Ahmedabad.",
    keywords: [
      "immersive technology company Gujarat",
      "best projection mapping Gujarat",
      "event technology company Gujarat",
      "AR VR company Gujarat",
      "creative studio Gujarat",
      "digital museum Gujarat",
      "exhibition technology Gujarat"
    ],
    overview: [
      "Gujarat hosts some of India's biggest investment, tourism and cultural showcases. WildChild Studios has built immersive experiences for events and institutions across the state.",
      "From our Ahmedabad base we deploy crews and technology anywhere in Gujarat — so you get a statewide partner with local speed."
    ],
    highlights: [
      "Statewide Gujarat delivery from Ahmedabad",
      "Government, tourism and corporate experience",
      "Projection mapping, exhibitions and museums",
      "Reliable show-day technical crews"
    ]
  },
  {
    slug: "india",
    href: "/india",
    name: "India",
    h1: "Best Immersive Technology Studio in India — WildChild Studios",
    lead: "Pan-India immersive technology: projection mapping, AR/VR, digital museums, animation and event tech — produced in Ahmedabad, delivered nationwide.",
    metaTitle: "Best Immersive Technology Studio in India | WildChild Studios",
    metaDescription:
      "WildChild Studios is a leading immersive technology and projection mapping company in India — serving brands, government and cultural institutions nationwide from Ahmedabad.",
    keywords: [
      "immersive technology company India",
      "best projection mapping company India",
      "AR VR company India",
      "event technology company India",
      "digital museum solutions India",
      "creative technology company India",
      "holographic projection India"
    ],
    overview: [
      "Searching for the best immersive technology studio in India? WildChild Studios combines creative direction with deep technical craft — projection mapping, AR/VR, museums and film.",
      "We produce in Ahmedabad and install across India, giving you one accountable partner for national campaigns and touring experiences."
    ],
    highlights: [
      "Pan-India project delivery",
      "Nine immersive technologies mastered",
      "Government and enterprise experience",
      "USA office for international coordination"
    ]
  }
];

export function getLocationHub(slug: string): LocationHub | undefined {
  return locationHubs.find((l) => l.slug === slug);
}
