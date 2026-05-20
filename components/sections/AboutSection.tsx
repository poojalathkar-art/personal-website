import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-[#F0EBE3]">
      <div className="max-w-3xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
            The story behind the work
          </h2>
          <div className="h-0.5 w-12 bg-[#C4714A] mb-10" />
        </ScrollFadeIn>

        <div className="space-y-6 text-[#4A4440] text-lg leading-relaxed">
          <ScrollFadeIn delay={100}>
            <p>
              I&apos;ve always been interested in environments and the way they shape people.
            </p>
            <p className="mt-4">
              That curiosity first appeared in classrooms.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={150}>
            <p>
              Early in my career, I worked as a credit manager with Indian School Finance Company,
              assessing low-income schools applying for infrastructure loans. Most of my work involved
              visiting classrooms, understanding school operations and evaluating whether school owners
              could sustainably grow.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <p>
              One classroom stayed with me.
            </p>
            <p className="mt-4">
              The children were deeply engaged, joyful and curious despite having far fewer resources
              than many others. I left wondering how much human potential is shaped not just by talent,
              but by the environments people grow within.
            </p>
            <p className="mt-4 font-medium text-[#1C1917]">
              That question quietly shaped the rest of my career.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={250}>
            <p>
              I joined Teach For India in 2012 and spent the next several years teaching children from
              underserved communities, coaching fellows and eventually developing leadership capability
              across program teams. The work was rigorous, emotionally demanding and deeply formative.
              Many students entered classrooms already carrying enormous inequities in confidence,
              opportunity and access. Over time, I realised teaching was never only about academics.
              It was about trust, emotional safety, aspiration, systems and leadership.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={300}>
            <p>
              As my career evolved, my interest expanded from classrooms into larger organisational systems.
            </p>
            <p className="mt-4">
              At The/Nudge, I moved across fundraising, product, behavioural research, learning systems
              and eventually People &amp; Culture. During the pandemic, I helped redesign livelihood skilling
              programs for underserved youth as learning moved online. That period pushed me to think
              deeply about human behaviour at scale: motivation, aspiration, retention and access.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={350}>
            <p>
              One of the things I noticed during field research in North Karnataka was that many young
              people aspired toward urban jobs and financial independence, but lacked visibility into
              pathways, opportunities and the skills required to get there. Instead of expecting youth
              to discover opportunities through traditional channels, I became interested in meeting them
              where their attention already existed.
            </p>
            <p className="mt-4">
              That eventually led to building JobCoach_KA, a digital awareness initiative on Instagram
              focused on livelihoods and employability. Over time, the platform grew to over 220K
              followers, significantly reducing acquisition costs for our skilling programs while helping
              more young people discover opportunities and information relevant to them.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={400}>
            <p className="font-medium text-[#1C1917] text-xl font-serif">
              What stayed consistent through all these experiences was the same underlying question:
              how do people grow, learn and do meaningful work when environments become more complex?
            </p>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
