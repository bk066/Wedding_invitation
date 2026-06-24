import { motion } from "motion/react";

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  // Stagger animation variants for luxury brand elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial from-[#FAF9F6] via-[#FAF9F6] to-[#FAF9F6] px-6 text-center select-none"
    >
      {/* Decorative Gold Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-[#D4AF37]/25 pointer-events-none rounded-sm">
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#D4AF37]" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#D4AF37]" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]" />
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center z-10">
        {/* Shloka Header */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-[#5C0612] text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-6"
        >
          || श्री गणेशाय नमः ||
        </motion.p>

        {/* Embossed, Glowing 3D Silhouette of Ganesha in Gold Frame */}
        <motion.div
          variants={itemVariants}
          className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center mb-8"
        >
          {/* Pulsing Gold Halo Ring */}
          <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 animate-[ping_4s_infinite]" />
          
          {/* Double Geometric Octagon Gold Frame */}
          <div className="absolute inset-1 rounded-full border border-[#D4AF37]/45 rotate-45 flex items-center justify-center">
            <div className="w-[92%] h-[92%] rounded-full border border-[#D4AF37]/20 rotate-12" />
          </div>

          {/* Glowing Ganesha Vector SVG - Geometric/Abstract Luxury */}
          <svg
            viewBox="0 0 100 100"
            className="w-28 h-28 drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Crown (Mukut) */}
            <path d="M45 15 L50 7 L55 15 M43 18 L50 11 L57 18 M40 22 L50 15 L60 22" />
            
            {/* Halo / Aura Lines */}
            <path d="M50 7 A22 22 0 0 1 72 29" strokeDasharray="2 2" strokeOpacity="0.7" />
            <path d="M50 7 A22 22 0 0 0 28 29" strokeDasharray="2 2" strokeOpacity="0.7" />

            {/* Forehead & Ear Right */}
            <path d="M38 27 C42 27, 45 28, 50 28 C55 28, 58 27, 62 27 C67 27, 72 32, 72 37 C72 42, 67 44, 62 44" />
            
            {/* Forehead & Ear Left */}
            <path d="M38 27 C33 27, 28 32, 28 37 C28 42, 33 44, 38 44" />

            {/* Traditional Tilak */}
            <path d="M50 21 L50 26" stroke="#5C0612" strokeWidth="2.5" />
            <path d="M47 23 C49 24, 51 24, 53 23" stroke="#5C0612" strokeWidth="1.5" />

            {/* Modak (Sweets) / Ladoo on Hand */}
            <circle cx="36" cy="48" r="1.5" fill="#D4AF37" />
            <circle cx="34" cy="49" r="1.2" fill="#D4AF37" />
            <circle cx="38" cy="49" r="1.2" fill="#D4AF37" />

            {/* Trunk (Trishul style sweep) */}
            <path d="M50 28 C52 35, 53 38, 51 45 C49 53, 44 56, 42 61 C40 65, 41 71, 46 72 C50 72, 53 69, 53 65 C53 60, 49 59, 47 59" />

            {/* Belly & Lotus Seat */}
            <path d="M38 48 C36 56, 40 68, 50 68 C60 68, 64 56, 62 48" strokeOpacity="0.8" />
            <path d="M30 76 C40 81, 60 81, 70 76 M35 73 C45 76, 55 76, 65 73" strokeOpacity="0.5" />
          </svg>
        </motion.div>

        {/* Traditional Sanskrit Shloka */}
        <motion.div
          variants={itemVariants}
          className="mb-8 max-w-lg px-4"
        >
          <p className="font-serif italic text-sm md:text-[15px] leading-relaxed text-[#5C0612]/90 font-medium">
            "वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Cinematic Announcement */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <p className="font-serif text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase font-semibold mb-2">
            SHUBH PARINAYOTSAV
          </p>
          <h1 className="font-display text-[#5C0612] text-2xl md:text-3xl lg:text-4xl tracking-widest font-bold">
            KHUSHBOO &amp; ABHISHEK
          </h1>
          <p className="font-sans text-[#5C0612]/75 text-xs md:text-sm tracking-wider mt-3">
            New Delhi • June 30 &amp; July 01, 2026
          </p>
        </motion.div>

        {/* Pulsing Glassmorphic Entry Button */}
        <motion.div
          variants={itemVariants}
          className="relative group cursor-pointer"
        >
          {/* Button Outer Halo Glow */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/50 via-[#5C0612]/20 to-[#D4AF37]/50 blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          <button
            onClick={onEnter}
            className="relative px-8 py-4 bg-[#FFFDD0]/95 backdrop-blur-md border border-[#D4AF37] hover:border-[#5C0612] rounded-full text-[#5C0612] font-serif text-sm tracking-[0.2em] uppercase font-bold shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Enter the Celebration
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
