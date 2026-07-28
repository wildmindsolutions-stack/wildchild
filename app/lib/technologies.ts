// Technology catalogue. Each entry powers /technologies and /technologies/[slug]
// with dedicated SEO metadata (best + Ahmedabad / Gujarat / India).

import { geoKeywords, geoTitle, geoDescription } from "./seo";

export type Technology = {
  slug: string;
  name: string;
  short: string;
  /** Used for geo H2/FAQ: e.g. "3D projection mapping company" */
  searchPhrase: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string;
  bullets: string[];
  useCases: string[];
};

export const technologies: Technology[] = [
  {
    slug: "3d-projection-mapping",
    name: "3D Projection Mapping",
    short:
      "Turn buildings, stages and objects into living canvases with pixel-perfect projected visuals.",
    searchPhrase: "3D projection mapping company",
    metaTitle: geoTitle("3D Projection Mapping Company"),
    metaDescription: geoDescription(
      "3D projection mapping",
      "Award-winning projection mapping for buildings, stages, products and events — trusted as a leading projection mapping company in Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "projection mapping",
      "3D projection mapping",
      "3D projection mapping company",
      "building projection mapping",
      "projection mapping services",
      "event projection mapping",
      "stage mapping"
    ),
    overview:
      "Looking for the best 3D projection mapping company in Ahmedabad, Gujarat or India? WildChild Studios transforms any irregular surface — a façade, a stage set, a product or a scale model — into a dynamic display. We align custom-animated content precisely to the geometry of your canvas so light, depth and motion appear to belong to the object itself.",
    bullets: [
      "Building & architectural façade mapping",
      "Stage, set and event projection",
      "Product, object and scale-model mapping",
      "Custom 3D animation and content design",
      "On-site technical setup, calibration and show control"
    ],
    useCases: [
      "Launch events & inaugurations",
      "Government & cultural showcases",
      "Weddings & celebrations",
      "Brand activations"
    ]
  },
  {
    slug: "virtual-reality",
    name: "Virtual Reality",
    short:
      "Fully immersive VR worlds users can step into, explore and interact with through headsets.",
    searchPhrase: "VR technology company",
    metaTitle: geoTitle("Virtual Reality / VR Technology Company"),
    metaDescription: geoDescription(
      "VR technology",
      "Custom virtual reality, mobile VR and immersive VR experiences for training, tourism, museums and brands across India."
    ),
    keywords: geoKeywords(
      "virtual reality",
      "VR technology",
      "mobile VR",
      "virtual reality studio",
      "VR development company",
      "immersive VR experience",
      "VR training simulation"
    ),
    overview:
      "WildChild Studios is among the best VR technology partners in Ahmedabad, Gujarat and India. Virtual reality places your audience inside a computer-generated world through head-mounted displays and mobile VR. We design immersive, interactive VR experiences that let people explore places, products and stories that would otherwise be impossible to visit.",
    bullets: [
      "Interactive VR experiences & walkthroughs",
      "Training and simulation modules",
      "360° virtual tours & mobile VR",
      "Room-scale and seated VR",
      "Multi-user immersive environments"
    ],
    useCases: [
      "Corporate training & safety drills",
      "Real-estate & architectural previews",
      "Tourism & heritage",
      "Product demonstrations"
    ]
  },
  {
    slug: "augmented-reality",
    name: "Augmented Reality",
    short:
      "Overlay interactive digital content onto the real world through phones, tablets and AR displays.",
    searchPhrase: "AR technology company",
    metaTitle: geoTitle("Augmented Reality / AR Technology Company"),
    metaDescription: geoDescription(
      "AR technology",
      "Augmented reality app development and AR experiences for products, exhibitions and marketing across Ahmedabad, Gujarat and India."
    ),
    keywords: geoKeywords(
      "augmented reality",
      "AR technology",
      "AR app development",
      "marker based AR",
      "AR marketing experience",
      "augmented reality company"
    ),
    overview:
      "As a leading AR technology company in Ahmedabad, Gujarat and India, we build augmented reality experiences that let audiences see, rotate and explore products and stories layered over the real world — on phones, tablets and AR displays.",
    bullets: [
      "Marker-based and markerless AR",
      "AR product visualisation",
      "Interactive AR marketing campaigns",
      "AR for print, packaging and catalogues",
      "WebAR — no app download required"
    ],
    useCases: [
      "Retail & product launches",
      "Exhibitions & trade shows",
      "Education & training",
      "Print-to-digital campaigns"
    ]
  },
  {
    slug: "lidar-scanning",
    name: "LIDAR Scanning",
    short:
      "High-accuracy laser scanning that captures real-world objects and spaces as precise 3D models.",
    searchPhrase: "LIDAR scanning company",
    metaTitle: geoTitle("LIDAR 3D Scanning Services"),
    metaDescription: geoDescription(
      "LIDAR scanning",
      "Professional LIDAR and 3D scanning services for point clouds, digital twins and heritage documentation."
    ),
    keywords: geoKeywords(
      "LIDAR scanning",
      "LIDAR scanning services",
      "3D laser scanning",
      "reality capture",
      "point cloud modelling",
      "3d technology"
    ),
    overview:
      "LIDAR scanning measures distance with laser precision to reconstruct real-world objects and environments as accurate 3D models. Delivered from Ahmedabad for projects across Gujarat and India, it saves days of manual measurement and creates reliable digital twins.",
    bullets: [
      "High-resolution 3D reality capture",
      "Point-cloud to mesh conversion",
      "Heritage & site documentation",
      "As-built and survey modelling",
      "Digital-twin creation"
    ],
    useCases: [
      "Heritage preservation",
      "Architecture & engineering",
      "Film & VFX asset capture",
      "Industrial surveying"
    ]
  },
  {
    slug: "motion-capture",
    name: "Motion Capture",
    short:
      "Sensor-driven capture of real movement, translated onto CG characters with lifelike accuracy.",
    searchPhrase: "motion capture company",
    metaTitle: geoTitle("Motion Capture Services"),
    metaDescription: geoDescription(
      "motion capture",
      "Accurate motion capture that translates real human and object movement onto CG characters for film, games and immersive content."
    ),
    keywords: geoKeywords(
      "motion capture",
      "motion capture services",
      "mocap studio",
      "performance capture",
      "CG character animation"
    ),
    overview:
      "Motion capture records real movement using precision sensors and maps it onto computer-generated characters. WildChild Studios delivers mocap services from Ahmedabad for film, games and immersive projects across India.",
    bullets: [
      "Full-body and object motion capture",
      "Real-time performance visualisation",
      "Clean-up and retargeting to CG rigs",
      "Character animation delivery",
      "Integration with VR/AR pipelines"
    ],
    useCases: [
      "Film & animation",
      "Games & interactive media",
      "Immersive characters",
      "Sports & biomechanics"
    ]
  },
  {
    slug: "interactive-projection-mapping",
    name: "Interactive Projection Mapping",
    short:
      "Projected surfaces that respond to touch and movement, turning any wall or floor into a playable display.",
    searchPhrase: "interactive projection mapping company",
    metaTitle: geoTitle("Interactive Projection Mapping Company"),
    metaDescription: geoDescription(
      "interactive projection mapping",
      "Touch- and motion-responsive projection mapping for floors, walls and objects at events and exhibitions."
    ),
    keywords: geoKeywords(
      "interactive projection mapping",
      "interactive floor projection",
      "gesture interactive display",
      "immersive exhibition",
      "projection mapping"
    ),
    overview:
      "Interactive projection mapping combines projected visuals with motion and touch sensing. As a top interactive projection mapping company in Ahmedabad, Gujarat and India, we turn floors and walls into responsive, playable displays.",
    bullets: [
      "Touch- and gesture-responsive visuals",
      "Interactive floors and walls",
      "Sensor and camera-based tracking",
      "Games and engagement zones",
      "Custom interactive content"
    ],
    useCases: [
      "Exhibitions & museums",
      "Retail & mall activations",
      "Kids' zones & entertainment",
      "Experience centres"
    ]
  },
  {
    slug: "3d-stereoscopic-film",
    name: "3D Stereoscopic Film",
    short:
      "Depth-rich stereoscopic films that render scenes in three dimensions for the human eye.",
    searchPhrase: "3D stereoscopic film company",
    metaTitle: geoTitle("3D Stereoscopic Film Production"),
    metaDescription: geoDescription(
      "3D stereoscopic film production",
      "Stereoscopic 3D films for theatres, domes, museums and immersive brand films across India."
    ),
    keywords: geoKeywords(
      "3D stereoscopic film",
      "stereoscopic 3D production",
      "immersive film",
      "dome film",
      "film development",
      "animation film"
    ),
    overview:
      "3D stereoscopic film recreates the way human eyes perceive depth. Our film development team in Ahmedabad produces immersive pictures for theatres, domes and museums across Gujarat and India.",
    bullets: [
      "Stereoscopic 3D content creation",
      "Depth grading and comfort tuning",
      "Dome and large-format delivery",
      "CG and live-action pipelines",
      "End-to-end production"
    ],
    useCases: [
      "Theatres & domes",
      "Museums & science centres",
      "Brand films",
      "Edutainment"
    ]
  },
  {
    slug: "holographic-projection",
    name: "Holographic Projection",
    short:
      "Floating, three-dimensional holographic visuals that appear to hang in mid-air.",
    searchPhrase: "holographic projection company",
    metaTitle: geoTitle("Holographic Projection & Hologram Display Company"),
    metaDescription: geoDescription(
      "holographic projection",
      "Hologram displays and holographic projection for product launches, exhibitions and stage reveals."
    ),
    keywords: geoKeywords(
      "holographic projection",
      "hologram display",
      "3D hologram",
      "holographic showcase"
    ),
    overview:
      "Holographic projection blends real space with computer-generated imagery to create visuals that appear to float in mid-air. WildChild Studios delivers hologram showcases as a leading holographic projection company in Ahmedabad, Gujarat and India.",
    bullets: [
      "Hologram fans and pyramid displays",
      "Life-size holographic presenters",
      "Holographic product showcases",
      "Custom holographic content",
      "Installation and support"
    ],
    useCases: [
      "Product launches",
      "Exhibition showcases",
      "Retail displays",
      "Stage reveals"
    ]
  },
  {
    slug: "touch-kiosk",
    name: "Touch Kiosk",
    short:
      "Interactive touch kiosks that inform, engage and collect data with an unusual, memorable experience.",
    searchPhrase: "touch kiosk company",
    metaTitle: geoTitle("Interactive Touch Kiosk Solutions"),
    metaDescription: geoDescription(
      "interactive touch kiosk",
      "Custom touch kiosk design for information, wayfinding and engagement at exhibitions, museums and retail."
    ),
    keywords: geoKeywords(
      "interactive touch kiosk",
      "information kiosk solution",
      "digital kiosk",
      "wayfinding kiosk"
    ),
    overview:
      "Touch kiosks put information and interaction directly in visitors' hands. We design engaging kiosk software and content from Ahmedabad for exhibitions, museums and corporate spaces across India.",
    bullets: [
      "Custom kiosk UI and content",
      "Information & wayfinding",
      "Lead capture and surveys",
      "Interactive catalogues",
      "Hardware integration"
    ],
    useCases: [
      "Exhibitions & events",
      "Retail & showrooms",
      "Museums & visitor centres",
      "Corporate lobbies"
    ]
  }
];

export function getTechnology(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}
