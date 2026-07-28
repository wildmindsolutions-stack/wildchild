import Link from "next/link";
import { siteConfig } from "../lib/site";

export default function CTA() {
  return (
    <section className="section-cream">
      <div className="container-wc">
        <div className="accent-panel relative overflow-hidden px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <p className="eyebrow-soft mx-auto bg-white/15 text-white">Start a project</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build the best use of technology for your next experience.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Tell us about your event, exhibition or space. We&apos;ll bring the concept,
              technology and craft to make it unforgettable.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn bg-surface text-ink hover:bg-paper">
                Start a project
              </Link>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="btn border-2 border-white/50 text-white hover:border-white hover:bg-white/10"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
