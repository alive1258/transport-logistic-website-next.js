import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBandProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  href?: string;
}

const CtaBand = ({
  title,
  subtitle,
  buttonText = "Get A Free Quote",
  href = "/contact",
}: CtaBandProps) => {
  return (
    <section className="bg-brand-900">
      <div className="container flex flex-col items-center justify-between gap-6 py-14 text-center lg:flex-row lg:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
          <p className="mt-2 max-w-xl text-white/60">{subtitle}</p>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          {buttonText}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CtaBand;
