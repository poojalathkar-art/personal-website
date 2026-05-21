"use client";

import ScrollFadeIn from "@/components/ScrollFadeIn";

const cards = [
  {
    title: "First principles thinking",
    tagline: "I go back to why before I touch how.",
    back: "When NPS wasn't moving, I didn't push harder on training. I went back to first principles — why isn't feedback reaching people at all? Fixed that. NPS followed.",
  },
  {
    title: "Bringing order to chaos",
    tagline: "I'm most useful when orgs are scaling faster than their systems.",
    back: "I've stepped into orgs mid-scale three times. Each time the chaos looked different. The fix was always the same: make ownership legible, make decisions faster, make the environment clearer.",
  },
  {
    title: "People × AI",
    tagline: "AI removes the noise so human judgment lands better.",
    back: "I've used AI to audit 25,000 daily customer interactions, redesign training systems, and build a people ops assistant from scratch. Not to replace judgment — to sharpen it.",
  },
];

function FlipCard({ card }: { card: (typeof cards)[0] }) {
  return (
    <div className="group h-56 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 bg-[#F0EBE3] rounded-2xl p-7 flex flex-col justify-between [backface-visibility:hidden]">
          <p className="text-xs uppercase tracking-widest text-[#C4714A]">Hover</p>
          <div>
            <h3 className="font-serif text-xl text-[#1C1917] mb-2">{card.title}</h3>
            <p className="text-sm text-[#78716C]">{card.tagline}</p>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-[#C4714A] rounded-2xl p-7 flex items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-sm text-white leading-relaxed">{card.back}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhatIBringSection() {
  return (
    <section id="what-i-bring" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
            What I bring
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-14">
            My edge
          </h2>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollFadeIn key={card.title} delay={i * 100}>
              <FlipCard card={card} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
