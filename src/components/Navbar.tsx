'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const navRef = useRef<HTMLElement>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Start animation when menu opens and prevent body scroll
  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => setIsAnimating(true), 10) // Small delay for CSS transition
      document.body.style.overflow = 'hidden' // Prevent body scroll
    } else {
      setIsAnimating(false) // Reset animation state when closed
      document.body.style.overflow = 'unset' // Restore body scroll
    }
    
    return () => {
      document.body.style.overflow = 'unset' // Cleanup on unmount
    }
  }, [isMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu()
  }, [])

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.profile'), href: '/profile' },
    { name: t('nav.services'), href: '/layanan' },
    { name: t('nav.articles'), href: '/artikel' },
    { name: t('nav.contact'), href: '/kontak' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  const openMenu = () => {
    setIsMenuOpen(true)
    // Animation will be triggered by useEffect
  }

  const closeMenu = () => {
    setIsAnimating(false)
    setTimeout(() => setIsMenuOpen(false), 300) // Wait for animation to complete
  }

  return (
    <nav ref={navRef} className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Image 
                    src="/images/logos/1.png" 
                    alt="Elevate Academia" 
                    width={24}
                    height={24}
                    className="sm:w-7 sm:h-7 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  ELEVATE
                </span>
                <span className="text-xs font-medium text-gray-600 leading-tight -mt-1">
                  ACADEMIA
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Language Toggle Button - More compact on mobile */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-200 border border-blue-200"
            >
              <span className="text-sm font-medium text-blue-700">
                {language === 'id' ? '🇮🇩 ID' : '🇺🇸 EN'}
              </span>
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>

            {/* Compact Language Toggle for Mobile */}
            <button
              onClick={toggleLanguage}
              className="sm:hidden flex items-center px-2 py-1 rounded-md bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
            >
              <span className="text-xs font-medium text-blue-700">
                {language === 'id' ? '🇮🇩' : '🇺🇸'}
              </span>
            </button>

            {/* Search Icon - Hidden on mobile */}
            <button className="hidden lg:block p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User Icon - Hidden on mobile */}
            <button className="hidden lg:block p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Consultation Button - Responsive sizing */}
            <Link
              href="/kontak"
              className="hidden sm:inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="hidden lg:inline">{t('nav.consultation')}</span>
              <span className="lg:hidden">Konsultasi</span>
            </Link>

            {/* Mobile Consultation Button - Compact */}
            <Link
              href="/kontak"
              className="sm:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-md text-xs font-medium"
            >
              Chat
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => isMenuOpen ? closeMenu() : openMenu()}
              className="md:hidden p-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Popup */}
        {isMenuOpen && (
          <>
            {/* Mobile menu backdrop */}
            <div 
              className={`fixed inset-0 bg-black/20 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
                isAnimating ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={closeMenu}
            />
            
            {/* Mobile Popup Menu */}
            <div className="fixed inset-x-4 top-20 z-50 md:hidden">
              <div className={`bg-white rounded-2xl shadow-2xl border border-gray-200/50 backdrop-blur-sm transform transition-all duration-300 ${
                isAnimating ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4'
              }`}>
                {/* Popup Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📚</span>
                    </div>
                    <span className="font-bold text-gray-900">Menu</span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="px-6 py-4">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                        onClick={closeMenu}
                      >
                        <span className="flex-1">{item.name}</span>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-4 border-t border-gray-200/50"></div>

                  {/* Additional Actions */}
                  <div className="space-y-1">
                    {/* Search */}
                    <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="flex-1 text-left">Pencarian</span>
                    </button>
                    
                    {/* Profile */}
                    <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="flex-1 text-left">Profil Saya</span>
                    </button>
                    
                    {/* Language Toggle */}
                                         <button
                       onClick={() => {
                         toggleLanguage()
                         closeMenu()
                       }}
                       className="flex items-center w-full px-4 py-3 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 hover:from-blue-100 hover:to-purple-100 rounded-xl transition-all duration-200 border border-blue-200"
                     >
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      <span className="flex-1 text-left">
                        {language === 'id' ? '🇮🇩 Bahasa Indonesia' : '🇺🇸 English'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-b-2xl">
                  <Link
                    href="/kontak"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg transform hover:scale-105"
                                         onClick={closeMenu}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {t('nav.consultation')}
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
} 