import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutUsSection from '@/components/AboutUsSection'
import CategoriesSection from '@/components/CategoriesSection'
import CoachingSection from '@/components/CoachingSection'
import ContactSection from '@/components/ContactSection'

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