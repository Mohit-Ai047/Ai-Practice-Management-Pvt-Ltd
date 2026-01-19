import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  CreditCard,
  ClipboardCheck,
  Users,
  BarChart3,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "Revenue Cycle Management",
    description:
      "End-to-end RCM solutions that optimize every step of your revenue cycle, from patient registration to final payment.",
    features: ["Claims submission", "Payment posting", "AR management"],
  },
  {
    icon: CreditCard,
    title: "Medical Billing Services",
    description:
      "Accurate and timely billing services that maximize reimbursements and minimize claim denials.",
    features: ["Charge entry", "Claim scrubbing", "Denial management"],
  },
  {
    icon: ClipboardCheck,
    title: "Claims Processing",
    description:
      "Streamlined claims processing with advanced technology to ensure faster approvals and payments.",
    features: ["Electronic submission", "Status tracking", "Appeals handling"],
  },
  {
    icon: Users,
    title: "Credentialing Services",
    description:
      "Comprehensive credentialing and re-credentialing services to keep your practice compliant.",
    features: ["Provider enrollment", "CAQH management", "Payer contracts"],
  },
  {
    icon: BarChart3,
    title: "Practice Analytics",
    description:
      "Data-driven insights and reporting to help you make informed decisions about your practice.",
    features: ["KPI dashboards", "Financial reports", "Trend analysis"],
  },
  {
    icon: Shield,
    title: "Compliance & Auditing",
    description:
      "Ensure your practice stays compliant with healthcare regulations and coding standards.",
    features: ["HIPAA compliance", "Coding audits", "Documentation review"],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            What We Offer
          </span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From billing to compliance, we provide everything your practice needs
            to thrive financially.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="elevated-card bg-card rounded-xl p-6 h-full border border-border hover:border-primary/30 transition-all">
                {/* Icon */}
                <div className="mb-5">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
          >
            <a href="#contact">
              Request Full Service Details
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
