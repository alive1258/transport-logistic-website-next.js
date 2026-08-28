import { ClipboardList, PackageCheck, Route, Truck } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Request a Quote",
    desc: "Tell us your requirements and get a quick, no-obligation quote.",
  },
  {
    icon: Route,
    title: "Plan & Strategize",
    desc: "We plan the most efficient route for your delivery.",
  },
  {
    icon: Truck,
    title: "Ship with Confidence",
    desc: "We handle your shipment with care and precision.",
  },
  {
    icon: PackageCheck,
    title: "Delivered Successfully",
    desc: "Your goods reach every destination, on time.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Our Work Process
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            How We Deliver Excellence
          </h2>
        </div>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-7 left-0 right-0 hidden h-px bg-brand-900/10 lg:block" />
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
                <Icon size={22} />
              </span>
              <p className="mt-4 text-xs font-bold text-brand-500">
                0{i + 1}
              </p>
              <h3 className="mt-1 font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/55">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
