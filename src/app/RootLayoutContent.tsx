'use client'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingOverlay from '@/components/LoadingOverlay'
import { useLoading } from '@/contexts/LoadingContext'

export default function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    // Simulate content loading. In a real app, this would be tied to actual data fetching or asset loading.
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Adjust this delay as needed to match your content loading time

    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <>
      {loading && <LoadingOverlay />}
      <div style={{ display: loading ? 'none' : 'block' }}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
