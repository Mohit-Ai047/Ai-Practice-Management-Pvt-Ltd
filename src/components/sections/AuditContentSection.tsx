import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, FileSearch, Scale, AlertOctagon, CheckCircle2, ArrowRight } from "lucide-react";

export const AuditContentSection = () => {
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
                            Quality Isn't Just a Checkbox,.. <br />
                            <span className="font-serif text-white border-b-2 border-red-500/50">It's Your First Line of Defense.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-[#FEFAE0]/80 leading-relaxed font-light">
                            <p>
                                At AiPM, we believe that <span className="font-semibold text-white">proactive auditing</span> is the key to sustainable financial health. Our Quality Assurance & Audit services go beyond simple error checking—we provide a <span className="font-serif text-white">comprehensive shield</span> against compliance risks, revenue leakage, and payer scrutiny.
                            </p>
                            <p>
                                With regulatory landscapes shifting constantly, your practice needs more than just oversight; it needs <span className="font-semibold text-white">insight</span>. Our certified auditors leverage <span className="text-white font-serif">AI-driven analytics</span> to identify patterns, predict vulnerabilities, and implement corrective strategies before they impact your bottom line.
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
                                <Scale className="w-10 h-10 text-[#FEFAE0] flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Regulatory Compliance</h3>
                                    <p className="text-[#FEFAE0]/70">Stay ahead of changing payer rules and federal mandates with real-time updates.</p>
                                </div>
                            </div>
                            <div className="h-px bg-[#FEFAE0]/10" />
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-10 h-10 text-[#FEFAE0] flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Revenue Integrity</h3>
                                    <p className="text-[#FEFAE0]/70">Stop revenue leakage at the source by ensuring every claim is accurate before submission.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: The Cost of Inaction */}
                <div className="max-w-5xl mx-auto space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-[#FEFAE0]">
                            Is Your Practice at <span className="text-red-500 font-bold font-serif">Risk?</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Are frequent denials signaling a deeper process failure?",
                            "Could documentation gaps trigger a payer audit?",
                            "Are you confident your coding maximizing reimbursement compliantly?"
                        ].map((question, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white/5 p-6 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-colors group text-center"
                            >
                                <AlertOctagon className="w-10 h-10 text-red-500 mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                                <p className="text-lg font-medium text-[#FEFAE0]/90">
                                    {question}
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
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FEFAE0]/5 via-transparent to-transparent opacity-50" />

                        <div className="relative z-10 space-y-8">
                            <div className="inline-block p-3 rounded-full bg-[#FEFAE0]/10 mb-4">
                                <FileSearch className="w-8 h-8 text-[#FEFAE0]" />
                            </div>

                            <p className="text-xl md:text-3xl font-serif font-serif text-[#FEFAE0]">
                                We don't just find errors—we <span className="text-white font-bold underline decoration-white/30 decoration-2 underline-offset-4">eliminate them.</span>
                            </p>

                            <p className="text-lg md:text-xl text-[#FEFAE0]/70 max-w-3xl mx-auto">
                                Our comprehensive audits provide actionable feedback loops that train your staff, refine your workflows, and build a fortress around your revenue.
                            </p>

                            <Link to="/contact" className="inline-flex items-center gap-2 text-[#FEFAE0]/60 uppercase tracking-widest text-sm border-t border-[#FEFAE0]/10 pt-8 hover:text-[#FEFAE0] transition-colors cursor-pointer">
                                <span>Secure your financial future</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
