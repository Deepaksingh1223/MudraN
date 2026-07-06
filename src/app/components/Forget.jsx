"use client";

import { useState } from "react";
import { FaLock } from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSubmitted(true);
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
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3.5s ease-in-out infinite; }
        .animate-fadeUp { animation: fadeUp 0.55s ease both; }
        .animate-spin-custom { animation: spin 0.7s linear infinite; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>

      {/* Background Blobs */}
      <div className="absolute top-[-130px] right-[-100px] w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(224,165,40,0.16) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-110px] left-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(210,110,25,0.11) 0%, transparent 70%)' }} />
      
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #c8b89a 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

      <div className="flex flex-col lg:flex-row items-center gap-14 max-w-[1320px] w-full relative z-10 animate-fadeUp">
        
        {/* ========== LEFT PANEL ========== */}
        <div className="flex-1 flex flex-col items-center gap-5">
          
      {/* ========== LEFT PANEL ========== */}
        <div className="flex-1 flex flex-col items-center gap-5">
          
          {/* Crypto Card */}
          <div className="animate-float drop-shadow-[0_28px_44px_rgba(140,95,20,0.24)]">
            <img src="/images/login-card-img.png" alt="Crypto Card" className="h-auto" />
          </div>

     
        </div>
        </div>

        {/* ========== RIGHT PANEL - FORGOT PASSWORD FORM ========== */}
        <div className="flex-1 max-w-[520px] w-full">
          <div className="bg-white border border-[#e4d8c0] rounded-[28px] p-5 md:p-10 shadow-[0_10px_44px_rgba(150,100,20,0.1)]">
            <div className="flex items-center gap-2.5 mb-[30px]">
              <div className="w-[38px] h-[38px] bg-[#fdf6e2] border border-[#d4a82a] rounded-[11px] flex items-center justify-center">
               <img src="/images/favicon.png" alt="Mudra Logo" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-[#a87820] text-[13px] font-bold tracking-[4px] font-['DM_Mono',monospace]">MUDRA</span>
            </div>


            {/* Success Message */}
            {submitted ? (
              <div className="animate-fadeUp">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-[#1c1a10] text-[30px] font-extrabold tracking-[-0.8px] mb-4 leading-[1.15] text-center">Check Your Email</h1>
                <p className="text-[#9a8460] text-sm mb-6 leading-relaxed text-center">
                  We've sent a password reset link to <strong className="text-[#1c1a10]">{email}</strong>
                </p>
                <div className="text-center">
                  <a href="/login" className="text-[#a87820] text-sm font-semibold hover:underline">
                    Back to Sign In
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#fdf6e2] border border-[#d4a82a] flex items-center justify-center">
                    <FaLock className="text-[#c9a32a] text-xl" />
                  </div>
                  <h1 className="text-[#1c1a10] text-[30px] font-extrabold tracking-[-0.8px] mb-2 leading-[1.15]">Forgot Password?</h1>
                  <p className="text-[#9a8460] text-sm leading-relaxed">
                    No worries! Enter your email address and we'll send you a reset link.
                  </p>
                </div>

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

                {/* Submit Button */}
                <button 
                  className="w-full h-[54px] bg-gradient-to-r from-[#e8b830] to-[#c07810] border-none rounded-[13px] text-white text-[15px] font-bold font-['Syne',sans-serif] cursor-pointer flex items-center justify-center gap-2 mt-6 tracking-[0.4px] transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_32px_rgba(200,125,10,0.38)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_6px_26px_rgba(200,125,10,0.3)]" 
                  onClick={handleSubmit} 
                  disabled={loading || !email}
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2.5 border-white/30 border-t-white rounded-full animate-spin-custom" />
                  ) : (
                    <>
                      <span>Send Reset Link</span>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Back to Login Link */}
                <div className="text-center mt-8">
                  <a href="/login" className="text-[#a87820] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Sign In
                  </a>
                </div>

                {/* Help Text */}
                <p className="text-center text-[#9a8460] text-[11px] mt-6">
                  Need help?{" "}
                  <a href="/" className="text-[#a87820] font-semibold hover:underline">Contact Support</a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}