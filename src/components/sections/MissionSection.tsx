import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Award } from "lucide-react";
import missionImage from "@/assets/mission-image.jpg";
import visionImage from "@/assets/vision-image.jpg";

const values = [
  {
    icon: Heart,
    title: "C.A.R.E.",
    description: "Customers Are Really Everything",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to industry-leading standards",
  },
];

export const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-secondary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Mission
              </span>
            </div>
            <div className="section-divider mb-6" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Revolutionizing Medical Billing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At AI Practice Management, our mission is to revolutionize medical
              billing by delivering seamless, efficient, and automated solutions.
              With over a decade of expertise across various specialties, we are
              committed to simplifying financial operations for healthcare
              providers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By prioritizing <strong className="text-foreground">quality and accuracy</strong>,
              we ensure faster reimbursements, reduced administrative burdens, and
              enhanced revenue cycles — empowering our clients to focus on what
              matters most: <strong className="text-primary">Patient's C.A.R.E</strong>.
            </p>

            {/* Values */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-accent rounded-lg"
                >
                  <div className="p-2 bg-primary rounded-lg">
                    <value.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={missionImage}
                alt="Healthcare team collaboration"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={visionImage}
                alt="Modern medical practice"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-secondary/30 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-secondary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Vision
              </span>
            </div>
            <div className="section-divider mb-6" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Leading Through Innovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              "Our vision is to become the most trusted partner for healthcare
              providers nationwide, setting new standards in medical billing through{" "}
              <strong className="text-foreground">innovation and excellence</strong>."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We aspire to lead the industry with cutting-edge automation,
              transparent processes, and unwavering dedication to quality. By
              continuously refining our services, we aim to build a future where
              medical billing is effortless, reliable, and empowering for every
              practice we serve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
