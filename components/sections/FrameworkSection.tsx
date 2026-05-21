"use client";

import { useState } from "react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const quadrants = [
  {
    id: "good-good",
    design: "good",
    execution: "good",
    text: "The good shit happens here.",
    sub: "Clarity, ownership, momentum. People do their best work.",
    accent: true,
  },
  {
    id: "good-bad",
    design: "good",
    execution: "bad",
    text: "Everyone nods in the meeting. Nothing moves after it.",
    sub: "The system is right. The follow-through isn't.",
    accent: false,
  },
  {
    id: "bad-good",
    design: "bad",
    execution: "good",
    text: "Your best people are executing perfectly on the wrong things.",
    sub: "High effort. Wrong direction. Burnout incoming.",
    accent: false,
  },
  {
    id: "bad-bad",
    design: "bad",
    execution: "bad",
    text: "Nobody knows who owns what. Everyone's tired.",
    sub: "Chaos. No amount of hiring fixes this.",
    accent: false,
  },
];

export default function FrameworkSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="framework" className="py-24 px-6 bg-[#F0EBE3]">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-3">
            How I think
          </p>
          <p className="font-serif text-2xl md:text-3xl text-[#1C1917] mb-14">
            Here&apos;s how I think about it.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <div className="relative">
            {/* Axis labels */}
            <div className="flex justify-between text-xs text-[#78716C] uppercase tracking-widest mb-3 ml-16">
              <span>Bad execution</span>
              <span>Good execution</span>
            </div>

            <div className="flex gap-3">
              {/* Y-axis label */}
              <div className="flex flex-col justify-between items-center py-2 w-14 shrink-0">
                <span className="text-xs text-[#78716C] uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
                  Good design
                </span>
                <span className="text-xs text-[#78716C] uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
                  Bad design
                </span>
              </div>

              {/* 2x2 Grid */}
              <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3">
                {quadrants.map((q) => (
                  <div
                    key={q.id}
                    onMouseEnter={() => setHovered(q.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`
                      rounded-2xl p-6 md:p-8 cursor-default transition-all duration-300 min-h-[160px] flex flex-col justify-between
                      ${q.accent
                        ? "bg-[#C4714A] text-white"
                        : hovered === q.id
                        ? "bg-[#1C1917] text-white"
                        : "bg-white text-[#1C1917]"
                      }
                    `}
                  >
                    <p className={`font-serif text-lg md:text-xl leading-snug ${q.accent ? "text-white" : ""}`}>
                      {q.text}
                    </p>
                    <p className={`text-xs mt-3 leading-relaxed transition-opacity duration-300 ${
                      hovered === q.id || q.accent ? "opacity-80" : "opacity-0"
                    }`}>
                      {q.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* X-axis arrow */}
            <div className="flex justify-end mt-2 mr-0">
              <span className="text-xs text-[#78716C] tracking-widest uppercase ml-16">
                execution →
              </span>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
