"use client";

import { useRef, type PointerEvent } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Livestock AI", value: "지능형 양계 농장 관리" },
  { label: "Vision AI", value: "PsittaScan 병해충 진단" },
  { label: "Data Engineering", value: "FDE 온톨로지 구축" },
  { label: "EdTech", value: "AI 교육 · 품질 컨설팅" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const visible = useInView(sectionRef);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 75, damping: 24 });
  const rotateX = useSpring(pointerY, { stiffness: 75, damping: 24 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -14);
  };

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <section ref={sectionRef} id="hero" className="psitta-hero" data-active={visible}>
      <div className="psitta-hero-grid" aria-hidden="true" />
      <div className="psitta-hero-inner">
        <div className="psitta-hero-main">
          <div className="psitta-hero-copy">
            <p className="psitta-hero-eyebrow"><span /> PSITTACUS INTELLIGENCE</p>
            <h1 className="psitta-hero-title">
              Activate<span className="psitta-hero-title-accent">your data</span>
            </h1>
            <p className="psitta-hero-description">
              데이터의 가능성을, 현실의 변화로.<br />
              Psitta는 AI와 DATA로 미래를 설계합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => handleScroll("#services")} className="h-12 rounded-full bg-[#7FD67F] px-7 font-semibold text-[#0D1B2A] hover:bg-[#a8e6a8]">
                사업 소개 보기 <ArrowUpRight size={17} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => handleScroll("#about")} className="h-12 rounded-full border-white/20 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white">
                Psitta 소개
              </Button>
            </div>
          </div>
          <div className="psitta-hero-art" onPointerMove={handlePointerMove} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }} aria-hidden="true">
            <div className="psitta-hero-halo" />
            <div className="psitta-hero-orbit psitta-hero-orbit-one" />
            <div className="psitta-hero-orbit psitta-hero-orbit-two" />
            <motion.div className="psitta-hero-sculpture" style={reducedMotion ? {} : { rotateX, rotateY, y: imageY, scale: imageScale }}>
              <div className="psitta-hero-float">
                <Image src="/images/psitta-intelligence-core.webp" alt="" width={1254} height={1254} priority unoptimized className="h-auto w-full" />
              </div>
            </motion.div>
            <div className="psitta-hero-art-label"><span /> CONNECTING DATA TO POSSIBILITY</div>
            <span className="psitta-hero-coordinate">01 / INTELLIGENCE CORE</span>
          </div>
        </div>
        <div className="psitta-hero-bottom">
          <div className="psitta-hero-services">
            {services.map((item, i) => (
              <a href="#services" key={item.label} className="psitta-hero-service" onClick={(event) => { event.preventDefault(); handleScroll("#services"); }}>
                <span className="psitta-hero-service-number">0{i + 1}</span>
                <span className="psitta-hero-service-label">{item.label}</span>
                <span className="psitta-hero-service-value">{item.value}</span>
              </a>
            ))}
          </div>
          <button onClick={() => handleScroll("#about")} className="psitta-hero-scroll" aria-label="회사 소개로 스크롤">
            <ArrowDown size={18} /><span>SCROLL TO EXPLORE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
