'use client'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import ContactModal from './ContactModal'
import FloatingDecorations from './FloatingDecorations'
import { useLanguage } from '@/contexts/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, buttonRef.current], { opacity: 0, y: 50 })

      // Create main timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3")

      // Button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        
        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (searchParams.get('openModal') === 'true') {
      setIsContactModalOpen(true)
    }
  }, [searchParams])

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
        {/* Floating decorations */}
        <FloatingDecorations variant="hero" density="medium" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 ref={titleRef} className="text-5xl lg:text-6xl font-bold text-white mb-8">
              {t('contact.title')}
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
            
            <button
              ref={buttonRef}
              onClick={() => setIsContactModalOpen(true)}
              className="group relative inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Button background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 text-2xl group-hover:animate-bounce">📞</span>
                <span>{t('contact.button')}</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
              
              {/* Floating sparkles */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60 group-hover:animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full opacity-40 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
    </>
  )
} 