"use client";

import React from "react";
import Image from "next/image";
import { 
  FiFileText, 
  FiTrendingUp, 
  FiShield, 
  FiRepeat, 
  FiArrowRight,
  FiGlobe,
  FiCreditCard,
  FiUsers,
  FiZap
} from "react-icons/fi";

export default function HomePageSectionSimplifyFinanceCards() {
  return (
    <section 
      className="py-18 md:py-20 lg:py-24 xl:py-39" id="card"
    >
      <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {/* text content */}
          <div className="space-y-3 text-center lg:text-left" itemScope itemProp="about">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-800 font-normal">
              Spend Crypto, Live Easy — Simplify Your Finance
            </h2>
            <p className="max-w-[650px] text-base sm:text-lg leading-[150%] font-normal text-gray-600 mx-auto lg:mx-0 lg:max-w-[900px]">
              MDR Futuristics empowers global payments with stablecoins — seamless, fast, and built for everyday use. 
              Whether you're spending crypto or managing digital assets, our platform helps you make smarter financial decisions with ease.
            </p>
          </div>

          {/* cards */}
          <div 
            className="bg-gray-100 grid grid-cols-12 items-center justify-center gap-3 overflow-hidden rounded-3xl p-3 lg:gap-2 lg:p-2 xl:gap-1 xl:p-1"
            role="list"
            aria-label="MDR Futuristics crypto and payment features"
          >
            {/* card one - Stablecoin Transfers */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3" role="listitem">
              <div className="flex h-[202px] w-full flex-col items-start justify-between rounded-[21px] bg-white p-4 lg:p-8" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <span className="flex size-14 items-center justify-center rounded-xl bg-[#142E6E]" aria-hidden="true">
                  <FiGlobe className="size-6 text-white" />
                </span>
                <h3 className="text-lg sm:text-xl text-gray-600 font-normal" itemProp="name">
                  Fast & Secure Stablecoin Transfers
                </h3>
              </div>
            </div>

            {/* card two - Multi-Currency Wallet */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3" role="listitem">
              <div className="flex h-[202px] w-full flex-col items-start justify-between rounded-[21px] bg-white p-4 lg:p-8" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <span className="flex size-14 items-center justify-center rounded-xl bg-[#142E6E]" aria-hidden="true">
                  <FiTrendingUp className="size-6 text-white" />
                </span>
                <h3 className="text-lg sm:text-xl text-gray-600 font-normal" itemProp="name">
                  Multi-Currencies, One App
                </h3>
              </div>
            </div>

            {/* card three - P2P Marketplace */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3" role="listitem">
              <div className="flex h-[202px] w-full flex-col items-start justify-between rounded-[21px] bg-white p-4 lg:p-8" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <span className="flex size-14 items-center justify-center rounded-xl bg-[#142E6E]" aria-hidden="true">
                  <FiUsers className="size-6 text-white" />
                </span>
                <h3 className="text-lg sm:text-xl text-gray-600 font-normal" itemProp="name">
                  Convenient P2P Access
                </h3>
              </div>
            </div>

            {/* card four - Large Image */}
            <div className="col-span-12 row-span-2 md:col-span-4 lg:col-span-3" role="listitem">
              <figure className="group h-[408px] w-full overflow-hidden rounded-[21px]" itemScope itemType="https://schema.org/ImageObject">
                <Image
                  src="/images/ns-img-563.png"
                  alt="MDR Futuristics crypto payment platform showing stablecoin transfers and multi-currency wallet interface"
                  width={400}
                  height={408}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  itemProp="contentUrl"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* card five - Spend Stablecoins Instantly (Desktop) */}
            <div className="hidden lg:col-span-3 lg:block" role="listitem">
              <div className="flex h-[202px] w-full flex-col items-start justify-between rounded-[21px] bg-white p-4 lg:p-8" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <span className="flex size-14 items-center justify-center rounded-xl bg-[#142E6E]" aria-hidden="true">
                  <FiCreditCard className="size-6 text-white" />
                </span>
                <h3 className="text-lg sm:text-xl text-gray-600 font-normal" itemProp="name">
                  Spend Stablecoins Instantly
                </h3>
              </div>
            </div>

            {/* card six - Small Image */}
            <div className="col-span-12 md:col-span-8 lg:col-span-3" role="listitem">
              <figure className="group h-[202px] w-full overflow-hidden rounded-[21px]" itemScope itemType="https://schema.org/ImageObject">
                <Image
                  src="/images/ns-img-564.png"
                  alt="MDR Futuristics digital card and stablecoin spending interface"
                  width={400}
                  height={202}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  itemProp="contentUrl"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* card seven - Handle all your crypto needs */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3" role="listitem">
              <div className="flex h-[202px] w-full flex-col items-start justify-between rounded-[21px] bg-white p-4 lg:p-8" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <h3 className="text-lg sm:text-xl text-gray-800 font-normal max-w-[200px]" itemProp="name">
                  Handle all your crypto in one place
                </h3>
                <div>
                  <div className="btn-v3-secondary btn-v3-lg lg:btn-v3-lg w-fit cursor-pointer rounded-2xl px-1 py-1">
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
            </div>

            {/* card eight - Earn, Swap & P2P (Mobile/Tablet) */}
            <div className="col-span-4 hidden md:block lg:hidden" role="listitem">
              <div className="flex h-[202px] w-full flex-col items-start justify-between rounded-[21px] bg-white p-4 lg:p-8" itemScope itemType="https://schema.org/Service" itemProp="hasOfferCatalog">
                <span className="flex size-14 items-center justify-center rounded-xl bg-[#142E6E]" aria-hidden="true">
                  <FiZap className="size-6 text-white" />
                </span>
                <h3 className="text-lg sm:text-xl text-gray-600 font-normal" itemProp="name">
                  Earn, Swap & P2P
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}