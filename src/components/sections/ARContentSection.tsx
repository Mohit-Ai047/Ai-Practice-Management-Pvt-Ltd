import { motion } from "framer-motion";
import { Search, DollarSign, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

export const ARContentSection = () => {
    return (
        <section className="py-24 bg-black text-[#FEFAE0] overflow-hidden">
            <div className="container mx-auto px-4 space-y-32">

                {/* Part 1: Intro & Revenue Hiding */}
                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FEFAE0]">
                            Our AR Team Doesn't Miss a Beat.
                        </h2>
                        <div className="inline-block bg-white text-black px-8 py-4 transform -skew-x-6 shadow-lg shadow-white/10">
                            <h3 className="text-xl md:text-3xl font-bold uppercase tracking-wider transform skew-x-6">
                                We Turn Unpaid Balances Into Bank Deposits.
                            </h3>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <Search className="w-12 h-12 text-red-500" />
                                <h3 className="text-3xl md:text-4xl font-bold">
                                    Where’s your revenue <span className="text-red-500 font-serif">hiding?</span>
                                </h3>
                            </div>

                            <div className="space-y-6 text-lg text-[#FEFAE0]/80 leading-relaxed font-light">
                                <p>
                                    In a maze of co-pays, deductibles, and confusing payer rules, it’s easy for payments to slip through the cracks.
                                </p>
                                <p>
                                    Today’s AR landscape is more complex than ever—and every delay <span className="text-red-500 font-bold">costs you.</span>
                                </p>
                                <p className="text-xl text-white font-medium border-l-4 border-[#FEFAE0] pl-4 font-serif">
                                    At AiPM, we don’t wait for payments. We go after them.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-zinc-900/50 p-8 rounded-3xl border border-[#FEFAE0]/10 space-y-6 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEFAE0]/5 rounded-bl-full -mr-8 -mt-8" />

                            <p className="text-lg text-[#FEFAE0]/90 leading-relaxed">
                                Our certified billing and AR specialists <span className="text-white font-semibold font-serif">track every claim, chase every dollar</span>, and follow up relentlessly—with <span className="text-white font-serif">insurance payers and patients a like.</span>
                            </p>

                            <hr className="border-[#FEFAE0]/10" />

                            <div className="flex gap-4 items-start">
                                <TrendingUp className="w-8 h-8 text-[#FEFAE0] flex-shrink-0" />
                                <p className="text-[#FEFAE0]/80">
                                    Armed with smart tech, proven strategies, and decades of experience, we <span className="text-white font-serif font-medium">cut through the chaos to accelerate your cash flow.</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Part 2: Clarity & Collections */}
                <div className="max-w-5xl mx-auto space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                    >
                        <p className="text-lg text-[#FEFAE0]/60 uppercase tracking-widest">
                            Confused payments shouldn't cost you revenue.
                        </p>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#FEFAE0]">
                            AiPM brings <span className="text-[#FEFAE0] font-serif border-b border-[#FEFAE0]/30">clarity</span>—and collections—fast.
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                <AlertCircle className="w-8 h-8 text-red-500" />
                                Is your revenue <span className="text-[#FEFAE0]/70 line-through decoration-red-500">stuck in limbo?</span>
                            </h3>
                            <div className="pl-11 space-y-4 text-[#FEFAE0]/80">
                                <p>Denied claims. Delayed payments. Accounts piling up with no end in sight.</p>
                                <p className="text-white font-medium text-lg">
                                    Most practices don’t need more billing—they need <span className="font-serif text-[#FEFAE0]">expert AR management.</span>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {["Dig deep, track aggressively, and recover relentlessly.", "Bring clarity to chaos—and cash to your account.", "Turn backlogs into bank deposits."].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[#FEFAE0] flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-3 h-3 text-black" />
                                    </div>
                                    <p className="text-lg text-[#FEFAE0]/90">{item}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-[#FEFAE0]/20 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <DollarSign className="w-16 h-16 text-[#FEFAE0] mx-auto mb-6 strok-1" />
                        <h3 className="text-2xl md:text-4xl font-serif font-medium text-[#FEFAE0] mb-4">
                            Lost revenue isn’t gone.
                        </h3>
                        <p className="text-xl md:text-2xl text-[#FEFAE0]/80">
                            It’s just waiting for <span className="text-white font-bold border-b-2 border-white">AiPM</span> to collect it.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
