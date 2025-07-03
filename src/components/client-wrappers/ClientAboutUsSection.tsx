'use client'

import dynamic from 'next/dynamic'
import AboutUsSection from '@/components/AboutUsSection'

const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-20 min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const ClientAboutUsSection = dynamic(() => Promise.resolve(AboutUsSection), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

export default ClientAboutUsSection
