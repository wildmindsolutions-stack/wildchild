import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";
import { technologies } from "./lib/technologies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about", "/technologies", "/services", "/work", "/contact"].map(
    (path) => ({
      url: `${siteConfig.siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8
    })
  );

  const techRoutes = technologies.map((t) => ({
    url: `${siteConfig.siteUrl}/technologies/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...techRoutes];
}
