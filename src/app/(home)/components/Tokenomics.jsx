"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function HomePageSectionWhyChooseUs() {
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Rajiv Sharma",
      role: "Verified User on Trustpilot",
      avatar: "/images/ns-avatar-28.png",
      title: "Seamless Stablecoin Integration",
      content: "MDR Futuristics crypto card is my go to for any payment online. The stablecoin integration makes global transactions seamless.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Kaur",
      role: "Community Member on X",
      avatar: "/images/ns-avatar-29.png",
      title: "Smooth Everyday Spending",
      content: "The experience with MDR Futuristics is really amazing. From fueling up my ride to late night online hauls, it's so smooth!",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Top Reviewer on Trustpilot",
      avatar: "/images/ns-avatar-30.png",
      title: "Best Crypto Card Ever Used",
      content: "I've tried several crypto cards over the years and MDR Futuristics is hands down the BEST one I've ever used!",
      rating: 5
    },
    {
      id: 4,
      name: "Neha Verma",
      role: "Prize Winner & User of MDR Futuristics Card",
      avatar: "/images/ns-avatar-31.png",
      title: "Unforgettable Customer Experience",
      content: "MDR Futuristics turned an ordinary day into something unforgettable. Their customer service resolves issues within reasonable time.",
      rating: 5
    },
    {
      id: 5,
      name: "James L.",
      role: "VP of Finance",
      avatar: "/images/ns-avatar-33.png",
      title: "Real-Time Financial Insights",
      content: "Having real-time financial insights at our fingertips has revolutionized our decision-making process. The customizable dashboards show exactly what we need, when we need it. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 md:space-y-9 overflow-auto-mb">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
              Hear from Our Community
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">
              Join thousands of users who trust MDR Futuristics for effortless, secure payments with stablecoins. Your age, experience, or location doesn't matter — we give everyone a chance to spend crypto in real life.
            </p>
          </div>

          {/* Swiper Carousel */}
          <div className="rounded-3xl p-1">
            {swiperReady && (
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="flex h-auto flex-col items-start justify-between rounded-[20px] bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 md:p-8 border border-gray-100">
                      <div className="space-y-3 sm:space-y-4 w-full">
                        {/* Star Rating */}
                        <div className="flex items-center gap-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-tight">
                          {testimonial.title}
                        </h3>

                        {/* Content */}
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-x-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 w-full">
                        <figure className="size-8 sm:size-10 overflow-hidden rounded-full bg-gray-200 flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-gray-500 truncate">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {/* Loading placeholder */}
            {!swiperReady && (
              <div className="flex h-[400px] items-center justify-center">
                <div className="text-gray-500">Loading testimonials...</div>
              </div>
            )}
          </div>

          {/* Custom Pagination Styles */}
          <style jsx global>{`
            .testimonial-swiper {
              padding: 15px 0 40px 0 !important;
            }
            
            .testimonial-swiper .swiper-slide {
              height: auto;
            }
            
            .testimonial-swiper .swiper-pagination {
              bottom: 0 !important;
              position: relative !important;
              margin-top: 15px;
            }
            
            .testimonial-swiper .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
              background: #142E6E;
              opacity: 0.3;
              transition: all 0.3s ease;
              margin: 0 4px !important;
            }
            
            .testimonial-swiper .swiper-pagination-bullet-active {
              width: 20px;
              border-radius: 3px;
              opacity: 1;
              background: #142E6E;
            }
            
            /* Responsive pagination adjustments */
            @media (min-width: 768px) {
              .testimonial-swiper {
                padding: 20px 0 50px 0 !important;
              }
              
              .testimonial-swiper .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                margin: 0 5px !important;
              }
              
              .testimonial-swiper .swiper-pagination-bullet-active {
                width: 24px;
                border-radius: 4px;
              }
            }
            
            /* Ensure cards don't overflow on very small screens */
            @media (max-width: 480px) {
              .testimonial-swiper {
                padding: 10px 0 35px 0 !important;
              }
              
              .testimonial-swiper .swiper-pagination {
                margin-top: 10px;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}