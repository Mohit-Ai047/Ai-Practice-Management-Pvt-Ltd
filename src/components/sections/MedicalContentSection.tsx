import { motion } from "framer-motion";
import { Stethoscope, FileText, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const MedicalContentSection = () => {
    return (
        <section className="py-24 bg-black text-[#FEFAE0] overflow-hidden">
            <div className="container mx-auto px-4 space-y-32">

                {/* Part 1: Headline & Vision */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FEFAE0] leading-tight">
                            Transform Your Medical Billing <br />
                            <span className="font-serif text-white border-b-2 border-red-500/50">Experience Today.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-[#FEFAE0]/80 leading-relaxed font-light">
                            <p>
                                Welcome to <span className="font-semibold text-white">AiPM</span>, the #1 medical billing partner trusted by practices across the Country. We’re not just here to process your claims; we’re here to <span className="italic text-white">accelerate your revenue</span> and streamline your operations like never before.
                            </p>
                            <p>
                                Imagine a world where every claim is submitted with precision, every payment is on time, and your cash flow improves—<span className="font-semibold text-white">effortlessly.</span>
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
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEFAE0]/5 rounded-bl-full -mr-8 -mt-8" />

                        <div className="relative z-10 grid gap-8">
                            <div className="flex items-start gap-4">
                                <Stethoscope className="w-10 h-10 text-[#FEFAE0] flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Clinical Precision</h3>
                                    <p className="text-[#FEFAE0]/70">Our coding aligns perfectly with clinical documentation to minimize audit risk.</p>
                                </div>
                            </div>
                            <div className="h-px bg-[#FEFAE0]/10" />
                            <div className="flex items-start gap-4">
                                <FileText className="w-10 h-10 text-[#FEFAE0] flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Paperwork Reduced</h3>
                                    <p className="text-[#FEFAE0]/70">We handle the administrative burden so you can focus on patient care.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: Eliminate Delays */}
                <div className="max-w-5xl mx-auto space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-[#FEFAE0]">
                            Eliminate Denials & <span className="italic text-white">Delays.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-[#FEFAE0]/80 max-w-3xl mx-auto">
                            Tired of drowning in paperwork? We revolutionize your revenue cycle with <span className="text-white font-medium">smart automation</span> and proactive support.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Faster Reimbursements",
                            "Fewer Administrative Headaches",
                            "Complete Financial Transparency"
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white/5 p-6 rounded-2xl border border-[#FEFAE0]/10 hover:border-[#FEFAE0]/30 transition-colors group text-center"
                            >
                                <CheckCircle2 className="w-8 h-8 text-[#FEFAE0] mx-auto mb-4 group-hover:scale-110 transition-transform" />
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
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FEFAE0]/10 via-transparent to-transparent opacity-40" />

                        <div className="relative z-10 space-y-8">
                            <div className="inline-block p-3 rounded-full bg-[#FEFAE0]/10 mb-4">
                                <TrendingUp className="w-8 h-8 text-[#FEFAE0]" />
                            </div>

                            <p className="text-xl md:text-3xl font-serif text-[#FEFAE0]">
                                We don't just do the work; <br />
                                <span className="text-white font-bold underline decoration-white/30 decoration-2 underline-offset-4">we partner with you.</span>
                            </p>

                            <p className="text-lg md:text-xl text-[#FEFAE0]/70 max-w-3xl mx-auto">
                                Reduce stress, cut down on denials, and ensure your practice sees faster reimbursements with the future of medical billing.
                            </p>

                            <div className="inline-flex items-center gap-2 text-[#FEFAE0]/60 uppercase tracking-widest text-sm border-t border-[#FEFAE0]/10 pt-8">
                                <span>Start optimizing today</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
