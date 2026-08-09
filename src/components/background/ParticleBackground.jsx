import { useEffect, useRef } from "react";

const CONFIG = {
  particleCount: 90,
  particleColor: "40, 215, 255",   // #28D7FF
  lineColor: "40, 215, 255",
  lineOpacity: 0.35,
  mouseRadius: 200,
  particleLinkRadius: 130,
  fadeAlpha: 0.20,                 // trail fade strength
};

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const rafRef = useRef(null);
  const dprRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }

    function initParticles() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      particlesRef.current = Array.from({ length: CONFIG.particleCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.random() * 0.6 - 0.3,
        vy: Math.random() * 0.6 - 0.3,
        r: Math.random() * 1.5 + 0.5,
      }));
    }

    function dist(x1, y1, x2, y2) {
      const dx = x2 - x1, dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function drawParticle(p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CONFIG.particleColor}, 0.9)`;
      ctx.fill();
    }

    function drawLine(x1, y1, x2, y2, opacity) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(${CONFIG.lineColor}, ${opacity})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }

    function update(p, w, h) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      p.x = Math.max(0, Math.min(w, p.x));
      p.y = Math.max(0, Math.min(h, p.y));
    }

    function animate() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // fade trail (matches particles.html behavior)
      ctx.fillStyle = `rgba(5, 11, 20, ${CONFIG.fadeAlpha})`;
      ctx.fillRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((p, i) => {
        update(p, w, h);
        drawParticle(p);

        // connect to mouse + slight attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dToMouse = dist(p.x, p.y, mouse.x, mouse.y);
          if (dToMouse < CONFIG.mouseRadius) {
            const opacity = 1 - dToMouse / CONFIG.mouseRadius;
            drawLine(p.x, p.y, mouse.x, mouse.y, opacity * 0.5);

            if (dToMouse < CONFIG.mouseRadius / 2) {
              const angle = Math.atan2(mouse.y - p.y, mouse.x - p.x);
              p.x += Math.cos(angle) * 0.3;
              p.y += Math.sin(angle) * 0.3;
            }
          }
        }

        // connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const d = dist(p.x, p.y, other.x, other.y);
          if (d < CONFIG.particleLinkRadius) {
            const opacity = 1 - d / CONFIG.particleLinkRadius;
            drawLine(p.x, p.y, other.x, other.y, opacity * CONFIG.lineOpacity);
          }
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function handleMouseLeave() {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current);
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
    />
  );
}