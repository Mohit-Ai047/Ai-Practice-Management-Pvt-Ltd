import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { RCMCycleSection } from "@/components/sections/RCMCycleSection";

const HomePage = () => {
  return (
    <div className="dark bg-background min-h-screen">
      <HeroSection />
      <MissionSection />
      <RCMCycleSection />
    </div>
  );
};

export default HomePage;
