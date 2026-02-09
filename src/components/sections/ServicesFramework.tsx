import { motion } from "framer-motion";

const rcmSteps = [
    {
        letter: "R",
        title: "Revenue",
        description: "Secure your financial future with our focused revenue generation strategies. We don't just process claims; we capture every billable opportunity. By minimizing leakage and optimizing coding accuracy, we ensure your practice realizes its full earning potential with every patient encounter.",
    },
    {
        letter: "C",
        title: "Cycle",
        description: "Speed and efficiency define our cycle management. We accelerate the journey from appointment to payment, streamlining workflows to reduce friction. Our proactive approach shortens claim lifecycles, reducing days in AR and ensuring a consistent, predictable flow of cash.",
    },
    {
        letter: "M",
        title: "Management",
        description: "Take command of your financial ecosystem with our strategic management. We provide comprehensive oversight, from root-cause analysis of denials to payer contract negotiations. Our expert team safeguards your compliance while driving operational excellence and profitability.",
    },
];

export const ServicesFramework = () => {
    return (
        <section className="bg-black py-24 sm:py-32 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 font-clash"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                    >
                        RCM Services
                    </motion.h2>
                </div>

                {/* Steps */}
                <div className="space-y-32">
                    {rcmSteps.map((step, index) => (
                        <motion.div
                            key={step.letter}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Big Letter */}
                            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                                <motion.span
                                    animate={{ y: ["-10px", "10px", "-10px"] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.9,
                                    }}
                                    className="text-[12rem] sm:text-[16rem] leading-none font-black text-white mix-blend-difference select-none opacity-90 font-clash"
                                >
                                    {step.letter}
                                </motion.span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-4 md:pt-0 space-y-6 text-center md:text-left">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto md:mx-0">
                                    {step.description}
                                </p>
                                <div className="w-20 h-1 bg-white/20 mt-8 rounded-full mx-auto md:mx-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
