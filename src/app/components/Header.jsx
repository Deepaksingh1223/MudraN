"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FiChevronDown, 
  FiArrowRight,  
  FiX
} from "react-icons/fi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? null : menu);
  };

  return (
    <>
      <header>
        {/* Desktop Header */}
        <div className="financial-management-platform-header fixed top-14 left-1/2 z-50 mx-auto flex w-full max-w-[335px] -translate-x-1/2 items-center justify-between rounded-[20px] bg-white px-1.5 py-2.5 backdrop-blur-[25px] min-[425px]:max-w-[380px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0 lp:!max-w-[1290px]">
          {/* Logo */}
          <div>
            <Link href="/">
              <span className="sr-only">Home</span>
              <figure className="hidden lg:block lg:max-w-[198px]">
                <Image src="/images/main-logo.png" alt="MDR Futuristics" width={198} height={50} />
              </figure>
              <figure className="block max-w-[44px] lg:hidden">
                <Image src="/images/logo.png" alt="MDR Futuristics" width={44} height={44} className="block w-full" />
              </figure>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center gap-6">
              {/* Home Link */}
              <li className="py-5">
                <Link href="/" className="nav-item-link-white">
                  <span className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Home</span>
                </Link>
              </li>

              {/* About us Link */}
              <li className="py-5">
                <Link href="/#about" className="nav-item-link-white">
                  <span className="text-gray-600 hover:text-gray-800 transition-colors duration-300">About us</span>
                </Link>
              </li>

              {/* Community Link */}
              <li className="py-5">
                <Link href="/#community" className="nav-item-link-white">
                  <span className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Community</span>
                </Link>
              </li>

              {/* Card Link */}
              <li className="py-5">
                <Link href="/#card" className="nav-item-link-white">
                  <span className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Card</span>
                </Link>
              </li>

              {/* Contact Link */}
              <li className="py-5">
                <Link href="/#contact" className="nav-item-link-white">
                  <span className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center sm:flex">
              <div className="btn-v3-secondary btn-v3-lg w-fit cursor-pointer rounded-2xl px-1 py-1 bg-[#142E6E] hover:bg-[#0e2356] transition-all duration-300">
                <Link href="/Login" className="block">
                  <div className="flex items-center gap-x-4">
                    <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700" aria-hidden="true">
                      <FiArrowRight className="size-5 text-white" />
                    </span>
                    <span className="shrink-0 pr-4 transition-all duration-700 first-letter:uppercase text-white font-medium">
                      Get started
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="block xl:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="nav-hamburger bg-gray-100 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full"
              >
                <span className="sr-only">Menu</span>
                <span className="bg-gray-400 block h-0.5 w-6"></span>
                <span className="bg-gray-400 block h-0.5 w-6"></span>
                <span className="bg-gray-400 block h-0.5 w-6"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Sidebar */}
        <aside className={`sidebar scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full rounded-l-3xl bg-white transition-all duration-300 sm:w-1/2 xl:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="space-y-4 p-5 sm:p-8 lg:p-9">
            <div className="flex items-center justify-between">
              <Link href="/">
                <span className="sr-only">Home</span>
                <figure className="max-w-[60px]">
                  <Image src="/images/logo.png" alt="MDR Futuristics" width={60} height={60} className="block w-full" />
                </figure>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="nav-hamburger-close bg-gray-100 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full"
              >
                <span className="sr-only">Close Menu</span>
                <FiX className="absolute w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
              <p className="text-gray-800 text-base before:bg-gray-200 relative mb-2 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-['']">
                Menu
              </p>
              <ul className="space-y-2">
                {/* Home Mobile Menu */}
                <li className="space-y-2">
                  <button 
                    onClick={() => {
                      window.location.href = "/";
                      setMobileMenuOpen(false);
                    }}
                    className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                  >
                    <span className="text-gray-600 text-base block font-normal">Home</span>
                  </button>
                </li>

                {/* About us Mobile Menu */}
                <li className="space-y-2">
                  <button 
                    onClick={() => {
                      window.location.href = "/#about";
                      setMobileMenuOpen(false);
                    }}
                    className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                  >
                    <span className="text-gray-600 text-base block font-normal">About us</span>
                  </button>
                </li>

                {/* Community Mobile Menu */}
                <li className="space-y-2">
                  <button 
                    onClick={() => {
                      window.location.href = "/#community";
                      setMobileMenuOpen(false);
                    }}
                    className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                  >
                    <span className="text-gray-600 text-base block font-normal">Community</span>
                  </button>
                </li>

                {/* Card Mobile Menu */}
                <li className="space-y-2">
                  <button 
                    onClick={() => {
                      window.location.href = "/#card";
                      setMobileMenuOpen(false);
                    }}
                    className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                  >
                    <span className="text-gray-600 text-base block font-normal">Card</span>
                  </button>
                </li>

                {/* Contact Mobile Menu */}
                <li className="space-y-2">
                  <button 
                    onClick={() => {
                      window.location.href = "/#contact";
                      setMobileMenuOpen(false);
                    }}
                    className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                  >
                    <span className="text-gray-600 text-base block font-normal">Contact</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
}