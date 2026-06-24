import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  angle: number;
  spinSpeed: number;
}

export default function KineticCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 65;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Initialize elegant golden dust particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        particles.push({
          x,
          y,
          targetX: x,
          targetY: y,
          size,
          baseSize: size,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.6 + 0.2,
          hue: 45 + Math.random() * 15, // Golden hues (45-60)
          angle: Math.random() * Math.PI * 2,
          spinSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    initParticles();

    // Mouse/Touch handlers with smooth dampening
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("touchend", handleMouseLeave);

    // Loop drawing
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw 3 soft luxury ambient glow orbs in the background
      // Crimson Orb
      const gradCrimson = ctx.createRadialGradient(
        canvas.width * 0.1,
        canvas.height * 0.2,
        10,
        canvas.width * 0.1,
        canvas.height * 0.2,
        canvas.width * 0.4
      );
      gradCrimson.addColorStop(0, "rgba(92, 6, 18, 0.04)");
      gradCrimson.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradCrimson;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gold Orb
      const gradGold = ctx.createRadialGradient(
        canvas.width * 0.85,
        canvas.height * 0.75,
        10,
        canvas.width * 0.85,
        canvas.height * 0.75,
        canvas.width * 0.5
      );
      gradGold.addColorStop(0, "rgba(212, 175, 55, 0.05)");
      gradGold.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradGold;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Central soft crimson-cream vignette
      const gradCenter = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        100,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );
      gradCenter.addColorStop(0, "rgba(255, 253, 208, 0.1)");
      gradCenter.addColorStop(1, "rgba(92, 6, 18, 0.02)");
      ctx.fillStyle = gradCenter;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update sparkles
      particles.forEach((p) => {
        // Drift
        p.x += p.speedX;
        p.y += p.speedY;
        p.angle += p.spinSpeed;

        // Interaction with cursor
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Subtle pull/push based on distance
          if (distance < 250) {
            const force = (250 - distance) / 250;
            // Let golden dust gently follow the cursor
            p.x += (dx / distance) * force * 1.2;
            p.y += (dy / distance) * force * 1.2;
            p.size = p.baseSize * (1 + force * 0.8);
          } else {
            p.size = p.baseSize;
          }
        } else {
          p.size = p.baseSize;
        }

        // Boundary wrapping
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Draw elegant glowing sparkle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        
        // Shiny star flare glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${p.hue}, 85%, 60%, ${p.opacity})`;
        
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.opacity})`;
        
        // Draw cross star shape for larger sparkles, circle for smaller
        if (p.size > 2.2) {
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 2);
          ctx.quadraticCurveTo(0, 0, p.size * 2, 0);
          ctx.quadraticCurveTo(0, 0, 0, p.size * 2);
          ctx.quadraticCurveTo(0, 0, -p.size * 2, 0);
          ctx.quadraticCurveTo(0, 0, 0, -p.size * 2);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("touchend", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="kinetic-canvas"
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
