import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useAnimationFrame, AnimatePresence } from "framer-motion";
import {
    ClipboardCheck,
    ShieldCheck,
    Send,
    DollarSign,
    AlertCircle,
    Phone,
    BarChart,
    Hand,
} from "lucide-react";
import logo from "@/assets/bg-remove.png";

const rcmSteps = [
    { id: 1, title: "Patient Pre-Authorization", icon: ClipboardCheck, description: "We secure necessary authorizations before care begins, preventing downstream delays and ensuring services are covered." },
    { id: 2, title: "Eligibility & Benefits Verification", icon: ShieldCheck, description: "We verify patient benefits and specific coverage details upfront to eliminate preventable front-end denials." },
    { id: 3, title: "Claims Submission", icon: Send, description: "Our team scrubs and submits clean, error-free claims instantly, ensuring faster adjudication and payment." },
    { id: 4, title: "Payment Posting", icon: DollarSign, description: "We provide precise reconciliation of all payments and adjustments, ensuring total financial transparency." },
    { id: 5, title: "Denial Management", icon: AlertCircle, description: "We systematically analyze, correct, and appeal denied claims to recover maximum revenue for your practice." },
    { id: 6, title: "AR Follow-Up", icon: Phone, description: "Our proactive follow-up on aging claims significantly reduces days in AR and accelerates cash flow." },
    { id: 7, title: "Reporting", icon: BarChart, description: "Gain actionable analytics and deep insights into your practice's performance to drive strategic growth." },
];

const Card = ({ step, globalProgress, index, total }: { step: any; globalProgress: any; index: number; total: number }) => {
    // Calculate local progress (offset)
    // We add the offset (index/total) to the global progress
    const offset = index / total;

    // We need to transform the cycling [0, infinity] globalProgress into a [0, 1] local phase
    const progress = useTransform(globalProgress, (value: number) => {
        return (value + offset) % 1;
    });

    // Map progress [0,1] to visual properties
    const x = useTransform(progress, [0, 1], ["130vw", "-60vw"]);

    // Y Pattern: High (-450) -> Low (120) -> High (-450)
    // We use a 3-point keyframe approximation
    const y = useTransform(progress, [0, 0.5, 1], [-450, 120, -450]);

    // Scale: 0.9 -> 1.0 -> 0.9
    const scale = useTransform(progress, [0, 0.5, 1], [0.9, 1.0, 0.9]);

    // Z-Index: 1 -> 50 -> 1
    const zIndex = useTransform(progress, [0, 0.5, 1], [1, 50, 1]);

    return (
        <motion.div
            className="absolute top-0 left-0"
            style={{
                x,
                y,
                scale,
                zIndex,
                width: 'min(360px, 65vw)',
                height: 'min(240px, 45vw)'
            }}
        >
            <div className="w-full h-full rounded-[100%] border border-[#FEFAE0]/20 bg-[#0a0a0a] hover:bg-[#FEFAE0]/5 transition-colors duration-500 p-6 flex flex-col items-center justify-between text-center shadow-2xl relative overflow-hidden group cursor-grab active:cursor-grabbing">

                {/* 1. Logo / Icon at Top */}
                <div className="mt-1 w-10 h-10 flex items-center justify-center border border-[#FEFAE0] rounded-full bg-black group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-5 h-5 text-[#FEFAE0]" />
                </div>

                {/* 2. Headline & Description */}
                <div className="flex flex-col gap-2 z-10 px-2">
                    <h3 className="font-serif text-lg md:text-xl font-medium text-[#FEFAE0] leading-tight">
                        {step.title}
                    </h3>
                    <p className="text-xs text-[#FEFAE0]/70 font-light leading-relaxed px-2">
                        {step.description}
                    </p>
                </div>

                {/* 3. Read More at Bottom */}
                <div className="mb-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] uppercase tracking-widest text-[#FEFAE0] border-b border-[#FEFAE0]/30 pb-0.5">
                        Read More
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export const RCMCycleSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const globalProgress = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);

    // Auto-scroll speed
    const speed = 0.0005; // Adjust for base speed

    useAnimationFrame((t, delta) => {
        if (!isDragging) {
            const current = globalProgress.get();
            // Move forward by default
            globalProgress.set(current + speed * (delta / 16));
        }
    });

    return (
        <section className="py-24 bg-black overflow-hidden relative min-h-screen flex flex-col items-center justify-start">

            {/* Top Section: Header & Curve */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-4 mt-12 mb-8 text-center">
                <h2
                    className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#FEFAE0] leading-tight tracking-tight mb-8"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                    Turning expectations into unforgettable experiences!
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

            {/* Draggable Area Container */}
            <motion.div
                ref={containerRef}
                className="relative w-full h-[400px] md:h-[450px] z-10 w-full mt-4 cursor-none"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }} // Infinite drag by monitoring delta
                dragElastic={0}
                dragMomentum={false}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={(e) => {
                    const rect = containerRef.current?.getBoundingClientRect();
                    if (rect) {
                        mouseX.set(e.clientX - rect.left - 32);
                        mouseY.set(e.clientY - rect.top - 32);
                    }
                }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                onDrag={(_, info) => {
                    // Update progress based on drag delta
                    // Sensitivity factor: smaller means slower drag
                    const sensitivity = 0.001;
                    const delta = info.delta.x * -sensitivity; // Invert so dragging left moves content left (forward in time)
                    globalProgress.set(globalProgress.get() + delta);
                }}
            >
                {rcmSteps.map((step, index) => (
                    <Card
                        key={step.id}
                        step={step}
                        index={index}
                        total={rcmSteps.length}
                        globalProgress={globalProgress}
                    />
                ))}

                {/* Custom Cursor Follower */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            style={{
                                x: mouseX,
                                y: mouseY,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 100,
                                pointerEvents: 'none'
                            }}
                        >
                            <img
                                src={logo}
                                alt="Drag Cursor"
                                className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] brightness-0 invert"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>            </motion.div>

            {/* Vignette for edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-30 pointer-events-none" />
        </section>
    );
};
