import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TEAM = [
  {
    name: "Michael Brown",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Sophia Miller",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "David Wilson",
    role: "Logistics Manager",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Emma Taylor",
    role: "Customer Support",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Meet the Experts Behind Our Success
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(({ name, role, image }) => (
            <div
              key={name}
              className="overflow-hidden rounded-2xl border border-brand-900/10 bg-white text-center transition hover:shadow-lg"
            >
              <div className="relative aspect-4/5">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 260px, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-brand-900">{name}</p>
                <p className="text-sm text-brand-900/55">{role}</p>
                <div className="mt-3 flex justify-center gap-2">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social link"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white"
                    >
                      <Icon size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
