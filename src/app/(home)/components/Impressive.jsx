"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { 
  FiCheckCircle, 
  FiShield, 
  FiTrendingUp, 
  FiArrowRight,
  FiAward,
  FiLock,
  FiBarChart2
} from "react-icons/fi";

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
      className="mx-5 rounded-3xl bg-gradient-to-b from-[#142e6e] to-[#edf2ff] py-18 md:rounded-4xl md:py-20 lg:py-24 xl:rounded-[56px] xl:py-39"
      aria-labelledby="impressive-templates-heading"
      aria-describedby="impressive-templates-description"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-14 lg:space-y-[70px]">
          {/* text content */}
          <div className="space-y-5 text-center" itemScope itemProp="about">
            <span className="inline-block badge bg-white/20 text-white text-sm sm:text-base uppercase px-4 py-2 rounded-full" aria-label="Section category">
              MDR Futuristics
            </span>
            <div className="space-y-4">
              <h2 
                id="impressive-templates-heading"
                className="text-white mx-auto max-w-[800px] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal"
                itemProp="name"
              >
                Empowering global payments with stablecoins — seamless, fast, and secure
              </h2>
              <p 
                id="impressive-templates-description"
                className="text-white/80 mx-auto max-w-[690px] text-base sm:text-lg leading-[150%] font-normal"
                itemProp="description"
              >
                MDR Futuristics has partnered with thousands of users worldwide to spend crypto in real life.
                Explore real stories of transformation and financial freedom.
              </p>
            </div>
          </div>

          {/* cards */}
          <div className="grid grid-cols-12 gap-3 md:gap-2" role="list" aria-label="MDR Futuristics crypto features">
            
            {/* card one - Stablecoin Transfers */}
            <div className="col-span-12 lg:col-span-6" role="listitem">
              <div className="bg-gray-100 space-y-1 overflow-hidden rounded-3xl p-1 md:rounded-[28px]" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <div className="relative h-[300px] w-full rounded-3xl bg-white p-4 sm:h-[375px]">
                  <div>
                    <div className="space-y-1">
                      <p className="text-xl sm:text-2xl text-gray-800 font-normal">Stablecoin Balance</p>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-normal">$300.689K</h3>
                    </div>

                    {/* bottom graph */}
                    <figure className="absolute bottom-[-32px] left-1/2 h-[203px] w-full max-w-[580px] -translate-x-1/2 rotate-[-1.95deg]" itemScope itemType="https://schema.org/ImageObject">
                      <Image
                        src="/images/ns-img-565.svg"
                        alt="Stablecoin balance growth chart"
                        width={580}
                        height={203}
                        className="w-full h-full"
                        itemProp="contentUrl"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </div>
                <div className="h-[120px] w-full space-y-2.5 rounded-3xl bg-white p-4">
                  <h4 className="text-lg sm:text-xl text-gray-800/90 font-normal" itemProp="name">
                    Fast & Secure Stablecoin Transfers
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base max-w-[200px] font-normal" itemProp="description">
                    Send and receive funds instantly with low-cost global payments.
                  </p>
                </div>
              </div>
            </div>

            {/* card two - Earn Daily Rewards */}
            <div className="col-span-12 lg:col-span-6" role="listitem">
              <div className="bg-gray-100 space-y-1 overflow-hidden rounded-3xl p-1 md:rounded-[28px]" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <div className="relative h-[300px] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#142e6e] to-[#edf2ff] p-4 sm:h-[375px]">
                  {/* dots */}
                  <figure className="absolute top-[40px] left-1/2 h-[156px] w-full max-w-[216px] -translate-x-1/2 md:top-[30px]" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src="/images/ns-img-571.svg"
                      alt="Decorative dots pattern"
                      width={216}
                      height={156}
                      className="w-full h-full"
                      itemProp="contentUrl"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </figure>

                  {/* plane */}
                  <figure className="absolute bottom-[12px] left-1/2 h-[257px] w-[95px] -translate-x-1/2 md:bottom-[34px]" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src="/images/ns-img-566.svg"
                      alt="Earn daily rewards visualization"
                      width={95}
                      height={257}
                      className="w-full h-full"
                      itemProp="contentUrl"
                      loading="lazy"
                    />
                  </figure>

                  {/* 1st layer boule */}
                  <figure className="absolute bottom-[-25px] left-1/2 h-[228px] w-full max-w-[707px] -translate-x-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src="/images/ns-img-567.svg"
                      alt="Decorative background"
                      width={707}
                      height={228}
                      className="w-full h-full"
                      itemProp="contentUrl"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </figure>

                  {/* 2nd layer boule */}
                  <figure className="absolute bottom-[-30px] left-0 h-[228px] w-full max-w-[643px] md:bottom-[-20px]" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src="/images/ns-img-568.svg"
                      alt="Decorative background"
                      width={643}
                      height={228}
                      className="w-full h-full"
                      itemProp="contentUrl"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </figure>

                  {/* 3rd layer boule */}
                  <figure className="absolute bottom-[-60px] left-0 h-[204px] w-full max-w-[698px] md:bottom-[-40px]" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src="/images/ns-img-569.svg"
                      alt="Decorative background"
                      width={698}
                      height={204}
                      className="w-full h-full"
                      itemProp="contentUrl"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </figure>
                </div>
                <div className="h-[120px] w-full space-y-2.5 rounded-3xl bg-white p-4">
                  <h4 className="text-lg sm:text-xl text-gray-800/90 font-normal" itemProp="name">
                    Earn Daily Rewards
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base max-w-[200px] font-normal" itemProp="description">
                    Earn daily rewards on your crypto with flexible options.
                  </p>
                </div>
              </div>
            </div>

            {/* card three - Crypto-Backed Credit */}
            <div className="col-span-12 lg:col-span-6" role="listitem">
              <div className="bg-gray-100 space-y-1 overflow-hidden rounded-3xl p-1 md:rounded-[28px]" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <div className="relative h-[300px] w-full rounded-3xl bg-gradient-to-b from-[#142e6e] to-[#edf2ff] p-4 sm:h-[375px]">
                  {/* dot img */}
                  <figure className="absolute top-[76px] left-[3%] md:left-[25%]" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src="/images/ns-img-574.svg"
                      alt="Decorative dot pattern"
                      width={100}
                      height={100}
                      className="w-full h-full"
                      itemProp="contentUrl"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </figure>

                  {/* lock img */}
                  <figure className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src="/images/ns-img-570.svg"
                      alt="Crypto-backed credit security"
                      width={120}
                      height={120}
                      className="w-full h-full"
                      itemProp="contentUrl"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="h-[120px] w-full space-y-2.5 rounded-3xl bg-white p-4">
                  <h4 className="text-lg sm:text-xl text-gray-800/90 font-normal" itemProp="name">
                    Crypto-Backed Credit
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base max-w-[300px] font-normal" itemProp="description">
                    Access instant funds using crypto as collateral with no credit checks.
                  </p>
                </div>
              </div>
            </div>

            {/* card four - Swap & P2P */}
            <div className="col-span-12 lg:col-span-6" role="listitem">
              <div className="bg-gray-100 space-y-1 overflow-hidden rounded-3xl p-1 md:rounded-[28px]" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <div className="relative h-[300px] w-full rounded-3xl bg-white p-4 sm:h-[375px]">
                  {/* top img */}
                  <div className="absolute top-[28px] left-1/2 -translate-x-1/2 sm:top-[58px]">
                    <div 
                      className="flex w-[138px] flex-col items-center justify-center gap-y-1 rounded-xl p-4"
                      style={{ background: "linear-gradient(111deg, #142e6e 28.63%, #edf3ff 127.29%)" }}
                      role="status"
                      aria-label="Swap successful"
                    >
                      <span className="flex size-9 items-center justify-center" aria-hidden="true">
                        <FiCheckCircle className="size-9 text-white" />
                      </span>
                      <p className="text-xs sm:text-sm font-normal text-white">Swap successful!</p>
                    </div>
                  </div>

                  {/* progress bar */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gray-100 w-[288px] space-y-2 rounded-xl p-4 max-[376px]:w-[250px]">
                      <div className="flex w-full items-center justify-between">
                        <h3 className="text-sm sm:text-base inline-block font-normal text-gray-700">P2P Limit</h3>
                        <h3 className="text-sm sm:text-base text-gray-800 flex items-center justify-center font-medium">
                          $80,224
                        </h3>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <figure className="w-full max-w-[221px]" itemScope itemType="https://schema.org/ImageObject">
                          <Image
                            src="/images/ns-img-572.svg"
                            alt="Progress bar"
                            width={221}
                            height={20}
                            className="w-full h-full"
                            itemProp="contentUrl"
                            loading="lazy"
                          />
                        </figure>
                        <p className="text-xs sm:text-sm text-gray-600 font-normal" aria-label="Percentage">
                          48%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* bottom img */}
                  <figure className="absolute bottom-[72px] left-[48px] sm:bottom-[111px] md:left-[191px]" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src="/images/ns-img-573.svg"
                      alt="Swap visualization"
                      width={100}
                      height={100}
                      className="w-full h-full"
                      itemProp="contentUrl"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="h-[120px] w-full space-y-2.5 rounded-3xl bg-white p-4">
                  <h4 className="text-lg sm:text-xl text-gray-800/90 font-normal" itemProp="name">
                    Swap Assets & P2P
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base max-w-[300px] font-normal" itemProp="description">
                    Swap assets easily with competitive rates — low-cost peer-to-peer trading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="mx-auto mt-14 w-[80%] text-center sm:w-auto md:mx-0">
          <div className="btn-v3-secondary btn-v3-lg mx-auto w-full sm:w-fit cursor-pointer rounded-2xl px-1 py-1 bg-white hover:bg-gray-50 transition-all duration-300 inline-block">
            <a href="/Login" className="block">
              <div className="flex items-center gap-x-4">
                <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                  <FiArrowRight className="size-6 text-[#142E6E]" />
                </span>
                <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-[#142E6E] font-medium">
                  Get Started
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}