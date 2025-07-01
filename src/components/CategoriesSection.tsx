'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CategoriesSection() {
  const { t } = useLanguage()

  const categories = [
    { 
      id: 'skripsi',
      title: t('categories.skripsi'), 
      icon: '📝',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50',
      iconBg: 'bg-gradient-to-br from-blue-100 to-purple-100',
      textColor: 'text-blue-700'
    },
    { 
      id: 'publikasi-jurnal',
      title: t('categories.publikasiJurnal'), 
      icon: '📄',
      bgColor: 'bg-gradient-to-br from-green-50 to-blue-50',
      iconBg: 'bg-gradient-to-br from-green-100 to-blue-100',
      textColor: 'text-green-700'
    },
    { 
      id: 'penulisan-artikel-sinta',
      title: t('categories.penulisanArtikelSinta'), 
      icon: '✍️',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100',
      textColor: 'text-purple-700'
    },
    { 
      id: 'workshop',
      title: t('categories.workshop'), 
      icon: '🎓',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      iconBg: 'bg-gradient-to-br from-orange-100 to-red-100',
      textColor: 'text-orange-700'
    },
    { 
      id: 'konsultasi',
      title: t('categories.konsultasi'), 
      icon: '🔬',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50',
      iconBg: 'bg-gradient-to-br from-indigo-100 to-blue-100',
      textColor: 'text-indigo-700'
    },
    { 
      id: 'mentoring',
      title: t('categories.mentoring'), 
      icon: '👨‍🏫',
      bgColor: 'bg-gradient-to-br from-teal-50 to-green-50',
      iconBg: 'bg-gradient-to-br from-teal-100 to-green-100',
      textColor: 'text-teal-700'
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-5"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-40 w-8 sm:w-16 h-8 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-blue-200 mb-4 sm:mb-6">
            <span className="mr-1 sm:mr-2">📚</span>
            {t('categories.badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            {t('categories.title')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            {t('categories.subtitle')}
          </p>
          <Link href="/harga" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105 text-sm sm:text-base">
            {t('categories.all')} →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, idx) => (
            <Link 
              key={idx}
              href={`/harga?category=${category.id}`}
              className={`${category.bgColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 cursor-pointer border border-white shadow-lg hover:shadow-xl group block mx-2 sm:mx-0`}
            >
              <div className={`${category.iconBg} w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl sm:text-3xl">{category.icon}</span>
              </div>
              <h3 className={`text-lg sm:text-xl font-bold text-center ${category.textColor} group-hover:text-gray-900 transition-colors duration-300`}>
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 