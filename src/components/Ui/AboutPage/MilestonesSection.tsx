import { Award, Flag, Rocket, Warehouse } from "lucide-react";

const MILESTONES = [
  {
    year: "2013",
    icon: Flag,
    title: "Company Founded",
    desc: "Started as a single-truck regional carrier with a promise: never miss a delivery window.",
  },
  {
    year: "2017",
    icon: Rocket,
    title: "National Expansion",
    desc: "Grew into a full road-freight network covering every major hub in the country.",
  },
  {
    year: "2021",
    icon: Warehouse,
    title: "Warehousing Launched",
    desc: "Opened our first climate-controlled distribution centers and added air & ocean freight.",
  },
  {
    year: "2025",
    icon: Award,
    title: "Industry Recognition",
    desc: "Named a top logistics partner, now serving 120+ countries with 250+ global partners.",
  },
];

const MilestonesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Our Journey
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            A Decade of Moving Businesses Forward
          </h2>
        </div>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-7 left-0 right-0 hidden h-px bg-brand-900/10 lg:block" />
          {MILESTONES.map(({ year, icon: Icon, title, desc }) => (
            <div key={year} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
                <Icon size={22} />
              </span>
              <p className="mt-4 text-xs font-bold text-brand-500">{year}</p>
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

export default MilestonesSection;
