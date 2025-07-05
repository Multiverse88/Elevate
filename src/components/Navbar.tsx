'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'
import { searchableItems } from '@/lib/searchData'
import dynamic from 'next/dynamic'
import AnimatedLink from './AnimatedLink'
import AnimatedLanguageToggle from './AnimatedLanguageToggle'

const ContactModal = dynamic(() => import('./ContactModal'), { ssr: false })

interface SearchResult {
  type: string;
  title: string;
  href: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const navRef = useRef<HTMLElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const searchResultsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Start animation when menu opens and prevent body scroll
  useEffect(() => {
    if (isMenuOpen || isContactModalOpen) {
      setTimeout(() => setIsAnimating(true), 10) // Small delay for CSS transition
      document.body.style.overflow = 'hidden' // Prevent body scroll
    } else {
      setIsAnimating(false) // Reset animation state when closed
      document.body.style.overflow = 'unset' // Restore body scroll
    }
    
    return () => {
      document.body.style.overflow = 'unset' // Cleanup on unmount
    }
  }, [isMenuOpen, isContactModalOpen])

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      closeMenu()
    }
    // In a real Next.js app, you'd listen to router events.
    // For this example, we'll just call it once on mount.
    handleRouteChange()
  }, [])

  // Animate search results dropdown
  useEffect(() => {
    if (searchQuery.length > 0 && searchResults.length > 0) {
      gsap.to(searchResultsRef.current, {
        opacity: 1,
        height: 'auto',
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(searchResultsRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [searchResults, searchQuery]);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.profile'), href: '/profile' },
    { name: t('nav.services'), href: '/harga' },
    { name: t('nav.articles'), href: '/artikel' },
    { name: t('nav.contact'), href: '/kontak' },
  ]



  const openMenu = () => {
    setIsMenuOpen(true)
    // Animation will be triggered by useEffect
  }

  const closeMenu = () => {
    setIsAnimating(false)
    setTimeout(() => setIsMenuOpen(false), 300) // Wait for animation to complete
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    searchTimeoutRef.current = setTimeout(() => {
      if (query.length >= 1) {
        const filtered = searchableItems.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
        setSearchResults(filtered)
      } else {
        setSearchResults([])
      }
    }, 300)
  }

  const handleSuggestionClick = (href: string) => {
    router.push(href)
    setSearchQuery('') // Clear search query
    setSearchResults([]) // Clear search results
    closeMenu()
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case 'page':
        return '📄' // Document icon
      case 'service':
        return '💡' // Lightbulb icon
      case 'article':
        return '✍️' // Writing hand icon
      default:
        return '🔍' // Default search icon
    }
  }

  return (
    <>
      <nav ref={navRef} className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <AnimatedLink href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Image 
                      src="/images/logos/Logo Elevate.png" 
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
              </AnimatedLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navigation.map((item) => (
                <AnimatedLink
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-200 group-hover:w-full"></span>
                </AnimatedLink>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              {/* Animated Language Toggle */}
              <div className="hidden sm:block">
                <AnimatedLanguageToggle />
              </div>
              <div className="sm:hidden">
                <AnimatedLanguageToggle compact />
              </div>

              {/* Search Bar */}
            <div className="relative flex-grow flex items-center mx-2 sm:mx-4 md:mx-6 lg:mx-8">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={t('nav.searchPlaceholder') || 'Search...'}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
                              <div ref={searchResultsRef} className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-50" style={{ opacity: 0, height: 0, overflow: 'hidden' }}>
                  {searchResults.map((result, index) => (
                    <AnimatedLink
                      key={index}
                      href={result.href}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800 group"
                      onClick={() => handleSuggestionClick(result.href)}
                    >
                      <span className="mr-2 text-base group-hover:animate-bounce">{getIconForType(result.type)}</span>
                      <span className="flex-1">{result.title}</span>
                      <span className="text-xs text-gray-500 ml-2">({result.type})</span>
                    </AnimatedLink>
                  ))}
                </div>
            </div>


              {/* Consultation Button - Responsive sizing */}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="hidden sm:inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="hidden lg:inline">{t('nav.consultation')}</span>
                <span className="lg:hidden">Konsultasi</span>
              </button>

              {/* Mobile Consultation Button - Compact */}
              <button
                onClick={() => {
                  setIsContactModalOpen(true)
                  closeMenu()
                }}
                className="sm:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-md text-xs font-medium"
              >
                Chat
              </button>

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
                        <AnimatedLink
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                          onClick={closeMenu}
                        >
                          <span className="flex-1">{item.name}</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </AnimatedLink>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="my-4 border-t border-gray-200/50"></div>

                    {/* Additional Actions */}
                    <div className="space-y-1">
                      
                      
                      {/* Profile */}
                      <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                        <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="flex-1 text-left">Profil Saya</span>
                      </button>
                      
                      {/* Language Toggle */}
                      <div className="px-4 py-3">
                        <AnimatedLanguageToggle />
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-b-2xl">
                    <button
                        onClick={() => {
                          setIsContactModalOpen(true)
                          closeMenu()
                        }}
                        className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg transform hover:scale-105"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {t('nav.consultation')}
                      </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}