'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { number: '500+', label: 'Klien Puas', icon: '👨‍🎓' },
  { number: '50+', label: 'Mentor Ahli', icon: '👨‍🏫' },
  { number: '100+', label: 'Publikasi', icon: '📄' },
  { number: '95%', label: 'Tingkat Sukses', icon: '🏆' },
]

export default function AboutUsSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef([])
  const floatingElementsRef = useRef([])

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
  }, [])

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
            Tentang Kami
          </div>
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Elevate Academia</span>
          </h2>
          <p ref={textRef} className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate Academia adalah platform terdepan yang berkomitmen membantu akademisi, mahasiswa, 
            dan peneliti dalam mencapai kesuksesan akademik. Dengan tim mentor berpengalaman dan 
            metodologi terbukti, kami telah membantu ribuan individu meraih prestasi terbaik mereka.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              ref={el => { statsRef.current[idx] = el }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center group cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
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
            <h3 className="text-3xl font-bold mb-6">Misi Kami</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              "Memberdayakan setiap individu untuk mencapai potensi akademik tertinggi mereka 
              melalui bimbingan berkualitas, mentoring personal, dan dukungan berkelanjutan 
              dalam perjalanan pendidikan mereka."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 