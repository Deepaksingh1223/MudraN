"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function HomePageSectionWhyChooseUs() {
  return (
    <section 
      className="py-18 md:py-20 lg:py-24 xl:py-39"
      aria-labelledby="cta-heading"
      aria-describedby="cta-description"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-14">
            {/* text content */}
            <div className="space-y-3" itemScope itemProp="about">
              <h2 
                id="cta-heading"
                className="mx-auto max-w-[550px] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-800 font-normal"
                itemProp="name"
              >
                Ready to spend crypto in real life?
              </h2>
              <p 
                id="cta-description"
                className="mx-auto max-w-[300px] text-base sm:text-lg text-gray-600"
                itemProp="description"
              >
                Join thousands of users already enjoying effortless stablecoin payments.
              </p>
            </div>

            {/* btns */}
            <div 
              className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0"
              role="group"
              aria-label="Call to action buttons"
            >
              <div className="w-[80%] sm:w-full md:mx-0 md:w-auto">
                <div className="btn-v3-secondary btn-v3-lg w-full sm:w-fit cursor-pointer rounded-2xl px-1 py-1 inline-block bg-[#142E6E] hover:bg-[#0e2356] transition-colors duration-300">
                  <a href="/Login" className="block">
                    <div className="flex items-center gap-x-4">
                      <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                        <FiArrowRight className="size-5 text-white" />
                      </span>
                      <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-white font-medium">
                        Get Started Now
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-[80%] sm:w-full md:mx-0 md:w-auto">
                <div className="btn-v3-secondary btn-v3-lg w-full sm:w-fit cursor-pointer rounded-2xl px-1 py-1 inline-block bg-[#142E6E] hover:bg-[#0e2356] transition-colors duration-300">
                  <a href="/contact" className="block">
                    <div className="flex items-center gap-x-4">
                      <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                        <FiArrowRight className="size-5 text-white" />
                      </span>
                      <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-white font-medium">
                        Book a Demo
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}