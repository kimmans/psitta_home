"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, BadgeCheck } from "lucide-react";
import Image from "next/image";

const awards = [
  {
    icon: Trophy,
    year: "2023",
    title: "스마트농업 AI 경진대회 해커톤 1위",
    org: "2023 스마트농업 AI 경진대회",
    description:
      "팀 「토마토대작전」으로 참가해 리더보드 99.180점, 참가팀 중 1위를 기록했습니다.",
  },
  {
    icon: Medal,
    year: "2024",
    title: "인공지능 토마토 재배 부문 우수상 (GBST상)",
    org: "2023 스마트농업 AI 경진대회 본선",
    description:
      "본선 발표평가를 거쳐 인공지능 토마토 재배 부문 우수상을 수상했습니다.",
  },
  {
    icon: BadgeCheck,
    year: "2024",
    title: "NIA 인공지능 모델 컨설턴트",
    org: "한국지능정보사회진흥원(NIA)",
    description:
      "인공지능 모델 컨설턴트로 위촉되어 AI 모델 개발·검증 자문을 수행했습니다.",
  },
];

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: easing },
  }),
};

export default function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="awards"
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
            Awards
          </span>
        </motion.div>

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight">
              현장에서 증명한
              <br />
              <span className="text-[#7FD67F]">농업 AI 기술력</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#1C1C1E]/50 max-w-sm lg:text-right text-base leading-relaxed"
          >
            국내 스마트농업 AI 경진대회와
            <br />
            공공기관 자문으로 검증받은 역량입니다.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Award timeline */}
          <div className="border-t border-[#0D1B2A]/10">
            {awards.map((award, i) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={award.title}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-5 py-7 border-b border-[#0D1B2A]/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#7FD67F]/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#1A6B3A]" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-semibold text-[#1A6B3A] tabular-nums border border-[#7FD67F]/40 px-2.5 py-0.5 rounded-full">
                        {award.year}
                      </span>
                      <span className="text-xs text-[#1C1C1E]/40 font-medium truncate">
                        {award.org}
                      </span>
                    </div>
                    <h3 className="text-[#0D1B2A] font-bold text-lg leading-snug mb-1.5">
                      {award.title}
                    </h3>
                    <p className="text-[#1C1C1E]/55 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Evidence images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: easing }}
            className="space-y-4"
          >
            <figure className="rounded-2xl overflow-hidden bg-white border border-[#0D1B2A]/8 shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/awards/presentation.png"
                  alt="2023 스마트농업 AI 경진대회 본선 발표평가 현장"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-3 text-xs text-[#1C1C1E]/45">
                2023 스마트농업 AI 경진대회 본선 발표평가 (2024.02)
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-4">
              <figure className="rounded-2xl overflow-hidden bg-white border border-[#0D1B2A]/8 shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/awards/leaderboard.png"
                    alt="경진대회 리더보드 1위 — 토마토대작전 99.180점"
                    fill
                    sizes="(max-width: 1024px) 50vw, 270px"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs text-[#1C1C1E]/45">
                  리더보드 1위 · 99.180점
                </figcaption>
              </figure>

              <figure className="rounded-2xl overflow-hidden bg-white border border-[#0D1B2A]/8 shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/awards/finalists.png"
                    alt="2023 스마트농업 AI 경진대회 본선 진출팀 발표 — 토마토대작전"
                    fill
                    sizes="(max-width: 1024px) 50vw, 270px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs text-[#1C1C1E]/45">
                  본선 진출팀 발표 · 토마토대작전
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
