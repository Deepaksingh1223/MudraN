"use client";

import AdminLogin from "../components/AdminLogin";
import LoginRegisterLayout from "../login-register-layout";

export default function AdminPage() {
  return (
    <LoginRegisterLayout>
      <div className="flex flex-col min-h-screen">
        <AdminLogin />
      </div>
    </LoginRegisterLayout>
  );
}
