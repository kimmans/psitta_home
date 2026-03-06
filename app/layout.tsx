import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "프시타(Psitta) — 농업 AI 솔루션 & 스마트팜 교육",
  description:
    "농업용 AI 모델 개발, 스마트팜 IoT 키트, 데이터 분석 컨설팅, 계량분석 연구. 프시타쿠스 인텔리전스.",
  keywords: ["농업AI", "스마트팜", "IoT 교육", "농업 데이터", "계량분석", "WTP"],
  openGraph: {
    title: "프시타(Psitta) — 농업 AI 솔루션 & 스마트팜 교육",
    description:
      "농업용 AI 모델 개발, 스마트팜 IoT 키트, 데이터 분석 컨설팅, 계량분석 연구. 프시타쿠스 인텔리전스.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
