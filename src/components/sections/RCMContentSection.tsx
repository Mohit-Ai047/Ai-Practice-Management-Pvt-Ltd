import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Users,
    Zap,
    ShieldCheck,
    BarChart3,
    ArrowRight,
    Search,
    AlertTriangle,
    CheckCircle2
} from "lucide-react";

export const RCMContentSection = () => {
    return (
        <section className="py-24 bg-black text-[#FEFAE0] overflow-hidden">
            <div className="container mx-auto px-4 space-y-32">

                {/* Part 1: End-to-End RCM */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FEFAE0] leading-tight">
                            RCM that Begins Before the Appointment and Ends with Reimbursement.
                        </h2>

                        <div className="space-y-6 text-lg text-[#FEFAE0]/80 leading-relaxed font-light">
                            <p>
                                At AiPM, we provide <span className="font-semibold text-white">end-to-end Revenue Cycle Management solutions</span> tailored to optimize every phase of your financial workflow—from <span className="font-serif text-white">patient eligibility and pre-authorizations</span> to coding, billing, denial management, and final payment posting.
                            </p>
                            <p>
                                Our <span className="font-semibold text-white underline decoration-[#FEFAE0]/30 underline-offset-4">Certified team</span> combines deep healthcare expertise with <span className="text-white font-serif">cutting-edge AI and machine learning</span>, ensuring maximum reimbursement, minimal delays, and full compliance. With seamless automation, real-time analytics, and personalized support, AiPM eliminates inefficiencies & revenue leaks—empowering your organization to focus on what matters most: <span className="font-bold text-white tracking-wide">PATIENT’S CARE.</span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-[#FEFAE0]/10 rounded-3xl p-8 relative overflow-hidden"
                    >
                        {/* Abstract visual representation of RCM steps */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FEFAE0]/5 to-transparent opacity-50" />

                        <div className="relative z-10 space-y-6">
                            <h3 className="text-2xl font-serif text-white text-center mb-8">Revenue Management</h3>
                            <div className="space-y-4">
                                {[
                                    "Patient Registration",
                                    "Health Evaluation",
                                    "Coding",
                                    "Charge Entry",
                                    "Claim Submission",
                                    "Account Receivables",
                                    "Payment Processing",
                                    "Patient Billing",
                                    "Practice Revenue",
                                    "Reports"
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3"
                                        style={{ marginLeft: `${i * 12}px` }}
                                    >
                                        <div className={`w-3 h-3 rounded-full ${i === 10 ? 'bg-500 box-shadow-glow' : 'bg-[#FEFAE0]'}`} />
                                        <span className={`text-sm md:text-base ${i === 9 ? 'text-500 font-bold text-lg' : 'text-[#FEFAE0]/70'}`}>
                                            {step}
                                        </span>
                                        {i < 10 && <div className="h-4 w-px bg-[#FEFAE0]/20 ml-1.5 absolute mt-5" />}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: Challenge Questions */}
                <div className="max-w-5xl mx-auto space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-[#FEFAE0]">
                            Think Your Revenue Cycle Is Running Smoothly? <span className="font-serif text-white border-b-2 border-red-500/50">Think Again.</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "What if you're missing thousands in reimbursements every month?",
                            "What if denials are slipping through the cracks—unnoticed, unworked?",
                            "What if the key to financial stability is one RCM decision away?"
                        ].map((question, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-zinc-900/50 p-6 rounded-2xl border border-[#FEFAE0]/10 hover:border-[#FEFAE0]/30 transition-colors group"
                            >
                                <AlertTriangle className="w-8 h-8 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                                <p className="text-lg font-medium text-[#FEFAE0]/90 leading-snug">
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
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEFAE0]/5 rounded-full blur-3xl -mr-32 -mt-32" />

                        <div className="relative z-10 space-y-8">
                            <p className="text-xl md:text-3xl font-serif text-[#FEFAE0]">
                                At AiPM, we don’t just support your revenue—we <span className="text-white font-bold underline decoration-white/30 decoration-2 underline-offset-4">supercharge it.</span>
                            </p>

                            <p className="text-lg md:text-xl text-[#FEFAE0]/70 max-w-3xl mx-auto">
                                With certified experts, AI-driven processes, and end-to-end solutions, we handle everything from <span className="text-white">eligibility checks to denial recovery.</span>
                            </p>

                            <div className="py-6">
                                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
                                    No leaks. No delays. Just maximum reimbursement.
                                </h3>
                            </div>

                            <Link to="/contact" className="inline-flex items-center gap-2 text-[#FEFAE0]/60 uppercase tracking-widest text-sm border-t border-[#FEFAE0]/10 pt-8 hover:text-[#FEFAE0] transition-colors cursor-pointer">
                                <span>Discover what your RCM should really be doing</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
