'use client'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CoachingSection() {
  const { t } = useLanguage()

  const features = [
    { 
      title: t('coaching.feature1.title'), 
      desc: t('coaching.feature1.desc'),
      icon: '👨‍🏫'
    },
    { 
      title: t('coaching.feature2.title'), 
      desc: t('coaching.feature2.desc'),
      icon: '🏆'
    },
    { 
      title: t('coaching.feature3.title'), 
      desc: t('coaching.feature3.desc'),
      icon: '🧠'
    },
    { 
      title: t('coaching.feature4.title'), 
      desc: t('coaching.feature4.desc'),
      icon: '🎥'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-5"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main circular background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform scale-110 opacity-20"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-gray-100 to-white rounded-full opacity-80"></div>
              
              {/* Coach image */}
              <div className="relative z-20 flex justify-center items-center">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl p-4">
                    <div>
                      <Image src="/images/mentor3d.png" alt="Coach" width={500} height={500} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-blue-200">
              <span className="mr-2">🎯</span>
              {t('coaching.badge')}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('coaching.title')}
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('coaching.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105">
              {t('coaching.learn')} →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 