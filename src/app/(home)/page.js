"use client";
 
import HomePageSectionHero from "./components/HomePageSectionHero";
import HomePageSectionTrustedBy from "./components/HomePageSectionTrustedBy";
import HomePageSectionServicesTabs from "./components/HomePageSectionServicesTabs";
import HomePageSectionWhyChooseUs from "./components/HomePageSectionWhyChooseUs";
import HomePageSectionSimplifyFinanceCards from "./components/HomePageSectionSimplifyFinanceCards";
// import HomePageSectionFooterCTA from "./components/HomePageSectionFooterCTA";
import Impressive from "./components/Impressive";
import Tokenomics from "./components/Tokenomics";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import HomepageLastSection from "./components/HomepageLastSection";  
export default function HomePage() {

  return (
    <>
      <main className="bg-white">
        <HomePageSectionHero />
        <HomePageSectionTrustedBy />
        <HomePageSectionServicesTabs />
        <HomePageSectionWhyChooseUs />
        <HomePageSectionSimplifyFinanceCards />
        {/* <HomePageSectionFooterCTA /> */}
        <Impressive />
         <Tokenomics />
       <Faq />
         <Blog />
               <HomepageLastSection />
      </main>

      <style jsx global>{`
        .main-container {
          max-width: 1290px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        @media (min-width: 1280px) {
          .main-container {
            padding-left: 0;
            padding-right: 0;
          }
        }
        .hero-spin {
          animation: spin-slow 80s linear infinite;
        }
        @keyframes spin-slow {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        .logos-track {
          display: flex;
          gap: 3.5rem;
          animation: scrollLogos 30s linear infinite;
        }
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mobile-drawer {
          transition: transform 0.3s ease-in-out;
          transform: translateX(100%);
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }
        .mobile-overlay {
          transition: opacity 0.3s ease-in-out;
        }
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-scale:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.1);
        }
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-out;
        }
        .accordion-item.active .accordion-content {
          max-height: 400px;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background-color: #142e6e;
        }
        .testimonial-swiper {
          overflow: visible;
        }
        .testimonial-swiper .swiper-wrapper {
          padding-bottom: 2rem;
        }
      `}</style>
    </>
  );
}