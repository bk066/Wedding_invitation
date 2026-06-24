import { motion } from "motion/react";
import { VENUE_DETAILS } from "../data";

export default function Venue() {
  const containerVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="venue" className="relative py-24 px-6 md:px-12 max-w-5xl mx-auto">
      
      {/* Editorial Header */}
      <div className="text-center mb-16">
        <span className="font-sans text-xs md:text-sm tracking-[0.5em] text-[#D4AF37] uppercase font-bold">
          The Destination
        </span>
        <h2 className="font-serif text-[#5C0612] text-3xl md:text-5xl font-medium tracking-tight mt-2">
          The Grand Venue
        </h2>
        <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
      >
        {/* Left Side: Venue Information Details (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-center bg-[#FFFDD0]/60 backdrop-blur-md border border-[#D4AF37]/25 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="mb-6">
            <span className="text-sm font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-bold block mb-1">
              📍 DELUXE RETREAT
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#5C0612] leading-tight">
              {VENUE_DETAILS.name}
            </h3>
          </div>

          <p className="font-sans text-xs md:text-sm text-[#5C0612]/80 leading-relaxed mb-6">
            {VENUE_DETAILS.description}
          </p>

          <div className="border-t border-[#D4AF37]/20 pt-5 mb-8">
            <span className="text-[10px] font-sans tracking-[0.15em] text-[#D4AF37] uppercase font-bold block mb-1">
              Official Address
            </span>
            <p className="font-serif text-[#5C0612] text-sm md:text-base font-semibold leading-relaxed">
              {VENUE_DETAILS.address}
            </p>
          </div>

          <a
            href={VENUE_DETAILS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5C0612] hover:bg-[#3D040C] text-[#FFFDD0] font-serif text-xs md:text-sm tracking-[0.15em] uppercase font-bold rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            🗺️ Get Directions on Maps
          </a>
        </div>

        {/* Right Side: 3D Spatial Map Vector Art Placeholder (7 cols) */}
        <a
          href={VENUE_DETAILS.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-7 relative group overflow-hidden border border-[#D4AF37]/35 rounded-2xl bg-gradient-to-br from-[#5C0612]/5 to-[#D4AF37]/5 flex flex-col items-center justify-center p-8 min-h-[350px] shadow-sm transition-all duration-500 hover:border-[#D4AF37] hover:shadow-lg cursor-pointer"
        >
          {/* Subtle Grid Vector Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* 3D Gold Topography Lines / Abstract Concentric Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:scale-105 transition-transform duration-700">
            <div className="w-[120%] h-[120%] border border-[#D4AF37]/15 rounded-full animate-[spin_50s_infinite_linear]" />
            <div className="absolute w-[80%] h-[80%] border border-[#D4AF37]/15 rounded-full animate-[spin_35s_infinite_linear_reverse]" />
            <div className="absolute w-[50%] h-[50%] border border-[#D4AF37]/10 rounded-full" />
            <div className="absolute w-[20%] h-[20%] border border-[#D4AF37]/20 rounded-full" />
          </div>

          {/* Glowing Venue Pin Icon */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Outer rings */}
            <div className="absolute w-24 h-24 rounded-full border border-[#5C0612]/15 animate-ping duration-1000" />
            <div className="absolute w-16 h-16 rounded-full border border-[#D4AF37]/20 animate-pulse duration-1000" />
            
            {/* Real Pin Structure */}
            <div className="w-14 h-14 rounded-full bg-[#FFFDD0] border-2 border-[#D4AF37] shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <span className="text-2xl animate-bounce">🏨</span>
            </div>

            {/* Glowing coordinate labels */}
            <div className="mt-4 bg-[#FFFDD0]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/35 shadow-sm text-center">
              <span className="font-mono text-[10px] md:text-xs text-[#5C0612] font-semibold tracking-wider">
                28°49'44.2"N • 77°08'43.4"E
              </span>
            </div>
            
            <span className="text-xs font-serif text-[#D4AF37] mt-3 tracking-widest uppercase font-bold opacity-80 group-hover:opacity-100 group-hover:text-[#5C0612] transition-colors">
              Click to Open Interactive Map ↗
            </span>
          </div>

          {/* Subtle light leak at corner */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent blur-xl" />
        </a >
      </motion.div>
    </section>
  );
}
