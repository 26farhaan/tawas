// app/produk-tawas/page.tsx
import { HeroLanding } from "@/components/Landing/HeroLanding";

// Metadata untuk SEO (Next.js akan masukkan ke <head>)
export const metadata = {
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
    <main className="p-8 max-w-3xl mx-auto">
      <HeroLanding />

      <section>
        <h2 className="text-xl font-semibold mb-2">Mengapa Memilih Tawas?</h2>
        <p className="mb-4">
          Tawas adalah mineral alami yang dikenal sejak lama sebagai penghilang bau badan dan pembunuh bakteri. Tidak
          seperti deodoran biasa, tawas tidak mengandung alkohol atau parfum yang bisa menyebabkan iritasi kulit.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Manfaat Deodoran Tawas</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Menghilangkan bau badan secara alami</li>
          <li>Tidak menyumbat pori-pori</li>
          <li>Aman untuk kulit sensitif</li>
          <li>Tidak meninggalkan noda di pakaian</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Beli Sekarang</h2>
        <p>
          Tersedia dalam bentuk stick dan serbuk.{" "}
          <a href="/produk" className="text-blue-600 underline">
            Lihat produk tawas kami &rarr;
          </a>
        </p>
      </section>
    </main>
  );
}
