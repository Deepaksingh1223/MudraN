"use client";

import RouteChrome from "./RouteChrome";
import { AuthProvider } from "@/constants/authContext";

export default function RootLayoutClient({ children }) {
  return (
    <AuthProvider>
      <RouteChrome>{children}</RouteChrome>
    </AuthProvider>
  );
}
