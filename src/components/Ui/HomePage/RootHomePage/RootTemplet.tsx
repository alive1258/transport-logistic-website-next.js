import AboutSection from "../AboutSection/AboutSection";
import BlogSection from "../BlogSection/BlogSection";
import FaqSection from "../FaqSection/FaqSection";
import HeroSection from "../HeroSection/HeroSection";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import WhyChooseSection from "../WhyChooseSection/WhyChooseSection";

const RootHomePage = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>

      <AboutSection />

      <div id="services" className="scroll-mt-[100px]">
        <ServicesSection />
      </div>

      <WhyChooseSection />

      <ProjectsSection />

      <TestimonialsSection />

      <FaqSection />

      <BlogSection />

      <NewsletterSection />
    </>
  );
};

export default RootHomePage;
