// SEO landing pages for high-intent keyword clusters.
// Each page targets: "best {searchPhrase} in Ahmedabad / Gujarat / India"

import { geoKeywords, geoTitle, geoDescription } from "./seo";
import { moreLandingPages } from "./landing-pages-more";

export type LandingPage = {
  slug: string;
  href: string;
  navLabel: string;
  eyebrow: string;
  /** Used in geo H2s & FAQs, e.g. "event technology company" */
  searchPhrase: string;
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string[];
  bullets: string[];
  related: { label: string; href: string }[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "immersive-experiences",
    href: "/immersive-experiences",
    navLabel: "Immersive Experiences",
    eyebrow: "Immersive experiences",
    searchPhrase: "immersive experiences studio",
    h1: "Best immersive experiences studio in Ahmedabad",
    lead: "Also serving Gujarat and India — projection mapping, AR/VR, holograms and interactive content for events, museums, tourism and brands.",
    metaTitle: geoTitle("Immersive Experiences Studio"),
    metaDescription: geoDescription(
      "immersive experiences studio",
      "Museum 2.0, corporate activations, tourism installations and event technology across Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "immersive experiences",
      "immersive experiences studio",
      "immersive experience company",
      "creative studio",
      "creative studio near me",
      "creative technology",
      "creative agency",
      "3d technology"
    ),
    overview: [
      "WildChild Studios builds immersive experiences that audiences can step into — not just watch. Based in Ahmedabad, we deliver projects across Gujarat and India with creative direction and serious event technology.",
      "Whether you need a museum experience package, a corporate launch, or a tourism installation, we plan the concept, craft the content and run the show."
    ],
    bullets: [
      "Concept-to-show immersive experience design",
      "Projection mapping, AR/VR and holographic storytelling",
      "Museum, tourism, education and corporate formats",
      "On-site calibration, show control and support",
      "Ahmedabad studio with pan-India delivery"
    ],
    related: [
      { label: "Event Technology", href: "/event-technology" },
      { label: "Museum Experiences", href: "/museum-experiences" },
      { label: "3D Projection Mapping", href: "/technologies/3d-projection-mapping" }
    ]
  },
  {
    slug: "event-technology",
    href: "/event-technology",
    navLabel: "Event Technology",
    eyebrow: "Event technology",
    searchPhrase: "event technology company",
    h1: "Best event technology company in Ahmedabad",
    lead: "Searching for the best event technology company in Gujarat or India too? We deliver projection mapping, stage visuals, interactive zones and live show content statewide and nationwide.",
    metaTitle: geoTitle("Event Technology Company"),
    metaDescription: geoDescription(
      "event technology company",
      "Best event tech and event company for projection mapping, AR/VR and stage visuals in Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "event technology",
      "event tech",
      "event technology company",
      "event company",
      "best event company",
      "event projection mapping",
      "creative technology",
      "corporate experiences"
    ),
    overview: [
      "As an event technology company based in Ahmedabad, we turn venues into living canvases. Our event tech stack covers projection mapping, interactive floors, holograms, kiosks and custom show content.",
      "From government campaigns to brand activations across Gujarat and India, we deliver reliable show-day execution with creative punch."
    ],
    bullets: [
      "Large-scale projection mapping for events",
      "Stage visuals, LED content and show control",
      "Interactive guest engagement zones",
      "Holographic reveals and product launches",
      "Turnkey technical crew and on-site support"
    ],
    related: [
      { label: "Corporate Experiences", href: "/corporate-experiences" },
      { label: "Government Campaigns", href: "/government-campaigns" },
      { label: "Projection Mapping", href: "/technologies/3d-projection-mapping" }
    ]
  },
  {
    slug: "creative-studio",
    href: "/creative-studio",
    navLabel: "Creative Studio",
    eyebrow: "Creative studio",
    searchPhrase: "creative studio",
    h1: "Best creative studio in Ahmedabad",
    lead: "A creative agency and creative studio for Gujarat and India — technology, storytelling and design when ordinary visuals are not enough.",
    metaTitle: geoTitle("Creative Studio"),
    metaDescription: geoDescription(
      "creative studio",
      "Creative agency near you in Ahmedabad — projection mapping, AR/VR, animation and video production across Gujarat and India."
    ),
    keywords: geoKeywords(
      "creative studio",
      "creative studio near me",
      "creative agency",
      "creative technology",
      "immersive experiences",
      "3d technology"
    ),
    overview: [
      "Looking for a creative studio near you in Ahmedabad? WildChild Studios is a creative agency built around immersive technology — not just print and social creatives.",
      "We invent concepts, produce animation and film, and deploy AR/VR and projection so brands stand out across Gujarat and India."
    ],
    bullets: [
      "Creative concept and experience design",
      "Animation, film and AI-assisted video production",
      "Immersive technology integration",
      "Brand activations and exhibition storytelling",
      "End-to-end delivery from brief to show day"
    ],
    related: [
      { label: "Animation Studio", href: "/animation-studio" },
      { label: "Video Production", href: "/video-production" },
      { label: "About WildChild", href: "/about" }
    ]
  },
  {
    slug: "animation-studio",
    href: "/animation-studio",
    navLabel: "Animation Studio",
    eyebrow: "Animation studio",
    searchPhrase: "animation studio",
    h1: "Best animation studio in Ahmedabad",
    lead: "Animation company in Ahmedabad for Gujarat and India — 3D animation, animation films and motion content for events, museums and brands.",
    metaTitle: geoTitle("Animation Studio"),
    metaDescription: geoDescription(
      "animation studio",
      "Best animation company in Ahmedabad, Gujarat and India for 3D animation, animation films and event content."
    ),
    keywords: geoKeywords(
      "animation studio in Ahmedabad",
      "animation company in Ahmedabad",
      "animation studio",
      "animation company",
      "animation film",
      "3d technology",
      "3d animation"
    ),
    overview: [
      "WildChild Studios is an animation company in Ahmedabad producing high-impact 3D animation and animation films for projection mapping, museums, education and marketing.",
      "Our animators and technologists work as one team — so every frame is built for the screen, dome, façade or headset it will live on."
    ],
    bullets: [
      "3D animation and character work",
      "Animation films for museums and events",
      "Motion graphics for stage and LED",
      "Content for projection mapping shows",
      "Education and explainer animation"
    ],
    related: [
      { label: "Video Production", href: "/video-production" },
      { label: "AI Video Production", href: "/ai-video-production" },
      { label: "Architectural Walkthrough", href: "/architectural-walkthrough" }
    ]
  },
  {
    slug: "video-production",
    href: "/video-production",
    navLabel: "Video Production",
    eyebrow: "Video production",
    searchPhrase: "video production company",
    h1: "Best video production company in Ahmedabad",
    lead: "Film development and video production for Gujarat and India — brand films, event films and immersive visual content.",
    metaTitle: geoTitle("Video Production Company"),
    metaDescription: geoDescription(
      "video production company",
      "Film development, brand films and event video production from Ahmedabad across Gujarat and India."
    ),
    keywords: geoKeywords(
      "video production",
      "video production company",
      "film development",
      "animation film",
      "video production Ahmedabad"
    ),
    overview: [
      "From film development to finished delivery, our video production team in Ahmedabad creates films for stage, museums, web and immersive installations.",
      "We handle corporate films, campaign films, educational content and show visuals for clients across Gujarat and India."
    ],
    bullets: [
      "Brand and corporate film production",
      "Event and campaign films",
      "Film development from script to screen",
      "Integration with projection and LED shows",
      "Education and tourism content films"
    ],
    related: [
      { label: "AI Video Production", href: "/ai-video-production" },
      { label: "Animation Studio", href: "/animation-studio" },
      { label: "3D Stereoscopic Film", href: "/technologies/3d-stereoscopic-film" }
    ]
  },
  {
    slug: "ai-video-production",
    href: "/ai-video-production",
    navLabel: "AI Video Production",
    eyebrow: "AI video production",
    searchPhrase: "AI video production studio",
    h1: "Best AI video production studio in Ahmedabad",
    lead: "AI video studio for Gujarat and India — faster film development with AI-assisted pipelines and full creative control.",
    metaTitle: geoTitle("AI Video Production Studio"),
    metaDescription: geoDescription(
      "AI video production studio",
      "AI video production and AI video studio services in Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "AI video production",
      "AI video studio",
      "AI video production company",
      "film development",
      "video production"
    ),
    overview: [
      "WildChild Studios runs an AI video production practice that speeds ideation, animatics and finishing while human creatives direct the story.",
      "Ideal for campaigns, social films, education modules and rapid event content across India."
    ],
    bullets: [
      "AI-assisted concepting and animatics",
      "Faster turnarounds for campaign films",
      "Hybrid AI + traditional CGI pipelines",
      "Brand-safe creative direction",
      "Delivery for events, web and exhibitions"
    ],
    related: [
      { label: "Video Production", href: "/video-production" },
      { label: "Animation Studio", href: "/animation-studio" },
      { label: "Contact Us", href: "/contact" }
    ]
  },
  {
    slug: "museum-experiences",
    href: "/museum-experiences",
    navLabel: "Museum Experiences",
    eyebrow: "Museum experiences",
    searchPhrase: "museum experiences company",
    h1: "Best museum experiences company in Ahmedabad",
    lead: "Museum Experience Packages for Gujarat and India — interactive galleries, projection, AR guides and digital museum storytelling.",
    metaTitle: geoTitle("Museum Experiences Company"),
    metaDescription: geoDescription(
      "museum experiences company",
      "Museum Experience Packages with interactive exhibits, AR/VR and projection across Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "museum experiences",
      "Museum Experience Package",
      "museum experiences company",
      "digital museum solutions",
      "Museum 2.0",
      "immersive experiences",
      "education content"
    ),
    overview: [
      "We design museum experiences that turn visitors into participants. Our Museum Experience Package can include interactive kiosks, projection mapping, holographic exhibits, AR guides and custom content.",
      "From heritage institutions to new digital museums in Gujarat and across India, we deliver Museum 2.0 storytelling end to end."
    ],
    bullets: [
      "Full Museum Experience Package design",
      "Interactive galleries and touch exhibits",
      "Projection and holographic storytelling",
      "AR/VR guided museum journeys",
      "Content, hardware planning and installation"
    ],
    related: [
      { label: "Education Content", href: "/education-content" },
      { label: "Tourism Installations", href: "/tourism-installations" },
      { label: "Digital Museums service", href: "/services" }
    ]
  },
  {
    slug: "architectural-walkthrough",
    href: "/architectural-walkthrough",
    navLabel: "Architectural Walkthrough",
    eyebrow: "Architectural walkthrough",
    searchPhrase: "architectural walkthrough company",
    h1: "Best architectural walkthrough company in Ahmedabad",
    lead: "3D architectural walkthroughs and VR previews for Gujarat and India — experience spaces before they are built.",
    metaTitle: geoTitle("Architectural Walkthrough Company"),
    metaDescription: geoDescription(
      "architectural walkthrough company",
      "Architectural walk through, VR tours and 3D visualisation in Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "architectural walkthrough",
      "architectural walk through",
      "architectural walkthrough company",
      "3D architectural visualisation",
      "VR walkthrough",
      "real estate virtual tour",
      "3d technology"
    ),
    overview: [
      "Our architectural walkthroughs help developers, architects and government projects sell the vision early — on screen, in VR or as interactive kiosk experiences.",
      "Based in Ahmedabad, we deliver walkthrough films and real-time VR for projects across Gujarat and India."
    ],
    bullets: [
      "Photoreal 3D architectural walkthroughs",
      "VR headset and WebVR previews",
      "Real-estate and smart-city presentations",
      "Interactive kiosk walkthroughs",
      "Integration with LIDAR and reality capture"
    ],
    related: [
      { label: "Virtual Reality", href: "/technologies/virtual-reality" },
      { label: "LIDAR Scanning", href: "/technologies/lidar-scanning" },
      { label: "Animation Studio", href: "/animation-studio" }
    ]
  },
  {
    slug: "government-campaigns",
    href: "/government-campaigns",
    navLabel: "Government Campaigns",
    eyebrow: "Government campaigns",
    searchPhrase: "government campaign technology company",
    h1: "Best government campaign technology company in Ahmedabad",
    lead: "Immersive technology for government campaigns across Gujarat and India — projection mapping, exhibitions and interactive public stalls.",
    metaTitle: geoTitle("Government Campaign Technology Company"),
    metaDescription: geoDescription(
      "government campaign technology company",
      "Projection mapping and immersive content for government campaigns in Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "government campaigns",
      "government campaign technology company",
      "government exhibition technology",
      "public outreach projection mapping",
      "event technology",
      "immersive experiences"
    ),
    overview: [
      "WildChild Studios has delivered high-visibility government campaign experiences — from large projection-mapped structures to interactive public stalls.",
      "We understand the precision, messaging and reliability that government and institutional campaigns demand across Gujarat and India."
    ],
    bullets: [
      "Campaign projection mapping and structures",
      "Interactive public exhibition stalls",
      "Multilingual immersive content",
      "Tourism and civic awareness installations",
      "Reliable on-ground technical execution"
    ],
    related: [
      { label: "Event Technology", href: "/event-technology" },
      { label: "Our Work", href: "/work" },
      { label: "Tourism Installations", href: "/tourism-installations" }
    ]
  },
  {
    slug: "tourism-installations",
    href: "/tourism-installations",
    navLabel: "Tourism Installations",
    eyebrow: "Tourism installations",
    searchPhrase: "tourism installations company",
    h1: "Best tourism installations company in Ahmedabad",
    lead: "Immersive tourism experiences for Gujarat and India — projection shows, virtual tours and interactive visitor centres.",
    metaTitle: geoTitle("Tourism Installations Company"),
    metaDescription: geoDescription(
      "tourism installations company",
      "Tourism installations and immersive destination experiences in Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "tourism installations",
      "tourism installations company",
      "immersive tourism experience",
      "visitor centre technology",
      "virtual tours",
      "museum experiences"
    ),
    overview: [
      "Tourism boards and destination brands use our installations to create wow moments — storytelling, interactive books, VR tours and digital museums.",
      "From Gujarat heritage narratives to pan-India tourism showcases, we design experiences visitors share."
    ],
    bullets: [
      "Destination storytelling installations",
      "Visitor centre interactives",
      "360° virtual tourism tours",
      "Projection and light experiences",
      "Multilingual visitor content"
    ],
    related: [
      { label: "Museum Experiences", href: "/museum-experiences" },
      { label: "Virtual Reality", href: "/technologies/virtual-reality" },
      { label: "Government Campaigns", href: "/government-campaigns" }
    ]
  },
  {
    slug: "education-content",
    href: "/education-content",
    navLabel: "Education Content",
    eyebrow: "Education content",
    searchPhrase: "education content studio",
    h1: "Best education content studio in Ahmedabad",
    lead: "Immersive education content for Gujarat and India — AR/VR modules, interactive exhibits, animation films and museum learning packages.",
    metaTitle: geoTitle("Education Content Studio"),
    metaDescription: geoDescription(
      "education content studio",
      "Immersive education content and AR/VR learning from Ahmedabad for institutions across Gujarat and India."
    ),
    keywords: geoKeywords(
      "education content",
      "education content studio",
      "immersive education",
      "AR VR education",
      "museum learning",
      "educational animation"
    ),
    overview: [
      "We produce education content that sticks — interactive lessons, stereoscopic films, AR overlays and museum learning journeys.",
      "Ideal for science centres, schools, skill programmes and cultural institutions across India."
    ],
    bullets: [
      "AR/VR learning modules",
      "Educational animation and films",
      "Museum learning experiences",
      "Interactive kiosk curricula",
      "Dome and large-format education films"
    ],
    related: [
      { label: "Museum Experiences", href: "/museum-experiences" },
      { label: "Animation Studio", href: "/animation-studio" },
      { label: "Augmented Reality", href: "/technologies/augmented-reality" }
    ]
  },
  {
    slug: "corporate-experiences",
    href: "/corporate-experiences",
    navLabel: "Corporate Experiences",
    eyebrow: "Corporate experiences",
    searchPhrase: "corporate experiences company",
    h1: "Best corporate experiences company in Ahmedabad",
    lead: "Brand activations and corporate experiences for Gujarat and India — product launches, immersive zones and event technology.",
    metaTitle: geoTitle("Corporate Experiences Company"),
    metaDescription: geoDescription(
      "corporate experiences company",
      "Corporate experiences and brand activations in Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "corporate experiences",
      "corporate experiences company",
      "brand activation",
      "corporate event technology",
      "product launch projection mapping",
      "immersive experiences"
    ),
    overview: [
      "Enterprises choose WildChild Studios for corporate experiences that feel premium and precise — from boardroom VR demos to stadium-scale projection.",
      "We serve brands across Ahmedabad, Gujarat and India with creative technology that converts attention into memory."
    ],
    bullets: [
      "Product launch experiences",
      "Immersive brand activation zones",
      "Corporate conference visuals",
      "AR/VR product demonstrations",
      "Holographic and interactive showcases"
    ],
    related: [
      { label: "Event Technology", href: "/event-technology" },
      { label: "Holographic Projection", href: "/technologies/holographic-projection" },
      { label: "Contact Us", href: "/contact" }
    ]
  },
  {
    slug: "ar-vr-technology",
    href: "/ar-vr-technology",
    navLabel: "AR / VR Technology",
    eyebrow: "AR & VR technology",
    searchPhrase: "AR VR technology company",
    h1: "Best AR VR technology company in Ahmedabad",
    lead: "AR technology, VR technology, mobile VR and AR and VR experiences for Gujarat and India.",
    metaTitle: geoTitle("AR VR Technology Company"),
    metaDescription: geoDescription(
      "AR VR technology company",
      "Best AR and VR, AR technology and VR technology studio in Ahmedabad, Gujarat and India — including mobile VR."
    ),
    keywords: geoKeywords(
      "AR VR technology",
      "AR VR technology company",
      "AR and VR",
      "AR technology",
      "VR technology",
      "virtual reality",
      "augmented reality",
      "mobile VR",
      "AR VR development company"
    ),
    overview: [
      "WildChild Studios is an AR VR technology partner based in Ahmedabad. We build augmented reality product experiences, virtual reality worlds, mobile VR and training simulations.",
      "From marker-based AR to room-scale VR, we deliver AR and VR projects across Gujarat and India."
    ],
    bullets: [
      "Custom AR app and WebAR experiences",
      "VR worlds, walkthroughs and training sims",
      "Mobile VR and headset deployments",
      "AR for retail, print and exhibitions",
      "Integration with museums and events"
    ],
    related: [
      { label: "Virtual Reality", href: "/technologies/virtual-reality" },
      { label: "Augmented Reality", href: "/technologies/augmented-reality" },
      { label: "Architectural Walkthrough", href: "/architectural-walkthrough" }
    ]
  },
  ...moreLandingPages
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug);
}

export const landingNav = landingPages.map((p) => ({
  label: p.navLabel,
  href: p.href
}));
