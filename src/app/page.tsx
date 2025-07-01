import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutUsSection from '@/components/AboutUsSection'
import CategoriesSection from '@/components/CategoriesSection'
import CoachingSection from '@/components/CoachingSection'
import dynamic from 'next/dynamic'

const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CategoriesSection />
      <AboutUsSection />
      <CoachingSection />
      <ContactSection />
    </div>
  )
} 