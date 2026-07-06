"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePageSectionServicesTabs() {
  const [activeTab, setActiveTab] = useState("transfers");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tabs = [
    { id: "transfers", label: "Transfers", title: "Fast & Secure Stablecoin Transfers", ariaLabel: "Stablecoin transfer service tab" },
    { id: "multicurrency", label: "Multi-Currency", title: "Multi-Currencies, One App", ariaLabel: "Multi-currency wallet tab" },
    { id: "spending", label: "Spending", title: "Spend Stablecoins Instantly", ariaLabel: "Everyday crypto spending tab" },
    { id: "international", label: "International", title: "International Transfer", ariaLabel: "International transfer service tab" },
    { id: "credit", label: "Credit", title: "Crypto-Backed Credit", ariaLabel: "Crypto backed credit line tab" },
    { id: "earn", label: "Earn", title: "Earn, Swap & P2P", ariaLabel: "Crypto earnings and swapping tab" },
  ];

  const tabContent = {
    transfers: {
      description: "Send and receive funds instantly using secure stablecoin rails with low-cost global payments. Our global transfer system allows you to send crypto and have the recipient receive local currency, with hassle-free protected transactions to any recipient worldwide. Fast, secure, and built for everyday people and businesses.",
      image: "/images/ns-img-561.png",
      imageAlt: "Fast and secure stablecoin transfers dashboard showing instant cross-border payments"
    },
    multicurrency: {
      description: "Manage stablecoins and local currency seamlessly in one unified app. Our multi-currency wallet bridges the gap between crypto and everyday life, giving you full control over all your digital assets and fiat currencies. All currencies, one simple app — bridging crypto and everyday life.",
      image: "/images/ns-img-577.png",
      imageAlt: "Multi-currency wallet interface showing crypto and fiat balances all in one app"
    },
    spending: {
      description: "Turn your crypto into everyday spending power. Buy coffee, shop online or pay bills with stablecoins using our digital-first spending card. Enjoy effortless, secure global payments wherever you are, with instant conversion at point of sale. No more waiting for funds to settle.",
      image: "/images/ns-img-576.png",
      imageAlt: "Digital card payment interface showing crypto spending at a coffee shop with instant conversion"
    },
    international: {
      description: "Send crypto, receive local currency. Our international transfer system enables hassle-free protected transactions to any recipient worldwide. Experience low-cost global transfers that settle in minutes, not days, with complete transparency and security.",
      image: "/images/ns-img-578.png",
      imageAlt: "International transfer dashboard showing global payment routing and currency conversion"
    },
    credit: {
      description: "Access instant funds without selling your crypto. Use your digital assets as collateral to secure flexible credit lines, with no credit checks and repayment terms that work for you. Unlock liquidity while maintaining your crypto position and enjoying potential future appreciation.",
      image: "/images/ns-img-575.png",
      imageAlt: "Crypto-backed credit dashboard showing collateral management and available credit lines"
    },
    earn: {
      description: "Earn daily rewards on your crypto holdings, swap assets easily with competitive rates, or use our P2P marketplace for low-cost stablecoin access. Complete ecosystem for maximizing the value of your digital assets. Start earning passive income today with our innovative reward system.",
      image: "/images/ns-img-561.png",
      imageAlt: "Crypto earnings dashboard showing daily rewards, asset swapping, and P2P trading interface"
    }
  };

  // Safety check to ensure activeTab exists in tabContent
  const currentContent = tabContent[activeTab];
  if (!currentContent) {
    const firstTabId = tabs[0]?.id;
    if (firstTabId && tabContent[firstTabId]) {
      // Use setTimeout to avoid rendering during state update
      setTimeout(() => setActiveTab(firstTabId), 0);
      return null;
    }
    return null;
  }

  return (
    <section className="py-12 md:py-20 lg:py-24 xl:py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
        {/* Subheading */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-1xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          MDR Futuristics — Where Crypto Meets Real Life
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Empowering global payments with stablecoins. Seamless, fast, and secure — built for everyday people and businesses.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {/* Tab Navigation */}
          <div 
            className="relative w-full"
            role="tablist" 
            aria-label="MDR Futuristics financial services tabs"
          >
            <div className="bg-gray-50 md:bg-gray-100/50 rounded-2xl md:rounded-full p-1.5">
              <div className="grid grid-cols-2 md:flex md:flex-wrap lg:flex-nowrap gap-2 md:gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    id={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    role="tab"
                    aria-controls={`tab-panel-${tab.id}`}
                    aria-selected={activeTab === tab.id}
                    aria-label={tab.ariaLabel}
                    tabIndex={activeTab === tab.id ? 0 : -1}
                    className={`
                      relative cursor-pointer rounded-xl md:rounded-full px-3 sm:px-4 md:px-5 py-2.5 md:py-3
                      font-medium text-xs sm:text-sm md:text-base transition-all duration-300
                      flex-1 text-center whitespace-nowrap
                      ${activeTab === tab.id 
                        ? 'bg-gray-900 text-white shadow-lg md:bg-white md:text-gray-900 md:shadow-sm' 
                        : 'bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100 md:hover:bg-transparent'
                      }
                    `}
                  >
                    <span className="relative z-20">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:h-[600px] xl:h-[624px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                {/* Image Section */}
                <figure className="h-[300px] sm:h-[380px] lg:h-full lg:w-1/2 overflow-hidden">
                  <Image
                    src={currentContent.image}
                    alt={currentContent.imageAlt}
                    width={645}
                    height={624}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </figure>

                {/* Content Section */}
                <div className="bg-gray-50 lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6 lg:space-y-8">
                    <div className="space-y-3 lg:space-y-4">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight">
                        {tabs.find(tab => tab.id === activeTab)?.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {currentContent.description}
                      </p>
                    </div>

                    <div>
                      <a 
                        href="/Login"
                        className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 py-3.5 transition-all duration-300 group"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                          fill="currentColor"
                        >
                          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
                        </svg>
                        <span className="font-medium">Get Started</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}