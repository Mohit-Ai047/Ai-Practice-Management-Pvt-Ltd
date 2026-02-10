import { motion } from "framer-motion";
import { DollarSign, RefreshCw, ShieldCheck } from "lucide-react";

const rcmSteps = [
    {
        letter: "R",
        title: "Revenue",
        icon: DollarSign,
        description: "Secure your financial future with our focused revenue generation strategies. We don't just process claims; we capture every billable opportunity. By minimizing leakage and optimizing coding accuracy, we ensure your practice realizes its full earning potential with every patient encounter.",
    },
    {
        letter: "C",
        title: "Cycle",
        icon: RefreshCw,
        description: "Speed and efficiency define our cycle management. We accelerate the journey from appointment to payment, streamlining workflows to reduce friction. Our proactive approach shortens claim lifecycles, reducing days in AR and ensuring a consistent, predictable flow of cash.",
    },
    {
        letter: "M",
        title: "Management",
        icon: ShieldCheck,
        description: "Take command of your financial ecosystem with our strategic management. We provide comprehensive oversight, from root-cause analysis of denials to payer contract negotiations. Our expert team safeguards your compliance while driving operational excellence and profitability.",
    },
];

export const ServicesFramework = () => {
    return (
        <section className="bg-black py-24 sm:py-32 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
             <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-5xl px-4 mx-auto mt-12 mb-32">
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#FEFAE0] font-serif tracking-wide leading-tight">
                           RCM Services
                        </h2>

                        {/* Curved Line Decoration */}
                        <div className="w-full max-w-3xl mx-auto opacity-60">
                            <svg viewBox="0 0 400 40" className="w-full h-auto stroke-[#FEFAE0] fill-none" preserveAspectRatio="none">
                                <path d="M0,20 Q200,40 400,20" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
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
                                    className="text-[12rem] sm:text-[16rem] leading-none font-black text-[#FEFAE0] select-none opacity-90 font-clash"
                                >
                                    {step.letter}
                                </motion.span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-4 md:pt-0 space-y-6 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-4">
                                    <div className="p-3 rounded-full bg-[#FEFAE0]/10 border border-[#FEFAE0]/20">
                                        <step.icon className="w-8 h-8 md:w-10 md:h-10 text-[#FEFAE0]" />
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAE0] tracking-tight">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-[#FEFAE0]/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                                    {step.description}
                                </p>
                                <div className="w-20 h-1 bg-[#FEFAE0]/20 mt-8 rounded-full mx-auto md:mx-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
