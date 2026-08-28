import {
  Apple,
  Car,
  Factory,
  HeartPulse,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

const INDUSTRIES = [
  { icon: ShoppingBag, title: "Retail" },
  { icon: Factory, title: "Manufacturing" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Smartphone, title: "E-commerce" },
  { icon: Car, title: "Automotive" },
  { icon: Apple, title: "Food & Beverage" },
];

const IndustriesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Built for Every Kind of Supply Chain
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-brand-50/40 p-6 text-center transition hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Icon size={20} />
              </span>
              <p className="text-sm font-semibold text-brand-900">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
