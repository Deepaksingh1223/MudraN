"use client";

import { useEffect, useRef } from "react";
import { 
  FaDribbble, 
  FaBehance, 
  FaInstagram, 
  FaGithub, 
  FaCodepen, 
  FaFigma,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export default function Footer({ className = "" }) {
  const dividerRef = useRef(null);

  useEffect(() => {
    // Animation for divider line
    if (dividerRef.current) {
      setTimeout(() => {
        if (dividerRef.current) {
          dividerRef.current.style.width = "100%";
        }
      }, 100);
    }
  }, []);

  return (
    <footer className={`bg-[#0a0a0f] ${className} relative overflow-hidden border-t border-white/10`}>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        [data-ns-animate] {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .footer-divider {
          transition: width 1s ease-out, opacity 0.5s ease;
        }
        
        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .footer-social-link {
          transition: transform 0.3s ease, opacity 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
        }
        
        .footer-social-link:hover {
          transform: translateY(-3px);
          opacity: 0.8;
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .subscribe-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          color: white;
        }
        
        .subscribe-input:focus {
          outline: none;
          border-color: #8b5cf6;
          background: rgba(255, 255, 255, 0.08);
        }
        
        .subscribe-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        
        .subscribe-btn {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          transition: all 0.3s ease;
        }
        
        .subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Section - Logo & Brand */}
          <div className="lg:col-span-5">
            <div data-ns-animate data-delay="0.2">
        
              
              {/* Email */}
              <a href="mailto:hello@mudrapro.io" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6">
                <MdOutlineMailOutline className="w-5 h-5 text-purple-400" />
                <span>hello@mudrapro.io</span>
              </a>
              
              {/* Navigation Links Row */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                <a href="#" className="footer-link">Ecosystem</a>
                <a href="#" className="footer-link">About us</a>
                <a href="#" className="footer-link">Community</a>
                <span className="text-white/60 text-sm bg-white/5 px-2 py-0.5 rounded-full">+10</span>
              </div>
              
              {/* Subscribe Section */}
              <div className="mt-6">
                <p className="text-white font-semibold text-sm uppercase tracking-wider mb-3 text-purple-300">
                  Subscribe to MDR
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="subscribe-input px-4 py-2.5 rounded-xl text-sm flex-1"
                  />
                  <button className="subscribe-btn px-5 py-2.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2">
                    <FiSend className="w-4 h-4" />
                    Notify me
                  </button>
                </div>
                <p className="text-xs text-white/40 mt-3">
                  Futuristics insights delivered straight to your inbox
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Section - Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Column 1 */}
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="footer-link">Home</a></li>
                  <li><a href="#" className="footer-link">Dribbble</a></li>
                  <li><a href="#" className="footer-link">Behance</a></li>
                  <li><a href="#" className="footer-link">Instagram</a></li>
                  <li><a href="#" className="footer-link">Github</a></li>
                  <li><a href="#" className="footer-link">Codepen</a></li>
                </ul>
              </div>
              
              {/* Column 2 */}
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="footer-link">Figma Community</a></li>
                  <li><a href="#" className="footer-link">Contact</a></li>
                  <li><a href="#" className="footer-link">Term condition</a></li>
                  <li><a href="#" className="footer-link">privacy policy</a></li>
                  <li><a href="#" className="footer-link">Card</a></li>
                  <li><a href="#" className="footer-link text-purple-300/80">+10 Benefits</a></li>
                </ul>
              </div>
              
              {/* Column 3 */}
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="footer-link">Community Hub</a></li>
                  <li><a href="#" className="footer-link">MDR Token</a></li>
                  <li><a href="#" className="footer-link">Roadmap</a></li>
                  <li><a href="#" className="footer-link">Governance</a></li>
                  <li><a href="#" className="footer-link">Whitepaper</a></li>
                </ul>
              </div>
            </div>
            
            {/* Social Icons Row */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-white/40 text-xs tracking-wider">FOLLOW US</span>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="footer-social-link" aria-label="Dribbble">
                    <FaDribbble className="w-4 h-4" />
                  </a>
                  <a href="#" className="footer-social-link" aria-label="Behance">
                    <FaBehance className="w-4 h-4" />
                  </a>
                  <a href="#" className="footer-social-link" aria-label="Instagram">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="footer-social-link" aria-label="Github">
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a href="#" className="footer-social-link" aria-label="Codepen">
                    <FaCodepen className="w-4 h-4" />
                  </a>
                  <a href="#" className="footer-social-link" aria-label="Figma">
                    <FaFigma className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Divider */}
        <div className="relative mt-12 pt-8 text-center">
          <div
            ref={dividerRef}
            className="footer-divider bg-gradient-to-r from-transparent via-purple-500/50 to-transparent absolute top-0 left-0 right-0 mx-auto h-px w-0"
          ></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              MDR Futuristics 2026 © — All rights reserved
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white/70 text-xs transition">Term condition</a>
              <a href="#" className="text-white/40 hover:text-white/70 text-xs transition">privacy policy</a>
            </div>
          </div>
          
          {/* Windows Activation Notice */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-white/25 font-mono">
            <span>🔷 MDR Futuristics Ecosystem v2.0</span>
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                <path d="M8 2v2h4V2H8z"/>
              </svg>
              <span>Activate Windows</span>
              <span className="hidden sm:inline">Go to Settings to activate Windows.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}