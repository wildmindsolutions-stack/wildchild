import Link from "next/link";
import { siteConfig } from "./lib/site";
import { technologies } from "./lib/technologies";
import { landingNav } from "./lib/landing-pages";
import { services, stats, awards, work, testimonials } from "./lib/content";
import Icon from "./components/Icon";
import TechIcon from "./components/TechIcon";
import CTA from "./components/CTA";
import Reveal from "./components/Reveal";
import ClientsCarousel from "./components/ClientsCarousel";

export default function HomePage() {
  return (
    <>
      {/* Hero — fills viewport; animates on load */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-paper sm:min-h-[calc(100svh-4.25rem)]">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
        <div className="container-wc relative grid w-full items-center gap-6 py-6 sm:gap-8 sm:py-8 lg:grid-cols-2 lg:gap-10 lg:py-10">
          <div className="animate-fade-up">
            <span className="eyebrow text-[10px] sm:text-xs">Ahmedabad · Gujarat · India</span>
            <h1 className="mt-3 font-display text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-ink sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Best projection mapping &amp; immersive technology studio in India.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-base lg:text-lg">
              <span className="sm:hidden">
                Immersive tech studio in Ahmedabad — 3D projection mapping, AR/VR, museums and
                event technology across Gujarat &amp; India.
              </span>
              <span className="hidden sm:inline">
                WildChild Studios is a leading creative studio in Ahmedabad offering 3D projection
                mapping, AR/VR technology, museum experiences, event technology, animation and video
                production for brands, government campaigns and tourism across Gujarat and India.
              </span>
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
              <Link href="/contact" className="btn-primary px-5 py-2.5 text-sm sm:px-6 sm:py-3">
                Start a project <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn-ghost px-5 py-2.5 text-sm sm:px-6 sm:py-3">
                View our work
              </Link>
            </div>
            <p className="mt-4 text-xs text-ink-muted sm:mt-5 sm:text-sm">
              Call{" "}
              <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-ink">
                {siteConfig.phone}
              </a>
              <span className="hidden sm:inline">
                {" "}
                &middot; {siteConfig.email}
              </span>
            </p>
          </div>

          <div className="relative hidden min-h-0 animate-fade-up md:flex md:items-center md:justify-center">
            <div className="relative h-[min(68svh,34rem)] w-full max-w-lg overflow-hidden rounded-3xl border border-ink/10 shadow-2xl shadow-ink/10 lg:max-w-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
                alt="Immersive projection-mapped event experience by WildChild Studios"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-olive p-3 text-white sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-100 sm:text-xs">
                  Featured
                </p>
                <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                  30-ft projection-mapped structure — Gujarat campaign
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-olive">
        <div className="container-wc grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-brand-100">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-cream">
        <div className="container-wc grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 h-section">
              A team that merges technology, creativity and content.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              A perfect mix of technical know-how, concept explorers and a never-give-up spirit — we
              are a team that delivers the best, on time and with precision. From digital museums to
              large-scale projection mapping, we turn ambitious ideas into experiences people can step
              inside.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="accent-panel p-8">
              <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                Based in Ahmedabad. Delivering immersive experiences across Gujarat &amp; India.
              </p>
              <Link href="/about" className="btn mt-8 bg-surface text-ink hover:bg-paper">
                About WildChild
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-white">
        <div className="container-wc">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-5 h-section">Experiences we create</h2>
            <p className="mt-4 text-lg text-ink-muted">
              We design and deliver end-to-end immersive experiences for spaces, events and brands.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90}>
                <div className="card h-full">
                  <div className="icon-well h-12 w-12">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-wc">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
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
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, i) => (
              <Reveal key={tech.slug} delay={(i % 3) * 90}>
                <Link href={`/technologies/${tech.slug}`} className="card group block h-full">
                  <div className="flex items-start gap-4">
                    <div className="icon-well h-12 w-12 shrink-0">
                      <TechIcon slug={tech.slug} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{tech.name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{tech.short}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container-wc">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Featured work</span>
              <h2 className="mt-5 h-section">Projects worth boasting about</h2>
            </div>
            <Link href="/work" className="btn-ghost">
              See all work
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 100} as="article">
                <div className="group h-full overflow-hidden rounded-2xl border border-ink/[0.08] bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-wc">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Awards &amp; achievements</span>
            <h2 className="mt-5 h-section">Honoured at glorious, prestigious events</h2>
            <p className="mt-4 text-lg text-ink-muted">
              Recognition for our concepts and craft across some of the region&apos;s biggest
              showcases.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {awards.map((award, i) => (
              <Reveal key={award} delay={(i % 2) * 80}>
                <div className="flex items-center gap-3 rounded-xl border border-ink/[0.08] bg-surface px-5 py-4">
                  <span className="check-dot">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink">{award}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container-wc">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-5 h-section">What our clients say</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} as="figure">
                <div className="card flex h-full flex-col">
                  <div className="font-display text-5xl leading-none text-ink">&ldquo;</div>
                  <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink/[0.08] pt-4">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-ink-muted">{t.role}</p>
                  </figcaption>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-wc">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Solutions</span>
            <h2 className="mt-5 h-section">Explore what we&apos;re best known for</h2>
            <p className="mt-4 text-lg text-ink-muted">
              From event technology to museum experiences, animation and AR/VR — find the right
              page for your project in Ahmedabad, Gujarat or anywhere in India.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {landingNav.map((item, i) => (
              <Reveal key={item.href} delay={(i % 3) * 60}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border-2 border-ink/15 bg-surface px-5 py-4 text-sm font-semibold text-ink transition hover:border-olive hover:bg-olive hover:text-white"
                >
                  {item.label}
                  <Icon name="arrow" className="h-4 w-4 shrink-0 opacity-50" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="section-green">
        <div className="container-wc flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-100">
              Immersive technology studio
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">
              Projection mapping, AR/VR &amp; experiences — crafted in green-room precision.
            </h2>
          </div>
          <Link href="/contact" className="btn shrink-0 bg-surface text-ink hover:bg-paper">
            Talk to us
          </Link>
        </div>
      </Reveal>

      <section className="section-white overflow-hidden !pt-10 sm:!pt-12">
        <div className="container-wc">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-ink">
              Trusted by leading organisations
            </p>
          </Reveal>
        </div>
        <ClientsCarousel />
      </section>

      <Reveal>
        <CTA />
      </Reveal>
    </>
  );
}
