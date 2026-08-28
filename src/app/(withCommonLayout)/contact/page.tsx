import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import ContactForm from "@/src/components/Ui/ContactPage/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Transport Logistic for a freight quote, tracking help, or general logistics questions — our team replies within one business day.",
};

// TODO: same placeholders as Navbar/Footer — replace with the logistics
// company's real contact details.
const CONTACT_PHONE = "+1 (234) 567-890";
const CONTACT_EMAIL = "info@transportlog.com";
const OFFICE_ADDRESS = "830 Logistics Blvd, Chicago, IL 60601";
const OPEN_HOURS = "Mon - Fri: 07:00 - 06:00 PM";

const INFO_ITEMS = [
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}` },
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: MapPin, label: "Office", value: OFFICE_ADDRESS },
  { icon: Clock, label: "Hours", value: OPEN_HOURS },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Get Your Shipment Moving"
        subtitle="Questions about a service, a quote, or an existing shipment? Reach out and we&apos;ll get back to you within one business day."
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80&auto=format&fit=crop"
        alt="Freight truck on the highway at sunset"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Get in Touch
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-900">
                We&apos;re Here to Help
              </h2>
            </div>

            <ul className="space-y-5">
              {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-brand-900 hover:text-brand-600 transition"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-brand-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-2xl border border-brand-900/10">
              <iframe
                title="Transport Logistic office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-87.65%2C41.86%2C-87.61%2C41.90&layer=mapnik&marker=41.8781%2C-87.6298"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
