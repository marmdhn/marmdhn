import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProjectsLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "MARMDHN | Projects",
  description: "This is the projects page of MARMDHN_ portfolio.",
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
