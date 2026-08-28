import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, HeadphonesIcon, Radar } from "lucide-react";

const FEATURES = [
  {
    icon: Globe2,
    title: "Global Network",
    desc: "Serving 120+ countries with trusted partners.",
  },
  {
    icon: Radar,
    title: "Real-time Tracking",
    desc: "Track your shipments anytime, anywhere.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Our team is always here to help you.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto grid h-[360px] w-full max-w-md grid-cols-2 gap-4 sm:h-[420px]">
          <div className="relative col-span-2 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80&auto=format&fit=crop"
              alt="Cargo aircraft on the tarmac"
              fill
              sizes="(min-width: 640px) 400px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80&auto=format&fit=crop"
              alt="Freight truck on the highway"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-brand-900 p-4 text-white">
            <div>
              <p className="text-3xl font-bold text-brand-400">98%</p>
              <p className="mt-1 text-xs text-white/70">
                On-Time Delivery Rate
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Reliable Logistics Solutions For A{" "}
            <span className="text-brand-500">Connected World</span>
          </h2>
          <p className="mt-4 max-w-xl text-brand-900/60 leading-relaxed">
            From local deliveries to global freight, we provide end-to-end
            logistics services that ensure your goods reach the right place,
            at the right time.
          </p>

          <ul className="mt-8 space-y-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-semibold text-brand-900">{title}</p>
                  <p className="text-sm text-brand-900/55">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Learn More About Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
