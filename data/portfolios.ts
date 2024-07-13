import { PortfolioCardTypes } from "@/types/PortfolioCardTypes";

export const portfolios: PortfolioCardTypes[] = [
  {
    title: "Website Sekolah Baitul Adab",
    description:
      "Website Sekolah Baitul Adab menyediakan informasi lengkap tentang sekolah, termasuk program akademik, berita, dan kegiatan. Dengan desain yang modern dan mudah digunakan, website ini memudahkan siswa, orang tua, dan masyarakat untuk mendapatkan informasi terkini.",
    techStack: ["Next.js", "Tailwind CSS"],
    companyName: "Baitul Adab",
    companyLogo: "baituladab.svg",
    type: "website",
    images: ["imageTest.jpg", "imageNotFound.png"],
    githubRepo: "https://github.com/makbarramadhan62/baitul-adab-react",
    webUrl: "https://baitul-adab.vercel.app/",
  },
  {
    title: "Dashboard Monitoring Server",
    description:
      "Dashboard untuk memonitor performa server di PT. Akhdani Reka Solusi",
    techStack: ["React", "Redux", "Chart.js"],
    companyName: "PT. Akhdani Reka Solusi",
    companyLogo: "ars.svg",
    type: "website",
    images: ["imageTest.jpg", "imageNotFound.png"],
    githubRepo: "https://github.com/makbarramadhan62/baitul-adab-react",
  },
];
