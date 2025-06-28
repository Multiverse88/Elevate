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
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-blue-200 mb-6">
            <span className="mr-2">💰</span>
            Daftar Harga
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {category ? `Daftar Harga - ${priceData[category as keyof typeof priceData]?.title}` : 'Daftar Harga Layanan'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Pilih paket yang sesuai dengan kebutuhan akademik Anda
          </p>
          {category && (
            <Link href="/harga" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              ← Semua Layanan
            </Link>
          )}
        </div>

        {!category && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => {
              const categoryData = priceData[cat as keyof typeof priceData]
              return (
                <Link
                  key={cat}
                  href={`/harga?category=${cat}`}
                  className="bg-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <span className="mr-2">{categoryData.icon}</span>
                  {categoryData.title}
                </Link>
              )
            })}
          </div>
        )}

        {filteredCategories.map((cat) => {
          const categoryData = priceData[cat as keyof typeof priceData]
          
          return (
            <div key={cat} className={`mb-16 ${!category ? 'border-b border-gray-200 pb-16' : ''}`}>
              {!category && (
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <span className="mr-3">{categoryData.icon}</span>
                    {categoryData.title}
                  </h2>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categoryData.packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                          Populer
                        </span>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                        <div className="text-gray-600">{pkg.duration}</div>
                      </div>
                      
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="https://wa.me/6283121451587"
                        className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
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

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Butuh Konsultasi Khusus?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan akademik Anda
            </p>
            <Link
              href="https://wa.me/6283121451587"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
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
    <Suspense fallback={<div>Loading...</div>}>
      <PriceListContent />
    </Suspense>
  )
} 