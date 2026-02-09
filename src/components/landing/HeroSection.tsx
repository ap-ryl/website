import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const CYCLING_WORDS = [
  "SRE.",
  "DevOps engineer.",
  "platform team.",
  "cloud architect.",
];

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  const [wordIdx, setWordIdx] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % CYCLING_WORDS.length);
        setIsChanging(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-6 pt-12 pb-10">
      {/* Badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-xs text-gray-400 font-medium tracking-wide">
          Beta access now open
        </span>
        <span className="text-gray-500 text-xs">›</span>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          <span className="text-white">Your AI-powered</span>
          <br />
          <span className="relative inline-block h-[1.2em] overflow-hidden">
            <span
              className={`text-gray-500 transition-all duration-500 inline-block ${
                isChanging
                  ? "translate-y-full opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              {CYCLING_WORDS[wordIdx]}
            </span>
          </span>
        </h1>
      </div>

      {/* Subheadline */}
      <p className="mt-6 text-center text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Stop waiting on <span className="text-white font-medium">SRE, DevOps &amp; Platform Engineering</span> bottlenecks.
        Apryl's AI agent autonomously designs, deploys, and manages your production infrastructure.
      </p>

      {/* CTA Button */}
      <div className="mt-10">
        <button
          onClick={onWaitlistClick}
          className="px-10 py-3.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          Get early access
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

    </section>
  );
}
