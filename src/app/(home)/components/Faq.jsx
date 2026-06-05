"use client";

import React, { useState } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

export default function HomePageSectionWhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      id: 1,
      question: "How Do Stablecoin Transfers Work?",
      answer: "Our platform enables instant stablecoin transfers using secure blockchain rails. You can send and receive funds globally with low transaction costs and real-time settlement.",
      benefits: [
        "Instant global transfers",
        "Low transaction fees",
        "Real-time settlement",
        "Secure blockchain technology"
      ]
    },
    {
      id: 2,
      question: "Can I Spend Stablecoins for Everyday Purchases?",
      answer: "Absolutely. Our digital-first spending card allows you to use stablecoins for everyday purchases like coffee, online shopping, bills, and more — with instant conversion at point of sale.",
      benefits: [
        "Digital spending card included",
        "Instant crypto-to-fiat conversion",
        "Accepted worldwide",
        "No hidden fees"
      ]
    },
    {
      id: 3,
      question: "Is My Crypto Safe and Secure on the Platform?",
      answer: "Yes, we employ enterprise-grade security infrastructure with bank-level encryption, multi-factor authentication, and continuous monitoring to protect your digital assets.",
      benefits: [
        "Bank-level encryption",
        "Multi-factor authentication",
        "24/7 security monitoring",
        "Cold storage for assets"
      ]
    },
    {
      id: 4,
      question: "Do I Need Technical Skills to Use MDR Futuristics?",
      answer: "No technical skills required. Our platform features an intuitive, user-friendly interface designed for everyone — from crypto beginners to experienced users.",
      benefits: [
        "Simple and intuitive interface",
        "Step-by-step guides",
        "Video tutorials available",
        "24/7 customer support"
      ]
    },
    {
      id: 5,
      question: "Can I Earn Rewards on My Crypto Holdings?",
      answer: "Yes, you can earn daily rewards on your crypto holdings, swap assets easily with competitive rates, and access our P2P marketplace for low-cost stablecoin trading.",
      benefits: [
        "Daily rewards on crypto",
        "Competitive swap rates",
        "P2P marketplace access",
        "No lock-in periods"
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-18 md:py-20 lg:py-24 xl:py-39">
      <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-y-10 xl:flex-row xl:items-start xl:justify-between xl:gap-y-0">
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-800 font-normal w-full xl:max-w-[391px]">
              Frequently Asked Questions
            </h2>
            <p className="w-full text-base sm:text-lg leading-[150%] font-normal text-gray-600 xl:max-w-[391px]">
              Get quick answers to the most common questions about MDR Futuristics and our crypto payment services.
            </p>
          </div>

          {/* faq item */}
          <div className="bg-gray-100 w-full max-w-[653px] space-y-1 overflow-hidden rounded-3xl p-1 md:rounded-4xl">
            {/* item one */}
            <div className={`rounded-[18px] bg-white px-5 transition-all duration-500 ease-in-out md:rounded-[28px] md:px-8 ${activeIndex === 0 ? "pb-8" : "pb-0"}`}>
              <button
                onClick={() => toggleAccordion(0)}
                className="flex w-full cursor-pointer items-center justify-between pt-8 transition-all duration-500 ease-in-out"
              >
                <span className={`text-base sm:text-lg lg:text-xl text-gray-800 my-auto flex-1 text-left font-normal ${activeIndex === 0 ? "pb-4" : "pb-8"}`}>
                  How Do Stablecoin Transfers Work?
                </span>
                <span className={`flex size-7 items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${activeIndex === 0 ? "bg-[#142E6E]" : "bg-gray-100"}`}>
                  <FaChevronDown className={`w-3 h-3 transition-all duration-300 ${activeIndex === 0 ? "text-white rotate-180" : "text-gray-600"}`} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 0 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-6">
                  <p className="text-gray-600 text-sm sm:text-base max-w-[500px] leading-[150%] font-normal">
                    Our platform enables instant stablecoin transfers using secure blockchain rails. You can send and receive funds globally with low transaction costs and real-time settlement.
                  </p>

                  <ul className="space-y-2 md:space-y-1">
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Instant global transfers
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Low transaction fees
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Real-time settlement
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Secure blockchain technology
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* item two */}
            <div className={`rounded-[18px] bg-white px-5 transition-all duration-500 ease-in-out md:rounded-[28px] md:px-8 ${activeIndex === 1 ? "pb-8" : "pb-0"}`}>
              <button
                onClick={() => toggleAccordion(1)}
                className="flex w-full cursor-pointer items-center justify-between pt-8 transition-all duration-500 ease-in-out"
              >
                <span className={`text-base sm:text-lg lg:text-xl text-gray-800 my-auto flex-1 text-left font-normal ${activeIndex === 1 ? "pb-4" : "pb-8"}`}>
                  Can I Spend Stablecoins for Everyday Purchases?
                </span>
                <span className={`flex size-7 items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${activeIndex === 1 ? "bg-[#142E6E]" : "bg-gray-100"}`}>
                  <FaChevronDown className={`w-3 h-3 transition-all duration-300 ${activeIndex === 1 ? "text-white rotate-180" : "text-gray-600"}`} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-6">
                  <p className="text-gray-600 text-sm sm:text-base max-w-[500px] leading-[150%] font-normal">
                    Absolutely. Our digital-first spending card allows you to use stablecoins for everyday purchases like coffee, online shopping, bills, and more — with instant conversion at point of sale.
                  </p>

                  <ul className="space-y-2 md:space-y-1">
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Digital spending card included
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Instant crypto-to-fiat conversion
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Accepted worldwide
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        No hidden fees
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* item three */}
            <div className={`rounded-[18px] bg-white px-5 transition-all duration-500 ease-in-out md:rounded-[28px] md:px-8 ${activeIndex === 2 ? "pb-8" : "pb-0"}`}>
              <button
                onClick={() => toggleAccordion(2)}
                className="flex w-full cursor-pointer items-center justify-between pt-8 transition-all duration-500 ease-in-out"
              >
                <span className={`text-base sm:text-lg lg:text-xl text-gray-800 my-auto flex-1 text-left font-normal ${activeIndex === 2 ? "pb-4" : "pb-8"}`}>
                  Is My Crypto Safe and Secure on the Platform?
                </span>
                <span className={`flex size-7 items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${activeIndex === 2 ? "bg-[#142E6E]" : "bg-gray-100"}`}>
                  <FaChevronDown className={`w-3 h-3 transition-all duration-300 ${activeIndex === 2 ? "text-white rotate-180" : "text-gray-600"}`} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 2 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-6">
                  <p className="text-gray-600 text-sm sm:text-base max-w-[500px] leading-[150%] font-normal">
                    Yes, we employ enterprise-grade security infrastructure with bank-level encryption, multi-factor authentication, and continuous monitoring to protect your digital assets.
                  </p>

                  <ul className="space-y-2 md:space-y-1">
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Bank-level encryption
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Multi-factor authentication
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        24/7 security monitoring
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Cold storage for assets
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* item four */}
            <div className={`rounded-[18px] bg-white px-5 transition-all duration-500 ease-in-out md:rounded-[28px] md:px-8 ${activeIndex === 3 ? "pb-8" : "pb-0"}`}>
              <button
                onClick={() => toggleAccordion(3)}
                className="flex w-full cursor-pointer items-center justify-between pt-8 transition-all duration-500 ease-in-out"
              >
                <span className={`text-base sm:text-lg lg:text-xl text-gray-800 my-auto flex-1 text-left font-normal ${activeIndex === 3 ? "pb-4" : "pb-8"}`}>
                  Do I Need Technical Skills to Use MDR Futuristics?
                </span>
                <span className={`flex size-7 items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${activeIndex === 3 ? "bg-[#142E6E]" : "bg-gray-100"}`}>
                  <FaChevronDown className={`w-3 h-3 transition-all duration-300 ${activeIndex === 3 ? "text-white rotate-180" : "text-gray-600"}`} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 3 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-6">
                  <p className="text-gray-600 text-sm sm:text-base max-w-[500px] leading-[150%] font-normal">
                    No technical skills required. Our platform features an intuitive, user-friendly interface designed for everyone — from crypto beginners to experienced users.
                  </p>

                  <ul className="space-y-2 md:space-y-1">
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Simple and intuitive interface
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Step-by-step guides
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Video tutorials available
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        24/7 customer support
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* item five */}
            <div className={`rounded-[18px] bg-white px-5 transition-all duration-500 ease-in-out md:rounded-[28px] md:px-8 ${activeIndex === 4 ? "pb-8" : "pb-0"}`}>
              <button
                onClick={() => toggleAccordion(4)}
                className="flex w-full cursor-pointer items-center justify-between pt-8 transition-all duration-500 ease-in-out"
              >
                <span className={`text-base sm:text-lg lg:text-xl text-gray-800 my-auto flex-1 text-left font-normal ${activeIndex === 4 ? "pb-4" : "pb-8"}`}>
                  Can I Earn Rewards on My Crypto Holdings?
                </span>
                <span className={`flex size-7 items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${activeIndex === 4 ? "bg-[#142E6E]" : "bg-gray-100"}`}>
                  <FaChevronDown className={`w-3 h-3 transition-all duration-300 ${activeIndex === 4 ? "text-white rotate-180" : "text-gray-600"}`} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 4 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-6">
                  <p className="text-gray-600 text-sm sm:text-base max-w-[500px] leading-[150%] font-normal">
                    Yes, you can earn daily rewards on your crypto holdings, swap assets easily with competitive rates, and access our P2P marketplace for low-cost stablecoin trading.
                  </p>

                  <ul className="space-y-2 md:space-y-1">
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Daily rewards on crypto
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        Competitive swap rates
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        P2P marketplace access
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-x-3">
                      <span className="bg-gray-100 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <FaCheck className="w-3 h-3 text-gray-800" />
                      </span>
                      <p className="text-gray-500 text-sm sm:text-base leading-[150%] font-normal">
                        No lock-in periods
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}