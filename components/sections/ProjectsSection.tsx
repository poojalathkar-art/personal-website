import ScrollFadeIn from "@/components/ScrollFadeIn";

const projects = [
  {
    name: "ClearDesk",
    tagline: "AI People Operations Assistant",
    description:
      "An AI-powered assistant that handles the entire people ops function for growing startups — compensation queries, leave policies, grievances, onboarding support and exit guidance. Operates across three response modes: confirmed answers from verified data, partial responses with uncertainty flagging, and escalation for complex issues.",
    why: "I built this to explore how AI can reduce the friction employees face when navigating HR — and to demonstrate that people ops doesn't have to mean delays and email threads. Built using Claude API.",
    link: "https://hr-products-modules.vercel.app/",
    linkLabel: "View live demo →",
    tags: ["Claude API", "AI", "People Ops", "Demo"],
    note: "Learning project — not production. Built to explore, not to ship.",
  },
  {
    name: "JobCoach_KA",
    tagline: "Digital Livelihoods Platform · Instagram",
    description:
      "A digital awareness initiative built to help underserved youth in Karnataka discover livelihoods, career pathways and skilling opportunities — through a platform where their attention already lived: Instagram.",
    why: "Field research at The/Nudge showed young people aspired toward financial independence but had no visibility into how to get there. Instead of expecting them to find us, we met them where they were.",
    link: null,
    linkLabel: null,
    tags: ["Social Impact", "Content", "Youth Employability", "The/Nudge"],
    metrics: [
      { value: "220K+", label: "followers in 15 months" },
      { value: "90%", label: "reduction in acquisition costs" },
      { value: "9,000+", label: "students reached via BCG & Delhi Govt partnership" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
            Projects
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
            Things I&apos;ve built
          </h2>
          <div className="h-0.5 w-12 bg-[#C4714A] mb-14" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollFadeIn key={project.name} delay={i * 150}>
              <div className="bg-[#F0EBE3] rounded-2xl p-8 h-full flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white text-[#78716C] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-serif text-2xl text-[#1C1917] mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-[#C4714A] mb-4">{project.tagline}</p>

                <p className="text-sm text-[#4A4440] leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-sm text-[#78716C] italic leading-relaxed mb-6 border-l-2 border-[#C4714A]/30 pl-4">
                  {project.why}
                </p>

                {"metrics" in project && project.metrics && (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="bg-white rounded-xl p-3 text-center">
                        <p className="font-serif text-lg text-[#C4714A]">{m.value}</p>
                        <p className="text-xs text-[#78716C] leading-tight mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {"note" in project && project.note && (
                  <p className="text-xs text-[#78716C] italic mb-6">{project.note}</p>
                )}

                {project.link && (
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-[#C4714A] font-medium hover:underline"
                    >
                      {project.linkLabel}
                    </a>
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
