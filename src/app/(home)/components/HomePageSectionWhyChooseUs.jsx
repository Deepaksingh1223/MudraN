"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

// Animated Counter Component
const AnimatedNumber = ({ targetNumber, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            setIsAnimating(true);
            let startValue = 0;
            const increment = targetNumber / (duration / 16);
            let current = startValue;

            const timer = setInterval(() => {
              current += increment;
              if (current >= targetNumber) {
                setCount(targetNumber);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 16);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, isAnimating]);

  return (
    <span ref={elementRef} className="flex items-center" style={{ fontSize: 'inherit', color: 'inherit' }}>
      {count}{suffix}
    </span>
  );
};

export default function HomePageSectionWhyChooseUs() {
  return (
    <section 
      className="lx:rounded-[56px] mx-5 rounded-4xl bg-gradient-to-b from-[#142e6e] to-[#edf2ff] py-18 md:py-20 lg:py-24 xl:py-39" id="community"
    >
      <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-6">
        <div className="space-y-14 md:space-y-[70px]">
          {/* text content */}
          <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
            <div className="max-w-[700px] space-y-4 text-center lg:text-left xl:max-w-[905px]">
              <h2 
                id="why-choose-us-heading"
                className="text-1xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-normal"
                itemProp="name"
              >
               Where crypto meets real life — empowering global payments with stablecoins
              </h2>

              <p 
                itemProp="description"
                className="text-white/80 text-base sm:text-lg font-normal"
              >
       Spend stablecoins instantly — buy coffee, shop online, or pay bills with MDR Futuristics
              </p>
            </div>

            <div className="mt-auto mb-0 flex w-full items-center justify-center md:w-auto">
              <div className="mx-auto w-[80%] text-center sm:w-auto md:mx-0 md:text-right">
                {/* button v3 */}
                <div className="btn-v3-white btn-v3-lg w-full sm:w-auto w-fit cursor-pointer rounded-2xl px-1 py-1 bg-white hover:bg-gray-50 transition-all duration-300">
                  <a href="/Login" className="block">
                    <div className="flex items-center gap-x-4">
                      {/* icon */}
                      <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                        <FiArrowRight className="size-6 text-[#142e6e]" />
                      </span>
                      {/* content */}
                      <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-[#142e6e] font-medium">
                        Get started
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* img */}
          <div className="space-y-3 md:space-y-2 xl:space-y-1">
            <figure 
              className="h-[280px] sm:h-[380px] md:h-[480px] lg:h-[612px] w-full max-w-[1290px] overflow-hidden rounded-4xl ring-2 ring-white mx-auto"
              role="img"
              aria-label="MDR Futuristics crypto payment platform dashboard showing stablecoin transfers and multi-currency wallet interface"
            >
              <Image
                src="/images/ns-img-562.png"
                alt="MDR Futuristics financial dashboard showing stablecoin transfers, multi-currency wallet, and crypto payment analytics"
                width={1290}
                height={612}
                className="w-full h-full rounded-[28px] object-cover"
                itemProp="image"
                loading="lazy"
              />
            </figure>

            <div 
              className="grid grid-cols-12 items-center justify-center gap-x-2 rounded-4xl bg-white p-2 lg:flex-row"
              role="region"
              aria-label="MDR Futuristics platform statistics and achievements"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              {/* card one - Active Users */}
              <div className="col-span-12 w-full max-w-[313px] space-y-2 rounded-2xl bg-white px-8 py-4 text-center md:col-span-6 lg:col-span-3 lg:text-left" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" role="listitem" aria-label="Active Users: 8,000 plus">
                <p className="text-gray-400 text-sm sm:text-base leading-[150%] font-normal whitespace-nowrap" itemProp="name">
                  Active Users
                </p>
                <h3 className="text-gray-800 flex items-center justify-center font-medium lg:justify-start text-3xl sm:text-4xl lg:text-5xl" itemProp="value" aria-label="8,000 plus active users">
                  <AnimatedNumber targetNumber={8} suffix="K+" />
                </h3>
              </div>

              {/* card two - Global Transfers */}
              <div className="col-span-12 w-full max-w-[313px] space-y-2 rounded-2xl bg-white px-8 py-4 text-center md:col-span-6 lg:col-span-3 lg:text-left" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" role="listitem" aria-label="Global Transfers: 150+ Countries">
                <p className="text-gray-400 text-sm sm:text-base leading-[150%] font-normal whitespace-nowrap" itemProp="name">
                  Global Transfers
                </p>
                <h3 className="text-gray-800 flex items-center justify-center font-medium lg:justify-start text-3xl sm:text-4xl lg:text-5xl" 
                itemProp="value" aria-label="150 plus countries supported for global transfers">
                  <AnimatedNumber targetNumber={150} suffix="+ " />
                </h3>
              </div>

              {/* card three - Stablecoin Support */}
              <div className="col-span-12 w-full max-w-[313px] space-y-2 rounded-2xl bg-white px-8 py-4 text-center md:col-span-6 lg:col-span-3 lg:text-left"
               itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" role="listitem" aria-label="Stablecoin Support: 25+ Currencies">
                <p className="text-gray-400 text-sm sm:text-base leading-[150%] font-normal whitespace-nowrap" itemProp="name">
                  Stablecoin Support
                </p>
                <h3 className="text-gray-800 flex items-center justify-center font-medium lg:justify-start text-3xl sm:text-4xl lg:text-5xl" itemProp="value" aria-label="25 plus stablecoins supported">
                  <AnimatedNumber targetNumber={25} suffix="+ " />
                </h3>
              </div>

              {/* card four - P2P Marketplace */}
              <div className="col-span-12 w-full max-w-[313px] space-y-2 rounded-2xl bg-white px-8 py-4 text-center md:col-span-6 lg:col-span-3 lg:text-left" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" role="listitem" aria-label="P2P Marketplace: 50K+ Users">
                <p className="text-gray-400 text-sm sm:text-base leading-[150%] font-normal whitespace-nowrap" itemProp="name">
                  P2P Marketplace
                </p>
                <h3 className="text-gray-800 flex items-center justify-center font-medium lg:justify-start text-3xl sm:text-4xl lg:text-5xl" itemProp="value" aria-label="50,000 plus P2P marketplace users">
                  <AnimatedNumber targetNumber={50} suffix="K+ " />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}