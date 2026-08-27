"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ScanEye,
  Warehouse,
  Network,
  GraduationCap,
  ArrowUpRight,
  MapPin,
  Layers,
  Code2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Warehouse,
    title: "지능형 양계 농장 관리 시스템",
    description:
      "현장에서 모국어 음성으로 말하면 생산·폐사·출하가 기록되고, 입고부터 출하까지 하나의 로트(LOT)로 이어집니다.",
    tag: "Livestock AI",
    highlights: ["STT 음성 입력", "LOT 이력 자동 연결", "HACCP·이력제 서식 자동화"],
    footer: "사업영역 01",
  },
  {
    icon: ScanEye,
    title: "시설작물 병해충 진단 PsittaScan",
    description:
      "사진 한 장으로 잎과 열매를 동시에 판독해 병해충을 진단하고, 농진청 공식 매뉴얼에 따른 방제 처방까지 안내합니다.",
    tag: "Vision AI",
    highlights: ["병해충 이미지 진단", "숙성도·출하등급 판정", "농사로 농약정보 연동"],
    footer: "사업영역 02",
  },
  {
    icon: Network,
    title: "FDE 맞춤형 온톨로지 구축",
    description:
      "전문 FDE가 현장에 들어가 고객의 데이터와 암묵지를 AI가 읽을 수 있는 구조로 재설계합니다.",
    tag: "Data Engineering",
    highlights: ["고객 데이터 정제·통합", "도메인 온톨로지 설계", "설명 가능한 의사결정"],
    footer: "사업영역 03",
  },
  {
    icon: GraduationCap,
    title: "AI 리터러시 교육 · 품질 컨설팅",
    description:
      "현장 종사자가 직접 다뤄보는 실습형 AI 교육과, 구축된 AI 모델의 품질을 점검하는 컨설팅을 제공합니다.",
    tag: "EdTech",
    highlights: ["실습형 AI 교육", "psitta.app 웹 실습 도구", "AI 모델 품질 컨설팅"],
    footer: "psitta.app",
  },
];

const fdeTraits = [
  {
    icon: MapPin,
    title: "현장에 상주합니다",
    description:
      "고객사에 직접 파견되어 몇 개월에서 몇 년간 함께 일하며, 비즈니스 문제를 기술로 풉니다.",
  },
  {
    icon: Layers,
    title: "한 고객에게 깊게 들어갑니다",
    description:
      "기능 하나를 100개 고객에게 파는 대신, 한 고객의 문제에 필요한 모든 것을 만듭니다.",
  },
  {
    icon: Code2,
    title: "조언하지 않고 직접 만듭니다",
    description:
      "컨설턴트는 조언하고 떠나지만, FDE는 직접 코딩하고 끝까지 책임집니다.",
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

/* FDE panel — the cards finish around 0.9s, so the panel picks up from there. */
const FDE_START = 0.45;

const fdePanel = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: FDE_START, duration: 0.7, ease: easing },
  },
};

const fdeLine = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: FDE_START + 0.18 + i * 0.1, duration: 0.55, ease: easing },
  }),
};

const fdeTrait = {
  hidden: { opacity: 0, x: 28 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: FDE_START + 0.34 + i * 0.14, duration: 0.55, ease: easing },
  }),
};

const fdeIcon = {
  hidden: { scale: 0.4, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: FDE_START + 0.42 + i * 0.14,
      type: "spring" as const,
      stiffness: 320,
      damping: 18,
    },
  }),
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

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
              도메인 데이터 기반
              <br />
              <span className="text-[#7FD67F]">AI 서비스 구축</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/50 max-w-sm lg:text-right text-base leading-relaxed"
          >
            고객 현장에 전문 FDE가 직접 들어가
            <br />
            당신의 데이터에 맞는 맞춤형 AI를 설계합니다.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* What is FDE */}
        <motion.div
          variants={fdePanel}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 relative rounded-3xl border border-white/8 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          {/* Ambient glow — slow breathing loop */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 12% 0%, rgba(127,214,127,0.10) 0%, transparent 70%)",
            }}
            animate={reduceMotion ? { opacity: 0.85 } : { opacity: [0.5, 1, 0.5] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
          />

          <div className="relative p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <motion.span
                className="w-8 h-0.5 bg-[#7FD67F] origin-left"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: FDE_START + 0.1, duration: 0.5, ease: easing }}
              />
              <span className="text-[#7FD67F] text-xs font-semibold tracking-[0.2em] uppercase">
                What is FDE
              </span>
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#7FD67F]"
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: [1, 0.25, 1], scale: [1, 0.8, 1] }
                }
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                }
              />
            </div>

            <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 lg:gap-14">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                  <motion.span
                    custom={0}
                    variants={fdeLine}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="block"
                  >
                    Forward Deployed Engineer
                  </motion.span>
                  <motion.span
                    custom={1}
                    variants={fdeLine}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="block text-[#7FD67F]"
                  >
                    전방 배치 엔지니어
                  </motion.span>
                </h3>
                <motion.p
                  custom={2}
                  variants={fdeLine}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="text-white/60 text-base leading-relaxed mb-4"
                >
                  고객사 현장에 직접 들어가 상주하면서, 그들의 비즈니스 문제를
                  기술로 해결하는 엔지니어를 말합니다.
                </motion.p>
                <motion.p
                  custom={3}
                  variants={fdeLine}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="text-white/40 text-sm leading-relaxed"
                >
                  팔란티어(Palantir)가 CIA·미 국방부 프로젝트에서 만들어낸
                  역할이고, 지금은 OpenAI를 비롯한 AI 기업들이 같은 방식으로
                  일합니다. 표준 제품을 파는 대신 한 고객의 문제에 맞는 것을
                  만들기 때문에, 역할은 개발자보다{" "}
                  <span className="text-white/70">스타트업 CTO</span>에 가깝습니다.
                </motion.p>
              </div>

              <div className="space-y-5">
                {fdeTraits.map((trait, i) => {
                  const Icon = trait.icon;
                  return (
                    <motion.div
                      key={trait.title}
                      custom={i}
                      variants={fdeTrait}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      className="flex gap-4 group cursor-default"
                    >
                      <motion.div
                        custom={i}
                        variants={fdeIcon}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="w-10 h-10 rounded-xl bg-[#7FD67F]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7FD67F]/30 transition-colors"
                      >
                        <Icon className="text-[#7FD67F]" size={18} />
                      </motion.div>
                      <div className="space-y-1">
                        <h4 className="text-white font-semibold text-base leading-snug">
                          {trait.title}
                        </h4>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {trait.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
