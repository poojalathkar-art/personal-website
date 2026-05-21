import ScrollFadeIn from "@/components/ScrollFadeIn";

const interests = [
  { emoji: "🏊", label: "Swimming" },
  { emoji: "🌿", label: "Gardening" },
  { emoji: "🐈", label: "Cat rescue" },
  { emoji: "🐦", label: "Bird watching" },
  { emoji: "🦁", label: "Wildlife" },
  { emoji: "📚", label: "Adam Grant & Brené Brown" },
];

export default function TheHumanSection() {
  return (
    <section id="the-human" className="py-20 px-6 bg-[#F0EBE3]">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-6">
            The human
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <p className="text-[#4A4440] text-lg leading-relaxed max-w-sm">
              Outside work I swim, garden, rescue strays (two cats adopted so far),
              watch birds and spend as much time around wildlife as possible.
              I read Adam Grant and Brené Brown obsessively.
            </p>
            <div className="flex flex-wrap gap-3">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl px-4 py-3 flex items-center gap-2"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm text-[#4A4440]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
