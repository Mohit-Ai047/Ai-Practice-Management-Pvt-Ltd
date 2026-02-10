import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { specialties } from "@/data/specialties";

export const SpecialtiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <span className="text-sm font-medium text-[#FEFAE0] uppercase tracking-wider">
            Specialties We Serve
          </span>
          <div className="w-20 h-0.5 bg-[#FEFAE0]/30 mx-auto mt-4 mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-white">
            Expertise Across All Medical Fields
          </h2>
          <p className="text-white/80 text-lg">
            Our team has specialized experience in coding and billing for these
            core medical fields and beyond.
          </p>
        </motion.div>

        {/* Grid Layout - 3 columns */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/specialties/${specialty.id}`} className="block h-full">
                  <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#FEFAE0]/30 transition-all group shadow-lg h-full flex flex-col">
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-white/80 mb-6">
            Don't see your specific field? Our team adapts to every medical specialty's unique coding requirements.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#FEFAE0] text-[#FEFAE0] hover:bg-[#FEFAE0] hover:text-black bg-transparent font-bold px-8 transition-colors"
          >
            <Link to="/contact">Discuss Your Specialty Requirements</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};