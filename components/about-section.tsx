"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5 },
  }),
};

const word = "PSITTACUS";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#F5F4F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-8 h-0.5 bg-[#7FD67F]" />
          <span className="text-[#7FD67F] text-sm font-semibold tracking-[0.2em] uppercase">
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Large Typography */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative">
              {/* Large background word */}
              <div
                className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-extrabold leading-none tracking-tighter select-none"
                style={{ color: "transparent", WebkitTextStroke: "1px rgba(13,27,42,0.08)" }}
                aria-hidden
              >
                {word}
              </div>

              {/* Animated foreground word */}
              <div className="absolute top-0 left-0 flex overflow-hidden">
                {word.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-extrabold leading-none tracking-tighter"
                    style={{
                      color: i < 6 ? "#0D1B2A" : "#7FD67F",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Etymology breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 space-y-3"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#7FD67F] font-bold text-lg mt-0.5">Psittacus</span>
                <div>
                  <p className="text-[#0D1B2A] font-semibold text-sm">Large Language Model</p>
                  <p className="text-[#1C1C1E]/60 text-sm">Stochastic Parrot</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#0D1B2A] font-bold text-lg mt-0.5">Intelligence</span>
                <div>
                  <p className="text-[#0D1B2A] font-semibold text-sm">Artificial Intelligence</p>
                  <p className="text-[#1C1C1E]/60 text-sm">Education & Sustainability</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #0D1B2A 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
          </motion.div>

          {/* Right: Brand Story */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] leading-tight mb-2">
                프시타쿠스
                <br />
                <span className="text-[#7FD67F]">인텔리전스</span>
              </h2>
              <p className="text-[#1C1C1E]/50 text-sm font-medium tracking-wide">
                Psittacus Intelligence Co., Ltd.
              </p>
            </div>

            <Separator className="bg-[#0D1B2A]/10" />

            {/* Blockquote */}
            <blockquote className="relative pl-6 border-l-2 border-[#7FD67F]">
              <p className="text-[#1C1C1E]/80 text-base lg:text-lg leading-relaxed">
                프시타(Psitta)는 라틴어{" "}
                <em className="not-italic font-semibold text-[#0D1B2A]">Psittacus</em>
                {" "}— 앵무새의 학명 — 에서 왔습니다.
              </p>
              <p className="mt-4 text-[#1C1C1E]/80 text-base lg:text-lg leading-relaxed">
                확률적 앵무새는 거대언어모델(LLM)을 달리 부르는 이름입니다.
                프시타는 스마트팜 데이터를 기반으로 {" "}
                <span className="font-semibold text-[#0D1B2A]">농업 LLM 모델을 개발</span>
                하고 직접체험을 통해 <span className="font-semibold text-[#7FD67F]">지식을 미래로 전달</span>합니다.
              </p>
            </blockquote>

            {/* Vision cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "미션", value: "AI와 교육을 통한 \n지속가능한 농업 실현" },
                { label: "비전", value: "데이터 기반 농업의\n확산과 세대 전환" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-white border border-[#0D1B2A]/8 shadow-sm"
                >
                  <p className="text-xs font-semibold text-[#7FD67F] tracking-wider uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="text-[#0D1B2A] font-semibold text-sm leading-snug whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Target audience */}
            <div className="pt-2">
              <p className="text-xs text-[#1C1C1E]/40 font-medium tracking-wider uppercase mb-3">
                주요 대상
              </p>
              <div className="flex flex-wrap gap-2">
                {["농업 관계자", "교육기관", "정부/지자체", "연구기관"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-[#0D1B2A]/5 text-[#0D1B2A] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
