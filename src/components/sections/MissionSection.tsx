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
    <section className="py-20 bg-background" ref={ref}>
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
          {/* Multi-Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid-col-span-12 lg:grid-col-span-8 relative">
              {/* Image 1 */}
              <div className="overflow-hidden rounded-md">
                <img
                  src="https://www.r1rcm.com/storage/uploads/addc2fb7-8a73-4c29-8c07-57ae284c29e0/r1-our-agentic-approach-v02-light-am.gif"
                  alt="R1 Our Agentic Approach v02 LIGHT am"
                  loading="lazy"
                  className="diagram-image w-full"
                />
              </div>

              {/* Image 2 */}
              <div className="overflow-hidden rounded-md">
                <img
                  src="https://www.r1rcm.com/img/9477c398-1126-43f4-9294-c2c9fd6172ec/2-orchestration.png?fm=jpg&q=80&fit=max&crop=2020,2020,0,0&w=1000"
                  alt="2 orchestration"
                  loading="lazy"
                  className="diagram-image w-full absolute top-0 left-0 opacity-0"
                />
              </div>

              {/* Image 3 */}
              <div className="overflow-hidden rounded-md">
                <img
                  src="https://www.r1rcm.com/img/e1858fd0-7116-4e33-9ae0-8340c7765392/3-embedded-expertise.png?fm=jpg&q=80&fit=max&crop=,,,&w=1000"
                  alt="3 embedded expertise"
                  loading="lazy"
                  className="diagram-image w-full absolute top-0 left-0 opacity-0"
                />
              </div>

              {/* Image 4 */}
              <div className="overflow-hidden rounded-md">
                <img
                  src="https://www.r1rcm.com/img/6e0891ea-22cd-42f9-a65f-64bc3a748468/4-continuous-learning-and-improvement.png?fm=jpg&q=80&fit=max&crop=,,,&w=1000"
                  alt="4 continuous learning and improvement"
                  loading="lazy"
                  className="diagram-image w-full absolute top-0 left-0 opacity-0"
                />
              </div>

              {/* Image 5 */}
              <div className="overflow-hidden rounded-md">
                <img
                  src="https://www.r1rcm.com/img/90a0449e-6b79-4267-842a-145af2f6d61f/5-compliance-first-by-design.png?fm=jpg&q=80&fit=max&crop=,,,&w=1000"
                  alt="5 compliance first by design"
                  loading="lazy"
                  className="diagram-image w-full absolute top-0 left-0 opacity-0"
                />
              </div>

              {/* Image 6 */}
              <div className="overflow-hidden rounded-md">
                <img
                  src="https://www.r1rcm.com/img/0cae7485-d108-494b-bfb6-223b95c9df24/6-data-foundation.png?fm=jpg&q=80&fit=max&crop=,,,&w=1000"
                  alt="6 data foundation"
                  loading="lazy"
                  className="diagram-image w-full absolute top-0 left-0 opacity-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
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
