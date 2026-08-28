import Image from "next/image";
import Link from "next/link";
import { Play, Star } from "lucide-react";

const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80&auto=format&fit=crop",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-900 pt-28 pb-20 md:pt-40 md:pb-28">
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80&auto=format&fit=crop"
        alt="Container cargo ship carrying freight across the ocean"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/65 to-brand-300/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent" />

      <div className="container relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          Smart Logistics, Stronger Connections
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
          Moving Businesses Forward,{" "}
          <span className="text-brand-400">Together</span>
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
          We deliver seamless logistics solutions worldwide, connecting
          businesses to opportunities across every mile.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Get A Free Quote
          </Link>
          <button
            type="button"
            className="flex items-center gap-3 text-sm font-semibold text-white transition hover:text-brand-300"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <Play size={16} className="ml-0.5 fill-white text-white" />
            </span>
            Watch Our Story
          </button>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
            {AVATARS.map((src, i) => (
              <span
                key={i}
                className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand-900"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              Trusted by 4.8K+ Customers
            </p>
            <div className="mt-0.5 flex items-center gap-1.5">
              <div className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-xs text-white/60">4.8 (2.8k Reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
