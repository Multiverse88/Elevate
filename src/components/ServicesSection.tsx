'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Bimbingan Penulisan Naskah',
    desc: 'Skripsi, artikel jurnal, esai, disertasi, dll.',
    icon: '/images/icons/suitcase.png',
    color: 'from-blue-500 to-purple-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Pendampingan Publikasi Ilmiah',
    desc: 'Submit & revisi untuk SINTA, Scopus, WoS.',
    icon: '/images/icons/book.png',
    color: 'from-green-500 to-blue-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Event Organizer Workshop Akademik',
    desc: 'Webinar, kuliah tamu, pelatihan menulis, dll.',
    icon: '/images/icons/video-conference.png',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, { opacity: 0, y: 50 })
      gsap.set(cardsRef.current, { opacity: 0, y: 80, scale: 0.8 })

      // Create ScrollTrigger animation
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.3")

      // Add hover animations for cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const icon = card.querySelector('.service-icon')
          const content = card.querySelector('.service-content')
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            })
            gsap.to(icon, {
              rotation: 360,
              scale: 1.2,
              duration: 0.6,
              ease: "back.out(1.7)"
            })
          })
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            })
            gsap.to(icon, {
              rotation: 0,
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
    <section ref={sectionRef} id="layanan" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-5"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
          Jelajahi <span className="text-blue-600">Layanan</span> Kami
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              ref={el => { cardsRef.current[idx] = el }}
              className={`${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="service-content relative z-10 flex flex-col items-center text-center">
                <div className="service-icon mb-6 p-4 bg-white rounded-full shadow-md">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={48} 
                    height={48} 
                    className="w-12 h-12"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.desc}
                </p>

                {/* Decorative arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Floating decorative dots */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 