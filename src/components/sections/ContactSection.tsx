import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(302) 741-4001",
    href: "tel:(302)741-4001",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@aipracticemanagement.us",
    href: "mailto:info@aipracticemanagement.us",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Serving Healthcare Providers Nationwide",
    href: null,
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", specialty: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Get In Touch
          </span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Optimize Your Revenue?
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact us today for a free consultation and discover how we can help
            your practice thrive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-serif text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-foreground/10">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-secondary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Stay Connected
                </p>
                <div className="flex gap-3">
                  {["LinkedIn", "Facebook", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 bg-primary-foreground/10 rounded-lg text-sm hover:bg-primary-foreground/20 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. John Smith"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@practice.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Medical Specialty
                      </label>
                      <Input
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        placeholder="e.g., Cardiology"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How Can We Help? *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your practice and billing challenges..."
                      rows={4}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Request Free Consultation
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy.
                    We'll never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
