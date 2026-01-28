import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  {
    label: "Services",
    href: "#services",
    submenu: [
      { label: "Revenue Cycle Management", href: "#services" },
      { label: "Medical Billing", href: "#services" },
      { label: "Claims Processing", href: "#services" },
      { label: "Credentialing", href: "#services" },
    ],
  },
  { label: "Specialties", href: "#specialties" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="italic hidden sm:block">
            Turning expectations into unforgettable experiences!
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:(302)741-4001"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(302) 741-4001</span>
            </a>
            <a
              href="mailto:info@aipracticemanagement.us"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors hidden md:flex"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>info@aipracticemanagement.us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img 
                src={logo} 
                alt="AI Practice Management LLC" 
                className="h-14 sm:h-16 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && setActiveSubmenu(item.label)
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-lg border border-border overflow-hidden"
                      >
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6"
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <nav className="container mx-auto px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  <Button
                    asChild
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
