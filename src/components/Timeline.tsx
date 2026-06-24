import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { TIMELINE_EVENTS } from "../data";
import { TimelineEvent } from "../types";

// Premium 3D Tilt card component for an immersive hover experience
function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  
  // Normalized mouse coords (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for silky smooth damping
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl overflow-hidden ${className} cursor-default`}
    >
      {/* Dynamic Gold Light Flare following cursor */}
      <motion.div
        style={{
          background: `radial-gradient(circle 120px at var(--glow-x, 50%) var(--glow-y, 50%), rgba(212, 175, 55, 0.15), transparent)`,
          // Custom properties for CSS mapping
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
        className="absolute inset-0 pointer-events-none z-10"
      />
      
      {/* 3D Depth Layer */}
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [filterDay, setFilterDay] = useState<"ALL" | "JUNE" | "JULY">("ALL");

  const filteredEvents = TIMELINE_EVENTS.filter((e) => {
    if (filterDay === "JUNE") return e.date.includes("June");
    if (filterDay === "JULY") return e.date.includes("July");
    return true;
  });

  return (
    <section id="timeline" className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#FFFDD0]/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs md:text-sm tracking-[0.5em] text-[#D4AF37] uppercase font-bold">
            The Celebration Itinerary
          </span>
          <h2 className="font-serif text-[#5C0612] text-3xl md:text-5xl font-medium tracking-tight mt-2">
            Events Timeline
          </h2>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4 mb-8" />

          {/* Quick Filter Tabs for interactive GenZ experience */}
          <div className="inline-flex bg-[#FFFDD0]/85 backdrop-blur-md border border-[#D4AF37]/25 p-1 rounded-full shadow-sm z-20 relative">
            {(["ALL", "JUNE", "JULY"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterDay(tab)}
                className={`px-6 py-2 rounded-full text-xs font-serif uppercase tracking-[0.15em] font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
                  filterDay === tab
                    ? "bg-[#5C0612] text-[#FFFDD0] shadow-md"
                    : "text-[#5C0612]/70 hover:text-[#5C0612]"
                }`}
              >
                {tab === "ALL" ? "Full Saga" : tab === "JUNE" ? "Day 1 • June 30" : "Day 2 • July 01"}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative mt-16 pl-4 md:pl-0">
          
          {/* Centered timeline vertical bar */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#D4AF37]/80 via-[#5C0612]/30 to-[#D4AF37]/80 transform -translate-x-[0.75px] pointer-events-none" />

          {/* Render Itinerary Nodes */}
          <div className="space-y-16">
            {filteredEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Gold Node Connector */}
                  <div className="absolute left-[-21px] md:left-1/2 top-4 w-5 h-5 rounded-full border border-[#D4AF37] bg-[#FFFDD0] flex items-center justify-center transform -translate-x-1/2 z-10 shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5C0612] animate-pulse" />
                  </div>

                  {/* Left Side (Spanning card width) */}
                  <div className="w-full md:w-[46%] ml-6 md:ml-0">
                    
                    {/* Event 3D Tilt Card */}
                    <TiltCard className="bg-[#FFFDD0]/60 backdrop-blur-md border border-[#D4AF37]/20 shadow-sm hover:shadow-lg p-6 md:p-8 transition-shadow">
                      {/* Day / Date Tag */}
                      <div className="flex items-center justify-between gap-2 mb-4 border-b border-[#D4AF37]/15 pb-3">
                        <span className="font-sans text-[10px] md:text-xs tracking-[0.15em] text-[#D4AF37] uppercase font-bold">
                          {event.date} • {event.day}
                        </span>
                        <div className="bg-[#5C0612]/5 px-3 py-1 rounded-full text-xs font-serif text-[#5C0612] font-semibold flex items-center gap-1">
                          ⏰ {event.time}
                        </div>
                      </div>

                      {/* Header + Emoji Icon */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFFDD0] to-[#FAF9F6] border border-[#D4AF37]/35 flex items-center justify-center text-xl shadow-inner">
                          {event.emoji}
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-[#5C0612] tracking-wide">
                          {event.title}
                        </h3>
                      </div>

                      {/* Description Narrative */}
                      <p className="font-sans text-xs md:text-[13px] text-[#5C0612]/75 leading-relaxed">
                        {event.description}
                      </p>
                    </TiltCard>

                  </div>

                  {/* Right Side Spacer for balanced look */}
                  <div className="hidden md:block md:w-[8%]" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
