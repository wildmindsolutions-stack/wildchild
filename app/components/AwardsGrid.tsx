import { awards } from "../lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";

function AwardCard({ title, index }: { title: string; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={(index % 2) * 70} className="award-card-cell">
      <article className="award-card group">
        <span className="award-card-shine" aria-hidden="true" />
        <span className="award-card-accent" aria-hidden="true" />

        <div className="relative flex items-center gap-4 p-5 sm:px-6">
          <span className="award-card-index">{num}</span>

          <span className="award-card-icon" aria-hidden="true">
            <Icon name="sparkles" className="h-5 w-5" />
          </span>

          <h3 className="award-card-title min-w-0 flex-1 text-sm font-semibold leading-snug text-ink sm:text-base">
            {title}
          </h3>

          <span className="award-card-check" aria-hidden="true">
            <Icon name="check" className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Reveal>
  );
}

export default function AwardsGrid() {
  return (
    <div className="awards-grid mt-10">
      {awards.map((award, i) => (
        <AwardCard key={award} title={award} index={i} />
      ))}
    </div>
  );
}
