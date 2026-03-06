import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ResearchSection from "@/components/research-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { getAllPosts } from "@/lib/research";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResearchSection posts={latestPosts} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
