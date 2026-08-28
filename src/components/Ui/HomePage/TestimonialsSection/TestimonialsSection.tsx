import Image from "next/image";
import { Quote, Star } from "lucide-react";

const STATS = [
  { value: "250+", label: "Worldwide Branches" },
  { value: "10M+", label: "Tons of Goods Moved" },
  { value: "2.5K+", label: "Satisfied Customers" },
  { value: "99%", label: "Successful Deliveries" },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-10 rounded-3xl bg-brand-900 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop"
              alt="Logistics operations manager"
              fill
              sizes="(min-width: 1024px) 360px, 90vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              Client Feedback
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              What Our Clients Say About Us
            </h2>
            <Quote className="mt-6 text-brand-500" size={32} />
            <p className="mt-4 max-w-xl leading-relaxed text-white/70">
              Transport Logistic has transformed our supply chain. Their
              professionalism, real-time tracking, and support make them our
              go-to logistics partner.
            </p>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="font-bold text-white">Brooklyn Simmons</p>
                <p className="text-sm text-white/50">Operations Manager</p>
              </div>
              <div className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-brand-900 sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-brand-900/55 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
