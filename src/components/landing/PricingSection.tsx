interface PricingSectionProps {
  onWaitlistClick: () => void;
}

export function PricingSection({ onWaitlistClick }: PricingSectionProps) {
  return (
    <section id="pricing" className="px-6 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-6">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Free during beta
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Get early access and help shape the future of AI-powered
            infrastructure. Founding partners receive preferential pricing at
            launch.
          </p>
          <button
            onClick={onWaitlistClick}
            className="px-7 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Get early access
          </button>
        </div>
      </div>
    </section>
  );
}
