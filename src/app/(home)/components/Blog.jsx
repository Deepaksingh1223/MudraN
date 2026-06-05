"use client";

import React from "react";
import Image from "next/image";
import { 
  FiCalendar, 
  FiClock, 
  FiArrowRight 
} from "react-icons/fi";

export default function HomePageSectionWhyChooseUs() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Stablecoin Payments",
      description: "Learn how to seamlessly integrate stablecoin payments into your everyday life and business operations with our comprehensive guide.",
      image: "/images/ns-img-472.png",
      alt: "Stablecoin payments guide for everyday purchases and business transactions",
      date: "14.05.2025",
      readTime: "1 min",
      link: "/blog/stablecoin-payments-guide",
      isLarge: true
    },
    {
      id: 2,
      title: "How to Spend Crypto in Real Life",
      image: "/images/ns-img-473.png",
      alt: "Guide to spending cryptocurrency for everyday purchases like coffee and online shopping",
      date: "14.05.2025",
      readTime: "1 min",
      link: "/blog/spend-crypto-real-life",
      isLarge: false
    },
    {
      id: 3,
      title: "Understanding Multi-Currency Wallets",
      image: "/images/ns-img-474.png",
      alt: "Multi-currency wallet guide for managing stablecoins and local currencies",
      date: "14.05.2025",
      readTime: "1 min",
      link: "/blog/multi-currency-wallets",
      isLarge: false
    }
  ];

  return (
    <section 
      className="mx-5 rounded-2xl bg-gradient-to-b from-[#142e6e] to-[#edf2ff] py-18 md:rounded-3xl md:py-20 lg:rounded-4xl lg:py-24 xl:rounded-[56px] xl:py-39"
      aria-labelledby="blog-heading"
      aria-describedby="blog-description"
      itemScope
      itemType="https://schema.org/Blog"
    >
      <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {/* text content */}
          <div className="sm:space-y-3 space-y-4 text-center" itemScope itemProp="about">
            <span 
              className="badge bg-white/20 text-sm sm:text-base font-normal text-white uppercase px-4 py-2 rounded-full inline-block"
              aria-label="Section category"
            >
              Latest from MDR Futuristics
            </span>
            <h2 
              id="blog-heading"
              className="mx-auto max-w-[814px] text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal"
              itemProp="name"
            >
              Empowering global payments with stablecoins — fast, secure, and seamless
            </h2>
            <p 
              id="blog-description"
              className="mx-auto max-w-[550px] text-base sm:text-lg leading-[150%] font-normal text-white/80"
              itemProp="description"
            >
              Explore expert guides, tips, and crypto insights to help you spend stablecoins with confidence in everyday life.
            </p>
          </div>

          {/* blogs */}
          <div className="grid grid-cols-12 items-start gap-y-2 lg:gap-x-1 lg:gap-y-0" role="list" aria-label="Blog posts" itemProp="blogPost">
            {/* card one - large */}
            <article className="group col-span-12 lg:col-span-5 xl:col-span-6" role="listitem" itemScope itemType="https://schema.org/BlogPosting">
              <div className="mx-auto max-w-[627px] overflow-hidden rounded-3xl bg-white p-1 md:rounded-4xl lg:mx-0 lg:max-w-full">
                <a href={blogPosts[0].link} itemProp="url">
                  <figure className="h-[260px] w-full max-w-full overflow-hidden rounded-[20px] md:rounded-[28px]" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].alt}
                      width={627}
                      height={260}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      itemProp="contentUrl"
                      loading="lazy"
                    />
                  </figure>
                </a>

                {/* text */}
                <div className="flex h-[218px] flex-col justify-between p-4 sm:h-[270px] md:p-8 xl:h-[292px]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-5 h-5 text-gray-800" aria-hidden="true" />
                        <time className="text-sm sm:text-base text-gray-500 font-medium" dateTime="2025-05-14" itemProp="datePublished" aria-label="Published date: May 14, 2025">
                          {blogPosts[0].date}
                        </time>
                      </div>
                      <div className="bg-gray-300 h-[22px] w-px" aria-hidden="true"></div>
                      <div className="flex items-center gap-2">
                        <FiClock className="w-5 h-5 text-gray-800" aria-hidden="true" />
                        <span className="text-sm sm:text-base text-gray-500 font-medium" itemProp="timeRequired" aria-label="Reading time: 1 minute">
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                    </div>

                    <a href={blogPosts[0].link} className="block" itemProp="url">
                      <h3 className="text-xl sm:text-2xl line-clamp-2 text-gray-800 font-semibold" itemProp="headline">
                        {blogPosts[0].title}
                      </h3>
                    </a>
                    <p className="text-base line-clamp-2 hidden w-full max-w-[563px] sm:block lg:hidden xl:block text-gray-600" itemProp="description">
                      {blogPosts[0].description}
                    </p>
                  </div>

                  <div>
                    <div className="border border-gray-200 btn-v3-white btn-v3-lg w-fit cursor-pointer rounded-2xl px-1 py-1 hover:bg-gray-50 transition-all duration-300">
                      <a href={blogPosts[0].link} className="block">
                        <div className="flex items-center gap-x-4">
                          <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                            <FiArrowRight className="size-5 text-gray-800" />
                          </span>
                          <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-gray-800 font-medium">
                            Read more
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="col-span-12 space-y-2 lg:col-span-7 lg:space-y-1 xl:col-span-6">
              {/* card two */}
              <article className="group" role="listitem" itemScope itemType="https://schema.org/BlogPosting">
                <div className="mx-auto flex max-w-[627px] flex-col gap-0 overflow-hidden rounded-3xl bg-white p-1 sm:flex-row sm:gap-8 md:gap-0 md:rounded-4xl lg:mx-0 lg:max-w-full">
                  <a href={blogPosts[1].link} itemProp="url">
                    <figure className="h-[260px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-auto sm:w-[298px] md:rounded-[28px] xl:h-[270px]" itemScope itemType="https://schema.org/ImageObject">
                      <Image
                        src={blogPosts[1].image}
                        alt={blogPosts[1].alt}
                        width={298}
                        height={270}
                        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        itemProp="contentUrl"
                        loading="lazy"
                      />
                    </figure>
                  </a>
                  <div className="space-y-4 p-4 sm:p-0 sm:py-8 sm:pr-8 md:p-8 lg:pl-4 xl:pl-8">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-5 h-5 text-gray-800" aria-hidden="true" />
                        <time className="text-sm sm:text-base text-gray-500 font-medium" dateTime="2025-05-14" itemProp="datePublished" aria-label="Published date: May 14, 2025">
                          {blogPosts[1].date}
                        </time>
                      </div>
                      <div className="bg-gray-300 h-[22px] w-px" aria-hidden="true"></div>
                      <div className="flex items-center gap-2">
                        <FiClock className="w-5 h-5 text-gray-800" aria-hidden="true" />
                        <span className="text-sm sm:text-base text-gray-500 shrink-0 font-medium" itemProp="timeRequired" aria-label="Reading time: 1 minute">
                          {blogPosts[1].readTime}
                        </span>
                      </div>
                    </div>
                    <div>
                      <a href={blogPosts[1].link} className="block" itemProp="url">
                        <h3 className="text-xl sm:text-2xl line-clamp-2 text-gray-800 font-semibold" itemProp="headline">
                          {blogPosts[1].title}
                        </h3>
                      </a>
                    </div>
                    <div className="mt-6 w-full md:w-auto">
                      <div className="border border-gray-200 btn-v3-white btn-v3-lg w-fit cursor-pointer rounded-2xl px-1 py-1 hover:bg-gray-50 transition-all duration-300">
                        <a href={blogPosts[1].link} className="block">
                          <div className="flex items-center gap-x-4">
                            <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                              <FiArrowRight className="size-5 text-gray-800" />
                            </span>
                            <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-gray-800 font-medium">
                              Read more
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* card three */}
              <article className="group" role="listitem" itemScope itemType="https://schema.org/BlogPosting">
                <div className="mx-auto flex max-w-[627px] flex-col gap-0 overflow-hidden rounded-3xl bg-white p-1 sm:flex-row sm:gap-8 md:gap-0 md:rounded-4xl lg:mx-0 lg:max-w-full">
                  <a href={blogPosts[2].link} itemProp="url">
                    <figure className="h-[260px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-auto sm:w-[298px] md:rounded-[28px] xl:h-[270px]" itemScope itemType="https://schema.org/ImageObject">
                      <Image
                        src={blogPosts[2].image}
                        alt={blogPosts[2].alt}
                        width={298}
                        height={270}
                        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        itemProp="contentUrl"
                        loading="lazy"
                      />
                    </figure>
                  </a>
                  <div className="space-y-4 p-4 sm:p-0 sm:py-8 sm:pr-8 md:p-8 lg:pl-4 xl:pl-8">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-5 h-5 text-gray-800" aria-hidden="true" />
                        <time className="text-sm sm:text-base text-gray-500 font-medium" dateTime="2025-05-14" itemProp="datePublished" aria-label="Published date: May 14, 2025">
                          {blogPosts[2].date}
                        </time>
                      </div>
                      <div className="bg-gray-300 h-[22px] w-px" aria-hidden="true"></div>
                      <div className="flex items-center gap-2">
                        <FiClock className="w-5 h-5 text-gray-800" aria-hidden="true" />
                        <span className="text-sm sm:text-base text-gray-500 shrink-0 font-medium" itemProp="timeRequired" aria-label="Reading time: 1 minute">
                          {blogPosts[2].readTime}
                        </span>
                      </div>
                    </div>
                    <div>
                      <a href={blogPosts[2].link} className="block" itemProp="url">
                        <h3 className="text-xl sm:text-2xl line-clamp-2 text-gray-800 font-semibold" itemProp="headline">
                          {blogPosts[2].title}
                        </h3>
                      </a>
                    </div>
                    <div className="mt-6 w-full md:w-auto">
                      <div className="border border-gray-200 btn-v3-white btn-v3-lg w-fit cursor-pointer rounded-2xl px-1 py-1 hover:bg-gray-50 transition-all duration-300">
                        <a href={blogPosts[2].link} className="block">
                          <div className="flex items-center gap-x-4">
                            <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                              <FiArrowRight className="size-5 text-gray-800" />
                            </span>
                            <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-gray-800 font-medium">
                              Read more
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* btn */}
          <div className="mx-auto w-[80%] text-center sm:w-full md:mx-0 md:w-auto">
            <div className="btn-v3-lg btn-v3-white mx-auto w-full sm:w-fit cursor-pointer rounded-2xl px-1 py-1 bg-white hover:bg-gray-50 transition-all duration-300 inline-block">
              <a href="/blog" className="block">
                <div className="flex items-center gap-x-4">
                  <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                    <FiArrowRight className="size-5 text-[#142E6E]" />
                  </span>
                  <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-[#142E6E] font-medium">
                    Visit our blog
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}