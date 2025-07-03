'use client'

import dynamic from 'next/dynamic'
import CategoriesSection from '@/components/CategoriesSection'

const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-20 min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const ClientCategoriesSection = dynamic(() => Promise.resolve(CategoriesSection), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

export default ClientCategoriesSection
