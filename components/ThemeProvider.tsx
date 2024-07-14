"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface MyThemeProviderProps {
  children: ReactNode;
}

const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
