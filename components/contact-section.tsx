"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Building2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inquiryTypes = [
  { value: "ai-model", label: "AI 모델 개발" },
  { value: "smartfarm-kit", label: "스마트팜 키트" },
  { value: "education", label: "교육 프로그램" },
  { value: "research", label: "연구 협력" },
  { value: "other", label: "기타" },
];

interface FormState {
  name: string;
  organization: string;
  email: string;
  inquiryType: string;
  message: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    organization: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

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

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Contact info */}
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
              농업 AI, 스마트팜 교육, 연구 협력 등
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
                    contact@psitta.ai
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
                    서울특별시 영등포구 문래동
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
                  <p className="text-white/40 text-xs mt-0.5">프시타쿠스 인텔리전스</p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="mt-16 p-6 rounded-2xl border border-white/8 bg-white/3">
              <p className="text-white/30 text-sm leading-relaxed italic">
                "농업 현장의 문제를 함께 해결할<br />
                파트너를 언제나 환영합니다."
              </p>
              <p className="text-[#7FD67F]/60 text-xs mt-3 font-medium">— Psitta Team</p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <CheckCircle2 size={48} className="text-[#7FD67F]" />
                  <h3 className="text-white font-bold text-xl">문의가 접수되었습니다</h3>
                  <p className="text-white/55 text-sm">
                    빠른 시일 내에 이메일로 회신드리겠습니다.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4 border-white/20 text-white bg-transparent hover:bg-white/10"
                  >
                    다시 문의하기
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-medium tracking-wide">
                        이름 <span className="text-[#7FD67F]">*</span>
                      </label>
                      <Input
                        required
                        placeholder="홍길동"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-white/6 border-white/15 text-white placeholder:text-white/25 focus:border-[#7FD67F]/60 focus:ring-[#7FD67F]/20 h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-white/60 text-xs font-medium tracking-wide">
                        소속
                      </label>
                      <Input
                        placeholder="회사 / 기관명"
                        value={form.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        className="bg-white/6 border-white/15 text-white placeholder:text-white/25 focus:border-[#7FD67F]/60 focus:ring-[#7FD67F]/20 h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium tracking-wide">
                      이메일 <span className="text-[#7FD67F]">*</span>
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-white/6 border-white/15 text-white placeholder:text-white/25 focus:border-[#7FD67F]/60 focus:ring-[#7FD67F]/20 h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium tracking-wide">
                      문의 유형 <span className="text-[#7FD67F]">*</span>
                    </label>
                    <Select
                      required
                      value={form.inquiryType}
                      onValueChange={(v) => handleChange("inquiryType", v)}
                    >
                      <SelectTrigger className="bg-white/6 border-white/15 text-white h-11 focus:ring-[#7FD67F]/20 data-[placeholder]:text-white/25">
                        <SelectValue placeholder="문의 유형을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0D1B2A] border-white/15">
                        {inquiryTypes.map((type) => (
                          <SelectItem
                            key={type.value}
                            value={type.value}
                            className="text-white focus:bg-[#7FD67F]/15 focus:text-white"
                          >
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/60 text-xs font-medium tracking-wide">
                      문의 내용 <span className="text-[#7FD67F]">*</span>
                    </label>
                    <Textarea
                      required
                      placeholder="문의하실 내용을 자유롭게 작성해 주세요."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                      className="bg-white/6 border-white/15 text-white placeholder:text-white/25 focus:border-[#7FD67F]/60 focus:ring-[#7FD67F]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#7FD67F] text-[#0D1B2A] hover:bg-[#6bc86b] font-bold h-12 text-base"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-[#0D1B2A] border-t-transparent animate-spin" />
                        전송 중...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} />
                        문의 보내기
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
