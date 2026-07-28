"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, siteConfig } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.06] bg-paper/80 backdrop-blur-md">
      <nav className="container-wc flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="WildChild Studios home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent text-white font-display font-bold">
            W
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            WildChild<span className="text-brand-600"> Studios</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-white hover:text-brand-600"
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
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink/10 lg:hidden"
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
        <div className="border-t border-ink/[0.06] bg-paper lg:hidden">
          <ul className="container-wc flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-white hover:text-brand-600"
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
