import Link from "next/link";
import { landingPages } from "../lib/landing-pages";
import Icon from "./Icon";
import Reveal from "./Reveal";

const solutionIcons: Record<string, string> = {
  "immersive-experiences": "sparkles",
  "event-technology": "sparkles",
  "creative-studio": "layers",
  "animation-studio": "film",
  "video-production": "film",
  "ai-video-production": "sparkles",
  "museum-experiences": "museum",
  "architectural-walkthrough": "cube",
  "government-campaigns": "grid",
  "tourism-installations": "compass",
  "education-content": "museum",
  "corporate-experiences": "layers",
  "ar-vr-technology": "eye",
  "projection-mapping": "cube",
  "digital-museums": "museum",
  "virtual-tours": "compass",
  exhibitions: "grid",
  "holographic-projection": "hologram",
  "mobile-vr": "eye",
  "3d-technology": "cube",
  "film-development": "film",
  "interactive-kiosk": "touch",
  "interactive-projection-mapping": "layers",
  "motion-capture": "motion",
  "lidar-scanning": "scan"
};

function SolutionCard({
  href,
  label,
  lead,
  icon,
  index
}: {
  href: string;
  label: string;
  lead: string;
  icon: string;
  index: number;
}) {
  return (
    <Reveal delay={(index % 3) * 70} className="solution-card-cell">
      <Link href={href} className="solution-card group block">
        <span className="solution-card-shine" aria-hidden="true" />
        <span className="solution-card-glow" aria-hidden="true" />

        <div className="relative flex flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="solution-card-icon">
              <Icon name={icon} className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <span className="solution-card-arrow" aria-hidden="true">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </div>

          <h3 className="solution-card-title mt-5 font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
            {label}
          </h3>

          <p className="solution-card-lead mt-2 text-sm leading-relaxed text-ink-muted">
            {lead}
          </p>

          <span className="solution-card-cta mt-5 text-xs font-semibold uppercase tracking-widest">
            Explore solution
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function SolutionsGrid({
  showViewAll = true,
  className = "mt-12"
}: {
  showViewAll?: boolean;
  className?: string;
}) {
  return (
    <>
      <div className={`interactive-grid ${className}`.trim()}>
        {landingPages.map((page, i) => (
          <SolutionCard
            key={page.href}
            href={page.href}
            label={page.navLabel}
            lead={page.lead}
            icon={solutionIcons[page.slug] ?? "cube"}
            index={i}
          />
        ))}
      </div>

      {showViewAll && (
        <Reveal delay={120} className="mt-10 text-center">
          <Link href="/solutions" className="btn-ghost">
            View all solutions
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      )}
    </>
  );
}
