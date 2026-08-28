import Image from "next/image";
import { CheckCircle2, Package, ShieldCheck, TrendingUp, Truck } from "lucide-react";

const STATS = [
  { icon: ShieldCheck, value: "250+", label: "Global Partners" },
  { icon: Package, value: "1M+", label: "Shipments Delivered" },
  { icon: TrendingUp, value: "2.5K+", label: "Happy Clients" },
  { icon: Truck, value: "99%", label: "Satisfaction Rate" },
];

const CHECKLIST = [
  "Affordable Pricing",
  "On-Time Delivery",
  "Advanced Technology",
  "Dedicated Support",
];

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            We Deliver More Than Just{" "}
            <span className="text-brand-500">Shipments</span>
          </h2>
          <p className="mt-4 max-w-lg text-brand-900/60 leading-relaxed">
            Our commitment to reliability, transparency, and customer
            satisfaction makes us the preferred logistics partner.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-brand-900">
                <CheckCircle2 size={18} className="shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-brand-900">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80&auto=format&fit=crop"
            alt="Port cranes loading shipping containers"
            fill
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover opacity-40"
          />
          <div className="relative grid grid-cols-2 gap-px bg-white/10 p-1">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col gap-3 bg-brand-900/70 p-8 backdrop-blur-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Icon size={18} />
                </span>
                <p className="text-2xl font-bold text-white sm:text-3xl">{value}</p>
                <p className="text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
