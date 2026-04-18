"use client";
import CTASection from "@/components/CtaSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TutorialSection from "@/components/TutorialSection";
import GallerySection from "@/components/GallerySection";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-30 bg-white">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <GallerySection />
      <AboutSection />
      <TutorialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
