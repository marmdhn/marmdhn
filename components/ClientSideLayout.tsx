// components/ClientSideLayout.js
"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function ClientSideLayout({ children }) {
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
