import Image from "next/image";
import { Target, Eye } from "lucide-react";

const StorySection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop"
            alt="Warehouse team managing inventory"
            fill
            sizes="(min-width: 1024px) 540px, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Built On Trust, Driven By{" "}
            <span className="text-brand-500">Precision</span>
          </h2>
          <p className="mt-4 leading-relaxed text-brand-900/60">
            For over a decade, Transport Logistic has helped businesses of
            every size move goods across town and across the globe. What
            started as a single-truck operation has grown into a full-service
            network spanning road, air, ocean, and warehousing — without ever
            losing sight of the reliability our first customers relied on.
          </p>
          <p className="mt-4 leading-relaxed text-brand-900/60">
            Today, our team of dispatchers, drivers, and supply-chain
            specialists works around the clock so your shipments arrive
            exactly when and where they're needed.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-900/10 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Target size={18} />
              </span>
              <p className="mt-3 font-bold text-brand-900">Our Mission</p>
              <p className="mt-1 text-sm text-brand-900/55">
                Move every shipment with speed, care, and full visibility.
              </p>
            </div>
            <div className="rounded-xl border border-brand-900/10 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Eye size={18} />
              </span>
              <p className="mt-3 font-bold text-brand-900">Our Vision</p>
              <p className="mt-1 text-sm text-brand-900/55">
                Be the most trusted logistics partner for growing businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
