import HeroSection from '@/components/HeroSection'
import ClientServicesSection from '@/components/client-wrappers/ClientServicesSection'
import ClientCategoriesSection from '@/components/client-wrappers/ClientCategoriesSection'
import ClientAboutUsSection from '@/components/client-wrappers/ClientAboutUsSection'
import ClientCoachingSection from '@/components/client-wrappers/ClientCoachingSection'
import ClientContactSection from '@/components/client-wrappers/ClientContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClientServicesSection />
      <ClientCategoriesSection />
      <ClientAboutUsSection />
      <ClientCoachingSection />
      <ClientContactSection />
    </div>
  )
}