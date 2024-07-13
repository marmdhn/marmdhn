import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSideLayout from "@/components/ClientSideLayout";

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
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <ClientSideLayout>{children}</ClientSideLayout>
      </body>
    </html>
  );
}
