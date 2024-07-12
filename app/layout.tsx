import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MARMDHN_",
  description: "marmdhn porfolio show case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full bg-gray-100 dark:bg-gray-900 transition-all duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
