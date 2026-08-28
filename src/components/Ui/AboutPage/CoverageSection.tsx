import Image from "next/image";
import { Building2, Globe2, Truck, Warehouse } from "lucide-react";

const COVERAGE = [
  { icon: Globe2, value: "120+", label: "Countries Served" },
  { icon: Building2, value: "35", label: "Regional Offices" },
  { icon: Truck, value: "600+", label: "Fleet Vehicles" },
  { icon: Warehouse, value: "18", label: "Distribution Centers" },
];

const CoverageSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 md:py-24">
      <Image
        src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80&auto=format&fit=crop"
        alt="Cargo aircraft at an international airport"
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/90 to-brand-900/70" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
            Global Reach
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Where We Operate
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            A network built to move goods anywhere your business needs them
            to go — backed by local teams who know every route.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {COVERAGE.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
                <Icon size={20} />
              </span>
              <p className="mt-4 text-3xl font-bold text-white">{value}</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
