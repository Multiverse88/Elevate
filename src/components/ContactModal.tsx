'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '@/contexts/LanguageContext'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)
  const formFieldsRef = useRef<(HTMLDivElement | null)[]>([])
  const { t } = useLanguage()

  const openModalAnimation = () => {
    if (!modalRef.current || !modalContentRef.current || formFieldsRef.current.some(f => !f)) return;
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

  const closeModalAnimation = () => {
    if (!modalRef.current || !modalContentRef.current || formFieldsRef.current.some(f => !f)) {
      onClose();
      return;
    }
    const tl = gsap.timeline({
      onComplete: () => {
        onClose()
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

  useEffect(() => {
    if (isOpen) {
      openModalAnimation()
    } else {
      closeModalAnimation()
    }
  }, [isOpen])

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
      closeModalAnimation()
    }, 500)
  }

  if (!isOpen && modalRef.current && parseFloat(gsap.getProperty(modalRef.current, "opacity").toString()) === 0) {
    return null; // Don't render if not open and fully transparent
  }

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === modalRef.current && closeModalAnimation()}
      style={{ opacity: 0, visibility: 'hidden' }}
    >
      <div 
        ref={modalContentRef}
        className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModalAnimation}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <span className="text-gray-600 text-xl">×</span>
        </button>

        {/* Modal header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {t('contact.modal.title')}
          </h3>
          <p className="text-gray-600">
            {t('contact.modal.subtitle')}
          </p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={el => { formFieldsRef.current[0] = el }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder={t('contact.form.placeholder.name')}
              />
            </div>

            <div ref={el => { formFieldsRef.current[1] = el }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder={t('contact.form.placeholder.email')}
              />
            </div>
          </div>

          <div ref={el => { formFieldsRef.current[2] = el }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder={t('contact.form.placeholder.phone')}
            />
          </div>

          <div ref={el => { formFieldsRef.current[3] = el }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.form.service')}
            </label>
            <select
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">{t('contact.form.placeholder.service')}</option>
              <option value="skripsi">{t('categories.skripsi')}</option>
              <option value="jurnal">{t('categories.jurnal')}</option>
              <option value="artikel">{t('categories.artikel')}</option>
              <option value="workshop">{t('categories.workshop')}</option>
              <option value="konsultasi">{t('categories.konsultasi')}</option>
              <option value="mentoring">{t('categories.mentoring')}</option>
            </select>
          </div>

          <div ref={el => { formFieldsRef.current[4] = el }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder={t('contact.form.placeholder.message')}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105"
          >
            {t('contact.form.submit')}
          </button>
        </form>
      </div>
    </div>
  )
}
