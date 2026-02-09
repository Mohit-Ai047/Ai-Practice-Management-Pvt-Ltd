import { DenialCycleSection } from "@/components/sections/DenialCycleSection";
import { DenialContentSection } from "@/components/sections/DenialContentSection";

const DenialManagementPage = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <DenialCycleSection />
            <DenialContentSection />
        </div>
    );
};

export default DenialManagementPage;
