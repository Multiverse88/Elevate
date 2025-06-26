'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/profile' },
    { name: 'SERVICES', href: '/layanan' },
    { name: 'ARTICLES', href: '/artikel' },
    { name: 'CONTACT', href: '/kontak' },
  ]

  return (
    <nav className="bg-slate-100/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                  <Image 
                    src="/images/logos/Logo Elevate.png" 
                    alt="Elevate Academia" 
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-800 leading-tight">
                  ELEVATE
                </span>
                <span className="text-xs font-medium text-slate-600 leading-tight -mt-1">
                  ACADEMIA
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-slate-600 hover:text-slate-800 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User Icon */}
            <button className="p-2 text-slate-600 hover:text-slate-800 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Consultation Button */}
            <Link
              href="/kontak"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
            >
              Free Consultation
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-800 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200/50">
                <Link
                  href="/kontak"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 