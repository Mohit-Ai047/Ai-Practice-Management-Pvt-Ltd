import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    stat: "30%",
    title: "Revenue Increase",
    description:
      "Our clients typically see up to 30% improvement in their revenue collection rates.",
  },
  {
    icon: Clock,
    stat: "48h",
    title: "Faster Turnaround",
    description:
      "Claims processed and submitted within 48 hours of receiving complete documentation.",
  },
  {
    icon: DollarSign,
    stat: "98%",
    title: "First-Pass Rate",
    description:
      "Our clean claim rate ensures minimal rejections and faster payments.",
  },
  {
    icon: CheckCircle,
    stat: "100%",
    title: "HIPAA Compliant",
    description:
      "Full compliance with all healthcare regulations and security standards.",
  },
  {
    icon: Users,
    stat: "500+",
    title: "Providers Served",
    description:
      "Trusted by hundreds of healthcare providers across the nation.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    title: "Support Available",
    description:
      "Round-the-clock customer support to address your billing questions.",
  },
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Benefits of Working With AIPM
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the difference that expertise and dedication can make for
            your practice's financial health.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center group"
            >
              {/* Icon with stat */}
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  {benefit.stat}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Trusted by Leading Healthcare Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {["HIPAA", "AAPC", "AHIMA", "CMS", "HBMA"].map((badge) => (
              <div
                key={badge}
                className="text-2xl font-serif font-bold text-muted-foreground"
              >
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
