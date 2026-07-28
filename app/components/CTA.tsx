import Link from "next/link";
import { siteConfig } from "../lib/site";

export default function CTA() {
  return (
    <section className="section">
      <div className="container-wc">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build the best use of technology for your next experience.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Tell us about your event, exhibition or space. We&apos;ll bring the concept,
              technology and craft to make it unforgettable.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn border border-white/20 text-white hover:border-white">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
