"use client";

import { useState } from "react";
import { FaLock, FaShieldAlt, FaBolt } from "react-icons/fa";

export default function CryptoLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = async () => {
    if (!email || !password) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] flex items-center justify-center font-['Syne',sans-serif] relative overflow-hidden p-8 md:p-4">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50% { transform: translateY(-14px) rotate(-4deg); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-180%) skewX(-20deg); }
          100% { transform: translateX(300%) skewX(-20deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tickerMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3.5s ease-in-out infinite; }
        .animate-fadeUp { animation: fadeUp 0.55s ease both; }
        .animate-ticker { animation: tickerMove 20s linear infinite; }
        .animate-spin-custom { animation: spin 0.7s linear infinite; }
      `}</style>

      {/* Background Blobs */}
      <div className="absolute top-[-130px] right-[-100px] w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(224,165,40,0.16) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-110px] left-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(210,110,25,0.11) 0%, transparent 70%)' }} />
      
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #c8b89a 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

      <div className="flex flex-col lg:flex-row items-center gap-14 max-w-[1320px] w-full relative z-10 animate-fadeUp">
        
        {/* ========== LEFT PANEL ========== */}
        <div className="flex-1 flex flex-col items-center gap-5">
          
          {/* Crypto Card */}
          <div className="animate-float drop-shadow-[0_28px_44px_rgba(140,95,20,0.24)]">
            <img src="/images/login-card-img.png" alt="Crypto Card" className="h-auto" />
          </div>

     
        </div>

        {/* ========== RIGHT PANEL - FORM ========== */}
        <div className="flex-1 max-w-[520px] w-full">
          <div className="bg-white border border-[#e4d8c0] rounded-[28px] p-5 md:p-10 shadow-[0_10px_44px_rgba(150,100,20,0.1)]">
            
            {/* Brand Logo */}
            <div className="flex items-center gap-2.5 mb-[30px]">
              <div className="w-[38px] h-[38px] bg-[#fdf6e2] border border-[#d4a82a] rounded-[11px] flex items-center justify-center">
                <img src="/images/favicon.png" alt="Mudra Logo" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-[#a87820] text-[13px] font-bold tracking-[4px] font-['DM_Mono',monospace]">MUDRA</span>
            </div>

            <h1 className="text-[#1c1a10] text-[30px] font-extrabold tracking-[-0.8px] mb-1.5 leading-[1.15]">Sign In</h1>
            <p className="text-[#9a8460] text-sm mb-[34px] leading-relaxed">Hello, Welcome back to your account!</p>

            {/* Email Input */}
            <div className="mb-[18px]">
              <label className="block text-[#5a4620] text-[11px] font-bold mb-2 tracking-[0.8px] uppercase">Email address</label>
              <div className={`flex items-center gap-2.5 bg-[#faf7f0] border-[1.5px] ${focused === "email" ? "border-[#c9a32a] bg-[#fffdf5] shadow-[0_0_0_3px_rgba(201,163,42,0.14)]" : "border-[#ddd0b0]"} rounded-[13px] px-4 h-[52px] transition-all duration-200 hover:border-[#c9a32a]`}>
                <svg className="w-4 h-4 text-[#c9a32a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="flex-1 bg-transparent border-none outline-none text-[#1c1a10] text-sm font-['Syne',sans-serif] placeholder:text-[#c4ae88]"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-[18px]">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[#5a4620] text-[11px] font-bold tracking-[0.8px] uppercase">Password</label>
                <a href="/Fotget" className="text-[#a87820] text-xs font-semibold hover:underline">Forgot password?</a>
              </div>
              <div className={`flex items-center gap-2.5 bg-[#faf7f0] border-[1.5px] ${focused === "password" ? "border-[#c9a32a] bg-[#fffdf5] shadow-[0_0_0_3px_rgba(201,163,42,0.14)]" : "border-[#ddd0b0]"} rounded-[13px] px-4 h-[52px] transition-all duration-200 hover:border-[#c9a32a]`}>
                <svg className="w-4 h-4 text-[#c9a32a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 018 0v4" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  className="flex-1 bg-transparent border-none outline-none text-[#1c1a10] text-sm font-['Syne',sans-serif] placeholder:text-[#c4ae88]"
                />
                <button className="bg-transparent border-none cursor-pointer text-[#c9a32a] p-0 flex items-center" onClick={() => setShowPassword(!showPassword)} type="button">
                  {showPassword ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full h-[54px] bg-gradient-to-r from-[#e8b830] to-[#c07810] border-none rounded-[13px] text-white text-[15px] font-bold font-['Syne',sans-serif] cursor-pointer flex items-center justify-center gap-2 mt-2.5 tracking-[0.4px] transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_32px_rgba(200,125,10,0.38)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_6px_26px_rgba(200,125,10,0.3)]" onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <span className="inline-block w-5 h-5 border-2.5 border-white/30 border-t-white rounded-full animate-spin-custom" />
              ) : (
                <>
                  <span>Sign In</span>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-[26px]">
              <div className="flex-1 h-px bg-[#e6dac4]" />
              <span className="text-[#b0987a] text-xs whitespace-nowrap font-medium">or continue with</span>
              <div className="flex-1 h-px bg-[#e6dac4]" />
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 h-12 bg-[#faf7f0] border-[1.5px] border-[#ddd0b0] rounded-[13px] text-[#3c2e10] text-[13px] font-semibold font-['Syne',sans-serif] cursor-pointer flex items-center justify-center gap-1 transition-all duration-200 hover:bg-white hover:border-[#c9a32a] hover:shadow-[0_2px_14px_rgba(201,163,42,0.13)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3v10" stroke="#C9A32A" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 11l4 4 4-4" stroke="#C9A32A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 20h14" stroke="#C9A32A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Download</span>
                <span className="font-bold ml-0">APK</span>
              </button>
              <button className="flex-1 h-12 bg-[#faf7f0] border-[1.5px] border-[#ddd0b0] rounded-[13px] text-[#3c2e10] text-[13px] font-semibold font-['Syne',sans-serif] cursor-pointer flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white hover:border-[#c9a32a] hover:shadow-[0_2px_14px_rgba(201,163,42,0.13)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1c1a10">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>Apple</span>
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center text-[#9a8460] text-[13px] mt-[26px]">
              Don&apos;t have an account?{" "}
              <a href="/Register" className="text-[#a87820] no-underline font-bold hover:underline">Create one free</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}