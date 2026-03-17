import { useState, useEffect, useRef } from "react";
import type { Variants } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Clock, ArrowRight, Loader2, Search, Upload, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
    id: number;
    title: string;
    description: string;
    location: string | null;
    status: string;
    created_at: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CareersPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    // Application form state
    const [appForm, setAppForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [resumeDragOver, setResumeDragOver] = useState(false);
    const [appSubmitting, setAppSubmitting] = useState(false);
    const [appSuccess, setAppSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Convert file to base64
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
        });
    };

    useEffect(() => {
        fetch("/api/jobs")
            .then((res) => {
                if (!res.ok) throw new Error("Failed");
                return res.json();
            })
            .then((data) => {
                setJobs(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    const filtered = jobs.filter(
        (job) =>
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            (job.location ?? "").toLowerCase().includes(search.toLowerCase())
    );

    const formatDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } catch {
            return dateStr;
        }
    };

    return (
        <div className="min-h-screen bg-black text-[#FEFAE0]">
            {/* ── Hero ── */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#24c9c0]/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#24c9c0]/5 rounded-full blur-[100px]" />
                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#FEFAE0 1px, transparent 1px), linear-gradient(90deg, #FEFAE0 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#24c9c0]/30 bg-[#24c9c0]/10 text-[#24c9c0] text-sm font-medium tracking-widest uppercase"
                        >
                            Join Our Team
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-4xl md:text-6xl font-serif font-bold text-[#FEFAE0] mb-6 leading-tight"
                        >
                            Build Your Career in{" "}
                            <span className="text-[#24c9c0]">Healthcare Excellence</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                            className="text-lg md:text-xl text-[#FEFAE0]/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Join Ai Practice Management PVT LTD and help redefine healthcare
                            revenue cycle management. We're growing fast and looking for
                            driven professionals ready to make an impact.
                        </motion.p>

                        {/* Search */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="max-w-xl mx-auto relative"
                        >
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FEFAE0]/40" />
                            <input
                                type="text"
                                placeholder="Search by role or location..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-12 pr-5 py-4 bg-white/5 border border-[#FEFAE0]/15 rounded-xl text-[#FEFAE0] placeholder-[#FEFAE0]/40 focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/50 focus:border-[#24c9c0]/50 transition-all"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65, duration: 0.6 }}
                        className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
                    >
                        {[
                            { num: "10+", label: "Years of Excellence" },
                            { num: "5★", label: "Team Culture" },
                            { num: "Fast", label: "Career Growth" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl font-serif font-bold text-[#24c9c0]">
                                    {stat.num}
                                </p>
                                <p className="text-xs text-[#FEFAE0]/50 mt-1 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Job Listings ── */}
            <section className="pb-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#FEFAE0]">
                                Open Positions
                            </h2>
                            {!loading && (
                                <p className="text-[#FEFAE0]/50 mt-1 text-sm">
                                    {filtered.length} position{filtered.length !== 1 ? "s" : ""} available
                                </p>
                            )}
                        </div>
                        <div className="hidden sm:flex items-center gap-2 text-[#FEFAE0]/50 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>Updated regularly</span>
                        </div>
                    </div>

                    {/* Loading */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-32 gap-4">
                            <Loader2 className="w-10 h-10 text-[#24c9c0] animate-spin" />
                            <p className="text-[#FEFAE0]/50">Loading opportunities...</p>
                        </div>
                    )}

                    {/* Error */}
                    {error && (
                        <div className="text-center py-24 border border-[#FEFAE0]/10 rounded-2xl bg-white/[0.02]">
                            <p className="text-[#FEFAE0]/60 text-lg">
                                Unable to load jobs at this time.
                            </p>
                            <p className="text-[#FEFAE0]/40 mt-2 text-sm">
                                Please try again later or{" "}
                                <Link to="/contact" className="text-[#24c9c0] hover:underline">
                                    contact us
                                </Link>
                                .
                            </p>
                        </div>
                    )}

                    {/* No results */}
                    {!loading && !error && filtered.length === 0 && (
                        <div className="text-center py-24 border border-[#FEFAE0]/10 rounded-2xl bg-white/[0.02]">
                            <Briefcase className="w-12 h-12 text-[#FEFAE0]/20 mx-auto mb-4" />
                            <p className="text-[#FEFAE0]/60 text-lg">
                                {search
                                    ? "No positions match your search."
                                    : "No open positions right now."}
                            </p>
                            <p className="text-[#FEFAE0]/40 mt-2 text-sm">
                                {search
                                    ? "Try a different keyword."
                                    : "Check back soon — we're growing fast!"}
                            </p>
                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="mt-5 px-5 py-2 border border-[#24c9c0]/40 text-[#24c9c0] rounded-lg text-sm hover:bg-[#24c9c0]/10 transition-colors"
                                >
                                    Clear search
                                </button>
                            )}
                        </div>
                    )}

                    {/* Job Cards Grid */}
                    {!loading && !error && filtered.length > 0 && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid gap-5"
                        >
                            {filtered.map((job) => (
                                <motion.div
                                    key={job.id}
                                    variants={itemVariants}
                                    layoutId={`job-card-${job.id}`}
                                    onClick={() => setSelectedJob(job)}
                                    className="group relative bg-white/[0.03] border border-[#FEFAE0]/10 rounded-2xl p-6 md:p-8 cursor-pointer hover:border-[#24c9c0]/40 hover:bg-white/[0.06] transition-all duration-300"
                                    style={{ willChange: "transform" }}
                                    whileHover={{ y: -3 }}
                                >
                                    {/* Glow on hover */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(36,201,192,0.06), transparent 40%)" }}
                                    />

                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4">
                                                {/* Icon */}
                                                <div className="w-12 h-12 rounded-xl bg-[#24c9c0]/10 border border-[#24c9c0]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#24c9c0]/20 transition-colors">
                                                    <Briefcase className="w-5 h-5 text-[#24c9c0]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-serif font-semibold text-[#FEFAE0] group-hover:text-white transition-colors leading-snug">
                                                        {job.title}
                                                    </h3>
                                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2">
                                                        {job.location && (
                                                            <span className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/55">
                                                                <MapPin className="w-3.5 h-3.5 text-[#24c9c0]" />
                                                                {job.location}
                                                            </span>
                                                        )}
                                                        <span className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/55">
                                                            <Clock className="w-3.5 h-3.5 text-[#24c9c0]" />
                                                            Posted {formatDate(job.created_at)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description preview */}
                                            <p className="mt-4 text-[#FEFAE0]/55 text-sm leading-relaxed line-clamp-2 ml-16">
                                                {job.description}
                                            </p>
                                        </div>

                                        {/* CTA */}
                                        <div className="ml-16 md:ml-0 flex-shrink-0">
                                            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#24c9c0]/10 border border-[#24c9c0]/30 text-[#24c9c0] rounded-xl text-sm font-medium group-hover:bg-[#24c9c0] group-hover:text-black group-hover:border-[#24c9c0] transition-all duration-300">
                                                View Details
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ── Job Detail Modal ── */}
            <AnimatePresence>
                {selectedJob && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedJob(null)}
                            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                        />
                        {/* Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 280, damping: 30 }}
                            className="fixed inset-x-4 bottom-0 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-[60] bg-zinc-950 border border-[#FEFAE0]/10 rounded-t-3xl md:rounded-3xl md:top-1/2 md:-translate-y-1/2 md:bottom-auto max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            {/* Teal top accent */}
                            <div className="h-1 w-full bg-gradient-to-r from-[#24c9c0] to-[#24c9c0]/30 rounded-t-3xl md:rounded-t-3xl" />

                            <div className="p-6 md:p-8">
                                {/* Header row */}
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#FEFAE0] leading-tight">
                                            {selectedJob.title}
                                        </h2>
                                        <div className="flex flex-wrap gap-3 mt-3">
                                            {selectedJob.location && (
                                                <span className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/60">
                                                    <MapPin className="w-4 h-4 text-[#24c9c0]" />
                                                    {selectedJob.location}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/60">
                                                <Clock className="w-4 h-4 text-[#24c9c0]" />
                                                {formatDate(selectedJob.created_at)}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedJob(null)}
                                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#FEFAE0]/60 hover:text-white transition-colors text-xl leading-none"
                                        aria-label="Close"
                                    >
                                        ×
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-[#FEFAE0]/10 mb-6" />

                                {/* Description */}
                                <div className="prose prose-invert max-w-none">
                                    <h3 className="text-[#24c9c0] text-sm uppercase tracking-widest font-semibold mb-3">
                                        About the Role
                                    </h3>
                                    <div className="text-[#FEFAE0]/75 leading-relaxed text-[15px] whitespace-pre-wrap">
                                        {selectedJob.description}
                                    </div>
                                </div>

                                {/* Apply CTA */}
                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => {
                                            setSelectedJob(null);
                                            setTimeout(() => {
                                                document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                                            }, 300);
                                        }}
                                        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#24c9c0] hover:bg-[#20b3aa] text-black font-semibold rounded-xl transition-colors text-[15px]"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setSelectedJob(null)}
                                        className="flex-1 py-3.5 bg-white/5 hover:bg-white/10 text-[#FEFAE0] rounded-xl transition-colors text-[15px]"
                                    >
                                        Back to Listings
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ── Why Join Us ── */}
            <section className="py-24 border-t border-[#FEFAE0]/10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#FEFAE0] mb-4">
                            Why Join Ai Practice Management?
                        </h2>
                        <p className="text-[#FEFAE0]/55 max-w-xl mx-auto">
                            We're more than a workplace — we're a community built on
                            purpose, growth, and healthcare excellence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "🚀",
                                title: "Fast-Track Growth",
                                desc: "We invest in your development with mentorship, training, and clear career paths that reward performance.",
                            },
                            {
                                icon: "🌍",
                                title: "Remote-First Culture",
                                desc: "Work from anywhere. We trust our team and provide the tools needed to thrive in a remote environment.",
                            },
                            {
                                icon: "💡",
                                title: "Meaningful Impact",
                                desc: "Your work directly supports healthcare providers, streamlining revenue cycles that enable better patient care.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.55 }}
                                className="bg-white/[0.03] border border-[#FEFAE0]/10 rounded-2xl p-7 hover:border-[#24c9c0]/30 hover:bg-white/[0.06] transition-all duration-300 group"
                            >
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-serif font-semibold text-[#FEFAE0] mb-2 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#FEFAE0]/55 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── No Openings? No Issues! Still Apply ── */}
            <section id="apply-form" className="py-20 border-t border-[#FEFAE0]/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left — Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:sticky lg:top-32"
                        >
                            <span className="inline-block mb-4 px-3 py-1 rounded-full border border-[#24c9c0]/30 bg-[#24c9c0]/10 text-[#24c9c0] text-xs font-medium tracking-widest uppercase">
                                No Openings? No Issues!
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#FEFAE0] leading-tight mb-5">
                                No Openings?{" "}
                                <br />
                                No Issues!{" "}
                                <span className="text-[#24c9c0]">Still Apply.</span>
                            </h2>
                            <p className="text-[#FEFAE0]/60 text-lg leading-relaxed">
                                Not seeing the perfect fit right now? Stay connected and
                                follow us on LinkedIn for updates on future opportunities
                                and company news.
                            </p>

                            <div className="mt-8 space-y-4">
                                {[
                                    { icon: "✦", text: "We review every application personally" },
                                    { icon: "✦", text: "Hear back within 5–7 business days" },
                                    { icon: "✦", text: "Your resume stays on file for 6 months" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-3">
                                        <span className="text-[#24c9c0] text-sm mt-0.5">{item.icon}</span>
                                        <p className="text-[#FEFAE0]/55 text-sm">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — Application Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {appSuccess ? (
                                <div className="bg-white/[0.03] border border-[#24c9c0]/30 rounded-2xl p-10 text-center">
                                    <CheckCircle2 className="w-14 h-14 text-[#24c9c0] mx-auto mb-4" />
                                    <h3 className="text-2xl font-serif font-bold text-[#FEFAE0] mb-2">Application Sent!</h3>
                                    <p className="text-[#FEFAE0]/55">Thanks for reaching out. Our team will review your application and be in touch soon.</p>
                                    <button
                                        onClick={() => { setAppSuccess(false); setAppForm({ name: "", email: "", phone: "", message: "" }); setResumeFile(null); }}
                                        className="mt-6 text-[#24c9c0] text-sm hover:underline"
                                    >
                                        Submit another application
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        setAppSubmitting(true);
                                        try {
                                            let filePayload = null;
                                            if (resumeFile) {
                                                const base64 = await fileToBase64(resumeFile);
                                                filePayload = {
                                                    name: resumeFile.name,
                                                    data: base64,
                                                    type: resumeFile.type,
                                                };
                                            }
                                            const res = await fetch("/api/applications", {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({
                                                    name: appForm.name,
                                                    email: appForm.email,
                                                    phone: appForm.phone,
                                                    message: appForm.message || null,
                                                    file: filePayload,
                                                }),
                                            });
                                            if (!res.ok) throw new Error("Failed");
                                            setAppSuccess(true);
                                        } catch {
                                            alert("Something went wrong. Please try again.");
                                        } finally {
                                            setAppSubmitting(false);
                                        }
                                    }}
                                    className="bg-white/[0.03] border border-[#FEFAE0]/10 rounded-2xl p-7 md:p-9 space-y-5"
                                >
                                    {/* Full name */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                            Full name <span className="text-[#24c9c0]">•</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Jonathan Doe"
                                            value={appForm.name}
                                            onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                                            className="w-full bg-white/[0.04] border border-[#FEFAE0]/12 rounded-xl px-4 py-3.5 text-[#FEFAE0] placeholder-[#FEFAE0]/25 focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/40 transition-all text-sm"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                            Email address <span className="text-[#24c9c0]">•</span>
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="johndoe@gmail.com"
                                            value={appForm.email}
                                            onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                                            className="w-full bg-white/[0.04] border border-[#FEFAE0]/12 rounded-xl px-4 py-3.5 text-[#FEFAE0] placeholder-[#FEFAE0]/25 focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/40 transition-all text-sm"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                            Contact number <span className="text-[#24c9c0]">•</span>
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+1 98765 43210"
                                            value={appForm.phone}
                                            onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                                            className="w-full bg-white/[0.04] border border-[#FEFAE0]/12 rounded-xl px-4 py-3.5 text-[#FEFAE0] placeholder-[#FEFAE0]/25 focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/40 transition-all text-sm"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Type your message here"
                                            value={appForm.message}
                                            onChange={(e) => setAppForm({ ...appForm, message: e.target.value })}
                                            className="w-full bg-white/[0.04] border border-[#FEFAE0]/12 rounded-xl px-4 py-3.5 text-[#FEFAE0] placeholder-[#FEFAE0]/25 focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/40 transition-all text-sm resize-none"
                                        />
                                    </div>

                                    {/* Resume upload */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                            Upload resume <span className="text-[#24c9c0]">•</span>
                                        </label>
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            onDragOver={(e) => { e.preventDefault(); setResumeDragOver(true); }}
                                            onDragLeave={() => setResumeDragOver(false)}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                setResumeDragOver(false);
                                                const f = e.dataTransfer.files[0];
                                                if (f) setResumeFile(f);
                                            }}
                                            className={`border-2 border-dashed rounded-xl px-4 py-7 text-center cursor-pointer transition-all ${resumeDragOver
                                                ? "border-[#24c9c0] bg-[#24c9c0]/10"
                                                : resumeFile
                                                    ? "border-[#24c9c0]/50 bg-[#24c9c0]/5"
                                                    : "border-[#FEFAE0]/12 hover:border-[#FEFAE0]/25 hover:bg-white/[0.03]"
                                                }`}
                                        >
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const f = e.target.files?.[0];
                                                    if (f) setResumeFile(f);
                                                }}
                                            />
                                            {resumeFile ? (
                                                <div className="flex items-center justify-center gap-2 text-[#24c9c0]">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                    <span className="text-sm font-medium">{resumeFile.name}</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <Upload className="w-5 h-5 text-[#FEFAE0]/30 mx-auto mb-2" />
                                                    <p className="text-sm text-[#FEFAE0]/45">Click to choose a file or drag here</p>
                                                    <p className="text-xs text-[#FEFAE0]/25 mt-1">Size limit: 10 MB · PDF, DOC, DOCX, PNG, JPG</p>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={appSubmitting}
                                        className="w-full py-4 bg-[#24c9c0] hover:bg-[#20b3aa] text-black font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-60"
                                    >
                                        {appSubmitting ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <>
                                                Submit Application
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
