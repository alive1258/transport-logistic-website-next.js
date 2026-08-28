import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PERKS = [
  "Competitive pay & benefits",
  "Health & wellness coverage",
  "Career growth & training",
  "A team that has your back",
];

const CareersSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 aspect-4/3 overflow-hidden rounded-3xl lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=900&q=80&auto=format&fit=crop"
            alt="Transport Logistic team member at work"
            fill
            sizes="(min-width: 1024px) 540px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Careers
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Join The Team Moving The World Forward
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-brand-900/60">
            We're always looking for drivers, dispatchers, and logistics
            specialists who care about doing the job right. Build your
            career with a company that keeps its promises.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PERKS.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-2.5 text-sm font-medium text-brand-900"
              >
                <CheckCircle2 size={18} className="shrink-0 text-brand-500" />
                {perk}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            View Open Positions
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
