"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your email service / API route (e.g. /api/contact).
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20";

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-ink">Thank you!</h3>
        <p className="mt-2 text-sm text-ink-muted">
          Your message is ready to send. Connect this form to your email service to receive
          enquiries.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" className={inputClass} placeholder="+91 ..." />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="topic">
            Interested in
          </label>
          <select id="topic" name="topic" className={inputClass} defaultValue="">
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
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="Tell us about your project..."
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
      </button>
    </form>
  );
}
