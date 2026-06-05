"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check stored auth on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // User Login
  const loginUser = (username, password) => {
    // Mock user credentials
    const mockUsers = {
      "user@test.com": { password: "user123", role: "user", name: "Arjun Kapoor", id: 1, memberId: "MUD-2847" },
    };

    if (mockUsers[username] && mockUsers[username].password === password) {
      const userData = {
        email: username,
        role: "user",
        name: mockUsers[username].name,
        id: mockUsers[username].id,
        memberId: mockUsers[username].memberId,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true, data: userData };
    }
    return { success: false, error: "Invalid credentials" };
  };

  // Admin Login
  const loginAdmin = (username, password) => {
    // Mock admin credentials
    const mockAdmins = {
      "admin@MUDRA.com": { password: "admin123", role: "admin", name: "Admin Panel", id: 1 },
      "admin": { password: "admin123", role: "admin", name: "Admin Panel", id: 1 },
    };

    if (mockAdmins[username] && mockAdmins[username].password === password) {
      const adminData = {
        email: username,
        role: "admin",
        name: mockAdmins[username].name,
        id: mockAdmins[username].id,
      };
      setUser(adminData);
      localStorage.setItem("user", JSON.stringify(adminData));
      return { success: true, data: adminData };
    }
    return { success: false, error: "Invalid admin credentials" };
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  // Check if user is admin
  const isAdmin = user?.role === "admin";

  // Check if user is regular user
  const isUser = user?.role === "user";

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        isUser,
        isLoading,
        loginUser,
        loginAdmin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
