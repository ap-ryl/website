import { useState, useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WaitlistModal } from "@/components/landing/WaitlistModal";
import { PenLine } from "lucide-react";

export function BlogPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        isScrolled={isScrolled}
        onWaitlistClick={() => setIsWaitlistModalOpen(true)}
      />

      <main className="relative z-20 pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <PenLine className="w-8 h-8 text-gray-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            No posts yet. We'll be sharing insights on AI-powered DevOps,
            infrastructure automation, and engineering best practices.
          </p>
          <p className="text-gray-600 text-sm">
            Check back soon.
          </p>
        </div>
      </main>

      <Footer />
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}
