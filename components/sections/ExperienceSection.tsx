import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#F0EBE3]">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
                Experience
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-2">
                15 years. Five sectors.
              </h2>
              <p className="text-[#78716C] text-lg">
                Education → Social Impact → Fintech → Deep-tech.
              </p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#C4714A] text-[#C4714A] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#C4714A] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download full CV
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
