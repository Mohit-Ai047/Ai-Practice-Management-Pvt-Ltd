// // import { Link } from "react-router-dom";
// // import { motion, useInView } from "framer-motion";
// // import { useRef } from "react";
// // import { Button } from "@/components/ui/button";
// // import { specialties } from "@/data/specialties";

// // export const SpecialtiesSection = () => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, margin: "-100px" });

// //   return (
// //     <section className="py-20 bg-black text-white" ref={ref}>
// //       <div className="container mx-auto px-4">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6 }}
// //           className="text-center max-w-2xl mx-auto mb-16"
// //         >
// //           <span className="text-sm font-medium text-[#FEFAE0] uppercase tracking-wider">
// //             Specialties We Serve
// //           </span>
// //           <div className="w-20 h-0.5 bg-[#FEFAE0]/30 mx-auto mt-4 mb-6" />
// //           <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-white">
// //             Expertise Across All Medical Fields
// //           </h2>
// //           <p className="text-white/80 text-lg">
// //             Our team has specialized experience in coding and billing for these
// //             core medical fields and beyond.
// //           </p>
// //         </motion.div>

// //         {/* Grid Layout - 3 columns */}
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
// //             {specialties.map((specialty, index) => (
// //               <motion.div
// //                 key={specialty.id}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.4, delay: index * 0.05 }}
// //               >
// //                 <Link to={`/specialties/${specialty.id}`} className="block h-full">
// //                   <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#FEFAE0]/30 transition-all group shadow-lg h-full flex flex-col">
// //                     <div className="h-48 relative overflow-hidden">
// //                       <img
// //                         src={specialty.image}
// //                         alt={specialty.name}
// //                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                       />
// //                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
// //                       <div className="absolute bottom-4 left-4 inline-flex p-3 rounded-xl bg-[#FEFAE0]/90 text-black shadow-lg">
// //                         <specialty.icon className="w-6 h-6" />
// //                       </div>
// //                     </div>

// //                     <div className="p-6 text-left flex-1 flex flex-col">
// //                       <h3 className="font-serif text-xl font-bold mb-3 text-[#FEFAE0] group-hover:text-white transition-colors">
// //                         {specialty.name}
// //                       </h3>
// //                       <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
// //                         {specialty.description}
// //                       </p>
// //                       <span className="text-xs font-semibold text-[#FEFAE0] uppercase tracking-wider group-hover:underline decoration-1 underline-offset-4">
// //                         Learn More
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Footer Link */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           className="text-center mt-20"
// //         >
// //           <p className="text-white/80 mb-6">
// //             Don't see your specific field? Our team adapts to every medical specialty's unique coding requirements.
// //           </p>
// //           <Button
// //             asChild
// //             variant="outline"
// //             size="lg"
// //             className="border-2 border-[#FEFAE0] text-[#FEFAE0] hover:bg-[#FEFAE0] hover:text-black bg-transparent font-bold px-8 transition-colors"
// //           >
// //             <Link to="/contact">Discuss Your Specialty Requirements</Link>
// //           </Button>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };
// import { Link } from "react-router-dom";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { specialties } from "@/data/specialties";

// export const SpecialtiesSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   // Calculate how many groups of 3 specialties we have
//   const itemsPerGroup = 3;
//   const totalGroups = Math.ceil(specialties.length / itemsPerGroup);
  
//   // Get current group of specialties
//   const currentSpecialties = specialties.slice(
//     currentIndex * itemsPerGroup,
//     (currentIndex + 1) * itemsPerGroup
//   );

//   // Auto-rotate every 5 seconds
//   useEffect(() => {
//     if (totalGroups <= 1) return;
    
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGroups);
//     }, 5000); // 5 seconds

//     return () => clearInterval(interval);
//   }, [totalGroups]);

//   // Handle manual navigation
//   const goToGroup = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="py-20 bg-black text-white" ref={ref}>
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-2xl mx-auto mb-16"
//         >
//           <span className="text-sm font-medium text-[#FEFAE0] uppercase tracking-wider">
//             Specialties We Serve
//           </span>
//           <div className="w-20 h-0.5 bg-[#FEFAE0]/30 mx-auto mt-4 mb-6" />
//           <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-white">
//             Expertise Across All Medical Fields
//           </h2>
//           <p className="text-white/80 text-lg">
//             Our team has specialized experience in coding and billing for these
//             core medical fields and beyond.
//           </p>
//         </motion.div>

//         {/* Carousel Container */}
//         <div className="max-w-7xl mx-auto relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
//             >
//               {currentSpecialties.map((specialty, index) => {
//                 // Calculate actual index in the original array
//                 const actualIndex = currentIndex * itemsPerGroup + index;
                
//                 return (
//                   <motion.div
//                     key={specialty.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                   >
//                     <Link to={`/specialties/${specialty.id}`} className="block h-full">
//                       <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#FEFAE0]/30 transition-all group shadow-lg h-full flex flex-col">
//                         <div className="h-48 relative overflow-hidden">
//                           <img
//                             src={specialty.image}
//                             alt={specialty.name}
//                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
//                           <div className="absolute bottom-4 left-4 inline-flex p-3 rounded-xl bg-[#FEFAE0]/90 text-black shadow-lg">
//                             <specialty.icon className="w-6 h-6" />
//                           </div>
//                         </div>

//                         <div className="p-6 text-left flex-1 flex flex-col">
//                           <h3 className="font-serif text-xl font-bold mb-3 text-[#FEFAE0] group-hover:text-white transition-colors">
//                             {specialty.name}
//                           </h3>
//                           <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
//                             {specialty.description}
//                           </p>
//                           <span className="text-xs font-semibold text-[#FEFAE0] uppercase tracking-wider group-hover:underline decoration-1 underline-offset-4">
//                             Learn More
//                           </span>
//                         </div>
//                       </div>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Dots - Only show if we have multiple groups */}
//           {totalGroups > 1 && (
//             <div className="flex justify-center items-center mt-10 gap-2">
//               {Array.from({ length: totalGroups }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToGroup(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentIndex
//                       ? "bg-[#FEFAE0] scale-110"
//                       : "bg-white/30 hover:bg-white/50"
//                   }`}
//                   aria-label={`Go to group ${index + 1}`}
//                 />
//               ))}
              
//               {/* Auto-rotate indicator */}
//               <div className="ml-4 flex items-center gap-2 text-sm text-white/60">
//                 {/* <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
//                   <motion.div
//                     key={currentIndex}
//                     initial={{ width: "0%" }}
//                     animate={{ width: "100%" }}
//                     transition={{ duration: 5, ease: "linear" }}
//                     className="h-full bg-[#FEFAE0]"
//                   />
//                 </div> */}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Footer Link */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-20"
//         >
//           <p className="text-white/80 mb-6">
//             Don't see your specific field? Our team adapts to every medical specialty's unique coding requirements.
//           </p>
//           <Button
//             asChild
//             variant="outline"
//             size="lg"
//             className="border-2 border-[#FEFAE0] text-[#FEFAE0] hover:bg-[#FEFAE0] hover:text-black bg-transparent font-bold px-8 transition-colors"
//           >
//             <Link to="/contact">Discuss Your Specialty Requirements</Link>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { specialties } from "@/data/specialties";

export const SpecialtiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Calculate how many groups of 3 specialties we have
  const itemsPerGroup = 3;
  const totalGroups = Math.ceil(specialties.length / itemsPerGroup);
  
  // Get current group of specialties
  const currentSpecialties = specialties.slice(
    currentIndex * itemsPerGroup,
    (currentIndex + 1) * itemsPerGroup
  );

  // Auto-rotate every 5 seconds - moving left
  useEffect(() => {
    if (totalGroups <= 1) return;
    
    const interval = setInterval(() => {
      setDirection(1); // 1 for left slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGroups);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  // Handle manual navigation
  const goToGroup = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1); // 1 for left, -1 for right
    setCurrentIndex(index);
  };

  // Animation variants for sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          {/* <span className="text-sm font-medium text-[#FEFAE0] uppercase tracking-wider">
            Specialties We Serve
          </span> */}
          <div className="w-20 h-0.5 bg-[#FEFAE0]/30 mx-auto mt-4 mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-white">
            Expertise Across All Medical Fields
          </h2>
          <p className="text-white/80 text-lg">
            Our team has specialized experience in coding and billing for these
            core medical fields and beyond.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto relative overflow-hidden px-4">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                x: { 
                  type: "tween", 
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1] // Cubic bezier for smooth slide
                },
                opacity: { duration: 0.4 }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentSpecialties.map((specialty, index) => {
                return (
                  <motion.div
                    key={specialty.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <Link to={`/specialties/${specialty.id}`} className="block h-full">
                      <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#FEFAE0]/30 transition-all group shadow-lg h-full flex flex-col">
                        <div className="h-48 relative overflow-hidden">
                          <img
                            src={specialty.image}
                            alt={specialty.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute bottom-4 left-4 inline-flex p-3 rounded-xl bg-[#FEFAE0]/90 text-black shadow-lg">
                            <specialty.icon className="w-6 h-6" />
                          </div>
                        </div>

                        <div className="p-6 text-left flex-1 flex flex-col">
                          <h3 className="font-serif text-xl font-bold mb-3 text-[#FEFAE0] group-hover:text-white transition-colors">
                            {specialty.name}
                          </h3>
                          <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                            {specialty.description}
                          </p>
                          <span className="text-xs font-semibold text-[#FEFAE0] uppercase tracking-wider group-hover:underline decoration-1 underline-offset-4">
                            Learn More
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots - Only show if we have multiple groups */}
          {totalGroups > 1 && (
            <div className="flex justify-center items-center mt-10 gap-2">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToGroup(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#FEFAE0] scale-110"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to group ${index + 1}`}
                />
              ))}
              
              {/* Progress indicator */}
              {/* <div className="ml-4 flex items-center gap-2">
                <span className="text-sm text-white/60">
                  {currentIndex + 1} / {totalGroups}
                </span>
              </div> */}
            </div>
          )}
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-white/80 mb-6">
            Don't see your specific field? Our team adapts to every medical specialty's unique coding requirements.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#FEFAE0] text-[#FEFAE0] hover:bg-[#FEFAE0] hover:text-black bg-transparent font-bold px-8 transition-colors"
          >
            <Link to="/contact">Discuss Your Specialty Requirements</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};