import Link from "next/link";
import { siteConfig } from "./lib/site";
import { technologies } from "./lib/technologies";
import { services, stats, awards, work, testimonials, clients } from "./lib/content";
import Icon from "./components/Icon";
import TechIcon from "./components/TechIcon";
import CTA from "./components/CTA";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="container-wc relative grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="eyebrow">Immersive Technology Studio</span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              The best use of <span className="text-gradient">technology</span> for creative
              experiences.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              WildChild Studios is an immersive technology studio in Ahmedabad, blending 3D
              projection mapping, AR/VR, digital museums and holographic experiences into events,
              exhibitions and brand stories audiences never forget.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a project <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn-ghost">
                View our work
              </Link>
            </div>
            <p className="mt-8 text-sm text-ink-muted">
              Call us at{" "}
              <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-ink">
                {siteConfig.phone}
              </a>{" "}
              &middot; {siteConfig.email}
            </p>
          </div>

          <div className="relative animate-fade-up">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink/10 shadow-2xl shadow-ink/10 sm:aspect-square lg:aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
                alt="Immersive projection-mapped event experience by WildChild Studios"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                  Featured
                </p>
                <p className="mt-1 font-semibold text-ink">
                  30-ft projection-mapped structure — Gujarat campaign
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-ink/[0.06] bg-white">
        <div className="container-wc grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-ink sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / positioning */}
      <section className="section">
        <div className="container-wc grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 h-section">
              A team that merges technology, creativity and content.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-muted">
            A perfect mix of technical know-how, concept explorers and a never-give-up spirit — we
            are a team that delivers the best, on time and with precision. From digital museums to
            large-scale projection mapping, we turn ambitious ideas into experiences people can step
            inside.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-wc">
          <div className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-5 h-section">Experiences we create</h2>
            <p className="mt-4 text-lg text-ink-muted">
              We design and deliver end-to-end immersive experiences for spaces, events and brands.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.slug} className="card">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={service.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container-wc">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Technologies we master</span>
              <h2 className="mt-5 h-section">Nine technologies, one immersive vision</h2>
              <p className="mt-4 text-lg text-ink-muted">
                Years of hands-on work have made us one of India&apos;s most versatile creative
                technology partners.
              </p>
            </div>
            <Link href="/technologies" className="btn-ghost">
              All technologies
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <Link key={tech.slug} href={`/technologies/${tech.slug}`} className="card group block">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-white transition-colors group-hover:bg-brand-600">
                    <TechIcon slug={tech.slug} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{tech.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{tech.short}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section bg-white">
        <div className="container-wc">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Featured work</span>
              <h2 className="mt-5 h-section">Projects worth boasting about</h2>
            </div>
            <Link href="/work" className="btn-ghost">
              See all work
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="container-wc">
          <div className="max-w-2xl">
            <span className="eyebrow">Awards &amp; achievements</span>
            <h2 className="mt-5 h-section">Honoured at glorious, prestigious events</h2>
            <p className="mt-4 text-lg text-ink-muted">
              Recognition for our concepts and craft across some of the region&apos;s biggest
              showcases.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {awards.map((award) => (
              <div
                key={award}
                className="flex items-center gap-3 rounded-xl border border-ink/[0.06] bg-white px-5 py-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-ink">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-wc">
          <div className="max-w-2xl">
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-5 h-section">What our clients say</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex h-full flex-col">
                <div className="text-4xl leading-none text-brand-500">&ldquo;</div>
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/[0.06] pt-4">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-ink-muted">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section">
        <div className="container-wc">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-ink-muted">
            Trusted by leading organisations
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client}
                className="grid place-items-center rounded-xl border border-ink/[0.06] bg-white px-4 py-6 text-center text-sm font-medium text-ink-muted"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
