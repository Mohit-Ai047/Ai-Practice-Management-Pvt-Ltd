import { motion } from "framer-motion";
import { Clock, DollarSign, CheckCircle2, AlertTriangle, Zap } from "lucide-react";

export const DenialContentSection = () => {
    return (
        <section className="py-24 bg-black text-[#FEFAE0] overflow-hidden">
            <div className="container mx-auto px-4 space-y-32">

                {/* Part 1: Challenge Mindset */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-red-600 text-white p-6 inline-block transform -skew-x-6">
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider transform skew-x-6">
                                Still accepting denials as part of doing business ????
                            </h2>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-serif italic text-[#FEFAE0]">
                            It’s time to challenge that mindset.
                        </h3>

                        <div className="space-y-6 text-lg text-[#FEFAE0]/80 leading-relaxed font-light">
                            <p>
                                At AiPM—recognized as the <span className="font-semibold text-white border-b border-[#FEFAE0]/30">Top Denial Management company in the Country</span>—we know that most claims are <span className="italic text-white">rejected due to preventable errors</span>, not payer policy. Whether it’s incorrect coding, missing documentation, or outdated billing practices, <span className="font-semibold text-white">we identify the root cause fast—and fix it faster.</span>
                            </p>
                            <p>
                                Our team of <span className="italic text-white">certified billing and coding professionals</span> stays current with the latest guidelines and payer trends through continuous education. Backed by real-time databases of approved diagnostic combinations across insurers, we ensure every claim uses the most reimbursable, <span className="font-semibold text-white">payer-approved coding combinations</span>—maximizing revenue and accelerating approvals.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-8 items-center justify-center p-8 border border-[#FEFAE0]/10 rounded-3xl bg-white/5 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4">
                            <Clock className="w-24 h-24 text-[#FEFAE0] stroke-1" />
                            <DollarSign className="w-24 h-24 text-[#FEFAE0] stroke-1" />
                        </div>
                        <div className="text-center space-y-2">
                            <div className="text-5xl font-black text-white tracking-tighter">
                                ACTION
                            </div>
                            <div className="text-3xl font-bold text-[#FEFAE0] tracking-widest uppercase">
                                Changes Things
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: What Makes Us Different */}
                <div className="max-w-5xl mx-auto space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-[#FEFAE0]">
                            What makes us different?
                        </h2>
                        <p className="text-xl md:text-2xl text-[#FEFAE0]/80 max-w-3xl mx-auto">
                            We don’t just respond—we resolve. <span className="text-white font-medium">Within 24 hours</span>, our dedicated denial specialists:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Investigate and pinpoint the exact cause of each rejection",
                            "Correct errors and gather all required documentation",
                            "Re-verify clinical details for accuracy and compliance",
                            "Resubmit clean claims or initiate strategic appeals",
                            "Transfer responsibility to patients when applicable",
                            "Track every claim with AI-powered workflows for full visibility"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-[#FEFAE0]/10"
                            >
                                <div className="mt-1 w-6 h-6 rounded-full border border-[#FEFAE0] flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-3 h-3 text-[#FEFAE0]" />
                                </div>
                                <span className="text-lg text-[#FEFAE0]/90">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 rounded-3xl p-8 md:p-12 text-center space-y-8 border border-[#FEFAE0]/10"
                    >
                        <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />

                        <div className="space-y-4">
                            <p className="text-xl md:text-2xl font-light text-[#FEFAE0]/80">
                                From simplifying workflows and reducing costs to minimizing regulatory risk—we ensure you’re not just managing rejections...
                            </p>
                            <p className="text-3xl md:text-4xl font-serif text-white">
                                You’re conquering them.
                            </p>
                        </div>

                        <div className="pt-8 space-y-4">
                            <p className="text-lg uppercase tracking-widest text-[#FEFAE0]/60">
                                Don’t let denials stall your cash flow.
                            </p>
                            <h3 className="text-2xl md:text-4xl font-bold text-red-500 drop-shadow-sm">
                                Let AiPM turn every rejected claim into revenue—within 24 hours !!!
                            </h3>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
