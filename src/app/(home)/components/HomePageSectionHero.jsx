"use client";

import React from "react";

export default function HomePageSectionHero() {
  return (
    <section className="mx-[8px] mt-[8px] h-[830px] md:h-[920px] lg:h-[1078px] overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-[56px] bg-gradient-to-b from-[#142e6e] to-[#edf2ff] relative">
      <div className="main-container pt-[160px] lg:pt-[206px] text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="flex -space-x-3.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[50px] h-[50px] rounded-full bg-gray-200 ring-2 ring-white overflow-hidden"
              >
                <img
                  src={`/images/ns-avatar-${i}.png`}
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <p className="text-white/80 text-sm ml-3">10,000+ people joined</p>
        </div>

        <h1 className="max-w-[780px] mx-auto text-white text-4xl md:text-6xl font-medium leading-tight">
         Modern &
Tech Driven
Ideal For Debit Card
        </h1>

        <p className="text-white/80 text-lg max-w-[682px] mx-auto mt-4">
         We are at the forefront of revolutionizing the financial landscape through cutting edge fintech solutions.
         Our mission is to bridge the gap between traditional...
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#"
            className="bg-white text-[#142e6e] rounded-2xl px-6 py-3 font-medium hover:bg-gray-100 transition"
          >
            Get started
          </a>
          <a
            href="#"
            className="bg-white/20 backdrop-blur-sm text-white rounded-2xl px-6 py-3 font-medium hover:bg-white/30 transition"
          >
            Book a Demo
          </a>
        </div>

        <div className="mt-16 xl:mt-14 relative pointer-events-none">
          <div className="hero-spin absolute left-1/2 -translate-x-1/2 w-full max-w-[700px]">
            <img
              src="/images/Card-Circal.png"
              alt="Dashboard"
              className="w-full rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

