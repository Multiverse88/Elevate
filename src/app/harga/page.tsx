import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const PriceListContent = dynamic(() => import('./PriceListContent'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>
})

export const metadata: Metadata = {
  title: 'Daftar Harga & Paket Layanan',
  description: 'Lihat daftar harga lengkap layanan Elevate Academia: Penulisan Skripsi mulai Rp 200.000, Publikasi Jurnal SINTA, Workshop Akademik, Konsultasi Penelitian, dan layanan akademik lainnya. Konsultasi gratis tersedia.',
  keywords: [
    'harga penulisan skripsi',
    'biaya publikasi jurnal',
    'tarif workshop akademik',
    'konsultasi penelitian murah',
    'paket layanan akademik',
    'SINTA 1-6 harga',
    'elevate academia pricing'
  ],
  openGraph: {
    title: 'Daftar Harga & Paket Layanan - Elevate Academia',
    description: 'Lihat daftar harga lengkap layanan akademik profesional. Penulisan skripsi, publikasi jurnal SINTA, workshop, dan konsultasi penelitian dengan harga terjangkau.',
    url: 'https://elevateacademia.com/harga',
  },
}

export default function Harga() {
  return <PriceListContent />
}