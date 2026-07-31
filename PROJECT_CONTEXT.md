# WildChild Studios — Project Context (for Cursor / AI assistants)

> Keep this file at the repo root so the AI has full context before making changes.
> It describes what the business is, how this codebase relates to the live site, the stack,
> architecture, design system, SEO strategy, conventions, and guardrails. **Read it fully before editing.**

---

## 1. What this project is

### The business

**WildChild Studios** ([wildchildstudios.com](https://www.wildchildstudios.com/)) is an **immersive technology & creative solutions studio** based in Ahmedabad, Gujarat, India, with a USA office. They merge technology, creativity, and content to deliver experiences for events, exhibitions, museums, brands, and government projects.

**Core positioning:** *"The best use of technology for creative experiences."*

**What they do:** 3D projection mapping, AR/VR, digital museums, holographic projection, motion capture, LIDAR scanning, interactive projection mapping, 3D stereoscopic film, touch kiosks, and immersive event/exhibition experiences.

**Contact (canonical):**
- Phone: +91 92274 28262
- Email: info@wildchildstudios.com
- **India (Head Office):** 511 Satyamev Eminence, Science City Road, Sola, Ahmedabad 380 060, Gujarat, India
- **USA Office:** 1437 Jason CT, Carol Stream, Bartlett, Illinois 60103, USA

### This codebase = the redesign

**This repository is the redesigned WildChild Studios website**, built in Cursor. It is intended to **replace** the current live site at [https://www.wildchildstudios.com/](https://www.wildchildstudios.com/).

| | **Live site (legacy, ~2018)** | **This codebase (redesign)** |
|---|---|---|
| **URL (today)** | [wildchildstudios.com](https://www.wildchildstudios.com/) — still serving the old site | Local / staging until deployed to production |
| **Stack** | Legacy HTML/theme (copyright © 2018) | Next.js 14, TypeScript, Tailwind CSS |
| **Design** | Dated layout, mixed quality copy, template-style portfolio | Clean, modern, light theme; professional copy |
| **SEO** | Minimal structured data, weak per-page metadata | Full Metadata API, JSON-LD, sitemap, robots, tech landing pages |
| **Portfolio** | Generic template items (e.g. "Mac Sunglasses", "Open Imagination") | Real WildChild projects (Modi mapping, Vibrant Gujarat, Dholera, ABVP, Metro stall, etc.) |
| **Copy quality** | Typos and awkward phrasing ("POEPLE", "muesum", "existance") | Rewritten: professional, confident, concise |
| **Career page** | Present on live site | **Not yet built** in redesign |
| **Newsletter / RSS** | Present on live site | **Not yet built** in redesign |
| **Contact form** | Basic on live site | Built (UI only — backend not wired yet) |

When editing content, **treat the live site as the source of truth for facts** (clients, awards, offices, phone, projects) but **use this codebase's tone and structure** for how those facts are presented.

**Production domain (already set):** `https://www.wildchildstudios.com` in `app/lib/site.ts` → `siteConfig.siteUrl`.

---

## 2. Site map & content inventory

### Pages in this redesign

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, stats, positioning, services, technologies, featured work, awards, testimonials, clients, CTA |
| `/about` | Studio story, four values, stats |
| `/services` | Four service pillars: Digital Museums, Virtual Tours, Exhibitions, Events |
| `/technologies` | Grid overview of all 9 technologies |
| `/technologies/[slug]` | Dedicated SEO landing page per technology (9 static pages) |
| `/work` | Portfolio grid of real projects |
| `/contact` | Contact details, offices, form + LocalBusiness JSON-LD |

### Nine technologies (each has `/technologies/[slug]`)

1. 3D Projection Mapping
2. Virtual Reality
3. Augmented Reality
4. LIDAR Scanning
5. Motion Capture
6. Interactive Projection Mapping
7. 3D Stereoscopic Film
8. Holographic Projection
9. Touch Kiosk

### Four service pillars

1. **Digital Museums** — Museum 2.0, interactive storytelling
2. **Virtual Tours** — 360° / immersive tours to remote or impossible places
3. **Exhibitions** — Interactive product and brand displays
4. **Events** — Engaging, memorable event experiences

### Notable projects & events (from live site + redesign)

- 3D projection mapping on 30-ft Narendra Modi & India cut-out structure (Gujarat election campaign, March 2019)
- Vibrant Gujarat 2018 & 2019
- Dholera City Interactive Book Mapping
- ABVP 64th National Conference (Dec 2018)
- Ahmedabad Metro Stall
- Chalo India 2018
- Light & Sound Show on Narendra Modi
- Pradhan Mantri Awas Yojana Stall
- Gujarat Mining Department Stall

### Clients (from live site, in `lib/content.ts`)

Hindu Spiritual & Service Fair, Daxini Cha Raja, ADK Engineering & Solutions, Dev Dye Chem Industries, Dholera SIR, Bharatiya Janata Party, ABVP, Acticon Life Sciences, Chalo India 2018, Commissioner of Geology & Mining, Vibrant Gujarat 2019, Flocare, Ahmedabad Metro, Vama Communications

### Testimonials (from live site, copy cleaned up)

- Sunil Nayak, AIANA — Chalo India 2018
- Rick S., NFusionVideo
- Susan Kelly, Comcast

### Live-site features not yet in redesign

- `/career` (Careers page)
- Newsletter subscribe
- RSS feeds
- Real social media URLs (placeholders in `siteConfig.social`)
- Real project photography (Unsplash placeholders still in use)

---

## 3. Tech stack

| Concern | Choice |
|---|---|
| Framework | **Next.js 14** (App Router, React Server Components) |
| Language | **TypeScript** (strict mode) |
| Styling | **Tailwind CSS 3** (config-driven design tokens) |
| Fonts | Inter, loaded via `<link>` in `app/layout.tsx` |
| SEO | Next Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD |
| Icons | Inline SVG via `app/components/Icon.tsx` (no icon library) |
| Deployment | Vercel-ready (static + RSC); GitHub: `wildmindsolutions-stack/wildchild` |

**Do NOT** introduce a UI component library (MUI, Chakra, shadcn), a CSS-in-JS runtime, Redux, or a headless CMS unless explicitly asked. Keep dependencies minimal.

---

## 4. Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server → http://localhost:3000
npm run build    # production build (run this to verify before shipping)
npm start        # serve the production build
npm run lint     # next lint
```

Always run `npm run build` after non-trivial changes to confirm the app still compiles.

---

## 5. File & folder map

```
wildchild-studios/
├── app/
│   ├── layout.tsx            # Root layout: <html>, fonts, global <Metadata>, Organization JSON-LD, Navbar + Footer
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Tailwind layers + custom component classes (.btn, .card, .eyebrow, .container-wc, etc.)
│   ├── not-found.tsx         # Custom 404
│   ├── sitemap.ts            # Auto-generated sitemap (static routes + all technology slugs)
│   ├── robots.ts             # Auto-generated robots.txt → points to sitemap
│   │
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── work/page.tsx
│   ├── contact/page.tsx      # Contact page + LocalBusiness JSON-LD
│   ├── technologies/
│   │   ├── page.tsx          # Technologies overview grid
│   │   └── [slug]/page.tsx   # Dynamic per-technology SEO landing page (9 pages via generateStaticParams)
│   │
│   ├── components/
│   │   ├── Navbar.tsx        # "use client" — sticky nav + mobile menu
│   │   ├── Footer.tsx        # Server component footer
│   │   ├── CTA.tsx           # Reusable dark call-to-action band
│   │   ├── PageHeader.tsx    # Reusable inner-page hero (eyebrow + title + description)
│   │   ├── ContactForm.tsx   # "use client" — contact form (front-end only for now)
│   │   ├── Icon.tsx          # Inline SVG icon set (keyed by name)
│   │   └── TechIcon.tsx      # Maps a technology slug → an Icon name
│   │
│   └── lib/
│       ├── site.ts           # siteConfig (name, url, SEO defaults, contact, offices, social) + mainNav
│       ├── technologies.ts   # The 9 technologies: slug, copy, per-page metaTitle/metaDescription/keywords
│       └── content.ts        # services, stats, awards, work, testimonials, clients arrays
│
├── public/                   # Static assets (add real images here before launch)
├── tailwind.config.ts        # Design tokens (colors, fonts, animations)
├── next.config.mjs           # Image remotePatterns, strict mode
├── tsconfig.json             # Strict TS, "@/*" path alias
├── README.md                 # Setup + go-live checklist
└── PROJECT_CONTEXT.md        # (this file)
```

**Single source of truth:** All copy and data live in `app/lib/*`. Pages import from there and render. To change text, edit `lib/`, not the JSX, wherever possible.

---

## 6. Design system (Tailwind tokens)

Defined in `tailwind.config.ts`. Use these tokens — do not hardcode hex values in components.

**Colors**
- `ink` `#0b0f1a` (primary text), `ink-soft` `#1a2030`, `ink-muted` `#5b6577`
- `brand` scale (indigo): `brand-50 … brand-700`; primary action = `brand-600`
- `accent` `#f43f5e` (rose) — used sparingly in gradients/highlights
- `paper` `#f7f8fb` (page background)

**Reusable component classes** (in `globals.css`):
- `.container-wc` — max-width wrapper with responsive padding
- `.btn-primary`, `.btn-ghost`, `.btn` — buttons (pill-shaped)
- `.eyebrow` — small uppercase tag above section headings
- `.card` — white rounded card with hover lift
- `.section` — vertical section padding
- `.h-section` — section heading size/weight
- `.text-gradient` — indigo→rose text gradient
- `.grid-bg` — subtle grid background texture

**Motion:** `animate-fade-up`, `animate-float`. Keep animation subtle.

**Rules**
- Mobile-first, responsive at `sm`/`lg` breakpoints.
- Rounded corners, soft shadows, generous whitespace.
- **Light theme only** for content sections. The CTA band and footer are intentionally dark.

---

## 7. SEO strategy (important — preserve this)

Every route sets its own `metadata` (title, description, keywords, canonical). Root `layout.tsx` sets sitewide defaults + title template `%s | WildChild Studios`.

**Structured data (JSON-LD):**
- `Organization` — in `layout.tsx` (sitewide)
- `LocalBusiness` — on `/contact`
- `Service` — on each `/technologies/[slug]` page

**Sitemap & robots:** `app/sitemap.ts` and `app/robots.ts`. When adding a new route, add it to `sitemap.ts`. Technology pages are added automatically from `technologies.ts`.

**Target keyword themes** (reuse naturally in titles, H1s, body copy):
- "3D projection mapping company India", "building projection mapping", "event projection mapping"
- "immersive experience studio", "AR/VR development company India"
- "digital museum solutions", "Museum 2.0"
- "holographic projection", "hologram display"
- "interactive projection mapping", "interactive kiosk"
- "motion capture services India", "LIDAR 3D scanning", "virtual tours"
- Geo modifiers: "Ahmedabad", "Gujarat", "India"

**SEO conventions when editing:**
- Exactly one `<h1>` per page.
- Every `<img>` needs a descriptive, keyword-aware `alt`.
- Keep `metaTitle` ≤ ~60 chars and `metaDescription` ~150–160 chars.
- Don't keyword-stuff; write for humans first.
- Preserve canonical URLs (`alternates.canonical`) on every page.

---

## 8. Coding conventions

- **Server components by default.** Only add `"use client"` when you need state/handlers (`Navbar.tsx`, `ContactForm.tsx`).
- **Data lives in `app/lib/`** as typed arrays/objects. Components map over them.
- Use the **`@/`** path alias for imports where helpful.
- Prefer shared classes in `globals.css` over ad-hoc utility chains.
- TypeScript is **strict** — type everything; no `any`.
- Match existing formatting (2-space indent, double quotes, semicolons on).
- Escape apostrophes in JSX text (`&apos;`) to satisfy React/lint.

---

## 9. Known TODOs / how to extend

**Before replacing the live site:**
1. ~~Set production domain in `app/lib/site.ts`~~ — done (`https://www.wildchildstudios.com`).
2. Replace Unsplash placeholder images in `lib/content.ts` and page `<img>` tags with real project photography in `public/`.
3. Wire `ContactForm.tsx` to a backend — `app/api/contact/route.ts` or a service (Resend, Formspree, EmailJS). Front-end only today.
4. Fill in real social URLs in `siteConfig.social` (live site links to Facebook; others TBD).
5. Submit `sitemap.xml` in Google Search Console after deploy.
6. Consider adding `/career` if parity with live site is needed.
7. Swap Unsplash remote images for `next/image` + local assets where possible.

**Common tasks and where to do them:**
- *Add a technology* → `technologies[]` in `lib/technologies.ts` + slug→icon in `components/TechIcon.tsx`. Page, metadata, and sitemap update automatically.
- *Add a portfolio project* → `work[]` in `lib/content.ts`.
- *Change contact / addresses* → `lib/site.ts` (`siteConfig`).
- *Add a nav link* → `mainNav` in `lib/site.ts` + create route + add to `sitemap.ts`.
- *Add a blog* (recommended for ongoing SEO) → `app/blog/` with list + `[slug]/page.tsx`, posts as MDX or `lib/posts.ts`, add routes to `sitemap.ts`.

---

## 10. Guardrails (please respect)

- Keep the **light, clean** aesthetic; don't redesign to dark or add heavy gradients everywhere.
- Don't add heavy dependencies without a clear reason.
- Don't break SEO: keep per-page metadata, JSON-LD, sitemap, and robots intact.
- Don't move copy/data out of `app/lib/` into hardcoded JSX.
- When updating copy, **preserve factual accuracy** from the live site and real business — don't invent clients, projects, or awards.
- Run `npm run build` before considering a change done.
- Preserve accessibility: semantic headings, `alt` text, labelled form fields, focus states.

---

## 11. Quick reference — brand voice & facts

**Tagline:** Immersive Technology & Creative Solutions Studio

**Positioning lines (use these, not legacy typos):**
- "The best use of technology for creative experiences."
- "We merge technology, creativity, and content."
- "A perfect mix of technology know-how, concept explorers, never-give-up spirit and hard work — we deliver the best, in time and precise."

**Team values (About page):** Technology know-how · Concept explorers · Never-give-up spirit · On time, precise

**Stats (homepage):** 10+ years · 200+ projects · 14+ clients · 9 technologies

**Reference:** Live legacy site — [https://www.wildchildstudios.com/](https://www.wildchildstudios.com/)
