import Link from "next/link";
import { mainNav, siteConfig } from "../lib/site";
import { technologies } from "../lib/technologies";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/[0.06] bg-ink text-white/80">
      <div className="container-wc grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent font-display font-bold text-white">
              W
            </span>
            <span className="font-display text-lg font-bold text-white">WildChild Studios</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            We merge technology, creativity and content to build immersive experiences that
            audiences remember.
          </p>
          <p className="mt-4 text-sm font-semibold text-white">
            {siteConfig.tagline}
          </p>
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
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Technologies
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {technologies.slice(0, 6).map((t) => (
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
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wc flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} WildChild Studios. All rights reserved.</p>
          <p className="flex gap-4">
            <span className="cursor-pointer hover:text-white">Terms of Use</span>
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
