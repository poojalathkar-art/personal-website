import ScrollFadeIn from "@/components/ScrollFadeIn";

const companies = [
  { name: "Digantara", sector: "Deep-tech", initial: "D" },
  { name: "Groww", sector: "Fintech", initial: "G" },
  { name: "The/Nudge Institute", sector: "Social Impact", initial: "N" },
  { name: "Teach For India", sector: "Education", initial: "TFI" },
  { name: "Lead School", sector: "Education", initial: "LS" },
];

export default function CompaniesSection() {
  return (
    <section className="py-16 px-6 border-y border-[#E2D9CF]">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <p className="text-xs uppercase tracking-widest text-[#78716C] text-center mb-10">
            Where I&apos;ve built
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2 group">
                {/* Logo placeholder — replace img src when logos are available */}
                <div className="w-12 h-12 rounded-xl bg-[#F0EBE3] flex items-center justify-center text-[#78716C] text-xs font-semibold group-hover:bg-[#C4714A] group-hover:text-white transition-colors">
                  {c.initial}
                </div>
                <span className="text-xs text-[#1C1917] font-medium text-center leading-tight max-w-[80px]">
                  {c.name}
                </span>
                <span className="text-xs text-[#C4714A] uppercase tracking-wider">
                  {c.sector}
                </span>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
