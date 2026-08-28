import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import CtaBand from "@/src/components/Shared/CtaBand/CtaBand";
import ServicesDetailSection from "@/src/components/Ui/ServicesPage/ServicesDetailSection";
import IndustriesSection from "@/src/components/Ui/ServicesPage/IndustriesSection";
import ProcessSection from "@/src/components/Ui/ServicesPage/ProcessSection";
import PricingSection from "@/src/components/Ui/ServicesPage/PricingSection";
import GuaranteesSection from "@/src/components/Ui/ServicesPage/GuaranteesSection";
import ServiceFaqSection from "@/src/components/Ui/ServicesPage/ServiceFaqSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Transport Logistic's road, air, and ocean freight services plus modern warehousing — end-to-end logistics tailored to your business.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="End-to-End Logistics Solutions Tailored to You"
        subtitle="From local deliveries to global freight, we provide the services your business needs to keep moving — on time, every time."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80&auto=format&fit=crop"
        alt="Cranes loading shipping containers at a busy port"
      />

      <ServicesDetailSection />
      <IndustriesSection />
      <ProcessSection />
      <PricingSection />
      <GuaranteesSection />
      <ServiceFaqSection />

      <CtaBand
        title="Need A Custom Logistics Plan?"
        subtitle="Our team will design a shipping solution that fits your business, budget, and timeline."
      />
    </>
  );
}
