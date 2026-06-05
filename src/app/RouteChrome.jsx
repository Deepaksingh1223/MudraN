"use client";

import { usePathname } from "next/navigation"; 

export default function RouteChrome({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const isAdminDashboard = pathname?.startsWith("/admin-dashboard");
  const isAuthPage =
    pathname?.startsWith("/Login") ||
    pathname?.startsWith("/Register") ||
    pathname?.startsWith("/Fotget") ||
    pathname?.startsWith("/Admin");

  return (
    <> 
      {children} 
    </>
  );
}

