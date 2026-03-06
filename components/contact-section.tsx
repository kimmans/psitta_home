"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Building2 } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D1B2A 0%, #1A3A2A 100%)",
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
            Contact
          </span>
        </motion.div>

        <div className="max-w-2xl">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
              함께 만들어 갈
              <br />
              <span className="text-[#7FD67F]">농업의 미래</span>
            </h2>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed mb-12">
              농업 AI, 스마트팜 교육, 강의, 연구 협력 등
              어떤 주제든 편하게 문의해 주세요.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <a
                href="mailto:contact@psitta.ai"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7FD67F]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7FD67F]/25 transition-colors">
                  <Mail size={18} className="text-[#7FD67F]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium tracking-wide mb-0.5">이메일</p>
                  <p className="text-white font-medium group-hover:text-[#7FD67F] transition-colors">
                    jmhanmu@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7FD67F]/15 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#7FD67F]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium tracking-wide mb-0.5">주소</p>
                  <p className="text-white font-medium">
                    서울특별시 영등포구 양평동
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7FD67F]/15 flex items-center justify-center flex-shrink-0">
                  <Building2 size={18} className="text-[#7FD67F]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium tracking-wide mb-0.5">사업자번호</p>
                  <p className="text-white font-medium">338-41-00999</p>
                  <p className="text-white/40 text-xs mt-0.5">프시타(Psitta)</p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="mt-16 p-6 rounded-2xl border border-white/8 bg-white/3">
              <p className="text-white/30 text-sm leading-relaxed italic">
                &ldquo;농업 현장의 문제를 함께 해결할<br />
                파트너를 언제나 환영합니다.&rdquo;
              </p>
              <p className="text-[#7FD67F]/60 text-xs mt-3 font-medium">— Psitta Team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
