'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([])
  const { t } = useLanguage()

  const stats = [
    { number: '500+', label: t('about.stats.clients'), icon: '👨‍🎓' },
    { number: '50+', label: t('about.stats.mentors'), icon: '👨‍🏫' },
    { number: '100+', label: t('about.stats.publications'), icon: '📄' },
    { number: '95%', label: t('about.stats.success'), icon: '🏆' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, textRef.current], { opacity: 0, y: 50 })
      gsap.set(statsRef.current, { opacity: 0, y: 80, scale: 0.8 })
      gsap.set(floatingElementsRef.current, { opacity: 0, scale: 0, rotation: -180 })

      // Create main timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.3")
      .to(floatingElementsRef.current, {
        opacity: 0.7,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5")

      // Continuous floating animations for decorative elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            rotation: "random(-10, 10)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3
          })
        }
      })

      // Add hover animations for stats cards
      statsRef.current.forEach((stat) => {
        if (stat) {
          stat.addEventListener('mouseenter', () => {
            gsap.to(stat, {
              y: -5,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            })
          })
          
          stat.addEventListener('mouseleave', () => {
            gsap.to(stat, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            })
          })
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [t])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={el => { floatingElementsRef.current[0] = el }}
          className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10"
        ></div>
        <div 
          ref={el => { floatingElementsRef.current[1] = el }}
          className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 transform rotate-45 opacity-15"
        ></div>
        <div 
          ref={el => { floatingElementsRef.current[2] = el }}
          className="absolute bottom-40 left-40 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10"
        ></div>
        <div 
          ref={el => { floatingElementsRef.current[3] = el }}
          className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg opacity-20"
        ></div>
        
        {/* Small accent elements */}
        <div 
          ref={el => { floatingElementsRef.current[4] = el }}
          className="absolute top-32 left-1/3 w-4 h-4 bg-blue-500 rounded-full opacity-30"
        ></div>
        <div 
          ref={el => { floatingElementsRef.current[5] = el }}
          className="absolute bottom-32 right-1/3 w-6 h-6 bg-green-500 rounded-full opacity-25"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-blue-200 mb-6">
            <span className="mr-2">🌟</span>
            {t('about.badge')}
          </div>
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          <p ref={textRef} className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 lg:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white transform rotate-45"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              "{t('about.mission.text')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 