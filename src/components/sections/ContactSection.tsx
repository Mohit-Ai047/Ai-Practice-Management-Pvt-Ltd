import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7069791126",
    href: "tel:+917069791126",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@aipracticemanagement.com",
    href: "mailto:info@aipracticemanagement.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "B 417,418 Arjun Icconic opp. Satya 2 Shashtrinagar Ahmedabad, Gujarat, India",
    href: "https://maps.app.goo.gl/WfhqkweTSuews2tSA",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", specialty: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-black text-white overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Get In Touch
          </span>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Optimize Your Revenue?
          </h2>
          <p className="text-white/70 text-lg">
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
            <div className="bg-zinc-900 rounded-2xl p-5 sm:p-8 border border-white/10 w-full">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/5 text-secondary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.icon === MapPin ? "_blank" : undefined}
                          rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                          className="font-medium text-white hover:text-secondary transition-colors break-all text-sm sm:text-base lg:text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white break-words text-sm sm:text-base lg:text-lg">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 w-full">
                <a
                  href="https://www.linkedin.com/company/ai-practice-management-PVT LTD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 rounded-lg text-xs sm:text-sm text-white hover:bg-white/10 transition-colors"
                >
                  <i className="fa-brands fa-linkedin-in text-[#0A66C2]"></i>
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/aipm_PVT LTD2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 rounded-lg text-xs sm:text-sm text-white hover:bg-white/10 transition-colors"
                >
                  <i className="fa-brands fa-instagram text-pink-500"></i>
                  Instagram
                </a>
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
            <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-4 rounded-full bg-secondary/10 text-secondary mb-4">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-white/70">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. John Smith"
                        required
                        className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@practice.com"
                        required
                        className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Medical Specialty
                      </label>
                      <Input
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        placeholder="e.g., Cardiology"
                        className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      How Can We Help? *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your practice and billing challenges..."
                      rows={4}
                      required
                      className="bg-black/50 border-white/10 text-white placeholder:text-white/30 resize-none focus-visible:ring-secondary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Request Free Consultation
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-white/40 text-center">
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