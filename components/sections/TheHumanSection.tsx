import ScrollFadeIn from "@/components/ScrollFadeIn";

const interests = [
  { emoji: "🏊", label: "Swimming" },
  { emoji: "🌿", label: "Gardening" },
  { emoji: "🐈", label: "Cat mum to 2" },
  { emoji: "🐦", label: "Bird watching" },
  { emoji: "🦁", label: "Wildlife" },
  { emoji: "📚", label: "Adam Grant & Brené Brown" },
];

export default function TheHumanSection() {
  return (
    <section id="the-human" className="py-28 px-6 bg-[#F0EBE3]">
      <div className="max-w-3xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
            The Human
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
            Beyond the work
          </h2>
          <div className="h-0.5 w-12 bg-[#C4714A] mb-10" />
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <p className="text-[#4A4440] text-lg leading-relaxed mb-8">
            A lot of how I think about organisations is also shaped by what I&apos;m drawn to outside
            work. I spend a lot of time birdwatching, travelling and rescuing cats. I&apos;ve adopted
            two strays, and I actively rescue others in need.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={150}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            {interests.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm text-[#4A4440]">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <blockquote className="border-l-4 border-[#C4714A] pl-6 py-1">
            <p className="text-[#4A4440] text-lg leading-relaxed italic">
              &ldquo;Good observation requires patience, pattern recognition and understanding environments
              before intervening in them. I think the same is true for leadership and organisational design.&rdquo;
            </p>
          </blockquote>
        </ScrollFadeIn>

        <ScrollFadeIn delay={250}>
          <p className="mt-8 text-[#78716C] text-lg leading-relaxed">
            I&apos;m also endlessly curious about human behaviour — which explains my interest in
            psychology, true crime documentaries, systems thinking and writers like Adam Grant and
            Brené Brown.
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
