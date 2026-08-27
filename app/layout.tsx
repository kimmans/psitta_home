import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.psitta.co.kr"),
  alternates: {
    canonical: "/",
  },
  title: "프시타(Psitta) — 농축산 AI 솔루션 & AI 리터러시 교육",
  description:
    "지능형 양계 농장 관리 시스템, 시설작물 병해충 진단 PsittaScan, FDE 맞춤형 온톨로지 구축, AI 리터러시 교육·모델 품질 컨설팅. 프시타(Psittacus Intelligence).",
  keywords: ["농업AI", "축산AI", "양계 농장 관리 시스템", "스마트팜", "시설작물 병해충 진단", "PsittaScan", "FDE", "농업 온톨로지", "AI 리터러시 교육", "AI 모델 품질 컨설팅", "psitta.app"],
  openGraph: {
    title: "프시타(Psitta) — 농축산 AI 솔루션 & AI 리터러시 교육",
    description:
      "지능형 양계 농장 관리 시스템, 시설작물 병해충 진단 PsittaScan, FDE 맞춤형 온톨로지 구축, AI 리터러시 교육·모델 품질 컨설팅. 프시타(Psittacus Intelligence).",
    type: "website",
    locale: "ko_KR",
    url: "https://www.psitta.co.kr",
    siteName: "프시타(Psitta)",
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
