"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "@/constants/authContext";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

function AuthShell({ children, previewClassName }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-auth-bg relative">
      <div
        className={
          "flex w-full max-w-auth-panel bg-[#1a1a2e] rounded-[32px] border border-[#16213e] overflow-hidden animate-fade-up " +
          "max-[900px]:flex-col max-[900px]:max-w-auth-form"
        }
      >
        <div
          className={
            "flex-1 min-h-[280px] bg-contain bg-center bg-no-repeat " +
            "max-[900px]:min-h-[250px] " +
            (previewClassName || "")
          }
          style={{
            backgroundImage:
              "url(/img/login-card-img.png)",
          }}
          aria-hidden
        />
        <div className="flex-1 bg-[#0f3460] px-11 py-12 max-[900px]:px-6 max-[900px]:py-8 max-[480px]:px-5 max-[480px]:py-6">
          {children}
        </div>
      </div>
    </div>
  );
}

function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-9">
      <h1 className="text-[34px] max-[480px]:text-[28px] font-extrabold mb-2.5 bg-gradient-to-br from-white to-[#e94560] bg-clip-text text-transparent">
        {title}
      </h1>
      {subtitle ? (
        <p className="text-[#a8dadc] text-sm opacity-70">{subtitle}</p>
      ) : null}
    </div>
  );
}

function AuthFieldGroup({ label, labelRight, children }) {
  return (
    <div className="mb-[22px]">
      <div className="flex justify-between mb-2.5">
        <span className="text-xs font-semibold text-[#e0e1dd] uppercase tracking-[0.8px]">
          {label}
        </span>
        {labelRight}
      </div>
      {children}
    </div>
  );
}

function AuthInputWrapper({ focused, children }) {
  return (
    <div
      className={
        "flex items-center gap-3 bg-[#16213e] border-[1.5px] border-[#0f3460] rounded-2xl px-[18px] h-[54px] transition-all duration-200 " +
        (focused && "border-[#e94560] shadow-[0_0_0_3px_rgba(233,69,96,0.1)]")
      }
    >
      {children}
    </div>
  );
}

function AuthInput(props) {
  return (
    <input
      className="flex-1 bg-transparent border-0 outline-none text-[#e0e1dd] text-sm font-inter placeholder:text-[#a8dadc] placeholder:opacity-40"
      {...props}
    />
  );
}

function AuthSubmitButton({ loading, children, ...props }) {
  return (
    <button
      type="button"
      className="w-full h-[54px] mt-3 flex items-center justify-center gap-2.5 rounded-2xl border-0 text-[15px] font-bold text-white bg-gradient-to-br from-[#e94560] to-[#d63447] transition-all duration-200 hover:enabled:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}

export default function AdminLogin() {
  const [email, setEmail] = useState("admin@veltimpera.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const router = useRouter();
  const { loginAdmin, isAuthenticated, isAdmin } = useAuth();

  // Redirect if already logged in as admin
  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      router.push("/admin-dashboard");
    }
  }, [isAuthenticated, isAdmin, router]);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const result = loginAdmin(email, password);
      if (result.success) {
        router.push("/admin-dashboard");
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleLogin();
    }
  };

  return (
    <AuthShell previewClassName="bg-gradient-to-br from-[#e94560]/20 to-transparent">
      <AuthHeader title="Admin Panel" subtitle="Secure access for administrators" />

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <AuthFieldGroup label="Email Address">
        <AuthInputWrapper focused={focusedField === "email"}>
          <FaEnvelope className="text-[#e94560] text-sm" aria-hidden="true" />
          <AuthInput
            type="email"
            placeholder="admin@veltimpera.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField("")}
            onKeyPress={handleKeyPress}
          />
        </AuthInputWrapper>
      </AuthFieldGroup>

      <AuthFieldGroup label="Password">
        <AuthInputWrapper focused={focusedField === "password"}>
          <FaLock className="text-[#e94560] text-sm" aria-hidden="true" />
          <AuthInput
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField("")}
            onKeyPress={handleKeyPress}
          />
        </AuthInputWrapper>
      </AuthFieldGroup>

      <AuthSubmitButton loading={loading} onClick={handleLogin}>
        {loading ? "Logging in..." : (
          <>
            Sign In <FaArrowRight className="text-sm" aria-hidden="true" />
          </>
        )}
      </AuthSubmitButton>

     
    </AuthShell>
  );
}
