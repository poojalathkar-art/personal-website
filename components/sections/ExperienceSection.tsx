import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";

const metrics = [
  { target: 220000, suffix: "+", label: "Instagram followers built in 15 months" },
  { target: 50, suffix: "Cr", prefix: "₹", label: "raised across 15 funders at The/Nudge" },
  { target: 85, suffix: "%", label: "classroom retention, up from 50%" },
  { target: 91, suffix: "%", label: "CSAT at Groww, up from 88%" },
  { target: 50, suffix: "%", label: "productivity boost via AI quality audits" },
  { target: 9000, suffix: "+", label: "students reached via Delhi Govt & BCG partnership" },
  { target: 500, suffix: "+", label: "employees supported across people practice roles" },
  { target: 70, suffix: "%", label: "adoption of new people systems at Digantara" },
];

const experience = [
  {
    org: "Digantara",
    role: "Head, People & Culture",
    period: "Sept 2025 – Jan 2026",
    description: "Deep-tech startup building space situational awareness — operating across India and the US.",
    bullets: [
      "Designed org structure for a 120+ member team, bringing clarity to roles, levels and decision-making.",
      "Set up hiring, onboarding and performance processes from scratch — 70% adoption within months.",
      "Worked closely with leadership on culture and communication as the org scaled across geographies.",
    ],
    awards: [],
    narrative: null,
  },
  {
    org: "Groww",
    role: "Associate Director, Customer Experience",
    period: "Sept 2024 – Sept 2025",
    description: "India's leading online investment platform.",
    bullets: [
      "Improved CSAT from 88% to 91% through redesigned training interventions for a 500+ CS team.",
      "Partnered with GreyLabs AI to introduce AI-led quality audits — boosting team productivity by 50%.",
      "Redesigned training modules using AI-driven tools, improving training outcomes by 15%.",
      "Achieved 100% on MRX (Manager Rating) in e-NPS survey.",
    ],
    awards: [],
    narrative: "At Groww, I became increasingly interested in the intersection between AI, operations and human capability. We were getting 25,000 customer calls per day. Monitoring these manually was impossible — meaning most agents never got feedback, and NPS wasn't moving. Introducing AI-led quality audits wasn't just a productivity play. It was the system fix that unlocked meaningful development at scale.",
  },
  {
    org: "The/Nudge Institute",
    role: "Multiple roles",
    period: "Jan 2019 – Nov 2023",
    description: "A purpose-led organisation working on livelihoods for vulnerable groups.",
    bullets: [
      "Head – HRBP, Culture, L&D & People Operations (Jan 2023 – Oct 2023): Strengthened people systems for 500+ employees; led org's first engagement study (90%+ participation).",
      "Associate Director – Learning Innovation & Program Design (Jun 2020 – Dec 2022): Boosted classroom retention from 50% to 85%; built JobCoach_KA to 220K followers in 15 months; partnered with Delhi Govt & BCG to scale skilling programs to 9,000+ students.",
      "Senior Manager – Fundraising (Jan 2019 – May 2020): Secured 100% donor retention and 80% upsell, raising ₹50 Cr (USD 6M) across 15 funders.",
    ],
    awards: ["Best Manager 2022", "Innovator Award 2021", "True to the Spirit Award 2021"],
    narrative: null,
  },
  {
    org: "Lead School",
    role: "Senior Manager, Learning & Development",
    period: "Apr 2018 – Oct 2018",
    description: null,
    bullets: [
      "Led Math & Science curriculum teams, training 500+ teachers across 20K+ students.",
    ],
    awards: [],
    narrative: null,
  },
  {
    org: "Teach For India",
    role: "Fellow → Program Manager → Senior Program Leadership Coach",
    period: "Apr 2012 – Apr 2018",
    description: "A national fellowship developing leaders who can transform India's education system.",
    bullets: [
      "Taught Grade 2 students, driving 3 years of English growth in 2 years.",
      "As Program Manager, coached 16 fellows with 95% sector retention post-fellowship.",
      "As Senior Program Leadership Coach, developed 15 program managers — supporting 200+ fellows and 10,000+ students through metrics-based coaching routines.",
    ],
    awards: [],
    narrative: null,
  },
  {
    org: "SEED Schools",
    role: "Curriculum & Training Manager",
    period: "May 2014 – Apr 2015",
    description: null,
    bullets: [
      "Developed and implemented K-5 curriculum across 5 schools, improving student outcomes by 50%+.",
    ],
    awards: [],
    narrative: null,
  },
  {
    org: "Indian School Finance Company",
    role: "Credit Manager",
    period: "Oct 2009 – Apr 2012",
    description: null,
    bullets: [
      "Assessed credit-worthiness and disbursed ₹4 Cr+ in loans to 20+ low-income schools.",
      "Visited classrooms across schools — and found a question that shaped everything that followed.",
    ],
    awards: [],
    narrative: null,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#F0EBE3]">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
            Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
            15 years of building
          </h2>
          <div className="h-0.5 w-12 bg-[#C4714A] mb-14" />
        </ScrollFadeIn>

        {/* Metrics grid */}
        <ScrollFadeIn delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white rounded-2xl p-6">
                <p className="font-serif text-3xl md:text-4xl text-[#C4714A] font-medium mb-2">
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

        {/* Timeline */}
        <div className="space-y-12">
          {experience.map((role, i) => (
            <ScrollFadeIn key={role.org + role.period} delay={i * 80}>
              <div className="border-l-2 border-[#E2D9CF] pl-8 relative">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#C4714A]" />

                <div className="flex flex-wrap items-start gap-3 mb-1">
                  <h3 className="font-serif text-xl text-[#1C1917]">{role.org}</h3>
                  {role.awards.map((award) => (
                    <span
                      key={award}
                      className="text-xs bg-[#C4714A]/10 text-[#C4714A] px-3 py-1 rounded-full"
                    >
                      {award}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-[#C4714A] mb-1">{role.role}</p>
                <p className="text-xs text-[#78716C] mb-3">{role.period}</p>

                {role.description && (
                  <p className="text-sm text-[#78716C] italic mb-3">
                    {role.description}
                  </p>
                )}

                <ul className="space-y-2">
                  {role.bullets.map((b) => (
                    <li key={b} className="text-sm text-[#4A4440] flex gap-2">
                      <span className="text-[#C4714A] mt-1 shrink-0">–</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {role.narrative && (
                  <p className="mt-4 text-sm text-[#78716C] italic leading-relaxed border-l-2 border-[#C4714A]/30 pl-4">
                    {role.narrative}
                  </p>
                )}
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Closing narrative */}
        <ScrollFadeIn delay={200}>
          <div className="mt-20 max-w-3xl">
            <p className="text-[#4A4440] text-lg leading-relaxed mb-6">
              Across classrooms, nonprofits, fintech and deep-tech startups, I&apos;ve realised
              that the problems are often more connected than they initially appear.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Children struggle in unclear learning environments.",
                "Young professionals struggle in unclear organisations.",
                "Teams struggle when ownership is ambiguous.",
                "Managers struggle when systems create confusion instead of clarity.",
              ].map((line) => (
                <p key={line} className="text-sm text-[#78716C] flex gap-2">
                  <span className="text-[#C4714A] shrink-0">—</span>
                  {line}
                </p>
              ))}
            </div>
            <p className="text-[#4A4440] text-lg leading-relaxed font-serif">
              Over time, I&apos;ve become deeply interested in designing systems that reduce friction
              and help people do meaningful work with greater clarity, trust and confidence.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
