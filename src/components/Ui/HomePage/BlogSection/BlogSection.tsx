import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const POSTS = [
  {
    tag: "Shipping",
    date: "May 10, 2026",
    title: "Top 5 Trends in Global Logistics",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=500&q=80&auto=format&fit=crop",
  },
  {
    tag: "Technology",
    date: "May 5, 2026",
    title: "How Technology Is Changing Logistics",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=80&auto=format&fit=crop",
  },
  {
    tag: "Supply Chain",
    date: "May 1, 2026",
    title: "Building a Resilient Supply Chain",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&q=80&auto=format&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Our Blog
            </span>
            <h2 className="mt-3 max-w-lg text-3xl font-bold text-brand-900 sm:text-4xl">
              Latest News & Logistics Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-900/15 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-900 hover:text-white"
          >
            View All Posts
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map(({ tag, date, title, image }) => (
            <Link
              key={title}
              href="/blog"
              className="group overflow-hidden rounded-2xl border border-brand-900/10 bg-white transition hover:shadow-lg"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  {tag}
                </span>
              </div>
              <div className="p-6">
                <span className="flex items-center gap-1.5 text-xs text-brand-900/50">
                  <Calendar size={13} />
                  {date}
                </span>
                <h3 className="mt-3 font-bold leading-snug text-brand-900 group-hover:text-brand-600">
                  {title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Read More
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
