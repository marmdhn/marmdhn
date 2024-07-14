"use client";

import { useState, useEffect, ReactNode } from "react";
import AnimatedLoading from "@/components/AnimatedLoading";

interface ClientSideLayoutProps {
  children: ReactNode;
}

export default function ClientSideLayout({ children }: ClientSideLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <AnimatedLoading />;
  }

  return <>{children}</>;
}
