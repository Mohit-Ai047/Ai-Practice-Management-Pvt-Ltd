import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <SpecialtiesSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
