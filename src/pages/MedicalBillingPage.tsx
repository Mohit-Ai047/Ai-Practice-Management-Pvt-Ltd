import { motion } from "framer-motion";
import { MedicalCycleSection } from "@/components/sections/MedicalCycleSection";
import { MedicalContentSection } from "@/components/sections/MedicalContentSection";

const MedicalBillingPage = () => {
    return (
        <div className="bg-black min-h-screen pt-0 pb-24 text-white">
            <div className="container mx-auto px-4">

                {/* Header */}
                {/* Header removed as per user request */}
            </div>

            {/* Cyclical Animation Section */}
            <MedicalCycleSection />
            <MedicalContentSection />
        </div>
    );
};

export default MedicalBillingPage;
