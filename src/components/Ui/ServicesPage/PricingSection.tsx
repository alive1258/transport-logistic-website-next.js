import Link from "next/link";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "$4.99",
    unit: "/ shipment",
    desc: "Pay-as-you-go shipping for small businesses and occasional freight.",
    features: [
      "Road freight only",
      "Standard tracking",
      "Email support",
      "No monthly commitment",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "$299",
    unit: "/ month",
    desc: "Volume pricing and priority handling for growing businesses.",
    features: [
      "Road, air & ocean freight",
      "Real-time GPS tracking",
      "Priority phone & chat support",
      "Volume discounts",
      "Dedicated account manager",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "pricing",
    desc: "Tailored contracts and infrastructure for high-volume shippers.",
    features: [
      "All Business features",
      "Custom SLAs & contracts",
      "API / EDI integration",
      "Dedicated warehousing",
      "24/7 dedicated support line",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-brand-900/60 leading-relaxed">
            Pay per shipment or choose a plan that scales with your volume —
            no hidden fees, ever.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-brand-600 bg-brand-900 text-white shadow-xl lg:-translate-y-4"
                  : "border-brand-900/10 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3
                className={`text-lg font-bold ${
                  plan.highlighted ? "text-white" : "text-brand-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-white/60" : "text-brand-900/55"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={
                    plan.highlighted ? "text-white/60" : "text-brand-900/50"
                  }
                >
                  {plan.unit}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-brand-400" : "text-brand-500"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-white/80" : "text-brand-900/70"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-brand-500 text-white hover:bg-brand-400"
                    : "bg-brand-900 text-white hover:bg-brand-800"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
