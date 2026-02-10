import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Matter from "matter-js";
import {
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Headphones,
} from "lucide-react";

// Image Imports
import rcmBenefitsImg from "@/assets/rcm benefits.png";
import rcmSolutionsImg from "@/assets/rcm solutions.png";
import healthcareAnalyticsImg from "@/assets/real time.jpg";
import medicalTeamImg from "@/assets/medical team.jpg";
import healthcareSecurityImg from "@/assets/healthcare-security.jpg";
import arClaimsImg from "@/assets/ar-claims.jpg";

const items = [
  {
    id: "revenue",
    title: "REVENUE",
    description: "Maximizing accurate capture of all billable services and financial oversight.",
    tags: [
      "Initial Payment",
      "Describing Charges",
      "Patient Collections",
      "Financial Analytics",
      "Charge Capture",
      "Revenue Integrity",
      "Payment Posting",
      "Contract Management"
    ]
  },
  {
    id: "cycle",
    title: "CYCLE",
    description: "Accelerating the journey from patient intake to final remittance.",
    tags: [
      "Scheduling",
      "Registration",
      "Eligibility",
      "Medical Coding",
      "Submitting Claims",
      "Remittance Processing",
      "Workflow Automation",
      "Prior Authorization"
    ]
  },
  {
    id: "management",
    title: "MANAGEMENT",
    description: "Strategic oversight, third-party relations, and proactive denial resolution.",
    tags: [
      "Utilization Review",
      "Third-party Follow-up",
      "Denial Management",
      "Payer Relations",
      "Compliance Audit",
      "A/R Recovery",
      "Credentialing",
      "Contract Negotiation"
    ]
  }
];

const featuredBenefits = [
  {
    image: rcmBenefitsImg,
    title: "Intelligent Revenue Capture",
    description:
      "Leverage advanced AI-powered analytics to maximize revenue capture, automate claim processing, and ensure compliance with real-time data insights.",
    link: "/rcm"
  },
  {
    image: rcmSolutionsImg,
    title: "Next-Generation RCM Solutions",
    description:
      "Unlock the future of healthcare administration with our comprehensive AI-driven practice management platform featuring intelligent automation.",
    link: "/rcm"
  },
  {
    image: healthcareAnalyticsImg,
    title: "Real-Time Performance Dashboards",
    description:
      "Monitor your practice's financial health with comprehensive dashboards displaying revenue trends, claim status, and key performance metrics.",
    link: "/services"
  },
  {
    image: medicalTeamImg,
    title: "Expert Medical Billing Team",
    description:
      "Our dedicated team of certified medical billing specialists works collaboratively to ensure accurate coding, timely submissions, and maximum reimbursement.",
    link: "/medical-billing"
  },
  {
    image: healthcareSecurityImg,
    title: "HIPAA-Compliant Data Security",
    description:
      "Your patient data is protected with enterprise-grade security measures, encrypted transmissions, and full HIPAA compliance.",
    link: "/quality-assurance"
  },
  {
    image: arClaimsImg,
    title: "AR Claims Management & Recovery",
    description:
      "Maximize your revenue with proactive accounts receivable management, real-time claim tracking, denial prevention strategies.",
    link: "/ar-claim-services"
  },
];

const benefitStats = [
  {
    icon: TrendingUp,
    stat: "30%",
    title: "Revenue Increase",
    description:
      "Our clients typically see up to 30% improvement in their revenue collection rates.",
  },
  {
    icon: Clock,
    stat: "48h",
    title: "Faster Turnaround",
    description:
      "Claims processed and submitted within 48 hours of receiving complete documentation.",
  },
  {
    icon: DollarSign,
    stat: "98%",
    title: "First-Pass Rate",
    description:
      "Our clean claim rate ensures minimal rejections and faster payments.",
  },
  {
    icon: CheckCircle,
    stat: "100%",
    title: "HIPAA Compliant",
    description:
      "Full compliance with all healthcare regulations and security standards.",
  },
  {
    icon: Users,
    stat: "500+",
    title: "Providers Served",
    description:
      "Trusted by hundreds of healthcare providers across the nation.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    title: "Support Available",
    description:
      "Round-the-clock customer support to address your billing questions.",
  },
];

export const BenefitsSection = () => {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [tagPositions, setTagPositions] = useState<any[]>([]);
  const engineRef = useRef(Matter.Engine.create());
  const groundRef = useRef<Matter.Body | null>(null);
  const [hasSettled, setHasSettled] = useState(false);
  const [settledTags, setSettledTags] = useState<any[]>([]);

  // Ref for the new section
  const newSectionRef = useRef(null);
  const isInView = useInView(newSectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const engine = engineRef.current;
    const world = engine.world;

    // Increase gravity for faster fall
    engine.gravity.y = 1.0;

    // Create Boundaries
    const ground = Matter.Bodies.rectangle(400, 300, 810, 60, { 
      isStatic: true,
      friction: 0.8,  // Increased friction for better settling
      restitution: 0.1 // Reduced bounce
    });
    groundRef.current = ground;

    const leftWall = Matter.Bodies.rectangle(0, 400, 60, 800, { 
      isStatic: true,
      friction: 0.8
    });
    const rightWall = Matter.Bodies.rectangle(800, 400, 60, 800, { 
      isStatic: true,
      friction: 0.8
    });

    Matter.Composite.add(world, [ground, leftWall, rightWall]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    return () => {
      Matter.Runner.stop(runner);
      Matter.Composite.clear(world, false);
    };
  }, []);

  // Trigger "Explosion/Fall" when hover changes
  const handleMouseEnter = (item: any, index: number) => {
    // ALWAYS clear previous dynamic bodies to prevent accumulation/overlap
    Matter.Composite.clear(engineRef.current.world, true);
    setHasSettled(false);
    setSettledTags([]);

    setActiveItem(item);

    // Adjust ground position based on index (Stacking effect)
    if (groundRef.current) {
      const groundLevels = [160, 380, 570];
      const newY = groundLevels[index];
      Matter.Body.setPosition(groundRef.current, { x: 400, y: newY });
    }

    // Add new bodies for tags on EVERY hover
    const newBodies = item.tags.map((tag: string, i: number) => {
      const width = Math.max(120, tag.length * 10 + 40);
      
      // Calculate horizontal position for better stacking
      const columnCount = Math.min(4, item.tags.length);
      const columnIndex = i % columnCount;
      const rowIndex = Math.floor(i / columnCount);
      
      // Center the tags horizontally
      const centerX = 400;
      const spread = 300;
      
      // Calculate X position based on column
      const xPos = centerX + (columnIndex - (columnCount - 1) / 2) * (spread / columnCount);
      
      // Add slight randomness
      const randomOffset = (Math.random() - 0.5) * 30;
      
      // Stagger Y positions
      const yStart = -100 - (rowIndex * 70) - (Math.random() * 40);

      return Matter.Bodies.rectangle(
        xPos + randomOffset,
        yStart,
        width, 42,
        {
          chamfer: { radius: 21 },
          restitution: 0.2,  // Reduced bounce for better settling
          friction: 0.6,     // Increased friction
          frictionAir: 0.02,
          frictionStatic: 0.8, // Increased static friction
          density: 0.002,    // Slightly increased density
          label: tag
        }
      );
    });

    Matter.Composite.add(engineRef.current.world, newBodies);

    // Start checking for settling after a delay
    setTimeout(() => {
      setHasSettled(true);
    }, 1500); // After 1.5 seconds, consider tags settled
  };

  useEffect(() => {
    // Update React state on every physics tick to track ALL persistent bodies
    const updateLoop = () => {
      const allBodies = Matter.Composite.allBodies(engineRef.current.world);
      // Filter out static walls/ground
      const dynamicBodies = allBodies.filter(b => !b.isStatic);

      const positions = dynamicBodies.map(body => ({
        id: body.id,
        tag: body.label,
        x: body.position.x,
        y: body.position.y,
        angle: body.angle,
        velocity: body.velocity
      }));

      setTagPositions(positions);

      // Check if tags have settled (low velocity)
      if (hasSettled && dynamicBodies.length > 0) {
        const allSettled = positions.every(pos => 
          Math.abs(pos.velocity.x) < 0.1 && Math.abs(pos.velocity.y) < 0.1
        );
        
        if (allSettled) {
          // Sort settled tags for better alignment
          const sortedTags = [...positions].sort((a, b) => {
            // Sort by Y position first, then X
            if (Math.abs(a.y - b.y) < 30) {
              return a.x - b.x;
            }
            return a.y - b.y;
          });
          
          setSettledTags(sortedTags);
        }
      }
    };

    Matter.Events.on(engineRef.current, 'afterUpdate', updateLoop);

    return () => {
      Matter.Events.off(engineRef.current, 'afterUpdate', updateLoop);
    }
  }, [hasSettled]);

  return (
    <section className="bg-black py-32 min-h-screen flex flex-col items-center justify-start relative overflow-hidden">

      {/* 1. Physics Section */}
      <div className="container relative z-10 px-4 flex flex-col items-center mb-32">

        <h2 className="text-white font-serif text-6xl md:text-9xl text-center mb-24 leading-[0.8]">
          We know what <br />
          <span className="font-serif">we're good at!</span>
        </h2>

        <div className="flex flex-col items-center gap-20 w-full relative">
          {items.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item, index)}
              className="group cursor-pointer text-center z-10 relative"
            >
              <h3 
                className={`text-7xl md:text-9xl font-serif font-bold transition-all duration-300 ${activeItem.id === item.id ? "text-[#FFFDD0] scale-110" : "text-red-700"}`}
              >
                {item.title}
              </h3>
            </div>
          ))}

          {/* Physics Container */}
          <div 
            className="absolute inset-0 pointer-events-none z-20" 
            style={{ 
              width: '800px', 
              height: '600px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              overflow: 'visible'
            }}
          >
            {tagPositions.map((pos) => (
              <motion.div
                key={pos.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: hasSettled ? "0deg" : `${pos.angle}rad`,
                  x: hasSettled ? 0 : 0,
                  y: hasSettled ? 0 : 0
                }}
                transition={{ 
                  duration: hasSettled ? 0.5 : 0,
                  type: hasSettled ? "spring" : "tween",
                  stiffness: hasSettled ? 100 : 0
                }}
                style={{
                  position: 'absolute',
                  left: pos.x,
                  top: pos.y,
                }}
                className="px-5 py-2 bg-black text-white rounded-full font-bold border border-[#FFFDD0] shadow-xl whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 text-sm"
              >
                {pos.tag}
              </motion.div>
            ))}
            
            {/* Optional: Show aligned/stacked version when settled */}
            {hasSettled && settledTags.length > 0 && (
              <div className="absolute inset-0">
                {/* This could show a cleaner arranged version if needed */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. New Benefits Grid Section */}
      <div className="container mx-auto px-4 mt-20" ref={newSectionRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#FEFAE0] uppercase tracking-wider">
            Why Choose Us
          </span>
          <div className="w-20 h-0.5 bg-[#FEFAE0]/30 mx-auto mt-4 mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            Benefits of Working With AIPM
          </h2>
          <p className="text-white/60 text-lg">
            Experience the difference that expertise and dedication can make for
            your practice's financial health.
          </p>
        </motion.div>

        {/* Featured Benefits with Images - 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                {/* Link Wrapper for Title */}
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-white mb-3 hover:text-[#FEFAE0] transition-colors">
                  <Link to={benefit.link}>
                    {benefit.title}
                  </Link>
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {benefitStats.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center group"
            >
              {/* Icon with stat */}
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FEFAE0]/50 transition-colors">
                  <benefit.icon className="w-10 h-10 text-[#FEFAE0]" />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#FEFAE0] text-black text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  {benefit.stat}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/50 text-sm max-w-xs mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};