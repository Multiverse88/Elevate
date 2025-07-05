'use client'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingOverlay from '@/components/LoadingOverlay'
import NavigationLoader from '@/components/NavigationLoader'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'
import { useLoading } from '@/contexts/LoadingContext'
import { NavigationProvider } from '@/contexts/NavigationContext'

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
    <NavigationProvider>
      {loading && <LoadingOverlay />}
      <NavigationLoader />
      <div style={{ display: loading ? 'none' : 'block' }}>
        <Navbar />
        <PageTransitionWrapper>
          <main>
            {children}
          </main>
        </PageTransitionWrapper>
        <Footer />
      </div>
    </NavigationProvider>
  )
}
