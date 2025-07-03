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
    'nav.searchPlaceholder': 'Cari...',
    
    // Hero Section
    'hero.badge': 'Platform Akademik Terdepan',
    'hero.title': 'Tingkatkan Prestasi Akademik Bersama Para Ahli',
    'hero.subtitle': 'Elevate Academia membantu mahasiswa, peneliti, dan akademisi mencapai kesuksesan melalui bimbingan profesional, mentoring personal, dan dukungan publikasi ilmiah berkualitas tinggi.',
    'hero.explore': 'JELAJAHI LAYANAN',
    'hero.question': 'Ada Pertanyaan?',
    'hero.stats.clients': 'Total Klien',
    'hero.stats.publications': 'Publikasi Berhasil',
    
    // Services Section
    'services.title': 'Jelajahi Jenis Layanan Kami',
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
    'categories.publikasiJurnal': 'Publikasi Jurnal',
    'categories.penulisanArtikelSinta': 'Penulisan Artikel',
    'categories.workshop': 'Workshop Akademik',
    'categories.konsultasi': 'Konsultasi Penelitian',
    'categories.mentoring': 'Personal Mentoring',
    
    // About Section
    'about.badge': 'Tentang Kami',
    'about.title': 'Tentang Elevate Academia',
    'about.subtitle': 'Elevate Academia adalah platform yang mendukung akademisi, mahasiswa, dan peneliti untuk mencapai kesuksesan akademik. Dengan mentor berpengalaman dan metodologi yang terbukti, kami siap membantu Anda meraih prestasi terbaik..',
    'about.stats.clients': 'Klien Puas',
    'about.stats.mentors': 'Mentor Ahli',
    'about.stats.publications': 'Publikasi',
    'about.stats.success': 'Tingkat Sukses',
    'about.mission.title': 'Misi Kami',
    'about.mission.text': 'Memberdayakan setiap individu untuk mencapai potensi akademik tertinggi mereka melalui bimbingan berkualitas, mentoring personal, dan dukungan berkelanjutan dalam perjalanan pendidikan mereka.',
    
    // Coaching Section
    'coaching.badge': 'Mentori Kami',
    'coaching.title': 'Kami Menyediakan Mentoring Personal oleh Mentor Ahli',
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

    // Price Page
    'price.badge': 'Daftar Harga',
    'price.title': 'Daftar Harga Layanan',
    'price.subtitle': 'Pilih paket yang sesuai dengan kebutuhan akademik Anda',
    'price.allServices': 'Semua Layanan',
    'price.consultationTitle': 'Butuh Konsultasi Khusus?',
    'price.consultationSubtitle': 'Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan akademik Anda',
    'price.contactButton': 'Hubungi Kami →',
    'price.popular': 'Populer',
    'price.choosePackage': 'Pilih Paket',

    // Price Page - Skripsi
    'price.skripsi.title': 'Penulisan Skripsi',
    'price.skripsi.basic.duration': '3 bulan',
    'price.skripsi.basic.features.0': 'Konsultasi dasar',
    'price.skripsi.basic.features.1': 'Review outline',
    'price.skripsi.basic.features.2': 'Email support',
    'price.skripsi.premium.duration': '6 bulan',
    'price.skripsi.premium.features.0': 'Bimbingan lengkap',
    'price.skripsi.premium.features.1': 'Meeting mingguan',
    'price.skripsi.premium.features.2': 'Priority support',
    'price.skripsi.professional.duration': '12 bulan',
    'price.skripsi.professional.features.0': 'Dukungan penuh',
    'price.skripsi.professional.features.1': 'Mentor personal',
    'price.skripsi.professional.features.2': 'Unlimited revision',

    // Price Page - Publikasi Jurnal
    'price.publikasiJurnal.title': 'Publikasi Jurnal',
    'price.publikasiJurnal.variatif': 'Variatif',
    'price.publikasiJurnal.features.0': 'Garansi Jaminan 100% Terbit',
    'price.publikasiJurnal.features.1': 'Termasuk PJIR dan APC jurnal',
    'price.publikasiJurnal.features.2': 'Pembayaran 2x (DP 50%, sisa saat LoA terbit)',
    'price.publikasiJurnal.features.3': 'Editing Penyesuaian Template Jurnal',
    'price.publikasiJurnal.features.4': 'Review',
    'price.publikasiJurnal.features.5': 'Mendeley',
    'price.publikasiJurnal.features.6': 'Cek Turnitin',
    'price.publikasiJurnal.features.7': 'Proofreading',
    'price.publikasiJurnal.features.8': 'Translate',
    'price.publikasiJurnal.features.9': 'Revisi minor',
    'price.publikasiJurnal.features.10': 'Letter of Acceptance (LoA)',
    'price.publikasiJurnal.features.11': 'Sertifikat Author Index Nasional/International',
    'price.publikasiJurnal.features.12': 'Corespondent lengkap',
    'price.publikasiJurnal.features.13': 'Fast Respon, Ramah, and Friendly',
    'price.publikasiJurnal.features.14': 'Akun Ojs',
    'price.publikasiJurnal.features.15': 'Free Username dan Password',
    'price.publikasiJurnal.features.16': 'DOI Aktif',
    'price.publikasiJurnal.features.17': 'Publish/Terbit Jurnal Sesuai Issue',
    'price.publikasiJurnal.features.18': 'Full Issue',

    // Price Page - Penulisan Artikel SINTA
    'price.penulisanArtikelSinta.title': 'Penulisan Artikel Jurnal Nasional Terakreditasi SINTA',
    'price.penulisanArtikelSinta.features.0': 'Artikel ditulis dari awal',
    'price.penulisanArtikelSinta.features.1': 'Proofreading',
    'price.penulisanArtikelSinta.features.2': 'Proses submit',

    // Price Page - Workshop Akademik
    'price.workshop.title': 'Workshop Akademik',
    'price.workshop.basic.duration': '4 jam',
    'price.workshop.basic.features.0': 'Basic workshop',
    'price.workshop.basic.features.1': 'Materials',
    'price.workshop.basic.features.2': 'Certificate',
    'price.workshop.premium.duration': '2 hari',
    'price.workshop.premium.features.0': 'Intensive workshop',
    'price.workshop.premium.features.1': 'Practical exercises',
    'price.workshop.premium.features.2': 'Personal feedback',
    'price.workshop.professional.duration': '1 minggu',
    'price.workshop.professional.features.0': 'Custom workshop',
    'price.workshop.professional.features.1': 'Expert trainers',
    'price.workshop.professional.features.2': 'Advanced materials',

    // Price Page - Konsultasi Penelitian
    'price.konsultasi.title': 'Konsultasi Penelitian',
    'price.konsultasi.basic.duration': '1 jam',
    'price.konsultasi.basic.features.0': 'One hour consult',
    'price.konsultasi.basic.features.1': 'Problem analysis',
    'price.konsultasi.basic.features.2': 'Basic guidance',
    'price.konsultasi.premium.duration': '4 minggu',
    'price.konsultasi.premium.features.0': 'Multi session',
    'price.konsultasi.premium.features.1': 'Detailed analysis',
    'price.konsultasi.premium.features.2': 'Custom solution',
    'price.konsultasi.professional.duration': '3 bulan',
    'price.konsultasi.professional.features.0': 'Dedicated consultant',
    'price.konsultasi.professional.features.1': 'Comprehensive analysis',
    'price.konsultasi.professional.features.2': 'Implementation support',

    // Price Page - Mentoring Personal
    'price.mentoring.title': 'Mentoring Personal',
    'price.mentoring.basic.duration': '2 bulan',
    'price.mentoring.basic.features.0': 'Biweekly meeting',
    'price.mentoring.basic.features.1': 'Goal setting',
    'price.mentoring.basic.features.2': 'Progress review',
    'price.mentoring.premium.duration': '6 bulan',
    'price.mentoring.premium.features.0': 'Weekly meeting',
    'price.mentoring.premium.features.1': 'Personalized plan',
    'price.mentoring.premium.features.2': 'Skill development',
    'price.mentoring.professional.duration': '12 bulan',
    'price.mentoring.professional.features.0': 'Dedicated mentor',
    'price.mentoring.professional.features.1': 'Comprehensive development',
    'price.mentoring.professional.features.2': 'Industry insights',
  },
  en: {
    // Navbar
    'nav.home': 'HOME',
    'nav.profile': 'PROFILE',
    'nav.services': 'SERVICES',
    'nav.articles': 'ARTICLES',
    'nav.contact': 'CONTACT',
    'nav.consultation': 'Free Consultation',
    'nav.searchPlaceholder': 'Search...',
    
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
    'categories.publikasiJurnal': 'Journal Publication',
    'categories.penulisanArtikelSinta': 'Article Writing',
    'categories.workshop': 'Academic Workshop',
    'categories.konsultasi': 'Research Consultation',
    'categories.mentoring': 'Personal Mentoring',
    
    // About Section
    'about.badge': 'About Us',
    'about.title': 'About Elevate Academia',
    'about.subtitle': 'Elevate Academia is a platform that supports academics, students, and researchers in achieving academic success. With experienced mentors and proven methodologies, we are here to help you reach your best potential..',
    'about.stats.clients': 'Happy Clients',
    'about.stats.mentors': 'Expert Mentors',
    'about.stats.publications': 'Publications',
    'about.stats.success': 'Success Rate',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'Empowering every individual to reach their highest academic potential through quality guidance, personal mentoring, and ongoing support in their educational journey.',
    
    // Coaching Section
    'coaching.badge': 'Our Mentors',
    'coaching.title': 'We Provide Mentoring by Expert Mentors',
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

    // Price Page
    'price.badge': 'Price List',
    'price.title': 'Service Price List',
    'price.subtitle': 'Choose the package that suits your academic needs',
    'price.allServices': 'All Services',
    'price.consultationTitle': 'Need Special Consultation?',
    'price.consultationSubtitle': 'Our expert team is ready to help you find the best solution for your academic needs',
    'price.contactButton': 'Contact Us →',
    'price.popular': 'Popular',
    'price.choosePackage': 'Choose Package',

    // Price Page - Skripsi
    'price.skripsi.title': 'Thesis Writing',
    'price.skripsi.basic.duration': '3 months',
    'price.skripsi.basic.features.0': 'Basic consultation',
    'price.skripsi.basic.features.1': 'Outline review',
    'price.skripsi.basic.features.2': 'Email support',
    'price.skripsi.premium.duration': '6 months',
    'price.skripsi.premium.features.0': 'Full guidance',
    'price.skripsi.premium.features.1': 'Weekly meetings',
    'price.skripsi.premium.features.2': 'Priority support',
    'price.skripsi.professional.duration': '12 months',
    'price.skripsi.professional.features.0': 'Full support',
    'price.skripsi.professional.features.1': 'Personal mentor',
    'price.skripsi.professional.features.2': 'Unlimited revisions',

    // Price Page - Publikasi Jurnal
    'price.publikasiJurnal.title': 'Journal Publication',
    'price.publikasiJurnal.variatif': 'Variative',
    'price.publikasiJurnal.features.0': '100% Publication Guarantee',
    'price.publikasiJurnal.features.1': 'Includes PJIR and journal APC',
    'price.publikasiJurnal.features.2': '2x Payment (50% DP, rest upon LoA issuance)',
    'price.publikasiJurnal.features.3': 'Journal Template Adjustment Editing',
    'price.publikasiJurnal.features.4': 'Review',
    'price.publikasiJurnal.features.5': 'Mendeley',
    'price.publikasiJurnal.features.6': 'Turnitin Check',
    'price.publikasiJurnal.features.7': 'Proofreading',
    'price.publikasiJurnal.features.8': 'Translation',
    'price.publikasiJurnal.features.9': 'Minor Revisions',
    'price.publikasiJurnal.features.10': 'Letter of Acceptance (LoA)',
    'price.publikasiJurnal.features.11': 'National/International Author Index Certificate',
    'price.publikasiJurnal.features.12': 'Full Correspondent',
    'price.publikasiJurnal.features.13': 'Fast Response, Kind, and Friendly',
    'price.publikasiJurnal.features.14': 'OJS Account',
    'price.publikasiJurnal.features.15': 'Free Username and Password',
    'price.publikasiJurnal.features.16': 'Active DOI',
    'price.publikasiJurnal.features.17': 'Journal Publication According to Issue',
    'price.publikasiJurnal.features.18': 'Full Issue',

    // Price Page - Penulisan Artikel SINTA
    'price.penulisanArtikelSinta.title': 'SINTA Accredited National Journal Article Writing',
    'price.penulisanArtikelSinta.features.0': 'Article written from scratch',
    'price.penulisanArtikelSinta.features.1': 'Proofreading',
    'price.penulisanArtikelSinta.features.2': 'Submission process',

    // Price Page - Workshop Akademik
    'price.workshop.title': 'Academic Workshop',
    'price.workshop.basic.duration': '4 hours',
    'price.workshop.basic.features.0': 'Basic workshop',
    'price.workshop.basic.features.1': 'Materials',
    'price.workshop.basic.features.2': 'Certificate',
    'price.workshop.premium.duration': '2 days',
    'price.workshop.premium.features.0': 'Intensive workshop',
    'price.workshop.premium.features.1': 'Practical exercises',
    'price.workshop.premium.features.2': 'Personal feedback',
    'price.workshop.professional.duration': '1 week',
    'price.workshop.professional.features.0': 'Custom workshop',
    'price.workshop.professional.features.1': 'Expert trainers',
    'price.workshop.professional.features.2': 'Advanced materials',

    // Price Page - Konsultasi Penelitian
    'price.konsultasi.title': 'Research Consultation',
    'price.konsultasi.basic.duration': '1 hour',
    'price.konsultasi.basic.features.0': 'One hour consult',
    'price.konsultasi.basic.features.1': 'Problem analysis',
    'price.konsultasi.basic.features.2': 'Basic guidance',
    'price.konsultasi.premium.duration': '4 weeks',
    'price.konsultasi.premium.features.0': 'Multi session',
    'price.konsultasi.premium.features.1': 'Detailed analysis',
    'price.konsultasi.premium.features.2': 'Custom solution',
    'price.konsultasi.professional.duration': '3 months',
    'price.konsultasi.professional.features.0': 'Dedicated consultant',
    'price.konsultasi.professional.features.1': 'Comprehensive analysis',
    'price.konsultasi.professional.features.2': 'Implementation support',

    // Price Page - Mentoring Personal
    'price.mentoring.title': 'Personal Mentoring',
    'price.mentoring.basic.duration': '2 months',
    'price.mentoring.basic.features.0': 'Biweekly meeting',
    'price.mentoring.basic.features.1': 'Goal setting',
    'price.mentoring.basic.features.2': 'Progress review',
    'price.mentoring.premium.duration': '6 months',
    'price.mentoring.premium.features.0': 'Weekly meeting',
    'price.mentoring.premium.features.1': 'Personalized plan',
    'price.mentoring.premium.features.2': 'Skill development',
    'price.mentoring.professional.duration': '12 months',
    'price.mentoring.professional.features.0': 'Dedicated mentor',
    'price.mentoring.professional.features.1': 'Comprehensive development',
    'price.mentoring.professional.features.2': 'Industry insights',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      result = result[k];
      if (!result) {
        // Fallback to English if key not found in current language
        result = translations.en;
        for (const k_fallback of keys) {
          result = result[k_fallback];
          if (!result) {
            return key; // Return key if not found in English either
          }
        }
        return result;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}