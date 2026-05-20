export default function ConnectSection() {
  return (
    <section id="connect" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
          Connect
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
          Let&apos;s talk
        </h2>
        <p className="text-[#78716C] text-lg mb-10 max-w-xl mx-auto">
          If something here resonated, I&apos;d love to have a conversation.
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
            poojalathkar@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/poojalathkar"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#E2D9CF] text-[#78716C] px-8 py-3 rounded-full text-sm font-medium hover:border-[#C4714A] hover:text-[#C4714A] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
