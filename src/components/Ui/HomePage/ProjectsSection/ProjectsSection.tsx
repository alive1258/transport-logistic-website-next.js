import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    num: "01",
    title: "Port Operations",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "International Shipping",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Freight Forwarding",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Supply Chain Management",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&auto=format&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Our Projects
            </span>
            <h2 className="mt-3 max-w-lg text-3xl font-bold text-brand-900 sm:text-4xl">
              Logistics Solutions That Move{" "}
              <span className="text-brand-500">Businesses Ahead</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-900/15 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-900 hover:text-white"
          >
            View All Projects
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map(({ num, title, image }) => (
            <div
              key={num}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold text-brand-300">{num}</p>
                <p className="mt-1 font-bold text-white">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
