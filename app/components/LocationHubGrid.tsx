import Link from "next/link";
import { locationHubs } from "../lib/locations";
import Icon from "./Icon";
import Reveal from "./Reveal";

function LocationCard({
  href,
  name,
  lead,
  index
}: {
  href: string;
  name: string;
  lead: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 90} className="location-card-cell">
      <Link href={href} className="location-card group block">
        <span className="location-card-shine" aria-hidden="true" />
        <span className="location-card-glow" aria-hidden="true" />

        <div className="relative p-6 sm:p-7">
          <span className="location-card-tag">Location hub</span>
          <h3 className="location-card-title mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
            Best in {name}
          </h3>
          <p className="location-card-lead mt-3 text-sm leading-relaxed text-white/75">{lead}</p>
          <span className="location-card-cta mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70">
            Explore {name}
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function LocationHubGrid({ className = "mt-8" }: { className?: string }) {
  return (
    <div className={`location-hub-grid ${className}`.trim()}>
      {locationHubs.map((hub, i) => (
        <LocationCard
          key={hub.href}
          href={hub.href}
          name={hub.name}
          lead={hub.lead}
          index={i}
        />
      ))}
    </div>
  );
}
