"use client";

import { useAuth } from "@/constants/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ProtectAdminRoute({ children }) {
  const { isLoading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      router.push("/Admin");
    }
  }, [isLoading, isAdmin, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dashboard-bg">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-dashboard-bd border-t-dashboard-gr rounded-full animate-spin" />
          <p className="text-dashboard-tx">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return children;
}

export function ProtectUserRoute({ children }) {
  const { isLoading, isUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isUser) {
      router.push("/Login");
    }
  }, [isLoading, isUser, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dashboard-bg">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-dashboard-bd border-t-dashboard-gr rounded-full animate-spin" />
          <p className="text-dashboard-tx">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isUser) {
    return null;
  }

  return children;
}
