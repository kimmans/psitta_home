"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScanEye, LayoutDashboard, GraduationCap, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: ScanEye,
    title: "딸기 병해충 AI 인식·처방 시스템 PsittaScan",
    description:
      "사진 한 장으로 딸기의 병해충을 판별하고, 상황에 맞는 방제·처방 정보를 제공합니다.",
    tag: "Vision AI",
    highlights: ["병해충 이미지 진단", "방제 처방 추천", "현장 즉시 활용"],
    footer: "PsittaScan",
  },
  {
    icon: LayoutDashboard,
    title: "농장 맞춤형 생산관리 AI-ERP 구축",
    description:
      "농장마다 다른 재배 방식과 데이터를 반영해 생육·작업·출하를 한 흐름으로 관리하는 AI-ERP를 구축합니다.",
    tag: "Farm ERP",
    highlights: ["농장별 맞춤 설계", "생육·작업·출하 관리", "온톨로지 기반 의사결정"],
    footer: "자세히 보기",
  },
  {
    icon: GraduationCap,
    title: "농업교육용 AI툴 psitta.app",
    description:
      "학교와 교육기관에서 바로 활용할 수 있는 농업 AI 실습 도구를 웹으로 제공합니다.",
    tag: "EdTech",
    highlights: ["웹 기반 실습 도구", "초·중등 방과후 교육", "직업훈련 프로그램"],
    footer: "psitta.app",
  },
];

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: easing },
  }),
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D1B2A 0%, #0f2318 50%, #0D1B2A 100%)",
      }}
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
            Services
          </span>
        </motion.div>

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              농업과 AI의 만남,
              <br />
              <span className="text-[#7FD67F]">3가지 방식으로</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/50 max-w-sm lg:text-right text-base leading-relaxed"
          >
            병해충 진단부터 농장 생산관리, 교육까지
            <br />
            농업 현장에 바로 닿는 AI를 만듭니다.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className="h-full border-0 rounded-2xl overflow-hidden group cursor-default"
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(127,214,127,0.06) 0%, transparent 60%)",
                      border: "1px solid rgba(127,214,127,0.15)",
                    }}
                  />
                  <CardContent className="relative p-7 lg:p-8 flex flex-col h-full gap-5">
                    {/* Icon + tag row */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#7FD67F]/15 flex items-center justify-center group-hover:bg-[#7FD67F]/25 transition-colors">
                        <Icon className="text-[#7FD67F]" size={22} />
                      </div>
                      <span className="text-xs text-[#7FD67F]/60 font-medium tracking-wider uppercase border border-[#7FD67F]/20 px-2.5 py-1 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title + Description */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-white font-bold text-xl leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Footer link */}
                    <div className="pt-2 border-t border-white/8 flex items-center justify-between">
                      <span className="text-xs text-white/30">{service.footer}</span>
                      <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#7FD67F]/20 flex items-center justify-center transition-colors">
                        <ArrowUpRight size={14} className="text-white/30 group-hover:text-[#7FD67F] transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
