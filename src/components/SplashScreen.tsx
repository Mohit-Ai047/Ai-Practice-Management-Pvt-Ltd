import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
    onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const mainText = "When Practice Revenue Matters, We Deliver.";
    const subText = "Ai Practice Management LLC.";

    const mainChars = mainText.split("");
    const subChars = subText.split("");

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStartAnimation(true);
        }, 500);

        // Calculate total duration roughly
        const totalDuration = 5000;

        const completeTimeout = setTimeout(() => {
            onComplete();
        }, totalDuration);

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(completeTimeout);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-4">
            <AnimatePresence>
                {startAnimation && (
                    <>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05,
                                    },
                                },
                            }}
                            className="flex flex-wrap justify-center text-center gap-0.5 md:gap-1 text-2xl md:text-4xl font-medium tracking-[0.1em] mb-6 font-serif"
                        >
                            {mainChars.map((char, index) => (
                                <motion.span
                                    key={`main-${index}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        delayChildren: 2, // Start after main text roughly
                                        staggerChildren: 0.05,
                                    },
                                },
                            }}
                            className="flex flex-wrap justify-center text-center gap-0.5 text-lg md:text-2xl text-white/70 tracking-[0.2em] font-serif"
                        >
                            {subChars.map((char, index) => (
                                <motion.span
                                    key={`sub-${index}`}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
