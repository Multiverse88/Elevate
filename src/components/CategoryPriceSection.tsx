'use client'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import PriceCard from '@/components/PriceCard'

interface CategoryPriceSectionProps {
  categoryData: {
    title: { id: string; en: string }
    icon: string
    packages: {
      name: string
      price: string
      originalPrice?: string
      duration: { id: string; en: string }
      features: { id: string[]; en: string[] }
      popular?: boolean
    }[]
  }
  isFiltered: boolean
}

export default function CategoryPriceSection({ categoryData, isFiltered }: CategoryPriceSectionProps) {
  const containerRef = useRef(null)
  const { language } = useLanguage()

  return (
    <div ref={containerRef} className={`mb-12 sm:mb-16 ${!isFiltered ? 'border-b border-gray-200 pb-12 sm:pb-16' : ''}`}>
      {!isFiltered && (
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 px-4">
            <span className="mr-2 sm:mr-3">{categoryData.icon}</span>
            {categoryData.title[language as keyof typeof categoryData.title]}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 [transform-style:preserve-3d]">
        {categoryData.packages.map((pkg, idx) => {
          return (
            <div
              key={idx}
              className="relative"
            >
              <PriceCard pkg={pkg} index={idx} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
