import { useState, useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WaitlistModal } from "@/components/landing/WaitlistModal";
import { FileText } from "lucide-react";

export function DocsPage() {
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
              <FileText className="w-8 h-8 text-gray-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Documentation
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            We're writing comprehensive guides, API references, and tutorials.
            Join the waitlist to get early access when docs go live.
          </p>

          <button
            onClick={() => setIsWaitlistModalOpen(true)}
            className="px-7 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Join Waitlist for Early Access
          </button>

          <p className="mt-12 text-sm text-gray-600">
            Coming soon
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
