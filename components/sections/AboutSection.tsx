import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F0EBE3]">
      <div className="max-w-3xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
            Where the question came from
          </h2>
          <div className="h-0.5 w-12 bg-[#C4714A] mb-10" />
        </ScrollFadeIn>

        <div className="space-y-5 text-[#4A4440] text-lg leading-relaxed">
          <ScrollFadeIn delay={100}>
            <p>
              I&apos;ve always been interested in environments and the way they shape people.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={150}>
            <p>
              Early in my career, visiting classrooms across low-income schools, I noticed
              something: the most engaged children weren&apos;t always in the best-resourced rooms.
              It was the quality of the environment — the trust, the clarity, the care — that
              made the difference.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <p>
              That observation quietly shaped everything that followed. From teaching in
              under-resourced schools to building people systems at scale across social impact,
              fintech and deep-tech — the question has stayed the same:
            </p>
            <p className="font-serif text-xl text-[#1C1917] mt-4 pl-4 border-l-2 border-[#C4714A]">
              How do people grow, learn and do meaningful work when environments become more complex?
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={250}>
            <p>
              That question is what drew me to People &amp; Culture — and to AI as a tool for
              making those environments work better, not just more efficient.
            </p>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
