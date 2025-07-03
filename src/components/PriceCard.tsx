'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface PriceCardProps {
  pkg: {
    name: string
    price: string
    originalPrice?: string
    duration: { id: string; en: string }
    features: { id: string[]; en: string[] }
    popular?: boolean
  }
  index: number
}

export default function PriceCard({ pkg, index }: PriceCardProps) {
  const { language } = useLanguage()
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg border-2 h-full flex flex-col ${
        pkg.popular ? 'border-blue-500' : 'border-transparent'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Populer
          </span>
        </div>
      )}

      <div className="p-8 pt-12 flex flex-col flex-grow">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
          <div className="flex items-baseline justify-center mb-2">
            {pkg.originalPrice && (
              <span className="text-base text-gray-500 line-through mr-2">
                {pkg.originalPrice}
              </span>
            )}
            <span className="text-4xl font-bold text-gray-900 break-words">
              {pkg.price}
            </span>
          </div>
          <div className="text-base text-gray-600">{pkg.duration[language as keyof typeof pkg.duration]}</div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {pkg.features[language as keyof typeof pkg.features].map((feature, featureIdx) => (
            <li key={featureIdx} className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="https://wa.me/6283121451587"
          className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-base mt-auto ${
            pkg.popular
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
              : 'border-2 border-blue-200 text-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white'
          }`}
        >
          Pilih Paket
        </Link>
      </div>
    </div>
  )
}
