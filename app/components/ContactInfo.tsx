"use client";

import { siteConfig } from "../lib/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

const whatsappUrl = `https://wa.me/${siteConfig.phoneHref.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi WildChild Studios, I want information about your services."
)}`;

const quickActions = [
  { label: "Call us", href: `tel:${siteConfig.phoneHref}`, icon: "phone" as const },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" as const },
  { label: "WhatsApp", href: whatsappUrl, icon: "touch" as const, external: true }
];

function ContactCard({
  icon,
  title,
  children,
  href,
  external,
  delay
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  delay: number;
}) {
  const inner = (
    <>
      <span className="contact-card-shine" aria-hidden="true" />
      <span className="contact-card-accent" aria-hidden="true" />
      <div className="relative flex items-start gap-4">
        <span className="contact-card-icon">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted">{title}</h3>
          <div className="mt-2 text-sm leading-relaxed text-ink-soft">{children}</div>
        </div>
        {href && (
          <span className="contact-card-arrow" aria-hidden="true">
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
    </>
  );

  return (
    <Reveal delay={delay} className="contact-card-cell">
      {href ? (
        <a
          href={href}
          className="contact-card group block"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      ) : (
        <div className="contact-card group block">{inner}</div>
      )}
    </Reveal>
  );
}

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">Talk to us</h2>
        <p className="mt-2 text-ink-muted">
          Reach out instantly — we respond quickly for projects across India.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="contact-quick-btn group"
              {...(action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon
                name={action.icon}
                className="h-4 w-4 transition-transform group-hover:scale-110"
              />
              {action.label}
            </a>
          ))}
        </div>
      </Reveal>

      <ContactCard icon="phone" title="Phone" href={`tel:${siteConfig.phoneHref}`} delay={80}>
        <span className="text-lg font-semibold text-ink">{siteConfig.phone}</span>
      </ContactCard>

      <ContactCard icon="mail" title="Email" href={`mailto:${siteConfig.email}`} delay={140}>
        <span className="font-semibold text-ink">{siteConfig.email}</span>
      </ContactCard>

      {siteConfig.offices.map((office, i) => (
        <ContactCard
          key={office.label}
          icon="map-pin"
          title={office.label}
          delay={200 + i * 70}
        >
          <address className="not-italic">
            {office.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </ContactCard>
      ))}
    </div>
  );
}
