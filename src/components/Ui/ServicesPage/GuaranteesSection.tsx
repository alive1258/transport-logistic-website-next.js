import { Clock, FileText, Radar, UserCheck } from "lucide-react";

const GUARANTEES = [
  {
    icon: Clock,
    title: "On-Time Guarantee",
    desc: "98% on-time delivery, or we credit your account.",
  },
  {
    icon: Radar,
    title: "Real-Time Tracking",
    desc: "Live GPS visibility on every shipment, every mile.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Manager",
    desc: "One point of contact who knows your account inside out.",
  },
  {
    icon: FileText,
    title: "Flexible Contracts",
    desc: "Scale up, down, or cancel anytime — no lock-in required.",
  },
];

const GuaranteesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Our Guarantees
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Service You Can Count On
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-900/10 bg-brand-50/30 p-7 text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-bold text-brand-900">{title}</h3>
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

export default GuaranteesSection;
