import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import ClientSideLayout from "@/components/ClientSideLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProjectsLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MARMDHN | Projects",
  description: "This is the projects page of MARMDHN_ portfolio.",
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Navbar />
      <main className="flex-grow">
        <ClientSideLayout>{children}</ClientSideLayout>
      </main>
      <Footer />
    </div>
  );
}
