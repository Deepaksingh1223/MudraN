"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function HomePageSectionTrustedBy() {
  const marqueeRef = useRef(null);
  
  const logos = [
    { name: "Scapic", src: "/images/icons/scapic-logo.svg", width: 28, height: 34 },
    { name: "Notion", src: "/images/icons/notion.svg", width: 34, height: 35 },
    { name: "Lattice", src: "/images/icons/lattice-logo.svg", width: 48, height: 28 },
    { name: "Hotjar", src: "/images/icons/hotjar-logo.svg", width: 27, height: 30 },
    { name: "Discord", src: "/images/icons/discord-logo.svg", width: 38, height: 30 },
    { name: "Dropbox", src: "/images/icons/dropbox.svg", width: 38, height: 32 },
    { name: "Stripe", src: "/images/icons/stripe-logo.svg", width: 36, height: 36 },
    { name: "Spotify", src: "/images/icons/spotify-logo.svg", width: 36, height: 36 },
    { name: "Outreach", src: "/images/icons/outreach-logo.svg", width: 34, height: 32 },
    { name: "Asana", src: "/images/icons/asana.svg", width: 27, height: 25 },
    { name: "Squarespace", src: "/images/icons/squarespace-logo.svg", width: 32, height: 30 },
  ];

  useEffect(() => {
    // Add custom CSS for marquee animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      
      .horizontal-marquee {
        position: relative;
        width: 100%;
        overflow-x: hidden;
      }
      
      .horizontal-marquee-inner {
        display: flex;
        width: fit-content;
        animation: marquee var(--_speed) linear infinite;
        animation-direction: var(--_direction);
      }
      
      .horizontal-marquee:hover .horizontal-marquee-inner {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 xl:py-28"
      aria-label="Trusted clients and partners section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="main-container relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 text-center"
            itemProp="name"
          >
            Trusted By
          </h2>
          
          {/* clients logo marquee */}
          <div 
            className="logos-marquee-container overflow-hidden horizontal-marquee"
            role="region"
            aria-label="Client company logos"
            style={{ 
              "--_speed": "40000ms",
              "--_direction": "forwards"
            } }
          >
            {/* First set of logos */}
            <div className="horizontal-marquee-inner">
              <div className="flex items-center justify-center gap-x-14" role="list">
                {logos.map((logo, index) => (
                  <figure
                    key={`first-${index}`}
                    className="shrink-0"
                    style={{ 
                      width: logo.width, 
                      height: logo.height,
                      marginLeft: index === 0 ? '56px' : '0'
                    }}
                    role="listitem"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} company logo - trusted partner`}
                      width={logo.width}
                      height={logo.height}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      itemProp="logo"
                    />
                  </figure>
                ))}
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex items-center justify-center gap-x-14" role="list" aria-hidden="true">
                {logos.map((logo, index) => (
                  <figure
                    key={`second-${index}`}
                    className="shrink-0"
                    style={{ 
                      width: logo.width, 
                      height: logo.height,
                      marginLeft: index === 0 ? '56px' : '0'
                    }}
                    role="listitem"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} company logo - trusted partner`}
                      width={logo.width}
                      height={logo.height}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      itemProp="logo"
                    />
                  </figure>
                ))}
              </div>
            </div>

            {/* Second inner div for additional smoothness */}
            <div className="horizontal-marquee-inner" aria-hidden="true">
              <div className="flex items-center justify-center gap-x-14" role="list">
                {logos.map((logo, index) => (
                  <figure
                    key={`third-${index}`}
                    className="shrink-0"
                    style={{ 
                      width: logo.width, 
                      height: logo.height,
                      marginLeft: index === 0 ? '56px' : '0'
                    }}
                    role="listitem"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} company logo - trusted partner`}
                      width={logo.width}
                      height={logo.height}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      itemProp="logo"
                    />
                  </figure>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-x-14" role="list">
                {logos.map((logo, index) => (
                  <figure
                    key={`fourth-${index}`}
                    className="shrink-0"
                    style={{ 
                      width: logo.width, 
                      height: logo.height,
                      marginLeft: index === 0 ? '56px' : '0'
                    }}
                    role="listitem"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} company logo - trusted partner`}
                      width={logo.width}
                      height={logo.height}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      itemProp="logo"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Left gradient */}
        <div 
          className="absolute bottom-0 left-0 h-20 w-20 sm:h-[130px] md:w-[150px] xl:-left-[20%] 2xl:w-[455px] pointer-events-none"
          style={{ 
            background: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)"
          }}
          aria-hidden="true"
          role="presentation"
        />

        {/* Right gradient */}
        <div 
          className="absolute bottom-0 right-0 h-20 w-20 rotate-180 sm:h-[130px] md:w-[150px] xl:-right-[20%] 2xl:w-[455px] pointer-events-none"
          style={{ 
            background: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)"
          }}
          aria-hidden="true"
          role="presentation"
        />
      </div>
    </section>
  );
}