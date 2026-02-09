import { useEffect, useState, useRef } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";

import { LogoStrip } from "@/components/landing/LogoStrip";
import { Footer } from "@/components/landing/Footer";
import { FloatingIcons } from "@/components/landing/FloatingIcons";
import { WaitlistModal } from "@/components/landing/WaitlistModal";
import { iconList } from "@/components/landing/Icons";
import type { FloatingIcon } from "@/types/landing";

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const iconIdCounter = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isWaitlistModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isWaitlistModalOpen]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isWaitlistModalOpen) return;

    const { clientX, clientY } = e;

    const target = e.target as HTMLElement;
    if (target.closest("button, a, .group, .terminal")) {
      return;
    }

    const dist = Math.hypot(
      clientX - lastPos.current.x,
      clientY - lastPos.current.y
    );

    if (dist > 120) {
      const newIcon: FloatingIcon = {
        id: ++iconIdCounter.current,
        x: clientX,
        y: clientY,
        type: iconList[Math.floor(Math.random() * iconList.length)],
        opacity: 0.8,
        rotation: Math.random() * 30 - 15,
        scale: 1.2 + Math.random() * 0.3,
      };

      setFloatingIcons((prev) => [...prev, newIcon]);
      lastPos.current = { x: clientX, y: clientY };

      setTimeout(() => {
        setFloatingIcons((prev) =>
          prev.filter((icon) => icon.id !== newIcon.id)
        );
      }, 1000);
    }
  };

  return (
    <div
      className="landing-page min-h-screen overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <FloatingIcons icons={floatingIcons} />
      <Navbar
        isScrolled={isScrolled}
        onWaitlistClick={() => setIsWaitlistModalOpen(true)}
      />
      <main className="relative z-20 pt-16">
        <HeroSection
          onWaitlistClick={() => setIsWaitlistModalOpen(true)}
        />

        {/* Inline Demo Video */}
        <section id="demo" className="px-6 pt-8 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl shadow-white/5">
              <iframe
                src="https://www.youtube.com/embed/ZSsleVTkn14?autoplay=1&mute=1&loop=1&playlist=ZSsleVTkn14&rel=0&playsinline=1"
                title="Apryl Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>
        <LogoStrip />
        <FeaturesSection />
        <IntegrationsSection />
        <PricingSection onWaitlistClick={() => setIsWaitlistModalOpen(true)} />
      </main>
      <Footer />

      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}
