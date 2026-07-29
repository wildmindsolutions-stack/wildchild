import Link from "next/link";
import { mainNav, siteConfig } from "../lib/site";
import { technologies } from "../lib/technologies";
import { landingNav } from "../lib/landing-pages";
import { locationHubs } from "../lib/locations";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  const featured = landingNav.filter((i) =>
    [
      "/projection-mapping",
      "/event-technology",
      "/ar-vr-technology",
      "/digital-museums",
      "/animation-studio",
      "/video-production",
      "/museum-experiences",
      "/creative-studio"
    ].includes(i.href)
  );

  return (
    <footer className="border-t border-ink/[0.06] bg-olive text-white/85">
      <div className="container-wc grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo size="footer" />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            India&apos;s AI-powered creative technology and immersive experience company,
            delivering projects PAN India.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {locationHubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 hover:border-white hover:text-white"
              >
                {hub.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/60 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-white">
            Technologies
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {technologies.slice(0, 5).map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/technologies/${t.slug}`}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Top solutions
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {featured.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/60 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/solutions" className="font-semibold text-white hover:text-brand-100">
                View all solutions →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Reach us</h3>
          {siteConfig.offices.map((office) => (
            <div key={office.label} className="mt-4 text-sm text-white/60">
              <p className="font-semibold text-white/90">{office.label}</p>
              {office.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
          <div className="mt-4 text-sm">
            <a href={`tel:${siteConfig.phoneHref}`} className="block text-white/80 hover:text-white">
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-white/80 hover:text-white"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold">
            {Object.entries(siteConfig.social).map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="capitalize text-white/70 transition-colors hover:text-white"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wc flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} WildChild Studios. Serving clients PAN India.</p>
          <p className="flex gap-4">
            <span className="cursor-pointer hover:text-white">Terms of Use</span>
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
