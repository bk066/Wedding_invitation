import { motion } from "motion/react";
import { BRIDE_DETAILS, GROOM_DETAILS } from "../data";

// Beautiful interactive name-reveal component
function RevealName({ text }: { text: string }) {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 15, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="inline-flex overflow-hidden font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#5C0612] tracking-wider"
    >
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          variants={child}
          className="inline-block transform-gpu origin-bottom"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Couple() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="couple" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Editorial Decorative Section Heading */}
      <div className="text-center mb-16 md:mb-24">
        <span className="font-sans text-xs md:text-sm tracking-[0.5em] text-[#D4AF37] uppercase font-bold">
          Introducing the Souls
        </span>
        <h2 className="font-serif text-[#5C0612] text-3xl md:text-5xl font-medium tracking-tight mt-2">
          The Bride &amp; Groom
        </h2>
        <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
      </div>

      {/* Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* BRIDE SIDE - 5 Columns */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 relative group"
        >
          {/* Glassmorphic Panel */}
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#D4AF37]/30 to-transparent rounded-2xl blur-xs group-hover:from-[#D4AF37]/50 transition duration-500" />
          <div className="relative bg-[#FFFDD0]/60 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl p-8 md:p-10 transition-transform duration-500 hover:scale-[1.01] hover:-translate-y-1 shadow-md hover:shadow-xl">
            {/* Elegant Corner Decors */}
            <div className="absolute top-4 left-4 text-[#D4AF37] text-sm opacity-50">⚜</div>
            <div className="absolute bottom-4 right-4 text-[#D4AF37] text-sm opacity-50">⚜</div>

            {/* Profile Avatar Emblem */}
            <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center text-3xl mb-6 bg-gradient-to-br from-[#FFFDD0] to-[#FAF9F6] shadow-inner">
              🌺
            </div>

            <span className="font-serif italic text-base md:text-lg text-[#D4AF37] tracking-wider block mb-1">
              {BRIDE_DETAILS.title}
            </span>
            <div className="mb-4">
              <RevealName text={BRIDE_DETAILS.name} />
            </div>

            <p className="font-sans text-xs md:text-sm text-[#5C0612]/70 leading-relaxed italic mb-8 border-l border-[#D4AF37]/45 pl-4 py-1">
              "{BRIDE_DETAILS.note}"
            </p>

            {/* Ancestry details */}
            <div className="space-y-4 pt-4 border-t border-[#D4AF37]/15">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-1">
                  Paternal Grandparents
                </span>
                <p className="font-serif text-[#5C0612] text-sm md:text-base font-medium">
                  {BRIDE_DETAILS.grandparents}
                </p>
              </div>
              
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-1">
                  Proud Parents
                </span>
                <p className="font-serif text-[#5C0612] text-base md:text-lg font-bold">
                  {BRIDE_DETAILS.parents}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CENTER MONOGRAM EMBLEM - 2 Columns */}
        <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center py-6">
          <motion.div
            initial={{ rotate: 0, scale: 0.9 }}
            whileInView={{ rotate: 360, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full border border-dashed border-[#D4AF37]/50 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#FFFDD0]/80">
              <span className="font-display text-[#5C0612] text-xl font-bold">K ⚜ A</span>
            </div>
          </motion.div>
          <div className="h-20 w-[1px] bg-gradient-to-b from-[#D4AF37]/50 to-transparent mt-4" />
        </div>

        {/* GROOM SIDE - 5 Columns */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 relative group"
        >
          {/* Glassmorphic Panel */}
          <div className="absolute -inset-0.5 bg-gradient-to-tl from-[#D4AF37]/30 to-transparent rounded-2xl blur-xs group-hover:from-[#D4AF37]/50 transition duration-500" />
          <div className="relative bg-[#FFFDD0]/60 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl p-8 md:p-10 transition-transform duration-500 hover:scale-[1.01] hover:-translate-y-1 shadow-md hover:shadow-xl">
            {/* Elegant Corner Decors */}
            <div className="absolute top-4 left-4 text-[#D4AF37] text-sm opacity-50">⚜</div>
            <div className="absolute bottom-4 right-4 text-[#D4AF37] text-sm opacity-50">⚜</div>

            {/* Profile Avatar Emblem */}
            <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center text-3xl mb-6 bg-gradient-to-br from-[#FFFDD0] to-[#FAF9F6] shadow-inner">
              👑
            </div>

            <span className="font-serif italic text-base md:text-lg text-[#D4AF37] tracking-wider block mb-1">
              {GROOM_DETAILS.title}
            </span>
            <div className="mb-4">
              <RevealName text={GROOM_DETAILS.name} />
            </div>

            <p className="font-sans text-xs md:text-sm text-[#5C0612]/70 leading-relaxed italic mb-8 border-l border-[#D4AF37]/45 pl-4 py-1">
              "{GROOM_DETAILS.note}"
            </p>

            {/* Ancestry details */}
            <div className="space-y-4 pt-4 border-t border-[#D4AF37]/15">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-1">
                  Paternal Grandparents
                </span>
                <p className="font-serif text-[#5C0612] text-sm md:text-base font-medium">
                  {GROOM_DETAILS.grandparents}
                </p>
              </div>
              
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-1">
                  Proud Parents
                </span>
                <p className="font-serif text-[#5C0612] text-base md:text-lg font-bold">
                  {GROOM_DETAILS.parents}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
