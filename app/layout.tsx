import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "프시타(Psitta) — 농업 AI 솔루션 & 스마트팜 교육",
  description:
    "딸기 병해충 AI 인식·처방 시스템 PsittaScan, 농장 맞춤형 생산관리 AI-ERP 구축, 농업교육용 AI툴 psitta.app. 프시타쿠스 인텔리전스.",
  keywords: ["농업AI", "스마트팜", "딸기 병해충", "PsittaScan", "농장 AI-ERP", "농업 온톨로지", "농업 교육 AI", "psitta.app"],
  openGraph: {
    title: "프시타(Psitta) — 농업 AI 솔루션 & 스마트팜 교육",
    description:
      "딸기 병해충 AI 인식·처방 시스템 PsittaScan, 농장 맞춤형 생산관리 AI-ERP 구축, 농업교육용 AI툴 psitta.app. 프시타쿠스 인텔리전스.",
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
