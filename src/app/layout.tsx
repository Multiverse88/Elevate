import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RootLayoutContent from './RootLayoutContent'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { LoadingProvider } from '@/contexts/LoadingContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elevate Academia - Platform Akademik Terdepan',
  description: 'Solusi Profesional untuk Naskah dan Publikasi Ilmiah. Kami berkomitmen membantu Anda mencapai kesuksesan akademik.',
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