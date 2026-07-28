"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, siteConfig } from "../lib/site";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.08] bg-surface">
      <nav className="container-wc flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <BrandLogo size="nav" />

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-paper hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink/10 bg-surface lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/[0.08] bg-surface lg:hidden">
          <ul className="container-wc flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Start a project
              </Link>
            </li>
            <li className="px-4 pt-3 text-sm text-ink-muted">{siteConfig.phone}</li>
          </ul>
        </div>
      )}
    </header>
  );
}
