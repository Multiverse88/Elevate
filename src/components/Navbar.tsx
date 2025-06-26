import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-medium-blue to-brand-light-blue rounded-lg flex items-center justify-center mr-2">
                  <img src="/images/logos/Logo Elevate.png" alt="Elevate" className='rounded-lg w-15 h-15'/>
                </div>
                <span className="text-xl font-bold text-brand-dark-navy font-applebold">Elevate</span>
              </div>
            </Link>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-brand-dark-navy hover:text-brand-medium-blue font-medium transition-colors font-barlow-bold">
              Home
            </Link>
            <Link href="/layanan" className="text-brand-dark-navy hover:text-brand-medium-blue font-medium transition-colors font-barlow-bold">
              Services
            </Link>
            <Link href="/artikel" className="text-brand-dark-navy hover:text-brand-medium-blue font-medium transition-colors font-barlow-bold">
              Articles
            </Link>
            <Link href="/profile" className="text-brand-dark-navy hover:text-brand-medium-blue font-medium transition-colors font-barlow-bold">
              About
            </Link>
            <Link href="/kontak" className="text-brand-dark-navy hover:text-brand-medium-blue font-medium transition-colors font-barlow-bold">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link href="/kontak" className="bg-brand-medium-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-dark-navy transition-colors font-barlow-bold">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 