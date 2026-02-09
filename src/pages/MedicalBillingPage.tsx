import { motion } from "framer-motion";
import { MedicalCycleSection } from "@/components/sections/MedicalCycleSection";
import { MedicalContentSection } from "@/components/sections/MedicalContentSection";

const MedicalBillingPage = () => {
    return (
        <div className="bg-black min-h-screen pt-24 pb-24 text-white">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold font-clash mb-6 tracking-tight"
                    >
                        Transform Your Medical Billing<br className="hidden md:block" /> Experience Today
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block"
                    >
                        <h2 className="text-xl md:text-2xl font-light italic text-white/80 border-b border-white/20 pb-2">
                            What if you could transform the way you handle medical billing—today?
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Cyclical Animation Section */}
            <MedicalCycleSection />
            <MedicalContentSection />
        </div>
    );
};

export default MedicalBillingPage;
