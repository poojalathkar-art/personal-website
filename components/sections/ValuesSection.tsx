"use client";

import ScrollFadeIn from "@/components/ScrollFadeIn";

const values = [
  {
    title: "Fix systems, not symptoms.",
    tagline: "Look upstream before you intervene downstream.",
    story:
      "I once inherited a team getting 25,000 customer interactions a day, but NPS wasn't moving. The instinct was to push harder on training. Instead I dug into why — and found that most people were getting no feedback at all. Fixed the feedback pipeline. NPS followed.",
  },
  {
    title: "Integrity is non-negotiable.",
    tagline: "Even when the timing is inconvenient.",
    story:
      "In my first month at a new role, I discovered two employees had breached confidentiality protocols. No established relationships, early days, high personal cost. I terminated both immediately. There was no version of that decision where I didn't.",
  },
  {
    title: "Empathy + courage in equal measure.",
    tagline: "Neither alone produces good leadership.",
    story:
      "Too much empathy and you're tolerating poor performance. Too much courage and you become someone people fear. Good leadership — and good HR — lives in the tension between the two. You have to be warm enough to earn trust and honest enough to tell the truth.",
  },
];

function FlipCard({ value }: { value: (typeof values)[0] }) {
  return (
    <div className="group h-64 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 bg-[#F0EBE3] rounded-2xl p-8 flex flex-col justify-between [backface-visibility:hidden]">
          <p className="text-xs uppercase tracking-widest text-[#C4714A]">
            Hover to see the story
          </p>
          <div>
            <h3 className="font-serif text-xl text-[#1C1917] mb-3">{value.title}</h3>
            <p className="text-sm text-[#78716C]">{value.tagline}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-[#C4714A] rounded-2xl p-8 flex items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-sm text-white leading-relaxed">{value.story}</p>
        </div>
      </div>
    </div>
  );
}

export default function ValuesSection() {
  return (
    <section id="values" className="py-24 px-6">
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
              <FlipCard value={v} />
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn delay={300}>
          <div className="border-l-4 border-[#C4714A] pl-8 py-1 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#C4714A] mb-3">
              Core belief
            </p>
            <p className="font-serif text-2xl text-[#1C1917] leading-snug">
              People are intrinsically motivated by purpose. Compensation is hygiene — not fuel.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
