import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSideLayout from "@/components/ClientSideLayout";
import MyThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MARMDHN",
  description: "marmdhn porfolio show case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-full`}>
        <MyThemeProvider>
          <ClientSideLayout>{children}</ClientSideLayout>
        </MyThemeProvider>
      </body>
    </html>
  );
}
