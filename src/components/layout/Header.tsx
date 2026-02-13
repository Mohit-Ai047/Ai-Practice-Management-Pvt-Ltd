import { useState, useRef, useLayoutEffect, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-2.png";
import { useIsLg } from "@/hooks/use-mobile";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Benefits", href: "/benefits" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Revenue Cycle Management", href: "/rcm" },
      { label: "Medical Billing", href: "/medical-billing" },
      { label: "Denial Management", href: "/denial-management" },
      { label: "AR Claim Services", href: "/ar-claim-services" },
      { label: "Quality Assurance & Audit", href: "/quality-assurance" },
      { label: "AI-Powered Revenue Automation", href: "/ai-revenue-automation" },
    ],
  },
  {
    label: "Specialties",
    href: "/specialties",
    submenu: [
      { label: "Pain Medicine Specialist", href: "/specialties/pain-medicine-specialist" },
      { label: "Gastroenterologists", href: "/specialties/gastroenterologists" },
      { label: "Endoscopy & Colonoscopy", href: "/specialties/endoscopy-colonoscopy" },
      { label: "Spine Surgeon", href: "/specialties/spine-surgeon" },
      { label: "Doctor of Orthopedics", href: "/specialties/doctor-of-orthopedics" },
      { label: "Neurosurgeons", href: "/specialties/neurosurgeons" },
      { label: "Doctor of Chiropractic (D.C.)", href: "/specialties/doctor-of-chiropractic" },
      { label: "Gynecologist", href: "/specialties/gynecologist" },
      { label: "Psychiatrist", href: "/specialties/psychiatrist" },
      { label: "Pathology Lab", href: "/specialties/pathology-lab" },
      { label: "DME (Durable Medical Equipment)", href: "/specialties/dme" },
      { label: "Hospital Billing", href: "/specialties/hospital-billing" },
      { label: "Doctor of Internal Medicine", href: "/specialties/doctor-of-internal-medicine" },
      { label: "Urgent Care / Emergency Medicine", href: "/specialties/urgent-care-emergency-medicine" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const leaveTimeoutRef = useRef<number | null>(null);

  const isLg = useIsLg();
  const location = useLocation();

  // The header becomes "Active" (White) if hovered, scrolled, or mobile menu is open
  const isHeaderActive = isHovered || isScrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeItem = navItems.find((item) => item.submenu && activeSubmenu === item.label);
  const hasDropdownOpen = activeItem && activeItem.submenu;

  useLayoutEffect(() => {
    if (!hasDropdownOpen || !isLg) return;

    const updatePosition = () => {
      const ref = activeItem && itemRefs.current.get(activeItem.label);
      if (ref) {
        const rect = ref.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom,
          left: rect.left,
          width: Math.max(rect.width, 224),
        });
      }
    };

    updatePosition();
    const resizeObserver = new ResizeObserver(updatePosition);
    if (navRef.current) resizeObserver.observe(navRef.current);
    return () => resizeObserver.disconnect();
  }, [activeSubmenu, hasDropdownOpen, isLg, activeItem?.label]);

  const isDropdownOpen = (itemLabel: string) =>
    !isLg ? mobileSubmenuOpen === itemLabel : activeSubmenu === itemLabel;

  const handleNavMouseLeave = useCallback(() => {
    leaveTimeoutRef.current = window.setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (activeItem) setActiveSubmenu(activeItem.label);
  }, [activeItem]);

  return (
    <>
      {/* Main Header - Sticky so it follows you on all pages */}
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleNavMouseLeave();
        }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isHeaderActive
          ? "bg-black/95 backdrop-blur-md py-0"
          : "bg-transparent py-4 bg-gradient-to-b from-black/50 to-transparent"
          } ${isHovered || isOpen ? "border-b border-white/10 shadow-md" : ""}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Left */}
            <div className="flex items-center flex-shrink-0 z-20">
              <Link to="/" className="flex items-center gap-2 sm:gap-3">
                <img
                  src={logo}
                  alt="Ai Practice Management LLC"
                  className="h-10 sm:h-14 md:h-16 w-auto transition-all duration-300 brightness-0 invert"
                />
                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="text-white font-semibold tracking-wide text-[16px] sm:text-[18px] md:text-[20px] ml-1 sm:ml-2">
                    <span className="hidden sm:inline">Ai PRACTICE<br className="lg:hidden" /> MANAGEMENT LLC</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile Center Text "AiPM" */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden z-10">
              <span className="text-white font-serif font-bold text-xl tracking-wide">
                AiPM
              </span>
            </div>

            {/* Desktop Navigation - Added space between logo and first menu item */}
            <nav ref={navRef} className="hidden lg:flex items-center justify-center flex-1 ml-16 xl:ml-24 2xl:ml-32">
              <div className="flex items-center gap-1 xl:gap-2">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    ref={(el) => { if (el) itemRefs.current.set(item.label, el); }}
                    className="relative"
                    onMouseEnter={() => {
                      if (leaveTimeoutRef.current) {
                        clearTimeout(leaveTimeoutRef.current);
                        leaveTimeoutRef.current = null;
                      }
                      item.submenu ? setActiveSubmenu(item.label) : setActiveSubmenu(null);
                    }}
                  >
                    <Link
                      to={item.href}
                      className={`px-3 xl:px-4 py-2.5 xl:py-3 text-[15px] xl:text-[17px] font-medium rounded-md transition-all duration-200 flex items-center gap-1 group/nav ${location.pathname === item.href
                        ? "text-[#FFFDD0]"
                        : "text-white/80 hover:text-[#FFFDD0]"
                        }`}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      {item.submenu && (
                        <motion.span
                          animate={{ rotate: isDropdownOpen(item.label) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Button
                asChild
                className={`font-semibold px-5 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base transition-all duration-300 ${isHeaderActive
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-white text-black hover:bg-gray-200"
                  }`}
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 transition-colors text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown */}
        {isLg && (
          <AnimatePresence>
            {hasDropdownOpen && activeItem && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="fixed z-[100]"
                style={{
                  top: dropdownPosition.top - 10,
                  left: dropdownPosition.left
                }}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleNavMouseLeave}
              >
                <div className="pt-[10px]">
                  <div className="w-max max-w-xs bg-zinc-950 rounded-lg shadow-xl border border-white/10 overflow-hidden">
                    <div className="flex flex-col py-2 max-h-[80vh] overflow-y-auto">
                      {activeItem.submenu?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-3 text-[15px] xl:text-[17px] text-white/80 hover:bg-white/10 hover:text-[#FFFDD0] transition-colors whitespace-nowrap"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

      </header>

      {/* Mobile Menu - Rendered outside header for better stacking context if needed, but keeping inside for now with fixed positioning adjustment */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 64px)" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 sm:top-20 left-0 w-full z-40 bg-black/95 backdrop-blur-md border-t border-white/10 overflow-y-auto shadow-inner lg:hidden"
          >
            <div className="container mx-auto px-4 py-6 pb-20">
              {/* Mobile CTA Button */}
              <div className="mb-6 px-2">
                <Button
                  asChild
                  className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-6 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setMobileSubmenuOpen(prev => prev === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-4 text-white hover:bg-white/10 hover:text-[#FFFDD0] rounded-lg text-lg font-medium transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${mobileSubmenuOpen === item.label ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenuOpen === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 rounded-lg mx-2 mt-1 mb-2">
                                {item.submenu.map(sub => (
                                  <Link
                                    key={sub.label}
                                    to={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-[15px] text-white/80 hover:text-[#FFFDD0] hover:bg-white/5 rounded-md transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-4 rounded-lg text-white hover:bg-white/10 hover:text-[#FFFDD0] text-lg font-medium transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};