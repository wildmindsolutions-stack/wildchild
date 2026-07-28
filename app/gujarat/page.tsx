import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalHub from "../components/LocalHub";
import { getLocationHub } from "../lib/locations";
import { siteConfig } from "../lib/site";

const hub = getLocationHub("gujarat");
if (!hub) throw new Error("Missing location hub: gujarat");

export const metadata: Metadata = {
  title: { absolute: hub.metaTitle },
  description: hub.metaDescription,
  keywords: hub.keywords,
  alternates: { canonical: hub.href },
  openGraph: {
    title: hub.metaTitle,
    description: hub.metaDescription,
    url: `${siteConfig.siteUrl}${hub.href}`,
    locale: "en_IN"
  }
};

export default function Page() {
  const page = getLocationHub("gujarat");
  if (!page) notFound();
  return <LocalHub hub={page} />;
}
