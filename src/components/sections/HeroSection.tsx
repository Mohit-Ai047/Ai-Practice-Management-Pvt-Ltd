import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Healthcare technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/20 backdrop-blur-sm text-secondary rounded-full text-sm font-medium mb-6 border border-secondary/30">
              Revenue Cycle Management Experts
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Boost Your Revenue with{" "}
            <span className="gold-text">Smart Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-foreground/90 mb-4 font-serif italic"
          >
            Go Beyond—Maximize Your Reimbursements
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-primary-foreground/80 mb-8 max-w-xl"
          >
            Achieve a 30% revenue increase with our innovative RCM solutions
            tailored for your healthcare practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-6 text-lg pulse-glow"
            >
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg bg-transparent"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-secondary mr-1" />
                <span className="stat-number text-3xl text-primary-foreground">
                  30%
                </span>
              </div>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">
                Revenue Increase
              </p>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-secondary mr-1" />
                <span className="stat-number text-3xl text-primary-foreground">
                  10+
                </span>
              </div>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-secondary mr-1" />
                <span className="stat-number text-3xl text-primary-foreground">
                  48h
                </span>
              </div>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">
                Faster Claims
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
