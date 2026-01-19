import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Revenue Cycle Management", href: "#services" },
    { label: "Medical Billing", href: "#services" },
    { label: "Claims Processing", href: "#services" },
    { label: "Credentialing", href: "#services" },
  ],
  specialties: [
    { label: "Cardiology", href: "#specialties" },
    { label: "Orthopedics", href: "#specialties" },
    { label: "Internal Medicine", href: "#specialties" },
    { label: "View All", href: "#specialties" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Contact", href: "#contact" },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary-foreground">
                  Ai
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg leading-tight">
                  AI Practice Management
                </h3>
                <p className="text-xs text-background/60 uppercase tracking-wide">
                  LLC
                </p>
              </div>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Exceeding expectations with quality RCM services. Your trusted
              partner in healthcare revenue optimization.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:(302)741-4001"
                className="flex items-center gap-2 text-background/70 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (302) 741-4001
              </a>
              <a
                href="mailto:info@aipracticemanagement.us"
                className="flex items-center gap-2 text-background/70 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@aipracticemanagement.us
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4" />
                Serving Nationwide
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Specialties</h4>
            <ul className="space-y-3">
              {footerLinks.specialties.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} AI Practice Management LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
