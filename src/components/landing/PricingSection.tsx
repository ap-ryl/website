import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For individuals and small projects getting started with AI-powered DevOps.",
    features: [
      "Up to 3 projects",
      "Single cloud provider",
      "Basic AI recommendations",
      "Community support",
      "5 deployments per month",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$50",
    originalPrice: "$80",
    period: "/mo",
    description: "For growing teams that need full control over their infrastructure workflows.",
    features: [
      "Unlimited projects",
      "Multi-cloud support",
      "Advanced AI planning & analysis",
      "Terraform code generation",
      "Unlimited deployments",
      "Priority email support",
      "Team collaboration (up to 5)",
      "Audit logging",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$500",
    originalPrice: "$800",
    period: "/mo",
    description: "For organizations with complex infrastructure and compliance requirements.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO & advanced access controls",
      "Dedicated AI model instance",
      "Custom Terraform modules",
      "Isolated execution environments",
      "Dedicated support engineer",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

interface PricingSectionProps {
  onWaitlistClick: () => void;
}

export function PricingSection({ onWaitlistClick }: PricingSectionProps) {
  return (
    <section id="pricing" className="px-6 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Start free and scale as your infrastructure grows. No hidden fees,
            no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white/[0.07] border-2 border-white/20 hover:border-white/30"
                  : "bg-white/[0.03] border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-white mb-2">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-4">
                {"originalPrice" in plan && plan.originalPrice && (
                  <span className="text-lg text-gray-600 line-through">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <button
                onClick={onWaitlistClick}
                className={`w-full py-3 rounded-lg text-sm font-medium transition-colors mb-8 ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
