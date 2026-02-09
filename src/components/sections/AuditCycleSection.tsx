import { motion } from "framer-motion";
import {
    FileCheck,
    Search,
    ScanEye,
    Wrench,
    LineChart,
} from "lucide-react";

const auditSteps = [
    {
        id: 1,
        title: "Assess",
        description: "Assess foundational integrity by meticulously evaluating clinical documentation, coding precision, and billing workflows against the latest regulatory mandates and payer-specific policies, ensuring every claim is built on a compliant and defensible foundation.",
        icon: FileCheck,
        letter: "A"
    },
    {
        id: 2,
        title: "Uncover",
        description: "Uncover hidden vulnerabilities through systematic, data-driven audits and proactive reviews. We identify subtle errors, compliance gaps, and procedural risks before they escalate into denials, penalties, or revenue loss, turning hindsight into foresight.",
        icon: Search,
        letter: "U"
    },
    {
        id: 3,
        title: "Detect",
        description: "Detect systemic patterns and control weaknesses by analyzing data across claims, departments, and time. We move beyond individual errors to identify trends and inconsistencies that signal underlying process flaws, protecting both revenue cycle health and compliance posture.",
        icon: ScanEye,
        letter: "D"
    },
    {
        id: 4,
        title: "Implement",
        description: "Implement targeted, sustainable improvements based on audit findings. We go beyond identification to execute corrective actions, deliver focused education, and embed continuous quality controls that address root causes and prevent future recurrence.",
        icon: Wrench,
        letter: "I"
    },
    {
        id: 5,
        title: "Track",
        description: "Track the efficacy of interventions with precision. By monitoring key performance indicators and compliance metrics over time, we demonstrate measurable improvement, ensure sustained adherence, and validate the return on your audit investment with clear, reportable outcomes.",
        icon: LineChart,
        letter: "T"
    },
];

export const AuditCycleSection = () => {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-4">

                {/* Top Section: Header & Curve */}
                <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-4 mx-auto mt-12 mb-32 text-center">
                    <h2
                        className="text-4xl md:text-6xl lg:text-7xl italic font-medium text-[#FEFAE0] leading-tight tracking-tight mb-8"
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                        We audit to secure, correct to scale, and ensure every claim converts
                    </h2>

                    {/* Curved Decorative Element - Separator */}
                    <div className="w-full h-16 md:h-24 relative flex items-center justify-center -mt-4">
                        <svg className="w-full h-full absolute inset-0 text-[#FEFAE0]" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path
                                d="M0,0 Q500,100 1000,0"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                                className="opacity-40"
                            />
                        </svg>
                    </div>
                </div>

                {/* Steps Layout */}
                <div className="space-y-32">
                    {auditSteps.map((step, index) => (
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
                            <div className={`flex-shrink-0 w-full md:w-1/3 flex justify-center ${index % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}>
                                <motion.span
                                    animate={{ y: ["-10px", "10px", "-10px"] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.9,
                                    }}
                                    className="text-[10rem] sm:text-[14rem] leading-none font-black text-[#FEFAE0] opacity-90 font-serif select-none"
                                >
                                    {step.letter}
                                </motion.span>
                            </div>

                            {/* Content */}
                            <div className={`flex-1 pt-4 md:pt-0 space-y-6 text-center ${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                                <div className={`flex items-center gap-4 ${index % 2 === 1 ? "md:flex-row-reverse justify-center md:justify-start" : "justify-center md:justify-start"}`}>
                                    <div className="w-12 h-12 flex items-center justify-center border border-[#FEFAE0] rounded-full bg-black">
                                        <step.icon className="w-6 h-6 text-[#FEFAE0]" />
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAE0] tracking-tight font-serif">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-[#FEFAE0]/70 leading-relaxed max-w-xl mx-auto md:mx-0 ml-auto">
                                    {step.description}
                                </p>
                                <div className={`w-20 h-1 bg-[#FEFAE0]/20 mt-8 rounded-full mx-auto ${index % 2 === 1 ? "md:ml-auto md:mr-0" : "md:ml-0"}`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
