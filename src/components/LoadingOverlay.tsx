'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLoading } from '@/contexts/LoadingContext'

export default function LoadingOverlay() {
  const { loading } = useLoading()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (loading) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'flex' })
      gsap.fromTo(
        "#loading-logo",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      )
    } else {
      gsap.to("#loading-logo", { opacity: 0, scale: 0.8, duration: 0.5, ease: "back.in(1.7)" })
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none', delay: 0.5 })
    }
  }, [loading])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-300"
      style={{ opacity: 0, display: 'none' }} // Initial state: hidden
    >
      <div className="text-center">
        <img
          src="/images/logos/Logo Elevate.png"
          alt="Elevate Academia Logo"
          className="w-[400px] h-[400px] rounded-full mx-auto mb-4"
          id="loading-logo"
        />
      </div>
    </div>
  )
}
