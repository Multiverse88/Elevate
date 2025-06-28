'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionary
const translations = {
  id: {
    // Navbar
    'nav.home': 'BERANDA',
    'nav.profile': 'PROFILE',
    'nav.services': 'LAYANAN',
    'nav.articles': 'ARTIKEL',
    'nav.contact': 'KONTAK',
    'nav.consultation': 'Konsultasi Gratis',
    
    // Hero Section
    'hero.badge': 'Platform Akademik Terdepan',
    'hero.title': 'Tingkatkan Prestasi Akademik Bersama Para Ahli',
    'hero.subtitle': 'Elevate Academia membantu mahasiswa, peneliti, dan akademisi mencapai kesuksesan melalui bimbingan profesional, mentoring personal, dan dukungan publikasi ilmiah berkualitas tinggi.',
    'hero.explore': 'JELAJAHI LAYANAN',
    'hero.question': 'Ada Pertanyaan?',
    'hero.stats.clients': 'Total Klien',
    'hero.stats.publications': 'Publikasi Berhasil',
    
    // Services Section
    'services.title': 'Jelajahi Layanan Kami',
    'services.writing': 'Bimbingan Penulisan Naskah',
    'services.writing.desc': 'Skripsi, artikel jurnal, esai, disertasi, dll.',
    'services.publication': 'Pendampingan Publikasi Ilmiah',
    'services.publication.desc': 'Submit & revisi untuk SINTA, Scopus, WoS.',
    'services.workshop': 'Event Organizer Workshop Akademik',
    'services.workshop.desc': 'Webinar, kuliah tamu, pelatihan menulis, dll.',
    
    // Categories Section
    'categories.badge': 'Layanan Kami',
    'categories.title': 'Jelajahi Kategori Layanan',
    'categories.subtitle': 'Kami menyediakan berbagai layanan akademik berkualitas tinggi untuk membantu Anda mencapai kesuksesan dalam perjalanan pendidikan dan penelitian.',
    'categories.all': 'Semua Layanan',
    'categories.skripsi': 'Penulisan Skripsi',
    'categories.jurnal': 'Publikasi Jurnal',
    'categories.artikel': 'Penulisan Artikel',
    'categories.workshop': 'Workshop Akademik',
    'categories.konsultasi': 'Konsultasi Penelitian',
    'categories.mentoring': 'Mentoring Personal',
    
    // About Section
    'about.badge': 'Tentang Kami',
    'about.title': 'Tentang Elevate Academia',
    'about.subtitle': 'Elevate Academia adalah platform terdepan yang berkomitmen membantu akademisi, mahasiswa, dan peneliti dalam mencapai kesuksesan akademik. Dengan tim mentor berpengalaman dan metodologi terbukti, kami telah membantu ribuan individu meraih prestasi terbaik mereka.',
    'about.stats.clients': 'Klien Puas',
    'about.stats.mentors': 'Mentor Ahli',
    'about.stats.publications': 'Publikasi',
    'about.stats.success': 'Tingkat Sukses',
    'about.mission.title': 'Misi Kami',
    'about.mission.text': 'Memberdayakan setiap individu untuk mencapai potensi akademik tertinggi mereka melalui bimbingan berkualitas, mentoring personal, dan dukungan berkelanjutan dalam perjalanan pendidikan mereka.',
    
    // Coaching Section
    'coaching.badge': 'Tentang Kami',
    'coaching.title': 'Kami Menyediakan Bimbingan oleh Mentor Ahli',
    'coaching.subtitle': 'Elevate Academia menghadirkan tim mentor berpengalaman yang siap membantu Anda mencapai kesuksesan akademik. Dengan metodologi yang terbukti efektif dan pendekatan personal, kami memastikan setiap klien mendapatkan bimbingan terbaik sesuai kebutuhan mereka.',
    'coaching.feature1.title': 'Mentor Berpengalaman',
    'coaching.feature1.desc': 'Tim mentor kami adalah ahli di bidang masing-masing dengan pengalaman akademik yang luas.',
    'coaching.feature2.title': 'Sertifikasi Profesional',
    'coaching.feature2.desc': 'Dapatkan sertifikasi dan pengakuan profesional dari mentor berpengalaman.',
    'coaching.feature3.title': 'Metode Kreatif',
    'coaching.feature3.desc': 'Kembangkan kemampuan kreatif Anda dengan metode pembelajaran yang unik dan efektif.',
    'coaching.feature4.title': 'Konsultasi Fleksibel',
    'coaching.feature4.desc': 'Akses konsultasi dan bimbingan kapan saja, di mana saja sesuai kebutuhan Anda.',
    'coaching.learn': 'Pelajari Lebih Lanjut',
    
    // Contact Section
    'contact.title': 'Siap untuk Elevate Perjalanan Akademik Anda?',
    'contact.subtitle': 'Bergabunglah dengan ribuan mahasiswa dan peneliti yang telah merasakan transformasi akademik bersama Elevate Academia.',
    'contact.button': 'Hubungi Kami Sekarang',
    'contact.modal.title': 'Mari Berkolaborasi!',
    'contact.modal.subtitle': 'Ceritakan kebutuhan akademik Anda dan biarkan kami membantu mencapai kesuksesan bersama.',
    'contact.form.name': 'Nama Lengkap *',
    'contact.form.email': 'Email *',
    'contact.form.phone': 'Nomor Telepon',
    'contact.form.service': 'Jenis Layanan *',
    'contact.form.message': 'Pesan *',
    'contact.form.submit': 'Kirim Pesan',
    'contact.form.placeholder.name': 'Masukkan nama lengkap Anda',
    'contact.form.placeholder.email': 'email@example.com',
    'contact.form.placeholder.phone': '0812-3456-7890',
    'contact.form.placeholder.service': 'Pilih layanan yang Anda butuhkan',
    'contact.form.placeholder.message': 'Ceritakan kebutuhan akademik Anda secara detail...',
    
    // Footer
    'footer.description': 'Solusi Profesional untuk Naskah dan Publikasi Ilmiah. Kami berkomitmen membantu Anda mencapai kesuksesan akademik.',
    'footer.quickLinks': 'Tautan Cepat',
    'footer.contact': 'Kontak Kami',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Dapatkan informasi terbaru tentang layanan akademik dan tips menulis ilmiah.',
    'footer.newsletter.placeholder': 'Email Anda',
    'footer.copyright': 'Elevate Academia. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    
    // Trusted By Section
    'trusted.badge': 'Dipercaya Oleh',
    'trusted.subtitle': 'Dipercaya oleh ribuan mahasiswa dan institusi pendidikan terkemuka di Indonesia',
    'trusted.all': 'Semua Layanan',
  },
  en: {
    // Navbar
    'nav.home': 'HOME',
    'nav.profile': 'PROFILE',
    'nav.services': 'SERVICES',
    'nav.articles': 'ARTICLES',
    'nav.contact': 'CONTACT',
    'nav.consultation': 'Free Consultation',
    
    // Hero Section
    'hero.badge': 'Leading Academic Platform',
    'hero.title': 'Enhance Academic Achievement with Experts',
    'hero.subtitle': 'Elevate Academia helps students, researchers, and academics achieve success through professional guidance, personal mentoring, and high-quality academic publication support.',
    'hero.explore': 'EXPLORE SERVICES',
    'hero.question': 'Have Questions?',
    'hero.stats.clients': 'Total Clients',
    'hero.stats.publications': 'Successful Publications',
    
    // Services Section
    'services.title': 'Explore Our Services',
    'services.writing': 'Academic Writing Guidance',
    'services.writing.desc': 'Thesis, journal articles, essays, dissertations, etc.',
    'services.publication': 'Academic Publication Support',
    'services.publication.desc': 'Submit & revise for SINTA, Scopus, WoS.',
    'services.workshop': 'Academic Workshop Event Organizer',
    'services.workshop.desc': 'Webinars, guest lectures, writing training, etc.',
    
    // Categories Section
    'categories.badge': 'Our Services',
    'categories.title': 'Explore Service Categories',
    'categories.subtitle': 'We provide various high-quality academic services to help you achieve success in your educational and research journey.',
    'categories.all': 'All Services',
    'categories.skripsi': 'Thesis Writing',
    'categories.jurnal': 'Journal Publication',
    'categories.artikel': 'Article Writing',
    'categories.workshop': 'Academic Workshop',
    'categories.konsultasi': 'Research Consultation',
    'categories.mentoring': 'Personal Mentoring',
    
    // About Section
    'about.badge': 'About Us',
    'about.title': 'About Elevate Academia',
    'about.subtitle': 'Elevate Academia is a leading platform committed to helping academics, students, and researchers achieve academic success. With experienced mentors and proven methodologies, we have helped thousands of individuals achieve their best performance.',
    'about.stats.clients': 'Happy Clients',
    'about.stats.mentors': 'Expert Mentors',
    'about.stats.publications': 'Publications',
    'about.stats.success': 'Success Rate',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'Empowering every individual to reach their highest academic potential through quality guidance, personal mentoring, and ongoing support in their educational journey.',
    
    // Coaching Section
    'coaching.badge': 'About Us',
    'coaching.title': 'We Provide Coaching by Expert Mentors',
    'coaching.subtitle': 'Elevate Academia presents a team of experienced mentors ready to help you achieve academic success. With proven effective methodologies and personal approaches, we ensure every client gets the best guidance according to their needs.',
    'coaching.feature1.title': 'Experienced Mentors',
    'coaching.feature1.desc': 'Our mentor team consists of experts in their respective fields with extensive academic experience.',
    'coaching.feature2.title': 'Professional Certification',
    'coaching.feature2.desc': 'Get professional certification and recognition from experienced mentors.',
    'coaching.feature3.title': 'Creative Methods',
    'coaching.feature3.desc': 'Develop your creative abilities with unique and effective learning methods.',
    'coaching.feature4.title': 'Flexible Consultation',
    'coaching.feature4.desc': 'Access consultation and guidance anytime, anywhere according to your needs.',
    'coaching.learn': 'Learn More',
    
    // Contact Section
    'contact.title': 'Ready to Elevate Your Academic Journey?',
    'contact.subtitle': 'Join thousands of students and researchers who have experienced academic transformation with Elevate Academia.',
    'contact.button': 'Contact Us Now',
    'contact.modal.title': 'Let\'s Collaborate!',
    'contact.modal.subtitle': 'Tell us about your academic needs and let us help you achieve success together.',
    'contact.form.name': 'Full Name *',
    'contact.form.email': 'Email *',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Service Type *',
    'contact.form.message': 'Message *',
    'contact.form.submit': 'Send Message',
    'contact.form.placeholder.name': 'Enter your full name',
    'contact.form.placeholder.email': 'email@example.com',
    'contact.form.placeholder.phone': '0812-3456-7890',
    'contact.form.placeholder.service': 'Select the service you need',
    'contact.form.placeholder.message': 'Tell us about your academic needs in detail...',
    
    // Footer
    'footer.description': 'Professional Solutions for Manuscripts and Academic Publications. We are committed to helping you achieve academic success.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Get the latest information about academic services and scientific writing tips.',
    'footer.newsletter.placeholder': 'Your Email',
    'footer.copyright': 'Elevate Academia. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    
    // Trusted By Section
    'trusted.badge': 'Trusted By',
    'trusted.subtitle': 'Trusted by thousands of students and leading educational institutions in Indonesia',
    'trusted.all': 'All Services',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 