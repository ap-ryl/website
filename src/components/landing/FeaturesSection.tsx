import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section className="px-6 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for modern infrastructure
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to design, deploy, and manage cloud
            infrastructure at scale.
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
            description="Real-time enforcement of compliance policies across AWS, Azure, and GCP simultaneously."
          />
          <FeatureCard
            category="Optimization"
            title="Agentic FinOps"
            description="Intelligent resource rightsizing that cuts waste by an average of 42% on Day 1."
          />
          <FeatureCard
            category="Observability"
            title="Causal Tracing"
            description="Apryl maps the relationship between every microservice, identifying bottlenecks before they impact customers."
          />
        </div>
      </div>
    </section>
  );
}
