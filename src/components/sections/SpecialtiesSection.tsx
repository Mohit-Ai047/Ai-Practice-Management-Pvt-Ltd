import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Stethoscope,
  Heart,
  Brain,
  Bone,
  Baby,
  Eye,
  Activity,
  Pill,
  Syringe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = [
  {
    icon: Stethoscope,
    name: "Internal Medicine",
    description: "Comprehensive billing for general practitioners",
  },
  {
    icon: Heart,
    name: "Cardiology",
    description: "Specialized heart and vascular care billing",
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Complex neurological procedure coding",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Musculoskeletal and surgical billing",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description: "Child healthcare billing expertise",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Vision and eye care billing services",
  },
  {
    icon: Activity,
    name: "Urgent Care",
    description: "Fast-paced emergency billing solutions",
  },
  {
    icon: Pill,
    name: "Pain Management",
    description: "Chronic pain treatment billing",
  },
  {
    icon: Syringe,
    name: "Dermatology",
    description: "Skin care and cosmetic procedure billing",
  },
];

export const SpecialtiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <section id="specialties" className="py-20 bg-primary text-primary-foreground" ref={ref}>
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
            Our team has specialized experience in billing for a wide range of
            medical specialties.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 overflow-hidden px-4">
            {visibleSpecialties.map((specialty, index) => (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="inline-flex p-4 rounded-full bg-secondary/20 text-secondary mb-4">
                  <specialty.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {specialty.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Specialties Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-primary-foreground/80 mb-4">
            Don't see your specialty? We work with all medical fields.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent font-semibold"
          >
            <a href="#contact">Inquire About Your Specialty</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
