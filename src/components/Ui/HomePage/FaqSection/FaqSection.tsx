"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Plus } from "lucide-react";

const FAQS = [
  {
    q: "How can I track my shipment?",
    a: "Once your order ships, you'll receive a tracking link by email and SMS so you can follow your shipment in real time.",
  },
  {
    q: "What services do you offer?",
    a: "We offer road freight, air freight, ocean freight, and warehousing with inventory management for businesses of every size.",
  },
  {
    q: "Do you provide international shipping?",
    a: "Yes — we serve 120+ countries through a trusted network of global partners and customs specialists.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery times vary by service and destination, ranging from same-day regional freight to 2-4 weeks for ocean freight.",
  },
  {
    q: "How can I get a quote?",
    a: "Fill out our contact form or call our team directly — we'll respond with a tailored quote within one business day.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            FAQs
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="relative mt-8 hidden overflow-hidden rounded-2xl sm:block">
            <div className="relative aspect-4/3">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80&auto=format&fit=crop"
                alt="Logistics driver beside a delivery truck"
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-xl bg-brand-900 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-white/60">Have More Questions?</p>
                <p className="font-bold text-white">+1 (234) 567-890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-brand-900/10 bg-brand-50/40"
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

export default FaqSection;
