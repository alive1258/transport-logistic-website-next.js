"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

const NewsletterSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-brand-900">
      <div className="container flex flex-col items-center justify-between gap-8 py-14 lg:flex-row">
        <div className="flex items-center gap-4 text-center lg:text-left">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white sm:flex">
            <Mail size={22} />
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              Subscribe Newsletter
            </span>
            <h3 className="mt-1 text-2xl font-bold text-white">
              Stay Updated With Our Latest Insights
            </h3>
          </div>
        </div>

        {submitted ? (
          <p className="text-sm font-medium text-brand-300">
            Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Subscribe
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
