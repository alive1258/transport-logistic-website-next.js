import Link from "next/link";
import { ArrowRight, Plane, Ship, Truck, Warehouse } from "lucide-react";

export const SERVICES = [
  {
    icon: Truck,
    title: "Road Freight",
    desc: "Flexible and cost-effective land transport solutions across regions.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Fast and secure air shipping for urgent and time-sensitive deliveries.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "Reliable sea freight to move your business across the globe.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Safe and modern storage solutions with inventory management.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            End-to-End Logistics{" "}
            <span className="text-brand-500">Services</span> Tailored to You
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-brand-900/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <Icon size={26} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/55">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
