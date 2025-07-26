// app/produk-tawas/page.tsx
import { Metadata } from "next";

import Banner from "@/components/PageLanding/Banner";
import Caption from "@/components/PageLanding/Caption";
import Gallery from "@/components/PageLanding/Gallery";
import { Hero } from "@/components/PageLanding/Hero";
import Highlight from "@/components/PageLanding/Highlight";
import Journal from "@/components/PageLanding/Journal";
import Products from "@/components/PageLanding/Products";

// Metadata untuk SEO (Next.js akan masukkan ke <head>)
export const metadata: Metadata = {
  title: "Deodoran Tawas Alami | Hilangkan Bau Badan Tanpa Bahan Kimia",
  description:
    "Temukan manfaat deodoran tawas alami untuk kesehatan kulit dan menghilangkan bau badan. Aman, tanpa bahan kimia, dan cocok untuk semua jenis kulit.",
  keywords: ["tawas", "deodoran alami", "bau badan", "produk herbal", "deodoran tanpa kimia"],
  openGraph: {
    title: "Deodoran Tawas Alami",
    description: "Hilangkan bau badan dengan deodoran tawas alami tanpa bahan kimia.",
    images: [
      {
        url: "/images/tawas-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Deodoran Tawas Alami",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlight />
      <Banner />
      <Products />
      <Caption />
      <Gallery />
      <Journal />
    </main>
  );
}
