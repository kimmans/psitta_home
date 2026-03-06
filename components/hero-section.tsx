"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(127, 214, 127, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(127, 214, 127, ${p.opacity})`;
        ctx.fill();

        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });

      // Draw flowing data lines
      const lineCount = 6;
      for (let i = 0; i < lineCount; i++) {
        const progress = ((Date.now() / 4000 + i / lineCount) % 1);
        const startX = (canvas.width / lineCount) * i + canvas.width / lineCount / 2;
        const curveOffset = Math.sin(Date.now() / 3000 + i) * 80;

        const gradient = ctx.createLinearGradient(startX, 0, startX + curveOffset, canvas.height);
        gradient.addColorStop(0, "rgba(127, 214, 127, 0)");
        gradient.addColorStop(progress > 0.1 ? progress - 0.1 : 0, "rgba(127, 214, 127, 0)");
        gradient.addColorStop(progress, "rgba(127, 214, 127, 0.15)");
        gradient.addColorStop(Math.min(progress + 0.1, 1), "rgba(127, 214, 127, 0)");
        gradient.addColorStop(1, "rgba(127, 214, 127, 0)");

        ctx.beginPath();
        ctx.moveTo(startX, 0);
        ctx.bezierCurveTo(
          startX + curveOffset,
          canvas.height * 0.3,
          startX - curveOffset,
          canvas.height * 0.7,
          startX + curveOffset * 0.5,
          canvas.height
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: easing },
  }),
};

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1B2A 0%, #0f2318 40%, #1A3A2A 70%, #0D1B2A 100%)",
      }}
    >
      <AnimatedBackground />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(127,214,127,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tag */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#7FD67F]/30 bg-[#7FD67F]/10"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <span className="text-[#7FD67F] text-sm font-medium tracking-wider">
            Psittacus Intelligence
          </span>
        </motion.div>

        {/* Main copy */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          Supercharge your farm
          <br />
          <span className="gradient-text">with AI</span>
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl lg:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Psitta는 인공지능과 교육으로
          <br className="hidden sm:block" />
          농업의 미래를 설계합니다
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => handleScroll("#services")}
            className="bg-[#7FD67F] text-[#0D1B2A] hover:bg-[#6bc86b] font-bold text-base px-8 h-12 shadow-lg shadow-[#7FD67F]/20"
          >
            사업 소개 보기
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll("#about")}
            className="border-white/30 text-white bg-transparent hover:bg-white/10 font-medium text-base px-8 h-12"
          >
            Psitta 소개
          </Button>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap gap-8 justify-center"
        >
          {[
            { label: "-", value: "농업용 SLLM 모델 개발" },
            { label: "-", value: "AI 스마트팜 키트 & 교육" },
            { label: "-", value: "데이터 분석 & 컨설팅" },
            { label: "-", value: "계량분석 연구" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-[#7FD67F]">{item.value}</div>
              <div className="text-xs text-white/40 mt-1 tracking-wide">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#7FD67F] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="아래로 스크롤"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
