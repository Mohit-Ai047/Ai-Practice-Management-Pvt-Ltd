import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { specialties } from "@/data/specialties";
import NotFound from "@/pages/NotFound";

const SpecialtyDetailPage = () => {
    const { id } = useParams();
    const specialty = specialties.find((s) => s.id === id);

    if (!specialty) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Specialty Not Found</h1>
                    <Button asChild variant="outline" className="text-black bg-white">
                        <Link to="/specialties">Back to Specialties</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Button asChild variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 pl-0">
                        <Link to="/specialties" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to All Specialties
                        </Link>
                    </Button>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-[#FEFAE0]/10 flex items-center justify-center border border-[#FEFAE0]/20">
                            <specialty.icon className="w-10 h-10 text-[#FEFAE0]" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FEFAE0] leading-tight">
                            {specialty.name}
                        </h1>

                        <p className="text-xl text-white/80 leading-relaxed">
                            {specialty.description}
                        </p>

                        <div className="w-full h-px bg-white/10 my-8" />

                        <div className="prose prose-invert max-w-none text-lg text-white/70 leading-relaxed space-y-4">
                            {Array.isArray(specialty.fullDescription) ? (
                                specialty.fullDescription.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p>{specialty.fullDescription}</p>
                            )}
                        </div>

                        <div className="pt-8">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#FEFAE0] text-black hover:bg-[#FEFAE0]/90 font-semibold px-8 rounded-full"
                            >
                                <Link to="/contact">
                                    Get a Quote for {specialty.name}
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right side - could be an image or additional features */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative block max-w-sm mx-auto w-full mt-12 md:mt-32"
                    >
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 relative group shadow-2xl shadow-[#FEFAE0]/5">
                            <img
                                src={specialty.image}
                                alt={specialty.name}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SpecialtyDetailPage;
