import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  // Target date: July 01, 2026, 9:00 PM (21:00:00)
  const targetDate = new Date("2026-07-01T21:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null;

  const timeUnits = [
    { label: "Days", value: timeLeft.days, emoji: "☀️" },
    { label: "Hours", value: timeLeft.hours, emoji: "🌙" },
    { label: "Minutes", value: timeLeft.minutes, emoji: "✨" },
    { label: "Seconds", value: timeLeft.seconds, emoji: "⏳" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto px-6 mt-8 mb-12 relative z-10"
    >
      {/* Decorative Gold Filigree Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/30 via-transparent to-[#D4AF37]/30 rounded-3xl blur-md opacity-40 pointer-events-none" />

      {/* Main Glassmorphic Panel */}
      <div className="relative bg-[#FFFDD0]/75 backdrop-blur-md border border-[#D4AF37]/35 rounded-3xl p-6 md:p-8 shadow-xl text-center overflow-hidden">
        
        {/* Editorial border/corners */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#D4AF37]/60" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#D4AF37]/60" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#D4AF37]/60" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D4AF37]/60" />

        {/* Title inside countdown */}
        <div className="mb-6">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-bold block mb-1">
            Counting Down to the Auspicious Hour
          </span>
          <h3 className="font-serif text-[#5C0612] text-lg md:text-2xl font-bold tracking-wide">
            Shubh Parinayotsav Begins In
          </h3>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-2xl mx-auto">
          {timeUnits.map((unit) => (
            <div 
              key={unit.label} 
              className="bg-[#FAF9F6]/90 border border-[#D4AF37]/20 rounded-2xl p-3 md:p-5 flex flex-col items-center justify-center transition-all duration-300 hover:border-[#5C0612]/40 hover:shadow-md"
            >
              {/* Animated/Glowing Number */}
              <span className="font-display text-2xl md:text-5xl font-extrabold text-[#5C0612] tracking-normal mb-1">
                {String(unit.value).padStart(2, "0")}
              </span>
              
              {/* Unit Label */}
              <span className="font-sans text-[10px] md:text-xs tracking-widest text-[#D4AF37] uppercase font-bold flex items-center gap-1">
                <span className="hidden md:inline">{unit.emoji}</span> {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Date Note */}
        <p className="font-serif text-[#5C0612]/75 text-xs md:text-sm mt-6 italic">
          July 01, 2026 • New Delhi, India
        </p>
      </div>
    </motion.div>
  );
}
