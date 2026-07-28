import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";
import { technologies } from "./lib/technologies";
import { landingPages } from "./lib/landing-pages";
import { locationHubs } from "./lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/technologies",
    "/services",
    "/work",
    "/contact",
    "/solutions"
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/solutions" ? 0.9 : 0.8
  }));

  const landingRoutes = landingPages.map((p) => ({
    url: `${siteConfig.siteUrl}${p.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85
  }));

  const locationRoutes = locationHubs.map((l) => ({
    url: `${siteConfig.siteUrl}${l.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  const techRoutes = technologies.map((t) => ({
    url: `${siteConfig.siteUrl}/technologies/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...locationRoutes, ...landingRoutes, ...techRoutes];
}
