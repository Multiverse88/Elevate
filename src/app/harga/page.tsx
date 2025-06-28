'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function PriceListContent() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const priceData = {
    skripsi: {
      title: 'Penulisan Skripsi',
      icon: '📝',
      packages: [
        { name: 'Basic', price: 'Rp 2,500,000', duration: '3 bulan', features: ['Konsultasi dasar', 'Review outline', 'Email support'] },
        { name: 'Premium', price: 'Rp 4,500,000', duration: '6 bulan', features: ['Bimbingan lengkap', 'Meeting mingguan', 'Priority support'], popular: true },
        { name: 'Professional', price: 'Rp 7,000,000', duration: '12 bulan', features: ['Dukungan penuh', 'Mentor personal', 'Unlimited revision'] }
      ]
    },
    jurnal: {
      title: 'Publikasi Jurnal',
      icon: '📄',
      packages: [
        { name: 'Basic', price: 'Rp 1,500,000', duration: '4 minggu', features: ['Review manuskrip', 'Basic editing', 'Format guidance'] },
        { name: 'Premium', price: 'Rp 3,000,000', duration: '8 minggu', features: ['Full editing', 'Journal targeting', 'Submission support'], popular: true },
        { name: 'Professional', price: 'Rp 5,000,000', duration: '6 bulan', features: ['End-to-end support', 'Multiple submissions', 'Expert reviewer'] }
      ]
    },
    artikel: {
      title: 'Penulisan Artikel',
      icon: '✍️',
      packages: [
        { name: 'Basic', price: 'Rp 800,000', duration: '2 minggu', features: ['Konsultasi topik', 'Structure guidance', 'Basic review'] },
        { name: 'Premium', price: 'Rp 1,500,000', duration: '4 minggu', features: ['Complete writing', 'Research assistance', 'Quality editing'], popular: true },
        { name: 'Professional', price: 'Rp 2,500,000', duration: '6 minggu', features: ['Expert writing', 'Original research', 'Publication ready'] }
      ]
    },
    workshop: {
      title: 'Workshop Akademik',
      icon: '🎓',
      packages: [
        { name: 'Basic', price: 'Rp 500,000', duration: '4 jam', features: ['Basic workshop', 'Materials', 'Certificate'] },
        { name: 'Premium', price: 'Rp 1,200,000', duration: '2 hari', features: ['Intensive workshop', 'Practical exercises', 'Personal feedback'], popular: true },
        { name: 'Professional', price: 'Rp 2,000,000', duration: '1 minggu', features: ['Custom workshop', 'Expert trainers', 'Advanced materials'] }
      ]
    },
    konsultasi: {
      title: 'Konsultasi Penelitian',
      icon: '🔬',
      packages: [
        { name: 'Basic', price: 'Rp 300,000', duration: '1 jam', features: ['One hour consult', 'Problem analysis', 'Basic guidance'] },
        { name: 'Premium', price: 'Rp 1,000,000', duration: '4 minggu', features: ['Multi session', 'Detailed analysis', 'Custom solution'], popular: true },
        { name: 'Professional', price: 'Rp 2,500,000', duration: '3 bulan', features: ['Dedicated consultant', 'Comprehensive analysis', 'Implementation support'] }
      ]
    },
    mentoring: {
      title: 'Mentoring Personal',
      icon: '👨‍🏫',
      packages: [
        { name: 'Basic', price: 'Rp 1,200,000', duration: '2 bulan', features: ['Biweekly meeting', 'Goal setting', 'Progress review'] },
        { name: 'Premium', price: 'Rp 2,800,000', duration: '6 bulan', features: ['Weekly meeting', 'Personalized plan', 'Skill development'], popular: true },
        { name: 'Professional', price: 'Rp 5,000,000', duration: '12 bulan', features: ['Dedicated mentor', 'Comprehensive development', 'Industry insights'] }
      ]
    }
  }

  const categories = Object.keys(priceData)
  const filteredCategories = category ? [category] : categories

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-blue-200 mb-4 sm:mb-6">
            <span className="mr-2">💰</span>
            Daftar Harga
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            {category ? `Daftar Harga - ${priceData[category as keyof typeof priceData]?.title}` : 'Daftar Harga Layanan'}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Pilih paket yang sesuai dengan kebutuhan akademik Anda
          </p>
          {category && (
            <Link href="/harga" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
              ← Semua Layanan
            </Link>
          )}
        </div>

        {!category && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-2">
            {categories.map((cat) => {
              const categoryData = priceData[cat as keyof typeof priceData]
              return (
                <Link
                  key={cat}
                  href={`/harga?category=${cat}`}
                  className="bg-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:shadow-lg transition-all duration-300 border border-gray-200 text-sm sm:text-base whitespace-nowrap"
                >
                  <span className="mr-1 sm:mr-2">{categoryData.icon}</span>
                  <span className="hidden sm:inline">{categoryData.title}</span>
                  <span className="sm:hidden">{categoryData.title.split(' ')[0]}</span>
                </Link>
              )
            })}
          </div>
        )}

        {filteredCategories.map((cat) => {
          const categoryData = priceData[cat as keyof typeof priceData]
          
          return (
            <div key={cat} className={`mb-12 sm:mb-16 ${!category ? 'border-b border-gray-200 pb-12 sm:pb-16' : ''}`}>
              {!category && (
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 px-4">
                    <span className="mr-2 sm:mr-3">{categoryData.icon}</span>
                    {categoryData.title}
                  </h2>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {categoryData.packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mx-2 sm:mx-0 ${
                      pkg.popular ? 'ring-2 ring-blue-500 sm:scale-105' : ''
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                          Populer
                        </span>
                      </div>
                    )}
                    
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="text-center mb-6 sm:mb-8">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 break-words">{pkg.price}</div>
                        <div className="text-sm sm:text-base text-gray-600">{pkg.duration}</div>
                      </div>
                      
                      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        {pkg.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="https://wa.me/6283121451587"
                        className={`block w-full text-center py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                            : 'border-2 border-blue-200 text-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white'
                        }`}
                      >
                        Pilih Paket
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white mx-2 sm:mx-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Butuh Konsultasi Khusus?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan akademik Anda
            </p>
            <Link
              href="https://wa.me/6283121451587"
              className="inline-flex items-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Hubungi Kami →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Harga() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">Loading...</p>
        </div>
      </div>
    }>
      <PriceListContent />
    </Suspense>
  )
} 