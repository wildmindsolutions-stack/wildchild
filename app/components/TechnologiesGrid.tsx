import Link from "next/link";
import { technologies } from "../lib/technologies";
import Icon from "./Icon";
import TechIcon from "./TechIcon";
import Reveal from "./Reveal";

function TechnologyCard({
  slug,
  name,
  short,
  index
}: {
  slug: string;
  name: string;
  short: string;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={(index % 3) * 80} className="tech-card-cell">
      <Link href={`/technologies/${slug}`} className="tech-card group block">
        <span className="tech-card-shine" aria-hidden="true" />
        <span className="tech-card-accent" aria-hidden="true" />
        <span className="tech-card-index" aria-hidden="true">
          {num}
        </span>

        <div className="relative flex items-start gap-4 p-5 sm:p-6">
          <div className="tech-card-icon shrink-0">
            <TechIcon slug={slug} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="tech-card-title font-display text-base font-semibold leading-snug text-ink sm:text-lg">
                {name}
              </h3>
              <span className="tech-card-arrow shrink-0" aria-hidden="true">
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="tech-card-desc mt-2 text-sm leading-relaxed text-ink-muted">{short}</p>
            <span className="tech-card-cta mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest">
              Learn more
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function TechnologiesGrid({ className = "mt-12" }: { className?: string }) {
  return (
    <div className={`interactive-grid ${className}`.trim()}>
      {technologies.map((tech, i) => (
        <TechnologyCard
          key={tech.slug}
          slug={tech.slug}
          name={tech.name}
          short={tech.short}
          index={i}
        />
      ))}
    </div>
  );
}
