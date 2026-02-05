import { useState, useEffect, useRef } from "react";

function AnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function LiveCounter({ base }: { base: number }) {
  const [extra, setExtra] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setInterval(() => {
      setExtra((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [hasStarted]);

  const total = base + extra;

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-white tabular-nums">
      {total.toLocaleString()}
      <span className="text-green-500">+</span>
    </div>
  );
}

const STATS = [
  { label: "Deployments automated", value: 12400, suffix: "+" },
  { label: "Avg. time to deploy", value: 3, suffix: " min" },
  { label: "Cloud providers supported", value: 5, suffix: "" },
];

export function StatsSection() {
  return (
    <section className="px-6 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Hours Saved Hero */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-4">
            And counting
          </p>
          <LiveCounter base={48500} />
          <p className="text-xl md:text-2xl text-gray-400 mt-4">
            engineering hours saved
          </p>
        </div>

        {/* Supporting Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-xl bg-white/[0.03] border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
