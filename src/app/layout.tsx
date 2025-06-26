import type { Metadata } from 'next'
import { Barlow_Condensed } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed'
})

export const metadata: Metadata = {
  title: 'Elevate Academia - The Best Platform for Online Learning',
  description: 'Find the best course online and learn wherever you are and at any time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Kelvinch:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${barlowCondensed.variable} font-barlow`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 