import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Plus, Edit2, Trash2, X, Check, Loader2, Briefcase, MapPin, Clock, Lock, Eye, EyeOff, ShieldCheck, Users, Mail, Phone, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// ─── Change this to your desired admin password ───────────────────────────────
const ADMIN_PASSWORD = "AiPM@Admin2025";
// ─────────────────────────────────────────────────────────────────────────────

interface Job {
    id: number;
    title: string;
    description: string;
    location: string | null;
    status: string;
    created_at: string;
}

interface Application {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string | null;
    resume_name: string | null;
    status: string;
    created_at: string;
}

const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 280, damping: 28 } },
    exit: { opacity: 0, scale: 0.96, y: 20 },
};

export default function AdminJobsPage() {
    // ── Password gate ──────────────────────────────────────────────────────────
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem("aipm_admin_auth") === "true";
    });
    const [pwInput, setPwInput] = useState("");
    const [pwError, setPwError] = useState(false);
    const [pwShaking, setPwShaking] = useState(false);
    const [showPw, setShowPw] = useState(false);
    const [pwChecking, setPwChecking] = useState(false);
    const pwInputRef = useRef<HTMLInputElement>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setPwChecking(true);
        // Brief delay for UX
        await new Promise(r => setTimeout(r, 600));
        setPwChecking(false);
        if (pwInput === ADMIN_PASSWORD) {
            sessionStorage.setItem("aipm_admin_auth", "true");
            setIsAuthenticated(true);
            setPwError(false);
        } else {
            setPwError(true);
            setPwShaking(true);
            setPwInput("");
            setTimeout(() => setPwShaking(false), 600);
            setTimeout(() => pwInputRef.current?.focus(), 50);
        }
    };
    // ──────────────────────────────────────────────────────────────────────────

    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentJob, setCurrentJob] = useState<Job | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        status: "active",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const { toast } = useToast();

    const [activeTab, setActiveTab] = useState<"jobs" | "applications">("jobs");
    const [applications, setApplications] = useState<Application[]>([]);
    const [appsLoading, setAppsLoading] = useState(false);
    const [deletingAppId, setDeletingAppId] = useState<number | null>(null);

    const fetchJobs = () => {
        if (!isAuthenticated) return;
        setLoading(true);
        fetch("/api/jobs?admin=true")
            .then((res) => res.json())
            .then((data) => {
                setJobs(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const fetchApplications = () => {
        if (!isAuthenticated) return;
        setAppsLoading(true);
        fetch("/api/applications")
            .then((res) => res.json())
            .then((data) => { setApplications(Array.isArray(data) ? data : []); setAppsLoading(false); })
            .catch(() => { setAppsLoading(false); });
    };

    const handleDeleteApp = async (id: number) => {
        if (!confirm("Delete this application?")) return;
        setDeletingAppId(id);
        try {
            const res = await fetch(`/api/applications?id=${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed");
            toast({ title: "Deleted", description: "Application removed." });
            fetchApplications();
        } catch {
            toast({ variant: "destructive", title: "Error", description: "Failed to delete." });
        } finally {
            setDeletingAppId(null);
        }
    };

    useEffect(() => {
        if (isAuthenticated) { fetchJobs(); fetchApplications(); }
    }, [isAuthenticated]);

    // ── Password Lock Screen ───────────────────────────────────────────────────
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4">
                {/* Background glows */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#24c9c0]/8 rounded-full blur-[130px]" />
                    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#24c9c0]/4 rounded-full blur-[100px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" as const }}
                    className="relative w-full max-w-md"
                >
                    {/* Card */}
                    <motion.div
                        animate={pwShaking ? {
                            x: [0, -12, 12, -10, 10, -6, 6, 0],
                            transition: { duration: 0.5 }
                        } : {}}
                        className="bg-zinc-950 border border-[#FEFAE0]/10 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Top teal accent */}
                        <div className="h-0.5 w-full bg-gradient-to-r from-[#24c9c0] via-[#24c9c0]/60 to-transparent" />

                        <div className="p-8 md:p-10">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#24c9c0]/10 border border-[#24c9c0]/25 flex items-center justify-center">
                                    <Lock className="w-7 h-7 text-[#24c9c0]" />
                                </div>
                            </div>

                            {/* Heading */}
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-serif font-bold text-[#FEFAE0] mb-2">
                                    Admin Access
                                </h1>
                                <p className="text-[#FEFAE0]/45 text-sm">
                                    Ai Practice Management · Careers Admin
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="relative">
                                    <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/45 mb-2 font-medium">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FEFAE0]/25" />
                                        <input
                                            ref={pwInputRef}
                                            required
                                            type={showPw ? "text" : "password"}
                                            value={pwInput}
                                            onChange={(e) => {
                                                setPwInput(e.target.value);
                                                if (pwError) setPwError(false);
                                            }}
                                            placeholder="Enter admin password"
                                            autoFocus
                                            className={`w-full bg-white/[0.04] border rounded-xl pl-11 pr-12 py-3.5 text-[#FEFAE0] placeholder-[#FEFAE0]/20 focus:outline-none focus:ring-2 transition-all text-sm ${pwError
                                                ? "border-red-500/60 focus:ring-red-500/30 focus:border-red-500/60"
                                                : "border-[#FEFAE0]/12 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/40"
                                                }`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPw(v => !v)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FEFAE0]/30 hover:text-[#FEFAE0]/60 transition-colors"
                                        >
                                            {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>

                                    {/* Error message */}
                                    <AnimatePresence>
                                        {pwError && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="mt-2 text-red-400 text-xs flex items-center gap-1.5"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                                                Incorrect password. Please try again.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <button
                                    type="submit"
                                    disabled={pwChecking || !pwInput}
                                    className="w-full py-3.5 bg-[#24c9c0] hover:bg-[#20b3aa] disabled:opacity-50 text-black font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm mt-2"
                                >
                                    {pwChecking ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>
                                            <ShieldCheck className="w-4 h-4" />
                                            Unlock Panel
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Footer note */}
                    <p className="text-center text-[#FEFAE0]/20 text-xs mt-5">
                        Authorised personnel only · Ai Practice Management LLC
                    </p>
                </motion.div>
            </div>
        );
    }
    // ──────────────────────────────────────────────────────────────────────────

    const openModal = (job: Job | null = null) => {
        if (job) {
            setCurrentJob(job);
            setFormData({
                title: job.title,
                description: job.description,
                location: job.location || "",
                status: job.status,
            });
        } else {
            setCurrentJob(null);
            setFormData({ title: "", description: "", location: "", status: "active" });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentJob(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const url = currentJob ? `/api/jobs?id=${currentJob.id}` : "/api/jobs";
            const method = currentJob ? "PUT" : "POST";
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Failed to save job");
            toast({
                title: "Success",
                description: `Job ${currentJob ? "updated" : "created"} successfully.`,
            });
            fetchJobs();
            closeModal();
        } catch {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this job posting?")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/jobs?id=${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete");
            toast({ title: "Deleted", description: "Job removed successfully." });
            fetchJobs();
        } catch {
            toast({ variant: "destructive", title: "Error", description: "Failed to delete job." });
        } finally {
            setDeletingId(null);
        }
    };

    const formatDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            });
        } catch {
            return dateStr;
        }
    };

    return (
        <div className="min-h-screen bg-black text-[#FEFAE0] pt-28 pb-16">
            {/* Background decoration */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#24c9c0]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#24c9c0]/3 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <div className="w-8 h-8 rounded-lg bg-[#24c9c0]/15 border border-[#24c9c0]/30 flex items-center justify-center">
                                <Briefcase className="w-4 h-4 text-[#24c9c0]" />
                            </div>
                            <span className="text-[#24c9c0] text-xs uppercase tracking-widest font-medium">
                                Admin Panel
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#FEFAE0]">
                            Manage Careers
                        </h1>
                        <p className="text-[#FEFAE0]/50 mt-1 text-sm">
                            Add, edit, or remove job listings displayed on the Careers page.
                        </p>
                    </div>

                    <button
                        onClick={() => openModal()}
                        className="flex items-center gap-2 bg-[#24c9c0] hover:bg-[#20b3aa] text-black px-5 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-[#24c9c0]/10 text-sm self-start sm:self-auto"
                    >
                        <Plus className="w-4 h-4" />
                        Add Job Posting
                    </button>
                </motion.div>

                {/* Tab switcher */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="flex gap-1 mb-8 bg-white/[0.03] rounded-xl p-1 border border-[#FEFAE0]/8 w-fit"
                >
                    <button
                        onClick={() => setActiveTab("jobs")}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "jobs" ? "bg-[#24c9c0] text-black" : "text-[#FEFAE0]/50 hover:text-[#FEFAE0]/80 hover:bg-white/[0.04]"}`}
                    >
                        <Briefcase className="w-4 h-4" />
                        Job Postings
                    </button>
                    <button
                        onClick={() => setActiveTab("applications")}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "applications" ? "bg-[#24c9c0] text-black" : "text-[#FEFAE0]/50 hover:text-[#FEFAE0]/80 hover:bg-white/[0.04]"}`}
                    >
                        <Users className="w-4 h-4" />
                        Applications
                        {applications.length > 0 && (
                            <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold ${activeTab === "applications" ? "bg-black/20 text-black" : "bg-[#24c9c0]/20 text-[#24c9c0]"}`}>
                                {applications.length}
                            </span>
                        )}
                    </button>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
                >
                    {[
                        { label: "Total Listings", value: loading ? "—" : jobs.length },
                        {
                            label: "Active",
                            value: loading ? "—" : jobs.filter((j) => j.status === "active").length,
                        },
                        {
                            label: "Inactive",
                            value: loading ? "—" : jobs.filter((j) => j.status !== "active").length,
                        },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white/[0.03] border border-[#FEFAE0]/10 rounded-xl px-5 py-4"
                        >
                            <p className="text-2xl font-serif font-bold text-[#24c9c0]">{stat.value}</p>
                            <p className="text-xs text-[#FEFAE0]/45 mt-0.5 uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Job table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="bg-white/[0.02] border border-[#FEFAE0]/10 rounded-2xl overflow-hidden"
                >
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-32 gap-3">
                            <Loader2 className="w-9 h-9 text-[#24c9c0] animate-spin" />
                            <p className="text-[#FEFAE0]/40 text-sm">Loading jobs...</p>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="text-center py-28">
                            <Briefcase className="w-12 h-12 text-[#FEFAE0]/15 mx-auto mb-4" />
                            <p className="text-[#FEFAE0]/50 text-lg">No job listings yet.</p>
                            <p className="text-[#FEFAE0]/30 mt-2 text-sm">
                                Click "Add Job Posting" to create your first listing.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#FEFAE0]/10">
                                        <th className="px-6 py-4 text-[#FEFAE0]/40 font-medium text-xs uppercase tracking-widest">
                                            Role
                                        </th>
                                        <th className="px-6 py-4 text-[#FEFAE0]/40 font-medium text-xs uppercase tracking-widest hidden md:table-cell">
                                            Location
                                        </th>
                                        <th className="px-6 py-4 text-[#FEFAE0]/40 font-medium text-xs uppercase tracking-widest hidden sm:table-cell">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-[#FEFAE0]/40 font-medium text-xs uppercase tracking-widest hidden lg:table-cell">
                                            Posted
                                        </th>
                                        <th className="px-6 py-4 text-right text-[#FEFAE0]/40 font-medium text-xs uppercase tracking-widest">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job, i) => (
                                        <motion.tr
                                            key={job.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05, duration: 0.3 }}
                                            className="border-b border-[#FEFAE0]/[0.06] hover:bg-white/[0.03] transition-colors group"
                                        >
                                            {/* Title */}
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-lg bg-[#24c9c0]/10 flex items-center justify-center flex-shrink-0">
                                                        <Briefcase className="w-4 h-4 text-[#24c9c0]" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-[#FEFAE0] group-hover:text-white transition-colors">
                                                            {job.title}
                                                        </p>
                                                        <p className="text-xs text-[#FEFAE0]/35 mt-0.5 line-clamp-1 max-w-[300px]">
                                                            {job.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Location */}
                                            <td className="px-6 py-5 hidden md:table-cell">
                                                <span className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/50">
                                                    <MapPin className="w-3.5 h-3.5 text-[#24c9c0]/70" />
                                                    {job.location || "Remote"}
                                                </span>
                                            </td>

                                            {/* Status */}
                                            <td className="px-6 py-5 hidden sm:table-cell">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${job.status === "active"
                                                        ? "bg-[#24c9c0]/10 text-[#24c9c0] border-[#24c9c0]/20"
                                                        : "bg-[#FEFAE0]/5 text-[#FEFAE0]/40 border-[#FEFAE0]/10"
                                                        }`}
                                                >
                                                    <span
                                                        className={`w-1.5 h-1.5 rounded-full ${job.status === "active"
                                                            ? "bg-[#24c9c0]"
                                                            : "bg-[#FEFAE0]/30"
                                                            }`}
                                                    />
                                                    {job.status === "active" ? "Active" : "Inactive"}
                                                </span>
                                            </td>

                                            {/* Date */}
                                            <td className="px-6 py-5 hidden lg:table-cell">
                                                <span className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/40">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {formatDate(job.created_at)}
                                                </span>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => openModal(job)}
                                                        className="p-2 rounded-lg bg-[#FEFAE0]/5 hover:bg-[#24c9c0]/15 text-[#FEFAE0]/50 hover:text-[#24c9c0] transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(job.id)}
                                                        disabled={deletingId === job.id}
                                                        className="p-2 rounded-lg bg-[#FEFAE0]/5 hover:bg-red-500/15 text-[#FEFAE0]/50 hover:text-red-400 transition-colors disabled:opacity-50"
                                                        title="Delete"
                                                    >
                                                        {deletingId === job.id ? (
                                                            <Loader2 className="w-4 h-4 animate-spin" />
                                                        ) : (
                                                            <Trash2 className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* ── Modal ── */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={closeModal}
                            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
                        />
                        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                            <motion.div
                                key="modal"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-full max-w-2xl bg-zinc-950 border border-[#FEFAE0]/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                            >
                                {/* Teal accent line */}
                                <div className="h-0.5 w-full bg-gradient-to-r from-[#24c9c0] via-[#24c9c0]/60 to-transparent flex-shrink-0" />

                                {/* Modal header */}
                                <div className="flex items-center justify-between px-6 py-5 border-b border-[#FEFAE0]/10 flex-shrink-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#24c9c0]/15 border border-[#24c9c0]/30 flex items-center justify-center">
                                            <Briefcase className="w-4 h-4 text-[#24c9c0]" />
                                        </div>
                                        <h2 className="text-lg font-serif font-bold text-[#FEFAE0]">
                                            {currentJob ? "Edit Job Posting" : "New Job Posting"}
                                        </h2>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="w-8 h-8 rounded-lg bg-[#FEFAE0]/5 hover:bg-[#FEFAE0]/10 text-[#FEFAE0]/50 hover:text-[#FEFAE0] transition-colors flex items-center justify-center"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
                                    {/* Job Title */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                            Job Title <span className="text-[#24c9c0]">*</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) =>
                                                setFormData({ ...formData, title: e.target.value })
                                            }
                                            className="w-full bg-white/[0.04] border border-[#FEFAE0]/15 rounded-xl px-4 py-3 text-[#FEFAE0] placeholder-[#FEFAE0]/25 focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/50 transition-all text-sm"
                                            placeholder="e.g. Senior Medical Billing Specialist"
                                        />
                                    </div>

                                    {/* Location & Status */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.location}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        location: e.target.value,
                                                    })
                                                }
                                                className="w-full bg-white/[0.04] border border-[#FEFAE0]/15 rounded-xl px-4 py-3 text-[#FEFAE0] placeholder-[#FEFAE0]/25 focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/50 transition-all text-sm"
                                                placeholder="e.g. Remote, New York"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                                Status
                                            </label>
                                            <select
                                                value={formData.status}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        status: e.target.value,
                                                    })
                                                }
                                                className="w-full bg-white/[0.04] border border-[#FEFAE0]/15 rounded-xl px-4 py-3 text-[#FEFAE0] focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/50 transition-all text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="active" className="bg-zinc-900">
                                                    Active
                                                </option>
                                                <option value="inactive" className="bg-zinc-900">
                                                    Inactive
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#FEFAE0]/50 mb-2 font-medium">
                                            Job Description <span className="text-[#24c9c0]">*</span>
                                        </label>
                                        <textarea
                                            required
                                            rows={8}
                                            value={formData.description}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    description: e.target.value,
                                                })
                                            }
                                            className="w-full bg-white/[0.04] border border-[#FEFAE0]/15 rounded-xl px-4 py-3 text-[#FEFAE0] placeholder-[#FEFAE0]/25 focus:outline-none focus:ring-2 focus:ring-[#24c9c0]/40 focus:border-[#24c9c0]/50 transition-all resize-y text-sm leading-relaxed"
                                            placeholder="Describe the role, key responsibilities, requirements, and any qualifications..."
                                        />
                                    </div>

                                    {/* Actions */}
                                    <div className="flex justify-end gap-3 pt-2 border-t border-[#FEFAE0]/10">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="px-5 py-2.5 bg-[#FEFAE0]/5 hover:bg-[#FEFAE0]/10 text-[#FEFAE0]/70 hover:text-[#FEFAE0] rounded-xl font-medium transition-colors text-sm"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-6 py-2.5 bg-[#24c9c0] hover:bg-[#20b3aa] text-black rounded-xl font-semibold transition-colors flex items-center gap-2 min-w-[130px] justify-center text-sm disabled:opacity-60"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <>
                                                    <Check className="w-4 h-4" />
                                                    {currentJob ? "Update Job" : "Publish Job"}
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

            {/* ── Applications Tab ── */}
            {activeTab === "applications" && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {appsLoading ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-3">
                            <Loader2 className="w-8 h-8 text-[#24c9c0] animate-spin" />
                            <p className="text-[#FEFAE0]/40 text-sm">Loading applications...</p>
                        </div>
                    ) : applications.length === 0 ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-[#FEFAE0]/8 rounded-2xl">
                            <Users className="w-10 h-10 text-[#FEFAE0]/15 mx-auto mb-3" />
                            <p className="text-[#FEFAE0]/40 text-sm">No applications received yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {applications.map((app) => (
                                <motion.div
                                    key={app.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white/[0.03] border border-[#FEFAE0]/10 rounded-2xl p-6 hover:border-[#24c9c0]/25 transition-all"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#24c9c0]/10 border border-[#24c9c0]/20 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-[#24c9c0] font-bold text-sm">{app.name.charAt(0).toUpperCase()}</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-[#FEFAE0]">{app.name}</h3>
                                                    <p className="text-[#FEFAE0]/35 text-xs">Applied {formatDate(app.created_at)}</p>
                                                </div>
                                                <span className={`ml-auto md:ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium ${app.status === "new" ? "bg-[#24c9c0]/15 text-[#24c9c0] border border-[#24c9c0]/30" : "bg-white/5 text-[#FEFAE0]/50 border border-[#FEFAE0]/10"}`}>
                                                    {app.status === "new" ? "\u2726 New" : app.status}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-4 pl-[52px]">
                                                <a href={`mailto:${app.email}`} className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/55 hover:text-[#24c9c0] transition-colors">
                                                    <Mail className="w-3.5 h-3.5" />{app.email}
                                                </a>
                                                <a href={`tel:${app.phone}`} className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/55 hover:text-[#24c9c0] transition-colors">
                                                    <Phone className="w-3.5 h-3.5" />{app.phone}
                                                </a>
                                                {app.resume_name && (
                                                    <span className="flex items-center gap-1.5 text-sm text-[#FEFAE0]/55">
                                                        <FileText className="w-3.5 h-3.5" />{app.resume_name}
                                                    </span>
                                                )}
                                            </div>
                                            {app.message && (
                                                <div className="pl-[52px]">
                                                    <p className="text-[#FEFAE0]/45 text-sm leading-relaxed bg-white/[0.02] rounded-xl p-3 border border-[#FEFAE0]/5">
                                                        &ldquo;{app.message}&rdquo;
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleDeleteApp(app.id)}
                                            disabled={deletingAppId === app.id}
                                            className="flex-shrink-0 p-2.5 text-[#FEFAE0]/30 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors disabled:opacity-50"
                                            title="Delete application"
                                        >
                                            {deletingAppId === app.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
}
