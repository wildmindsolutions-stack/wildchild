"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Wire this up to your email service / API route (e.g. /api/contact).
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    setSent(true);
  }

  if (sent) {
    return (
      <Reveal className="contact-form-panel">
        <div className="contact-success">
          <span className="contact-success-icon">
            <Icon name="check" className="h-7 w-7" />
          </span>
          <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Thank you!</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            Your message has been received. Our team will get back to you shortly.
          </p>
          <button
            type="button"
            className="btn-ghost mt-8"
            onClick={() => setSent(false)}
          >
            Send another message
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={120} className="contact-form-panel">
      <span className="contact-form-shine" aria-hidden="true" />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
          Project enquiry
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
          Tell us about your brief
        </h3>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="contact-field">
              <label className="contact-label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="contact-input"
                placeholder="Your name"
              />
            </div>
            <div className="contact-field">
              <label className="contact-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="contact-input"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="contact-field">
              <label className="contact-label" htmlFor="phone">
                Phone
              </label>
              <input id="phone" name="phone" className="contact-input" placeholder="+91 ..." />
            </div>
            <div className="contact-field">
              <label className="contact-label" htmlFor="topic">
                Interested in
              </label>
              <select id="topic" name="topic" className="contact-input" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>3D Projection Mapping</option>
                <option>AR / VR Experience</option>
                <option>Digital Museum</option>
                <option>Exhibition / Event</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="contact-input contact-textarea"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="contact-submit btn-primary w-full sm:w-auto"
          >
            {submitting ? "Sending..." : "Send message"}
            {!submitting && <Icon name="arrow" className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </Reveal>
  );
}
