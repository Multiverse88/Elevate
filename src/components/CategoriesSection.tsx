'use client'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CategoriesSection() {
  const { t } = useLanguage()

  const categories = [
    { 
      title: t('categories.skripsi'), 
      icon: '📝',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50',
      iconBg: 'bg-gradient-to-br from-blue-100 to-purple-100',
      textColor: 'text-blue-700'
    },
    { 
      title: t('categories.jurnal'), 
      icon: '📄',
      bgColor: 'bg-gradient-to-br from-green-50 to-blue-50',
      iconBg: 'bg-gradient-to-br from-green-100 to-blue-100',
      textColor: 'text-green-700'
    },
    { 
      title: t('categories.artikel'), 
      icon: '✍️',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100',
      textColor: 'text-purple-700'
    },
    { 
      title: t('categories.workshop'), 
      icon: '🎓',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      iconBg: 'bg-gradient-to-br from-orange-100 to-red-100',
      textColor: 'text-orange-700'
    },
    { 
      title: t('categories.konsultasi'), 
      icon: '🔬',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50',
      iconBg: 'bg-gradient-to-br from-indigo-100 to-blue-100',
      textColor: 'text-indigo-700'
    },
    { 
      title: t('categories.mentoring'), 
      icon: '👨‍🏫',
      bgColor: 'bg-gradient-to-br from-teal-50 to-green-50',
      iconBg: 'bg-gradient-to-br from-teal-100 to-green-100',
      textColor: 'text-teal-700'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-5"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-blue-200 mb-6">
            <span className="mr-2">📚</span>
            {t('categories.badge')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('categories.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            {t('categories.subtitle')}
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105">
            {t('categories.all')} →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div 
              key={idx} 
              className={`${category.bgColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer border border-white shadow-lg hover:shadow-xl group`}
            >
              <div className={`${category.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{category.icon}</span>
              </div>
              <h3 className={`text-xl font-bold text-center ${category.textColor} group-hover:text-gray-900 transition-colors duration-300`}>
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 