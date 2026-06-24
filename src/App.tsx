import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Timeline from "./components/Timeline";
import Venue from "./components/Venue";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import KineticCanvas from "./components/KineticCanvas";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnterCelebration = () => {
    setHasEntered(true);
  };

  // Modern navigation anchor scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#5C0612] selection:text-[#FFFDD0] overflow-x-hidden font-sans">
      
      {/* 1. Kinetic interactive background sparkles & ambient light orbs */}
      <KineticCanvas />

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          /* CINEMATIC INTRO HERO SCREEN */
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              y: -80,
              transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } 
            }}
            className="relative z-20 min-h-screen w-full"
          >
            <Hero onEnter={handleEnterCelebration} />
          </motion.div>
        ) : (
          /* MAIN HIGH-END DIGITAL INVITATION SAGA */
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 80 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
            }}
            className="relative z-10 w-full min-h-screen pb-12 flex flex-col"
          >
            {/* Elegant Floating Glassmorphic Header Nav Indicator */}
            <header className="sticky top-6 z-40 w-full px-6 flex justify-center pointer-events-none select-none">
              <nav className="pointer-events-auto flex items-center gap-1.5 md:gap-4 bg-[#FFFDD0]/85 backdrop-blur-md border border-[#D4AF37]/35 px-4 md:px-6 py-2.5 rounded-full shadow-lg transition-all hover:border-[#D4AF37]/60">
                <button
                  onClick={() => scrollToSection("couple")}
                  className="font-serif text-[10px] md:text-xs text-[#5C0612] tracking-wider font-bold uppercase hover:text-[#D4AF37] transition-colors focus:outline-none cursor-pointer"
                >
                  💑 Couple
                </button>
                <span className="text-[#D4AF37]/45 text-[10px]">•</span>
                <button
                  onClick={() => scrollToSection("timeline")}
                  className="font-serif text-[10px] md:text-xs text-[#5C0612] tracking-wider font-bold uppercase hover:text-[#D4AF37] transition-colors focus:outline-none cursor-pointer"
                >
                  🌿 Itinerary
                </button>
                <span className="text-[#D4AF37]/45 text-[10px]">•</span>
                <button
                  onClick={() => scrollToSection("venue")}
                  className="font-serif text-[10px] md:text-xs text-[#5C0612] tracking-wider font-bold uppercase hover:text-[#D4AF37] transition-colors focus:outline-none cursor-pointer"
                >
                  📍 Venue
                </button>
                <span className="text-[#D4AF37]/45 text-[10px]">•</span>
                <button
                  onClick={() => scrollToSection("footer")}
                  className="font-serif text-[10px] md:text-xs text-[#5C0612] tracking-wider font-bold uppercase hover:text-[#D4AF37] transition-colors focus:outline-none cursor-pointer"
                >
                  👪 Families
                </button>
              </nav>
            </header>

            {/* Main Sections */}
            <main className="flex-grow">
              {/* Luxury Glassmorphic Countdown Timer */}
              <Countdown />

              {/* Couple narrative section */}
              <Couple />

              {/* Dividing visual separator */}
              <div className="flex items-center justify-center py-6 pointer-events-none">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
                <span className="text-[#D4AF37] text-xs px-3">⚜</span>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
              </div>

              {/* Timeline Itinerary */}
              <Timeline />

              {/* Dividing visual separator */}
              <div className="flex items-center justify-center py-6 pointer-events-none">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
                <span className="text-[#D4AF37] text-xs px-3">⚜</span>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
              </div>

              {/* Destination Venue */}
              <Venue />
            </main>

            {/* Outro respects & traditional Sagraha Nimantran footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
