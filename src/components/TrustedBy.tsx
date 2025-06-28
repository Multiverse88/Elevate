'use client'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TrustedBy() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-blue-200 mb-6">
            <span className="mr-2">🤝</span>
            {t('trusted.badge')}
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('trusted.subtitle')}
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {/* Placeholder logos - you can replace these with actual institution logos */}
          {[...Array(6)].map((_, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div className="text-xs font-medium text-gray-600">
                  {t('trusted.all')} {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 