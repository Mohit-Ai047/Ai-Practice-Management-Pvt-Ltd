import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import your images
import heroMedical from "@/assets/hero-medical.jpg";
import homeImage from "@/assets/home-2.png";
import homeImage3 from "@/assets/home-3.png";

const images = [heroMedical, homeImage, homeImage3];

export const HeroSection = () => {
  // Toggling between "Solutions", "Management", "Intelligence"
  const [index, setIndex] = useState(0);
  // Toggling between "Solutions", "Management", "Intelligence"
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Solutions", "Management", "Intelligence"];
  const currentWord = words[textIndex];
  const characters = currentWord.split("");

  // Auto-change image and word every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Slider - Darker Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Healthcare background"
          />
        </AnimatePresence>
        {/* Darker gradient for "darkish" theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent z-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="inline-block px-4 py-20.5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-medium mb-6">
              Revenue Cycle Management Experts
            </span> */}
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6 font-normal">
            Boost Your Revenue with <br />
            <span className="font-bold">Smart </span>
            <span className="font-bold inline-flex">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {},
                  }}
                >
                  {characters.map((char, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p className="text-xl text-primary-foreground/90 mb-4 font-serif">
            Go Beyond—Maximize Your Reimbursements
          </motion.p>

          <motion.p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
            Achieve a 30% revenue increase with our innovative RCM solutions
            tailored for your healthcare practice.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-6 text-lg">
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg bg-transparent">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <StatItem icon={<TrendingUp />} value="30%" label="Revenue Increase" />
            <StatItem icon={<Shield />} value="10+" label="Years Experience" />
            <StatItem icon={<Clock />} value="48h" label="Payer Claim Submission" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#000000" />
        </svg>
      </div>
    </section>
  );
};

// Helper component for stats
const StatItem = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => {
  // Extract number and extension
  const numberMatch = value.match(/\d+/);
  const number = numberMatch ? parseInt(numberMatch[0]) : 0;
  const extension = value.replace(/\d+/, "");

  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        <span className="text-secondary mr-1">{icon}</span>
        <span className="text-3xl text-primary-foreground font-bold flex items-center">
          <CountingNumber value={number} />
          {extension}
        </span>
      </div>
      <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">{label}</p>
    </div>
  );
};

const CountingNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}