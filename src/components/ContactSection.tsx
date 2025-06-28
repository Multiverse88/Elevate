'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FloatingDecorations from './FloatingDecorations'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const buttonRef = useRef(null)
  const modalRef = useRef(null)
  const modalContentRef = useRef(null)
  const formFieldsRef = useRef([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, buttonRef.current], { opacity: 0, y: 50 })
      gsap.set(modalRef.current, { opacity: 0, visibility: 'hidden' })
      gsap.set(modalContentRef.current, { scale: 0.7, y: 50 })
      gsap.set(formFieldsRef.current, { opacity: 0, x: -30 })

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

  const openModal = () => {
    setIsModalOpen(true)
    
    // Animate modal opening
    gsap.set(modalRef.current, { visibility: 'visible' })
    
    const tl = gsap.timeline()
    
    tl.to(modalRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(modalContentRef.current, {
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.1")
    .to(formFieldsRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.2")
  }

  const closeModal = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsModalOpen(false)
        gsap.set(modalRef.current, { visibility: 'hidden' })
      }
    })
    
    tl.to(formFieldsRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.in"
    })
    .to(modalContentRef.current, {
      scale: 0.7,
      y: 50,
      duration: 0.3,
      ease: "back.in(1.7)"
    }, "-=0.1")
    .to(modalRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in"
    }, "-=0.1")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Add submit animation
    gsap.to(modalContentRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    })
    
    // Here you would handle the form submission
    console.log('Form submitted!')
    
    // Close modal after submission
    setTimeout(() => {
      closeModal()
    }, 500)
  }

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
        {/* Floating decorations */}
        <FloatingDecorations variant="hero" density="medium" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 ref={titleRef} className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Siap untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Elevate</span> Perjalanan Akademik Anda?
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Bergabunglah dengan ribuan mahasiswa dan peneliti yang telah merasakan transformasi akademik bersama Elevate Academia.
            </p>
            
            <button
              ref={buttonRef}
              onClick={openModal}
              className="group relative inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Button background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 text-2xl group-hover:animate-bounce">📞</span>
                <span>Hubungi Kami Sekarang</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
              
              {/* Floating sparkles */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60 group-hover:animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full opacity-40 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          ref={modalRef}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === modalRef.current && closeModal()}
        >
          <div 
            ref={modalContentRef}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-gray-600 text-xl">×</span>
            </button>

            {/* Modal header */}
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Mari Berkolaborasi!
              </h3>
              <p className="text-gray-600">
                Ceritakan kebutuhan akademik Anda dan biarkan kami membantu mencapai kesuksesan bersama.
              </p>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div ref={el => { formFieldsRef.current[0] = el }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div ref={el => { formFieldsRef.current[1] = el }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div ref={el => { formFieldsRef.current[2] = el }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="0812-3456-7890"
                />
              </div>

              <div ref={el => { formFieldsRef.current[3] = el }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jenis Layanan *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Pilih layanan yang Anda butuhkan</option>
                  <option value="skripsi">Bimbingan Penulisan Skripsi</option>
                  <option value="jurnal">Publikasi Jurnal Ilmiah</option>
                  <option value="artikel">Penulisan Artikel</option>
                  <option value="workshop">Workshop Akademik</option>
                  <option value="konsultasi">Konsultasi Penelitian</option>
                  <option value="mentoring">Mentoring Personal</option>
                </select>
              </div>

              <div ref={el => { formFieldsRef.current[4] = el }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Ceritakan kebutuhan akademik Anda secara detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
} 