"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Award, Presentation, Clock } from "lucide-react";

const timelineItems = [
  {
    icon: BookOpen,
    label: "논문 발표",
    placeholder: "연구 논문을 준비 중입니다",
  },
  {
    icon: Award,
    label: "수상 이력",
    placeholder: "수상 이력을 준비 중입니다",
  },
  {
    icon: Presentation,
    label: "학술 발표",
    placeholder: "학술 발표 이력을 준비 중입니다",
  },
];

export default function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#F5F4F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-0.5 bg-[#7FD67F]" />
          <span className="text-[#7FD67F] text-sm font-semibold tracking-[0.2em] uppercase">
            Research
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight mb-6">
              데이터로 증명하는
              <br />
              <span className="text-[#7FD67F]">연구 성과</span>
            </h2>
            <p className="text-[#1C1C1E]/60 text-base lg:text-lg leading-relaxed mb-8">
              프시타는 현장 경험과 학술 연구를 연결합니다.
              논문, 수상, 학술 발표를 통해 검증된 기술과 방법론을 제공합니다.
            </p>

            {/* Preparing notice */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border"
              style={{
                background: "rgba(127,214,127,0.08)",
                borderColor: "rgba(127,214,127,0.25)",
              }}
            >
              <Clock size={16} className="text-[#7FD67F]" />
              <span className="text-[#1A3A2A] font-semibold text-sm">
                연구 성과를 준비 중입니다
              </span>
            </div>

            {/* Research focus areas */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { area: "농업 경제학", desc: "비시장 가치 평가" },
                { area: "머신러닝", desc: "작물 생육 예측" },
                { area: "IoT 시스템", desc: "스마트팜 센서" },
                { area: "데이터 사이언스", desc: "농업 데이터 분석" },
              ].map((item) => (
                <div
                  key={item.area}
                  className="p-4 rounded-xl bg-white border border-[#0D1B2A]/8 shadow-sm"
                >
                  <p className="text-[#0D1B2A] font-semibold text-sm">{item.area}</p>
                  <p className="text-[#1C1C1E]/50 text-xs mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7FD67F]/40 via-[#7FD67F]/20 to-transparent" />

            <div className="space-y-8">
              {timelineItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    className="flex gap-6 group"
                  >
                    {/* Node */}
                    <div className="relative flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#7FD67F]/30 bg-[#F5F4F0] flex items-center justify-center z-10 group-hover:border-[#7FD67F] group-hover:bg-[#7FD67F]/10 transition-all">
                      <Icon size={16} className="text-[#7FD67F]/60 group-hover:text-[#7FD67F] transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <p className="text-xs font-semibold text-[#7FD67F] tracking-wider uppercase mb-1">
                        {item.label}
                      </p>
                      <div className="p-4 rounded-xl border border-dashed border-[#0D1B2A]/15 bg-white/60">
                        <p className="text-[#1C1C1E]/40 text-sm italic">
                          {item.placeholder}
                        </p>
                        {/* Skeleton lines */}
                        <div className="mt-3 space-y-2">
                          <div className="h-2 bg-[#0D1B2A]/6 rounded-full w-3/4 animate-pulse" />
                          <div className="h-2 bg-[#0D1B2A]/6 rounded-full w-1/2 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Coming soon block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex gap-6"
              >
                <div className="relative flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#7FD67F] bg-[#7FD67F]/10 flex items-center justify-center z-10">
                  <span className="w-2 h-2 rounded-full bg-[#7FD67F] animate-pulse" />
                </div>
                <div className="flex-1 flex items-center">
                  <p className="shimmer-text font-bold text-base">
                    연구 성과 발표 예정
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
