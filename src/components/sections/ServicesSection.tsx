// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// // Images
// import heroMedical from "@/assets/hero-medical.jpg";
// import medicalBilling from "@/assets/medical.png";
// import denialManage from "@/assets/denail-manage.png";
// import arClaim from "@/assets/ar-claim.png";
// import auditImage from "@/assets/audit.png";
// import aiRevenueImage from "@/assets/ai-auto.png";

// // Map services to specific images
// const services = [
//   {
//     title: "End to End RCM",
//     description: "Complete oversight from registration to final payment.",
//     image: heroMedical,
//     link: "/rcm", // Direct link to new RCM Page
//   },
//   {
//     title: "Medical Billing",
//     description: "Precision-driven billing to maximize reimbursements.",
//     image: medicalBilling,
//     link: "/medical-billing", // Link to new Medical Billing Page
//   },
//   {
//     title: "Denial Management",
//     description: "Transforming claim denials into recovered revenue.",
//     image: denialManage,
//     link: "/denial-management",
//   },
//   {
//     title: "AR Claim Services",
//     description: "Recover outstanding payments and improve cash flow.",
//     image: arClaim,
//     link: "/ar-claim-services",
//   },
//   {
//     title: "Quality Assurance & Audit",
//     description: "Rigorous controls ensuring accuracy and compliance.",
//     image: auditImage,
//     link: "/quality-assurance",
//   },
//   {
//     title: "AI-Powered Revenue Automation",
//     description: "Intelligent bots and predictive models to automate high-volume tasks.",
//     image: aiRevenueImage,
//     link: "/ai-revenue-automation",
//   },
// ];

// export const ServicesSection = () => {
//   return (
//     <section className="bg-black py-24 min-h-screen">
//       <div className="container mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 font-clash leading-tight">
//             {"Every Tool in Our Kit Has a Purpose.".split(" ").map((word, i) => (
//               <span
//                 key={i}
//                 className="animate-word-flow inline-block mr-[0.25em] last:mr-0"
//                 style={{ animationDelay: `${i * 0.25}s` }}
//               >
//                 {word}
//               </span>
//             ))}
//           </h2>
//           <p className="text-4xl md:text-5xl font-bold text-white mb-6 font-clash">
//             Our Core Specializations.
//           </p>
//         </div>
//       </div>

//       {/* Image Grid */}
//       {/* Image Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-8 gap-6 max-w-[85%] mx-auto">
//         {services.map((service, index) => {
//           // Pattern: 50% / 30% Split
//           // We use a constrained 85% width container with an 8-column grid.
//           // Large: 5/8 cols ~ 53% screen width.
//           // Small: 3/8 cols ~ 32% screen width.

//           let colSpanClass = "md:col-span-3";
//           if (index === 0 || index === 3 || index === 4) {
//             colSpanClass = "md:col-span-5";
//           }

//           return (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className={`group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer ${colSpanClass}`}
//             >
//               {/* Background Image */}
//               <div className="absolute inset-0">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Bottom Gradient for Text Readability - Reduced to bottom only, no full overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent" />
//               </div>

//               {/* Content */}
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                   <h3 className="text-2xl font-bold text-white mb-3 font-clash">
//                     {service.title}
//                   </h3>
//                   <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//                     {service.description}
//                   </p>

//                   {/* Arrow Button */}
//                   <Link
//                     to={service.link}
//                     className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
//                   >
//                     <ArrowUpRight className="w-5 h-5" />
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>


//     </section>
//   );
// };
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Images
import heroMedical from "@/assets/hero-medical.jpg";
import medicalBilling from "@/assets/medical.png";
import denialManage from "@/assets/denails.png";
import arClaim from "@/assets/ar-claims.jpg";
import auditImage from "@/assets/audit.png";
import aiRevenueImage from "@/assets/ai-auto.png";

// Map services to specific images
const services = [
  {
    title: "End to End RCM",
    description: "Complete oversight from registration to final payment.",
    image: heroMedical,
    link: "/rcm",
  },
  {
    title: "Medical Billing",
    description: "Precision-driven billing to maximize reimbursements.",
    image: medicalBilling,
    link: "/medical-billing",
  },
  {
    title: "Denial Management",
    description: "Transforming claim denials into recovered revenue.",
    image: denialManage,
    link: "/denial-management",
  },
  {
    title: "AR Claim Services",
    description: "Recover outstanding payments and improve cash flow.",
    image: arClaim,
    link: "/ar-claim-services",
  },
  {
    title: "Quality Assurance & Audit",
    description: "Rigorous controls ensuring accuracy and compliance.",
    image: auditImage,
    link: "/quality-assurance",
  },
  {
    title: "AI-Powered Revenue Automation",
    description: "Intelligent bots and predictive models to automate high-volume tasks.",
    image: aiRevenueImage,
    link: "/ai-revenue-automation",
  },
];

export const ServicesSection = () => {
  const sentence = "Every Tool in Our Kit Has a Purpose.";

  return (
    <section className="bg-black py-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header with Text Animation */}
        <div className="text-center mb-16">
          {/* Animated Sentence */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-clash leading-tight">
            <span className="craft-text">
              Every Tool in Our Kit Has a Purpose
            </span>
          </h2>

          {/* Second Line */}
          {/* <p className="text-4xl md:text-5xl font-bold text-white mb-6 font-clash">
            Our Core Specializations.
          </p> */}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 max-w-[85%] mx-auto">
        {services.map((service, index) => {
          let colSpanClass = "md:col-span-3";
          if (index === 0 || index === 3 || index === 4) {
            colSpanClass = "md:col-span-5";
          }

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer ${colSpanClass}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-3 font-clash">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>

                  {/* Arrow Button */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};