import { BadgeDollarSign, Clock, Cpu, LifeBuoy } from "lucide-react";

const VALUES = [
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Transparent rates with no hidden fees on any shipment.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "98% of shipments arrive on or ahead of schedule.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    desc: "Real-time tracking and route optimization built in.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    desc: "A real person is always available, day or night.",
  },
];

const STATS = [
  { value: "250+", label: "Global Partners" },
  { value: "1M+", label: "Shipments Delivered" },
  { value: "2.5K+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction Rate" },
];

const ValuesStatsSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            The Values That Guide Every Shipment
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-900/10 bg-white p-7 text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/55">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl bg-brand-900 p-8 sm:grid-cols-4 md:p-10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesStatsSection;
