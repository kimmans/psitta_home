"use client";

import { Separator } from "@/components/ui/separator";

const navSections = [
  {
    title: "사이트맵",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Research", href: "#research" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "서비스",
    links: [
      { label: "농업용 AI 모델 개발", href: "#services" },
      { label: "AI 스마트팜 키트 & 교육", href: "#services" },
      { label: "데이터 분석 & 컨설팅", href: "#services" },
      { label: "계량분석 연구", href: "#services" },
    ],
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: "#0A1520" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Col 1: Logo + Slogan */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#7FD67F] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.1V20h8v-4.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7z" fill="#0D1B2A"/>
                  <circle cx="9.5" cy="9.5" r="1" fill="#0D1B2A"/>
                  <path d="M12 2c1.5 0 2.8.5 3.8 1.4" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Psitta</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              농업의 언어를 AI로 번역합니다.<br />
              데이터와 지능으로 농업의 미래를 설계합니다.
            </p>
            <p className="text-white/25 text-xs">
              Psittacus Intelligence Co., Ltd.
            </p>

            {/* Social / contact link */}
            <a
              href="mailto:jmhanmu@gmail.com"
              className="inline-flex items-center gap-2 text-[#7FD67F]/70 hover:text-[#7FD67F] text-sm transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-[#7FD67F]" />
              jmhanmu@gmail.com
            </a>
          </div>

          {/* Col 2 & 3: Nav sections */}
          {navSections.map((section) => (
            <div key={section.title}>
              <p className="text-white/30 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/55 hover:text-white text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/8 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 Psitta (프시타). All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span className="text-white/20 text-xs">사업자등록번호: 338-41-00999</span>
            <span className="text-white/20 text-xs">서울특별시 영등포구 문래동</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
