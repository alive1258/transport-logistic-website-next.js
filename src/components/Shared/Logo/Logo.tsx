import { Truck } from "lucide-react";

/* ================= LOGO MARK ================= */
/* Truck-in-circle glyph — reused as-is on both light (Navbar) and dark
   (Footer) backgrounds since the circle carries its own brand fill. */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center rounded-full bg-brand-600 text-white ${className}`}
  >
    <Truck className="h-[55%] w-[55%]" strokeWidth={2.25} />
  </span>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-7 h-7", text: "text-base" },
  md: { icon: "w-9 h-9", text: "text-lg" },
  lg: { icon: "w-11 h-11", text: "text-xl" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span
        className={`flex flex-col leading-none font-bold tracking-tight whitespace-nowrap ${text} ${
          variant === "dark" ? "text-brand-900" : "text-white"
        }`}
      >
        transport
        <span className="text-brand-500">logistic</span>
      </span>
    </span>
  );
};

export default Logo;
