// Central site configuration + SEO defaults.

import { geoKeywords } from "./seo";

export const siteConfig = {
  name: "WildChild Studios",
  legalName: "WildChild Studios",
  siteUrl: "https://www.wildchildstudios.com",
  tagline: "Immersive Technology & Creative Solutions Studio",
  description:
    "WildChild Studios is the best immersive technology and creative studio in Ahmedabad, Gujarat and India — specialising in 3D projection mapping, AR/VR technology, digital museums, holographic projection, animation, video production and event technology for brands, government and cultural institutions.",
  keywords: geoKeywords(
    "projection mapping",
    "3D projection mapping",
    "3D projection mapping company",
    "event technology",
    "event tech",
    "event technology company",
    "creative technology",
    "creative agency",
    "creative studio",
    "creative studio near me",
    "VR technology",
    "virtual reality",
    "AR technology",
    "augmented reality",
    "AR VR technology",
    "AR and VR",
    "mobile VR",
    "3d technology",
    "animation studio in Ahmedabad",
    "animation company in Ahmedabad",
    "animation film",
    "architectural walkthrough",
    "architectural walk through",
    "film development",
    "video production",
    "video production company",
    "AI video production",
    "AI video studio",
    "museum experiences",
    "Museum Experience Package",
    "government campaigns",
    "tourism installations",
    "education content",
    "corporate experiences",
    "immersive experiences",
    "immersive experience studio",
    "digital museum solutions",
    "holographic projection",
    "interactive projection mapping"
  ),
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
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" }
];

export type SiteConfig = typeof siteConfig;
