"use client";

import { clients } from "../lib/content";

function ClientCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex w-[9.5rem] shrink-0 flex-col items-center gap-3 sm:w-[11rem]">
      <div className="flex h-24 w-full items-center justify-center sm:h-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="line-clamp-2 min-h-[2.5rem] text-center text-xs font-medium leading-snug text-ink sm:text-sm">
        {name}
      </p>
    </div>
  );
}

export default function ClientsCarousel() {
  const loop = [...clients, ...clients];

  return (
    <div className="relative mt-10 w-full overflow-hidden">
      <div className="clients-marquee flex w-max gap-10 sm:gap-14">
        {loop.map((client, i) => (
          <ClientCard key={`${client.name}-${i}`} name={client.name} logo={client.logo} />
        ))}
      </div>
    </div>
  );
}
