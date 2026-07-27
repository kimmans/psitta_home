"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Workflow, School, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  {
    year: "2023",
    title: "시작: 대회에서 증명하다",
    items: [
      "농식품부 스마트농업 AI 경진대회 온라인 해커톤 **1위** (팀장)",
      "GIST 토마토 AI 원격재배 경진대회 **우수상** (GBST상)",
    ],
    note: "작물 생육 데이터와 영상 기반 AI의 결합 가능성을 처음 확인한 해",
  },
  {
    year: "2024",
    title: "심화: 비전 AI 파이프라인 구축",
    items: [
      "스마트농업 AI 경진대회 본선 **1위**",
      "딸기 병해 이미지 데이터셋 구축 및 YOLO 계열 탐지 모델 실험 착수",
      "한국지능정보사회진흥원(NIA) **인공지능 모델 컨설턴트**",
    ],
  },
  {
    year: "2025",
    title: "확장: 진단에서 처방으로",
    items: [
      "딸기 **7대 병해 판정** 파이프라인 완성 — YOLOv8 + GroundingDINO + SAM + BLIP-2(LoRA)",
      "RAG 기반 처방 지식베이스 구축, 할루시네이션 억제를 위한 **신경-심볼릭 구조** 도입",
      "재배 지식 **온톨로지** 설계 착수 — \"왜 이 처방인가\"를 설명 가능한 의사결정 지원으로",
      "국회 스마트농업 AI 기술 발표",
      "『생성형 AI 개론』 출간",
    ],
  },
  {
    year: "2026",
    title: "서비스화: 현장에 닿는 AI",
    items: [
      "**4월 30일** — 프시타(Psittacus Intelligence) 법인 설립",
      "PSITTA/프시타 상표출원 (9·41·42류)",
      "**PsittaScan v0.7** 공개 — GroundingDINO + SAM2 + Depth Anything V2 + Claude API 기반 과실 탐지·숙성도·병해 진단 통합 파이프라인",
      "**5월 30일** — **psitta.app** 출시, 학교·교육기관용 웹 기반 농업 AI 실습 도구",
      "농업 특화 sLLM 개발 착수 — B200 GPU 기반 대규모 추론·합성데이터 생성 파이프라인 구축",
      "농업 커뮤니티 데이터 플랫폼(FarmTok) 운영",
    ],
  },
];

const evidence = [
  {
    src: "/awards/leaderboard.png",
    alt: "스마트농업 AI 경진대회 온라인 해커톤 리더보드 1위 — 토마토대작전 99.180점",
    caption: "온라인 해커톤 리더보드 1위 · 99.180점",
    objectPosition: "object-top",
  },
  {
    src: "/awards/finalists.png",
    alt: "스마트농업 AI 경진대회 본선 진출팀 발표 — 토마토대작전",
    caption: "본선 진출팀 발표 · 토마토대작전",
    objectPosition: "object-center",
  },
  {
    src: "/awards/presentation.png",
    alt: "스마트농업 AI 경진대회 본선 발표평가 현장",
    caption: "본선 발표평가 (2024.02)",
    objectPosition: "object-center",
  },
];

const capabilities = [
  {
    icon: Camera,
    tag: "Vision",
    title: "저비용 하드웨어, 고성능 진단",
    description:
      "10만원대 단안 카메라 한 대로 병해 판별·숙성도·크기 등급까지. 별도 장비 투자 없이 스마트폰 사진만으로 작동합니다.",
  },
  {
    icon: Workflow,
    tag: "Symbolic",
    title: "설명 가능한 AI",
    description:
      "벡터 유사도 검색에 그치지 않고, 병해–약제–시기 관계를 온톨로지로 구조화해 처방의 근거를 제시합니다.",
  },
  {
    icon: School,
    tag: "Edu",
    title: "158개 시군 교육 네트워크",
    description:
      "농업교육 현장에서 축적한 데이터와 네트워크가 AI 모델의 학습·검증 기반이 됩니다.",
  },
];

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: easing },
  }),
};

/** Renders **강조** segments as highlighted text. */
function Emphasized({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-white font-semibold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function HistorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="history"
      ref={sectionRef}
      className="py-24 lg:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D1B2A 0%, #091320 45%, #0D1B2A 100%)",
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
            History
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
              경진대회 1위에서
              <br />
              <span className="text-[#7FD67F]">현장 서비스까지, 3년</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/50 max-w-sm lg:text-right text-base leading-relaxed"
          >
            2023년 첫 AI 경진대회부터 2026년 상용 서비스까지,
            <br />
            프시타는 매년 실제로 작동하는 것을 만들어 왔습니다.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start mb-20">
          {/* Timeline */}
          <div className="relative pl-8">
            <span
              className="absolute left-[5px] top-3 bottom-3 w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(127,214,127,0.5) 0%, rgba(255,255,255,0.12) 60%, transparent 100%)",
              }}
            />
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.year}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-8 top-2 w-[11px] h-[11px] rounded-full bg-[#7FD67F] ring-4 ring-[#7FD67F]/15" />

                <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#7FD67F] tabular-nums leading-none">
                    {entry.year}
                  </span>
                  <span className="text-white font-semibold text-base lg:text-lg">
                    {entry.title}
                  </span>
                </div>

                <ul className="space-y-2">
                  {entry.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-white/55 text-sm lg:text-[15px] leading-relaxed"
                    >
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-[#7FD67F]/50 flex-shrink-0" />
                      <span>
                        <Emphasized text={item} />
                      </span>
                    </li>
                  ))}
                </ul>

                {entry.note && (
                  <p className="mt-4 pl-4 border-l-2 border-[#7FD67F]/30 text-white/40 text-sm italic leading-relaxed">
                    {entry.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Evidence photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7, ease: easing }}
            className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:w-[300px] w-full"
          >
            {evidence.map((item) => (
              <figure
                key={item.src}
                className="rounded-2xl overflow-hidden border border-white/8"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className={`object-cover ${item.objectPosition}`}
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs text-white/40 leading-snug">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                custom={i}
                variants={fadeUp}
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
                      background:
                        "linear-gradient(135deg, rgba(127,214,127,0.06) 0%, transparent 60%)",
                      border: "1px solid rgba(127,214,127,0.15)",
                    }}
                  />
                  <CardContent className="relative p-7 flex flex-col h-full gap-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#7FD67F]/15 flex items-center justify-center group-hover:bg-[#7FD67F]/25 transition-colors">
                        <Icon className="text-[#7FD67F]" size={22} />
                      </div>
                      <span className="text-xs text-[#7FD67F]/60 font-medium tracking-wider uppercase border border-[#7FD67F]/20 px-2.5 py-1 rounded-full">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-snug">{cap.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{cap.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-white/8"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <p className="text-white text-lg lg:text-xl font-semibold text-center sm:text-left">
            농업 현장의 문제를 AI로 풀고 싶으신가요?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button
              onClick={() => handleScroll("#contact")}
              className="bg-[#7FD67F] text-[#0D1B2A] hover:bg-[#6bc86b] font-semibold text-sm px-6 h-11"
            >
              문의하기
              <ArrowRight size={15} />
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/25 text-white bg-transparent hover:bg-white/10 font-medium text-sm px-6 h-11"
            >
              <a href="https://psitta.app" target="_blank" rel="noopener noreferrer">
                psitta.app 둘러보기
                <ArrowUpRight size={15} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
