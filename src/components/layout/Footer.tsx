import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-2.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const footerLinks = {
  services: [
    { label: "Revenue Cycle Management", href: "/rcm" },
    { label: "Medical Billing", href: "/medical-billing" },
    { label: "Denial Management", href: "/denial-management" },
    { label: "AR Claim Services", href: "/ar-claim-services" },
    { label: "Quality Assurance & Audit", href: "/quality-assurance" },
    { label: "AI-Powered Revenue Automation", href: "/ai-revenue-automation" },
  ],
  specialties: [
    { label: "Pain Medicine", href: "/specialties/pain-medicine-specialist" },
    { label: "Gastroenterology", href: "/specialties/gastroenterologists" },
    { label: "Spine Surgery", href: "/specialties/spine-surgeon" },
    { label: "Orthopedics", href: "/specialties/doctor-of-orthopedics" },
    { label: "Neurosurgery", href: "/specialties/neurosurgeons" },
    { label: "View All Specialties", href: "/specialties" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "Benefits", href: "/benefits" },
    { label: "Specialties", href: "/specialties" },
    { label: "Contact", href: "/contact" },
  ],
};

const LinkItem = ({
  label,
  href,
  isActive,
  onHover
}: {
  label: string;
  href: string;
  isActive: boolean;
  onHover: (label: string | null) => void;
}) => (
  <li
    className="relative group flex items-center w-fit"
    onMouseEnter={() => onHover(label)}
    onMouseLeave={() => onHover(null)}
  >
    <Link
      to={href}
      className="text-[#FEFAE0] hover:text-[#24c9c0] transition-colors duration-300 ease-out text-base flex items-center w-fit relative z-20"
    >
      <span className="relative z-10">{label}</span>
    </Link>

    <AnimatePresence>
      {isActive && (
        <motion.div
          layoutId="footer-hover-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-1/2 -translate-y-1/2 left-full ml-2 origin-left w-auto min-w-[12rem] bg-[#24c9c0] rounded-xl py-8 px-6 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center hidden md:flex pointer-events-none"
        >

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="text-xl font-bold font-serif text-white leading-tight whitespace-nowrap w-full"
          >
            {label}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  </li>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="bg-black text-[#FEFAE0] overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Brand */}
          <div className="lg:w-[40%] pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black border border-[#FEFAE0]/30 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={logo} alt="Ai Practice Management" className="w-full h-full object-contain p-1 brightness-0 invert" />
              </div>
              <h3 className="font-serif font-bold text-base sm:text-xl leading-tight whitespace-nowrap">
                Ai Practice Management LLC
              </h3>
            </div>
            <p className="text-[#FEFAE0] mb-6 max-w-sm leading-relaxed text-sm sm:text-lg">
              Exceeding expectations with quality RCM services. Your trusted
              partner in healthcare revenue optimization and administrative excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:(302)741-4001"
                className="flex items-center gap-3 text-[#FEFAE0] hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FEFAE0]/10 flex items-center justify-center group-hover:bg-[#FEFAE0]/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-base">(302) 741-4001</span>
              </a>
              <a
                href="mailto:info@aipracticemanagement.com"
                className="flex items-center gap-3 text-[#FEFAE0] hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FEFAE0]/10 flex items-center justify-center group-hover:bg-[#FEFAE0]/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-base">info@aipracticemanagement.com</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8+The+Green+STE+22363+Dover+DE+19901"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#FEFAE0] hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FEFAE0]/10 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-[#FEFAE0]/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-base leading-relaxed">
                  8 The Green STE 22363, Dover, 19901<br />
                  Delaware, U.S.A.
                </span>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-8 lg:pr-32">
            {/* Services Links */}
            <div>
              <div className="h-12 flex items-center mb-6">
                <h4 className="font-bold text-[#FEFAE0] uppercase text-sm tracking-widest">Services</h4>
              </div>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <LinkItem
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    isActive={hoveredLink === link.label}
                    onHover={setHoveredLink}
                  />
                ))}
              </ul>
            </div>

            {/* Specialties Links */}
            <div>
              <div className="h-12 flex items-center mb-6">
                <h4 className="font-bold text-[#FEFAE0] uppercase text-sm tracking-widest">Specialties</h4>
              </div>
              <ul className="space-y-4">
                {footerLinks.specialties.map((link) => (
                  <LinkItem
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    isActive={hoveredLink === link.label}
                    onHover={setHoveredLink}
                  />
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <div className="h-12 flex items-center mb-6">
                <h4 className="font-bold text-[#FEFAE0] uppercase text-sm tracking-widest">Company</h4>
              </div>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <LinkItem
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    isActive={hoveredLink === link.label}
                    onHover={setHoveredLink}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#FEFAE0]/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#FEFAE0]/60 text-sm text-center md:text-left leading-relaxed">
            © {currentYear} Ai Practice Management LLC. All rights reserved. <br className="md:hidden" />
            Designed for healthcare financial excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-[#FEFAE0]/60 hover:text-white text-sm transition-colors underline underline-offset-4 decoration-transparent hover:decoration-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-[#FEFAE0]/60 hover:text-white text-sm transition-colors underline underline-offset-4 decoration-transparent hover:decoration-white"
            >
              Terms of Service
            </Link>
            <a
              href="#"
              className="text-[#FEFAE0]/60 hover:text-white text-sm transition-colors underline underline-offset-4 decoration-transparent hover:decoration-white"
            >
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
