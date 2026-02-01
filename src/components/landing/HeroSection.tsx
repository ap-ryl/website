import { useState, useEffect } from "react";
import { Play } from "lucide-react";

const CYCLING_WORDS = [
  "modern infra.",
  "your cloud.",
  "your stack.",
  "DevOps teams.",
];

interface HeroSectionProps {
  onWaitlistClick: () => void;
  onDemoClick: () => void;
}

export function HeroSection({ onWaitlistClick, onDemoClick }: HeroSectionProps) {
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
          <span className="text-white">The intelligence layer</span>
          <br />
          <span className="relative inline-block h-[1.2em] overflow-hidden">
            <span
              className={`text-gray-500 transition-all duration-500 inline-block ${
                isChanging
                  ? "translate-y-full opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              for {CYCLING_WORDS[wordIdx]}
            </span>
          </span>
        </h1>
      </div>

      {/* Subheadline */}
      <p className="mt-6 text-center text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Apryl is the AI-native workspace for DevOps teams.
        <br className="hidden md:block" />
        Build, ship, and manage production systems with the guidance of a
        <br className="hidden md:block" />
        senior engineer built directly into your workflow.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onWaitlistClick}
          className="px-7 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
        >
          Get early access
        </button>
        <button
          onClick={onDemoClick}
          className="px-7 py-3 bg-white/10 text-white rounded-lg font-medium text-sm hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
        >
          <Play className="h-4 w-4" />
          Watch the demo
        </button>
      </div>
    </section>
  );
}
