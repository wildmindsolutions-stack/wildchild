import { geoFaqs, geoLocationSections, faqJsonLd } from "../lib/seo";
import Reveal from "./Reveal";

/** Location H2s + FAQ that match Google queries like "best X in Ahmedabad/Gujarat/India". */
export default function GeoTargeting({ servicePhrase }: { servicePhrase: string }) {
  const sections = geoLocationSections(servicePhrase);
  const faqs = geoFaqs(servicePhrase);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <section className="section-white">
        <div className="container-wc">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Ahmedabad · Gujarat · India</span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Find us when you search for the best {servicePhrase.toLowerCase()}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Whether you type Ahmedabad, Gujarat or India in Google, here is how WildChild
              Studios serves each location.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {sections.map((section, i) => (
              <Reveal key={section.location} delay={i * 100} as="article">
                <div className="rounded-2xl border border-ink/[0.08] bg-paper p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    {section.location}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{section.heading}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{section.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-wc max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-ink-muted">
              Common searches people make before hiring a {servicePhrase.toLowerCase()}.
            </p>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 60}>
                <details className="group rounded-2xl border border-ink/[0.08] bg-surface p-5 open:shadow-sm">
                  <summary className="cursor-pointer list-none text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.question}
                      <span className="text-ink transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
