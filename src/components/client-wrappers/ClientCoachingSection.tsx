'use client'

import dynamic from 'next/dynamic'
import CoachingSection from '@/components/CoachingSection'

const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-20 min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const ClientCoachingSection = dynamic(() => Promise.resolve(CoachingSection), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

export default ClientCoachingSection
