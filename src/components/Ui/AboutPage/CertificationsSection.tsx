import { Award, BadgeCheck, Leaf, ShieldCheck } from "lucide-react";

const CERTIFICATIONS = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Bonded",
    desc: "Every shipment is covered from pickup to final delivery.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001 Certified",
    desc: "Independently audited quality management systems.",
  },
  {
    icon: Leaf,
    title: "Carbon-Conscious Fleet",
    desc: "Investing in fuel-efficient routes and cleaner vehicles.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    desc: "Recognized by industry bodies for reliability and safety.",
  },
];

const CertificationsSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Certified & Trusted
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Standards We Never Compromise On
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-900/10 bg-white p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={22} />
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

export default CertificationsSection;
