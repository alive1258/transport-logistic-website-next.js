import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import CtaBand from "@/src/components/Shared/CtaBand/CtaBand";
import StorySection from "@/src/components/Ui/AboutPage/StorySection";
import MilestonesSection from "@/src/components/Ui/AboutPage/MilestonesSection";
import ValuesStatsSection from "@/src/components/Ui/AboutPage/ValuesStatsSection";
import CoverageSection from "@/src/components/Ui/AboutPage/CoverageSection";
import TeamSection from "@/src/components/Ui/AboutPage/TeamSection";
import CertificationsSection from "@/src/components/Ui/AboutPage/CertificationsSection";
import CareersSection from "@/src/components/Ui/AboutPage/CareersSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Transport Logistic — our story, our mission, and the team behind our worldwide freight and logistics network.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Moving Your Business Forward, Mile After Mile"
        subtitle="We're a team of logistics specialists dedicated to making global freight simple, transparent, and reliable for businesses of every size."
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=80&auto=format&fit=crop"
        alt="Aerial view of stacked shipping containers at a port"
      />

      <StorySection />
      <MilestonesSection />
      <ValuesStatsSection />
      <CoverageSection />
      <TeamSection />
      <CertificationsSection />
      <CareersSection />

      <CtaBand
        title="Ready to Ship With Confidence?"
        subtitle="Talk to our team today and get a tailored logistics plan for your business."
      />
    </>
  );
}
