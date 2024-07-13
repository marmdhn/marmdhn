"use client";

import { useState, useEffect, ReactNode } from "react";
import Loading from "@/components/Loading";

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
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}
