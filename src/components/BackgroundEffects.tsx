"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  hasGlow: boolean;
  hasSpikes: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  life: number;
  maxLife: number;
  width: number;
  color: string;
}

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    // Star color palette (Realistic night sky stars)
    const starColors = [
      "255, 255, 255",     // Diamond pure white
      "224, 242, 254",     // Light icy blue (sky-100)
      "186, 230, 253",     // Cyan starlight (sky-200)
      "238, 242, 255",     // Indigo starlight (indigo-50)
      "243, 232, 255",     // Lavender violet (purple-100)
      "254, 249, 195",     // Warm golden star (yellow-100)
    ];

    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      // Calculate star count based on screen area (around 160-260 stars)
      const count = Math.floor((width * height) / 6000);
      const starCount = Math.max(120, Math.min(count, 280));

      for (let i = 0; i < starCount; i++) {
        const isBright = Math.random() < 0.12; // 12% are larger/glowing stars
        const hasSpikes = isBright && Math.random() < 0.45; // some bright stars have 4-point diffraction spike
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const size = isBright ? Math.random() * 1.5 + 1.2 : Math.random() * 1.2 + 0.5;
        const baseAlpha = isBright ? Math.random() * 0.4 + 0.6 : Math.random() * 0.5 + 0.3;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: Math.random() * 0.03 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          color,
          hasGlow: isBright,
          hasSpikes,
        });
      }
    };

    initStars();

    // Shooting stars system
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = Date.now();
    let nextShootingStarDelay = 2500 + Math.random() * 3500; // Every 2.5 - 6s

    const spawnShootingStar = () => {
      // Spawn in top-right or upper region, shooting diagonally down-left
      const startX = Math.random() * (width * 0.8) + width * 0.2;
      const startY = Math.random() * (height * 0.45);
      const angle = (Math.PI / 180) * (130 + Math.random() * 25); // ~130 - 155 degrees (down-left)
      const speed = Math.random() * 8 + 10; // Fast and dramatic
      const length = Math.random() * 120 + 80;
      const maxLife = Math.floor(Math.random() * 30 + 40);

      shootingStars.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        alpha: 0,
        life: 0,
        maxLife,
        width: Math.random() * 1.5 + 1,
        color: Math.random() > 0.3 ? "255, 255, 255" : "186, 230, 253",
      });
    };

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      // 1. Draw and twinkle stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const shimmer = Math.sin(star.twinklePhase);
        star.alpha = Math.max(
          0.15,
          Math.min(1, star.baseAlpha + shimmer * 0.35)
        );

        ctx.fillStyle = `rgba(${star.color}, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Soft outer glow for bright stars
        if (star.hasGlow && star.alpha > 0.4) {
          ctx.beginPath();
          const glowGrad = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 5
          );
          glowGrad.addColorStop(0, `rgba(${star.color}, ${star.alpha * 0.5})`);
          glowGrad.addColorStop(1, `rgba(${star.color}, 0)`);
          ctx.fillStyle = glowGrad;
          ctx.arc(star.x, star.y, star.size * 5, 0, Math.PI * 2);
          ctx.fill();
        }

        // 4-point cross diffraction spikes for hero bright stars
        if (star.hasSpikes && star.alpha > 0.5) {
          ctx.strokeStyle = `rgba(${star.color}, ${star.alpha * 0.55})`;
          ctx.lineWidth = 0.6;
          const spikeLen = star.size * 4.5;

          // Horizontal spike
          ctx.beginPath();
          ctx.moveTo(star.x - spikeLen, star.y);
          ctx.lineTo(star.x + spikeLen, star.y);
          ctx.stroke();

          // Vertical spike
          ctx.beginPath();
          ctx.moveTo(star.x, star.y - spikeLen);
          ctx.lineTo(star.x, star.y + spikeLen);
          ctx.stroke();
        }
      }

      // 2. Manage and draw shooting stars
      const now = Date.now();
      if (now - lastShootingStarTime > nextShootingStarDelay) {
        spawnShootingStar();
        lastShootingStarTime = now;
        nextShootingStarDelay = 3000 + Math.random() * 4500;
      }

      for (let j = shootingStars.length - 1; j >= 0; j--) {
        const s = shootingStars[j];
        s.life++;

        // Calculate fade-in and fade-out alpha
        const progress = s.life / s.maxLife;
        if (progress < 0.25) {
          s.alpha = progress / 0.25;
        } else {
          s.alpha = 1 - (progress - 0.25) / 0.75;
        }

        // Move shooting star
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        // Tail coordinates (behind movement)
        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        // Draw gradient tail
        const tailGrad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        tailGrad.addColorStop(0, `rgba(${s.color}, 0)`);
        tailGrad.addColorStop(0.7, `rgba(${s.color}, ${s.alpha * 0.4})`);
        tailGrad.addColorStop(1, `rgba(${s.color}, ${s.alpha * 0.95})`);

        ctx.strokeStyle = tailGrad;
        ctx.lineWidth = s.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // Glowing star head
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.width * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead shooting stars
        if (s.life >= s.maxLife || s.x < -100 || s.y > height + 100) {
          shootingStars.splice(j, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Midnight Cosmic Sky Gradient Backdrop */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 75% 15%, rgba(30, 27, 75, 0.45) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 20% 25%, rgba(15, 23, 42, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 85%, rgba(12, 20, 50, 0.35) 0%, transparent 65%),
            linear-gradient(180deg, #02040a 0%, #050914 40%, #070d1e 70%, #03060f 100%)
          `
        }}
      />

      {/* 2. Soft Moon / Celestial Glow in top right */}
      <div className="absolute -top-16 right-10 md:right-28 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200/10 via-sky-400/5 to-transparent blur-[65px] pointer-events-none" />
      <div className="absolute top-12 right-20 md:right-36 w-20 h-20 rounded-full bg-cyan-100/[0.04] blur-xl pointer-events-none" />

      {/* 3. Subtle Cosmic Nebula Clouds (Aurora & Star Dust) */}
      <div className="absolute top-1/4 -left-36 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-950/30 via-sky-900/15 to-transparent blur-[110px] animate-liquid-blob-1" />
      <div className="absolute top-1/2 -right-48 w-[650px] h-[650px] bg-gradient-to-bl from-purple-950/25 via-blue-900/15 to-transparent blur-[120px] animate-liquid-blob-2" />
      <div className="absolute -bottom-36 left-1/3 w-[700px] h-[700px] bg-gradient-to-t from-sky-950/20 via-indigo-900/10 to-transparent blur-[130px] animate-liquid-blob-1" />

      {/* 4. Canvas with Twinkling Stars & Shooting Stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 5. Interactive Mouse Nebula Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[90px] transition-all duration-75 ease-out"
        style={{ left: "50%", top: "30%" }}
      />
    </div>
  );
};
