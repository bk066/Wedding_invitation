import { motion } from "motion/react";
import { CHUNRI_PAKSH, SEHRA_PAKSH } from "../data";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <footer id="footer" className="relative py-24 px-6 md:px-12 bg-radial from-[#FAF9F6] via-[#FAF9F6] to-[#FFFDD0]/30 border-t border-[#D4AF37]/20">
      
      {/* Decorative Gold Frame corner accents for the footer section */}
      <div className="absolute inset-x-12 bottom-12 top-0 border-b border-l border-r border-[#D4AF37]/15 pointer-events-none">
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#D4AF37]" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D4AF37]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto z-10 relative"
      >
        {/* Family Greeting / Respect Title */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs md:text-sm tracking-[0.5em] text-[#D4AF37] uppercase font-bold">
            With Cordial Respects
          </span>
          <h2 className="font-serif text-[#5C0612] text-3xl md:text-5xl font-medium tracking-tight mt-2">
            The Families
          </h2>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 2 Column Grid for Chunri Paksh and Sehra Paksh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">
          
          {/* CHUNRI PAKSH (Bride's Side) */}
          <div className="bg-[#FFFDD0]/50 backdrop-blur-xs border border-[#D4AF37]/15 p-8 rounded-2xl relative shadow-xs">
            <div className="absolute -top-4 left-6 bg-[#5C0612] text-[#FFFDD0] px-5 py-1 text-[11px] md:text-xs font-serif uppercase tracking-[0.2em] font-semibold rounded-full shadow-sm">
              🌸 CHUNRI PAKSH
            </div>

            <div className="space-y-6 pt-2">
              {CHUNRI_PAKSH.map((item, idx) => (
                <div key={idx} className="border-b border-[#D4AF37]/10 last:border-b-0 pb-5 last:pb-0">
                  <h4 className="font-serif text-lg md:text-xl font-bold text-[#5C0612] mb-1.5">
                    {item.sideTitle}
                  </h4>
                  <ul className="space-y-1">
                    {item.members.map((member, mIdx) => (
                      <li key={mIdx} className="font-sans text-xs md:text-sm text-[#5C0612]/75">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* SEHRA PAKSH (Groom's Side) */}
          <div className="bg-[#FFFDD0]/50 backdrop-blur-xs border border-[#D4AF37]/15 p-8 rounded-2xl relative shadow-xs">
            <div className="absolute -top-4 left-6 bg-[#5C0612] text-[#FFFDD0] px-5 py-1 text-[11px] md:text-xs font-serif uppercase tracking-[0.2em] font-semibold rounded-full shadow-sm">
              👑 SEHRA PAKSH
            </div>

            <div className="space-y-6 pt-2">
              {SEHRA_PAKSH.map((item, idx) => (
                <div key={idx} className="border-b border-[#D4AF37]/10 last:border-b-0 pb-5 last:pb-0">
                  <h4 className="font-serif text-lg md:text-xl font-bold text-[#5C0612] mb-1.5">
                    {item.sideTitle}
                  </h4>
                  <ul className="space-y-1">
                    {item.members.map((member, mIdx) => (
                      <li key={mIdx} className="font-sans text-xs md:text-sm text-[#5C0612]/75">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Heartfelt Sagraha Nimantran floating Outro */}
        <div className="text-center mt-20 pt-10 border-t border-[#D4AF37]/20 max-w-2xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#5C0612] font-semibold italic mb-4">
            सग्रह निमंत्रण
          </p>
          <p className="font-sans text-[#5C0612]/80 text-xs md:text-sm leading-relaxed max-w-md mx-auto mb-6">
            "Your warm presence, wonderful conversations, and blessings on our wedding day are the greatest gifts we could ever receive."
          </p>
          
          <div className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
            — JALAN &amp; SINGHAL FAMILIES
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
