// Central site configuration + SEO defaults.
// Update siteUrl to the production domain before deploying.

export const siteConfig = {
  name: "WildChild Studios",
  legalName: "WildChild Studios",
  siteUrl: "https://www.wildchildstudios.com",
  tagline: "Immersive Technology & Creative Solutions Studio",
  description:
    "WildChild Studios is an immersive technology studio in Ahmedabad, India, specialising in 3D projection mapping, AR/VR, digital museums, holographic projection and interactive experiences for events, exhibitions and brands.",
  keywords: [
    "3D projection mapping company India",
    "projection mapping services",
    "immersive experience studio",
    "AR VR development company India",
    "digital museum solutions",
    "Museum 2.0",
    "holographic projection",
    "interactive projection mapping",
    "augmented reality company Ahmedabad",
    "virtual reality studio Gujarat",
    "motion capture services India",
    "LIDAR 3D scanning",
    "interactive kiosk",
    "exhibition technology solutions",
    "event projection mapping"
  ],
  email: "info@wildchildstudios.com",
  phone: "+91 92274 28262",
  phoneHref: "+919227428262",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/"
  },
  offices: [
    {
      label: "Head Office — India",
      lines: [
        "511 Satyamev Eminence",
        "Science City Road, Sola",
        "Ahmedabad 380 060, Gujarat, India"
      ]
    },
    {
      label: "USA Office",
      lines: ["1437 Jason CT", "Carol Stream", "Bartlett, Illinois 60103, USA"]
    }
  ]
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Technologies", href: "/technologies" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" }
];

export type SiteConfig = typeof siteConfig;
