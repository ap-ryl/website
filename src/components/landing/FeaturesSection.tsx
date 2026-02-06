import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI-first infrastructure management
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Apryl's AI handles everything from architecture to cost
            optimization — intelligently and autonomously.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureCard
            category="Architecture"
            title="Predictive Layouts"
            description="Visualize your cloud as it will look. Our AI simulates multi-region disasters and auto-balances for resiliency."
          />
          <FeatureCard
            category="Security"
            title="Zero Drift"
            description="AI-enforced compliance policies across AWS, Azure, and GCP — detected and remediated in real time, without human intervention."
          />
          <FeatureCard
            category="Optimization"
            title="Agentic FinOps"
            description="Apryl's AI agent continuously monitors your cloud spend, autonomously rightsizes resources, and eliminates waste — averaging 42% cost reduction from Day 1. No tickets, no approvals, no waiting."
          />
          <FeatureCard
            category="Observability"
            title="Causal Tracing"
            description="Apryl's AI maps every microservice relationship, autonomously identifying bottlenecks and root causes before they impact customers."
          />
        </div>
      </div>
    </section>
  );
}
