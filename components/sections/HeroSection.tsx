export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      <div className="text-center w-full">
        <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-6">
          People Leader · AI-Native · Builder
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-[#1C1917] leading-tight max-w-4xl mx-auto mb-6">
          Strong organisations are built through thoughtfully designed
          environments.
        </h1>
        <p className="text-lg text-[#78716C] max-w-2xl mx-auto mb-10">
          I&apos;m Pooja Lathkar — a people leader who builds the systems,
          teams and cultures that make that possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-[#C4714A] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#b05e39] transition-colors"
          >
            Book a call
          </a>
          <a
            href="mailto:poojalathkar@gmail.com"
            className="border border-[#E2D9CF] text-[#78716C] px-8 py-3 rounded-full text-sm font-medium hover:border-[#C4714A] hover:text-[#C4714A] transition-colors"
          >
            or email me
          </a>
        </div>
      </div>
    </section>
  );
}
