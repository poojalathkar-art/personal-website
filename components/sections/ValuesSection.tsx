import ScrollFadeIn from "@/components/ScrollFadeIn";

const values = [
  {
    title: "Fix systems, not symptoms.",
    body: "When something isn't working, I look upstream before I intervene downstream. At Groww, when NPS wasn't moving, I didn't push harder on training — I diagnosed that feedback wasn't reaching agents at all, and fixed the pipeline. The symptom was performance. The system was broken feedback loops.",
  },
  {
    title: "Integrity is non-negotiable.",
    body: "Even when timing is inconvenient or the cost is high. In my first month at Digantara — a defence startup working with governments across the world — I discovered two employees had breached confidentiality protocols. I terminated both immediately. Early days, no relationships yet. Still the only call.",
  },
  {
    title: "Empathy + courage in equal measure.",
    body: "Empathy without courage is tolerance. Courage without empathy is cruelty. Good people leadership lives in the tension between the two — staying warm enough to earn trust and honest enough to tell the truth. Neither alone produces strong teams.",
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
            Values
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
            What I stand for
          </h2>
          <div className="h-0.5 w-12 bg-[#C4714A] mb-14" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {values.map((v, i) => (
            <ScrollFadeIn key={v.title} delay={i * 100}>
              <div className="bg-[#F0EBE3] rounded-2xl p-8 h-full">
                <h3 className="font-serif text-xl text-[#1C1917] mb-4">
                  {v.title}
                </h3>
                <p className="text-[#78716C] leading-relaxed text-sm">
                  {v.body}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Core belief */}
        <ScrollFadeIn delay={350}>
          <div className="border-l-4 border-[#C4714A] pl-8 py-2 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-3">
              Core belief
            </p>
            <p className="font-serif text-2xl md:text-3xl text-[#1C1917] leading-snug">
              People are intrinsically motivated by purpose. Compensation and
              benefits are hygiene — not fuel.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
