import type { FeatureCardProps } from "@/types/landing";

export function FeatureCard({
  title,
  description,
  category,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`group relative bg-[#111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#151515] ${className}`}
    >
      <span className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-3 block">
        {category}
      </span>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
