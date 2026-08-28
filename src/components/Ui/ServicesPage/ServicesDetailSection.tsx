import { CheckCircle2, Plane, Ship, Truck, Warehouse } from "lucide-react";

const SERVICES = [
  {
    icon: Truck,
    title: "Road Freight",
    desc: "Flexible and cost-effective land transport solutions across regions, from full truckloads to last-mile delivery.",
    features: [
      "Full & partial truckload shipping",
      "Regional and cross-country routes",
      "Real-time GPS tracking",
    ],
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Fast and secure air shipping for urgent and time-sensitive deliveries, backed by a global carrier network.",
    features: [
      "Express and next-flight-out options",
      "Customs clearance handled for you",
      "Temperature-controlled cargo",
    ],
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "Reliable sea freight to move your business across the globe, with FCL and LCL options for any volume.",
    features: [
      "Full & less-than-container loads",
      "120+ port destinations",
      "Competitive transit-time options",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Safe and modern storage solutions with inventory management, pick-and-pack, and distribution support.",
    features: [
      "Climate-controlled facilities",
      "Live inventory dashboards",
      "Pick, pack & fulfillment services",
    ],
  },
];

const ServicesDetailSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            End-to-End Logistics Services Tailored to You
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, desc, features }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-900/10 bg-brand-50/30 p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Icon size={26} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/60">
                {desc}
              </p>
              <ul className="mt-5 space-y-2.5">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-brand-900/70"
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
