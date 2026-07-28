// Technology catalogue. Each entry powers /technologies and /technologies/[slug]
// with dedicated SEO metadata.

export type Technology = {
  slug: string;
  name: string;
  short: string;
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
    metaTitle: "3D Projection Mapping Company in India | WildChild Studios",
    metaDescription:
      "Award-winning 3D projection mapping services for buildings, stages, products and events across India. Custom content, precise warping and end-to-end execution by WildChild Studios.",
    keywords: [
      "3D projection mapping company India",
      "building projection mapping",
      "projection mapping services",
      "event projection mapping",
      "stage mapping"
    ],
    overview:
      "3D projection mapping transforms any irregular surface — a façade, a stage set, a product or a scale model — into a dynamic display. We align custom-animated content precisely to the geometry of your canvas so light, depth and motion appear to belong to the object itself.",
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
    metaTitle: "Virtual Reality (VR) Development Company | WildChild Studios",
    metaDescription:
      "Custom virtual reality experiences and VR app development for training, tourism, museums and brand activations. Immersive, interactive 3D worlds built by WildChild Studios, India.",
    keywords: [
      "virtual reality studio India",
      "VR development company",
      "immersive VR experience",
      "VR training simulation"
    ],
    overview:
      "Virtual reality places your audience inside a computer-generated world through head-mounted displays. We design immersive, interactive VR experiences that let people explore places, products and stories that would otherwise be impossible to visit.",
    bullets: [
      "Interactive VR experiences & walkthroughs",
      "Training and simulation modules",
      "360° virtual tours",
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
    metaTitle: "Augmented Reality (AR) Company in India | WildChild Studios",
    metaDescription:
      "Augmented reality app development and AR experiences for products, exhibitions and marketing. Bring the non-existent to life on any device with WildChild Studios.",
    keywords: [
      "augmented reality company India",
      "AR app development",
      "marker based AR",
      "AR marketing experience"
    ],
    overview:
      "Augmented reality layers interactive digital content over the physical world through handheld and wearable devices. We build AR experiences that let audiences see, rotate and explore products and stories that don't yet exist in front of them.",
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
    metaTitle: "LIDAR 3D Scanning Services | WildChild Studios",
    metaDescription:
      "Professional LIDAR and 3D scanning services to capture accurate point clouds and 3D models of objects, sites and heritage structures. Fast, precise reality capture by WildChild Studios.",
    keywords: [
      "LIDAR scanning services",
      "3D laser scanning India",
      "reality capture",
      "point cloud modelling"
    ],
    overview:
      "LIDAR scanning measures distance with laser precision to reconstruct real-world objects and environments as accurate 3D models. It saves days of manual measurement and delivers a reliable digital twin for design, mapping and preservation.",
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
    metaTitle: "Motion Capture Services in India | WildChild Studios",
    metaDescription:
      "Accurate motion capture services that translate real human and object movement onto CG characters for film, games and immersive content. Delivered by WildChild Studios.",
    keywords: [
      "motion capture services India",
      "mocap studio",
      "performance capture",
      "CG character animation"
    ],
    overview:
      "Motion capture records real movement using precision sensors and maps it onto computer-generated characters. It is the most accurate way to bring believable, natural motion to digital humans and creatures.",
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
    metaTitle: "Interactive Projection Mapping | WildChild Studios",
    metaDescription:
      "Interactive projection mapping that responds to touch and motion — turn floors, walls and objects into engaging, playable displays. Built for events and exhibitions by WildChild Studios.",
    keywords: [
      "interactive projection mapping",
      "interactive floor projection",
      "gesture interactive display",
      "immersive exhibition"
    ],
    overview:
      "Interactive projection mapping combines projected visuals with motion and touch sensing, so surfaces react to the people around them. Common objects and empty floors become responsive, playable displays that draw crowds and hold attention.",
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
    metaTitle: "3D Stereoscopic Film Production | WildChild Studios",
    metaDescription:
      "3D stereoscopic film production that stimulates natural depth perception for immersive theatre and dome experiences. Concept to screen by WildChild Studios.",
    keywords: [
      "3D stereoscopic film",
      "stereoscopic 3D production",
      "immersive film India",
      "dome film"
    ],
    overview:
      "3D stereoscopic film recreates the way human eyes perceive depth, rendering each scene in true three dimensions. The result is an immersive picture that reaches out from the screen and pulls the audience in.",
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
    metaTitle: "Holographic Projection & Hologram Displays | WildChild Studios",
    metaDescription:
      "Holographic projection and hologram display solutions that make products, presenters and stories appear in mid-air. Show-stopping installations for events and exhibitions by WildChild Studios.",
    keywords: [
      "holographic projection",
      "hologram display",
      "3D hologram",
      "holographic showcase"
    ],
    overview:
      "Holographic projection blends real space with computer-generated imagery to create visuals that appear to float in mid-air. It is a show-stopping way to reveal products, presenters and stories.",
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
    metaTitle: "Interactive Touch Kiosk Solutions | WildChild Studios",
    metaDescription:
      "Interactive touch kiosk design and development for information, wayfinding and engagement. Custom software and content that turns visitors into participants — by WildChild Studios.",
    keywords: [
      "interactive touch kiosk",
      "information kiosk solution",
      "digital kiosk India",
      "wayfinding kiosk"
    ],
    overview:
      "Touch kiosks put information and interaction directly in your visitors' hands. We design engaging kiosk software and content that informs, guides and gathers input while giving people a memorable, hands-on experience.",
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
