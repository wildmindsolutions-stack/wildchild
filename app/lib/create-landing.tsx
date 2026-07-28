import type { Metadata } from "next";
import { getLandingPage } from "../lib/landing-pages";
import SeoLanding from "../components/SeoLanding";
import { siteConfig } from "../lib/site";

function pageMeta(slug: string): Metadata {
  const page = getLandingPage(slug)!;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: page.href },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteConfig.siteUrl}${page.href}`,
      type: "website",
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription
    }
  };
}

export function createLandingExports(slug: string) {
  const page = getLandingPage(slug)!;
  return {
    metadata: pageMeta(slug),
    Page: function LandingRoutePage() {
      return <SeoLanding page={page} />;
    }
  };
}
