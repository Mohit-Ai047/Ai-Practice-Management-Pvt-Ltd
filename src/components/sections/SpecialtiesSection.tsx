import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { specialties } from "@/data/specialties";

export const SpecialtiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Adjusted for desktop (3 items) and mobile logic
  const itemsPerPage = 3;
  const totalPages = Math.ceil(specialties.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleSpecialties = specialties.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Specialties We Serve
          </span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Expertise Across All Medical Fields
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Our team has specialized experience in coding and billing for these
            core medical fields and beyond.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent h-12 w-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent h-12 w-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 min-h-[320px]">
            {visibleSpecialties.map((specialty, index) => (
              <Link to={`/specialties/${specialty.id}`} key={specialty.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#FEFAE0]/30 transition-all group shadow-lg h-full flex flex-col"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={specialty.image}
                      alt={specialty.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 inline-flex p-3 rounded-xl bg-[#FEFAE0]/90 text-black shadow-lg">
                      <specialty.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-6 text-left flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold mb-3 text-[#FEFAE0] group-hover:text-white transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                      {specialty.description}
                    </p>
                    <span className="text-xs font-semibold text-[#FEFAE0] uppercase tracking-wider group-hover:underline decoration-1 underline-offset-4">
                      Learn More
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Pagination Indicators (Dots) */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-secondary w-10"
                  : "bg-primary-foreground/20 w-2 hover:bg-primary-foreground/40"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-primary-foreground/80 mb-6">
            Don't see your specific field? Our team adapts to every medical specialty's unique coding requirements.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent font-bold px-8"
          >
            <Link to="/contact">Discuss Your Specialty Requirements</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};