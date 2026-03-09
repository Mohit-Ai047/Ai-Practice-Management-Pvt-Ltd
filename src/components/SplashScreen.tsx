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
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-6">
            <AnimatePresence>
                {startAnimation && (
                    <div className="space-y-8 w-full max-w-screen-xl mx-auto flex flex-col items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.04,
                                    },
                                },
                            }}
                            className="flex flex-wrap justify-center text-center gap-y-2 text-2xl md:text-3xl lg:text-5xl font-medium tracking-wide font-serif w-full"
                        >
                            {mainText.split(" ").map((word, wordIndex) => (
                                <span key={`main-word-${wordIndex}`} className="inline-block whitespace-nowrap">
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={`main-char-${charIndex}`}
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                            className="inline-block"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                    {/* Add a space after the word that IS allowed to break */}
                                    <span className="inline-block">&nbsp;</span>
                                </span>
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
                                        delayChildren: 1.2,
                                        staggerChildren: 0.03,
                                    },
                                },
                            }}
                            className="flex flex-wrap justify-center text-center gap-y-1 text-base sm:text-lg md:text-2xl text-white/70 tracking-widest font-serif w-full"
                        >
                            {subText.split(" ").map((word, wordIndex) => (
                                <span key={`sub-word-${wordIndex}`} className="inline-block whitespace-nowrap">
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={`sub-char-${charIndex}`}
                                            variants={{
                                                hidden: { opacity: 0 },
                                                visible: { opacity: 1 },
                                            }}
                                            className="inline-block"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                    <span className="inline-block">&nbsp;</span>
                                </span>
                            ))}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
