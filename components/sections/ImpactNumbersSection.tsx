import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";

const metrics = [
  { target: 6, prefix: "USD ", suffix: "M", label: "raised with 100% donor retention" },
  { target: 91, suffix: "%", label: "CSAT — up from 88%" },
  { target: 50, suffix: "%", label: "productivity boost via AI quality audits" },
  { target: 85, suffix: "%", label: "classroom retention — up from 50%" },
];

export default function ImpactNumbersSection() {
  return (
    <section className="py-20 px-6 bg-[#1C1917]">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl text-[#C4714A] mb-3">
                  <AnimatedCounter
                    target={m.target}
                    prefix={m.prefix}
                    suffix={m.suffix}
                  />
                </p>
                <p className="text-xs text-[#78716C] leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
