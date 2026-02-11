import { motion } from "framer-motion";
import {
    Cpu,
    Zap,
    Network,
    Bot,
    Workflow
} from "lucide-react";
import aiVideo from "@/assets/AI-Video.mp4";

const aiSteps = [
    {
        id: 1,
        title: "Automate",
        description: "Automate repetitive, high-volume tasks such as data entry, eligibility verification, and claim status checks. By deploying intelligent bots, we eliminate manual errors and free up human talent for complex decision-making.",
        icon: Bot,
        letter: "A"
    },
    {
        id: 2,
        title: "Integrate",
        description: "Integrate seamlessly with your existing EHR and practice management systems. Our AI layer acts as a connective tissue, synchronizing data across platforms in real-time to ensure a unified, up-to-date financial view.",
        icon: Network,
        letter: "I"
    },
    {
        id: 3,
        title: "Predict",
        description: "Predict claim outcomes before submission using historical data modeling. We identify potential denials with high accuracy, flagging them for correction to ensure a 'clean claim' rate that leads the industry.",
        icon: Cpu,
        letter: "P"
    },
    {
        id: 4,
        title: "Master",
        description: "Master the future of your revenue cycle—converting intelligence into executed strategy to secure predictable cash flow, maximize revenue integrity, and build a foundation for scalable growth.",
        icon: Zap,
        letter: "M"
    },
];

export const AICycleSection = () => {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-4">

                {/* Top Section: Header first, then video */}
                <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-5xl px-4 mx-auto mt-12 mb-32">
                    {/* Header Text Section */}
                    <div className="text-center space-y-6 mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#FEFAE0] font-serif tracking-wide leading-tight">
                            Automate today. Integrate&nbsp;seamlessly. <br />
                            Predict tomorrow. Master the future.
                        </h2>

                        {/* Curved Line Decoration */}
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

                    {/* Video Section - moved after header */}
                    <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-[#FEFAE0]/10 overflow-hidden">
                        <video
                            src={aiVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto scale-110 origin-top"
                        />
                    </div>
                </div>

                {/* Steps Layout */}
                <div className="space-y-32">
                    {aiSteps.map((step, index) => (
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