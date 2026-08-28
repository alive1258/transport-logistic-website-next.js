"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "How is shipping priced?",
    a: "Road freight is priced per shipment based on weight, distance, and service level. Business and Enterprise plans unlock volume discounts across all service types.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes — you can upgrade, downgrade, or cancel your plan at any time with no long-term lock-in.",
  },
  {
    q: "Do you offer combined freight services?",
    a: "Absolutely. Many clients combine road, air, and ocean freight with warehousing under a single Business or Enterprise contract.",
  },
  {
    q: "Is there a minimum shipment volume?",
    a: "No minimum on the Starter plan. Business and Enterprise pricing is tailored once we understand your typical shipping volume.",
  },
  {
    q: "How do I get a custom Enterprise quote?",
    a: "Reach out through our contact form or call our sales line — we'll schedule a call to scope your requirements and SLA.",
  },
];

const ServiceFaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Pricing FAQs
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Questions About Our Services & Pricing
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-brand-900/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-brand-900">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={14} />
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-brand-900/60">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaqSection;
