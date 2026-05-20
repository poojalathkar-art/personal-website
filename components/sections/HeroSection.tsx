"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-6">
            People Leader · AI-Native · Builder
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1917] leading-tight mb-6">
            Strong organisations are built through thoughtfully designed
            environments.
          </h1>
          <p className="text-lg text-[#78716C] leading-relaxed mb-10 max-w-lg">
            I&apos;m Pooja Lathkar — a people leader who builds the systems,
            teams and cultures that make that possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#C4714A] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#b05e39] transition-colors"
            >
              Book a call
            </a>
            <a
              href="mailto:poojalathkar@gmail.com"
              className="inline-flex items-center justify-center border border-[#E2D9CF] text-[#78716C] px-8 py-3.5 rounded-full text-sm font-medium hover:border-[#C4714A] hover:text-[#C4714A] transition-colors"
            >
              or email me
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-[#E8DFD5]">
            {!imgError ? (
              <Image
                src="/pooja.jpg"
                alt="Pooja Lathkar"
                fill
                className="object-cover object-top"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-[#78716C] gap-3 p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[#D4C8BC] flex items-center justify-center text-3xl">
                  PL
                </div>
                <p className="text-xs text-[#78716C]">
                  Add your photo as /public/pooja.jpg
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
