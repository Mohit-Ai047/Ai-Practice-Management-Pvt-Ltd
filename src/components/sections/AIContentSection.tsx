import { motion } from "framer-motion";
import { Brain, Sparkles, Workflow, Zap, Lock, ArrowRight } from "lucide-react";

export const AIContentSection = () => {
    return (
        <section className="py-24 bg-black text-[#FEFAE0] overflow-hidden">
            <div className="container mx-auto px-4 space-y-32">

                {/* Part 1: Headline & Core Value */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FEFAE0] leading-tight">
                            AI Isn't Just a Buzzword. <br />
                            <span className="font-serif text-white border-b-2 border-red-500/50">It's Your Unfair Advantage.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-[#FEFAE0]/80 leading-relaxed font-light">
                            <p>
                                At AiPM, we don't just use software; we deploy <span className="font-serif text-white">intelligent neural networks</span> that learn your payer behavior, predict denials before they happen, and auto-correct claims without human intervention.
                            </p>
                            <p>
                                While others are still manually scrubbing claims, our <span className="text-white font-serif">AI-driven engine</span> is processing thousands of transactions per second—identifying patterns, closing gaps, and ensuring that your revenue cycle operates with the <span className="font-serif text-white">precision of a machine and the insight of an expert.</span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-zinc-900/50 border border-[#FEFAE0]/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16" />

                        <div className="relative z-10 grid gap-8">
                            <div className="flex items-start gap-4">
                                <Brain className="w-10 h-10 text-[#FEFAE0] flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Predictive Modeling</h3>
                                    <p className="text-[#FEFAE0]/70">Forecast cash flow with 98% accuracy and proactively address potential shortfalls.</p>
                                </div>
                            </div>
                            <div className="h-px bg-[#FEFAE0]/10" />
                            <div className="flex items-start gap-4">
                                <Workflow className="w-10 h-10 text-[#FEFAE0] flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Autonomous Workflow</h3>
                                    <p className="text-[#FEFAE0]/70">Let the bots handle the busy work. From eligibility to status checks, we automate the mundane.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: The Future of RCM */}
                <div className="max-w-5xl mx-auto space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-[#FEFAE0]">
                            Stop Working Harder. <span className="italic text-white">Start Working Smarter.</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Reduce manual staffing costs by up to 40%",
                            "Accelerate claim processing speed by 3x",
                            "Eliminate human error in data entry entirely"
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white/5 p-6 rounded-2xl border border-[#FEFAE0]/10 hover:border-[#FEFAE0]/30 transition-colors group text-center"
                            >
                                <Sparkles className="w-8 h-8 text-[#FEFAE0] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <p className="text-lg font-medium text-[#FEFAE0]/90">
                                    {benefit}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 md:p-16 text-center border border-[#FEFAE0]/10 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

                        <div className="relative z-10 space-y-8">
                            <div className="inline-block p-3 rounded-full bg-[#FEFAE0]/10 mb-4">
                                <Zap className="w-8 h-8 text-[#FEFAE0]" />
                            </div>

                            <p className="text-xl md:text-3xl font-serif font-serif text-[#FEFAE0]">
                                The future of RCM is automated. <br />
                                <span className="text-white font-bold">And the future is here.</span>
                            </p>

                            <p className="text-lg md:text-xl text-[#FEFAE0]/70 max-w-3xl mx-auto">
                                Join the forward-thinking practices that have already transformed their financial operations with AiPM's AI-Powered Revenue Automation.
                            </p>

                            <div className="inline-flex items-center gap-2 text-[#FEFAE0]/60 uppercase tracking-widest text-sm border-t border-[#FEFAE0]/10 pt-8">
                                <span>Future-proof your revenue</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
