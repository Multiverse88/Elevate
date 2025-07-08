import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RootLayoutContent from './RootLayoutContent'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { LoadingProvider } from '@/contexts/LoadingContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://elevateacademia.com'),
  title: {
    default: 'Elevate Academia - Platform Akademik Terdepan Indonesia',
    template: '%s | Elevate Academia'
  },
  description: 'Solusi Profesional untuk Naskah dan Publikasi Ilmiah. Layanan penulisan skripsi, publikasi jurnal SINTA, workshop akademik, dan konsultasi penelitian. Kami berkomitmen membantu Anda mencapai kesuksesan akademik dengan bimbingan intensif dari mentor berpengalaman.',
  keywords: [
    'elevate academia',
    'penulisan skripsi',
    'publikasi jurnal',
    'workshop akademik',
    'konsultasi penelitian',
    'SINTA',
    'scopus',
    'akademik indonesia',
    'bimbingan skripsi',
    'jasa penulisan',
    'mentor akademik'
  ],
  authors: [{ name: 'Elevate Academia', url: 'https://elevateacademia.com' }],
  creator: 'Elevate Academia',
  publisher: 'Elevate Academia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logos/Logo Elevate.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/Logo Elevate.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/images/logos/Logo Elevate.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/images/logos/Logo Elevate.png'
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://elevateacademia.com',
    siteName: 'Elevate Academia',
    title: 'Elevate Academia - Platform Akademik Terdepan Indonesia',
    description: 'Solusi Profesional untuk Naskah dan Publikasi Ilmiah. Layanan penulisan skripsi, publikasi jurnal SINTA, workshop akademik, dan konsultasi penelitian dengan mentor berpengalaman.',
    images: [
      {
        url: '/images/logos/Logo Elevate.png',
        width: 1200,
        height: 630,
        alt: 'Elevate Academia - Platform Akademik Terdepan',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevate Academia - Platform Akademik Terdepan Indonesia',
    description: 'Solusi Profesional untuk Naskah dan Publikasi Ilmiah. Layanan penulisan skripsi, publikasi jurnal SINTA, workshop akademik, dan konsultasi penelitian.',
    images: ['/images/logos/Logo Elevate.png'],
    creator: '@elevateacademia',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://elevateacademia.com',
    languages: {
      'id-ID': 'https://elevateacademia.com',
      'en-US': 'https://elevateacademia.com/en',
    },
  },
  category: 'education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <LanguageProvider>
          <LoadingProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  )
} 