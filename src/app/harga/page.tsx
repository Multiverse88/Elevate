'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import CategoryPriceSection from '@/components/CategoryPriceSection'

function PriceListContent() {
  const { t, language } = useLanguage()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const priceData = {
    skripsi: {
      title: { id: 'Penulisan Skripsi', en: 'Thesis Writing' },
      icon: '📝',
      packages: [
        { name: 'Basic', price: 'Rp 2,500,000', duration: { id: '3 bulan', en: '3 months' }, features: { id: ['Konsultasi dasar', 'Review outline', 'Email support'], en: ['Basic consultation', 'Outline review', 'Email support'] } },
        { name: 'Premium', price: 'Rp 4,500,000', duration: { id: '6 bulan', en: '6 months' }, features: { id: ['Bimbingan lengkap', 'Meeting mingguan', 'Priority support'], en: ['Full guidance', 'Weekly meetings', 'Priority support'] }, popular: true },
        { name: 'Professional', price: 'Rp 7,000,000', duration: { id: '12 bulan', en: '12 months' }, features: { id: ['Dukungan penuh', 'Mentor personal', 'Unlimited revision'], en: ['Full support', 'Personal mentor', 'Unlimited revisions'] } }
      ]
    },
    'publikasi-jurnal': {
      title: { id: 'Publikasi Jurnal', en: 'Journal Publication' },
      icon: '📄',
      packages: [
        { name: 'ISSN (Nasional Standar)', price: 'Rp 999.000', originalPrice: 'Rp 1.500.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Garansi Jaminan 100% Terbit', 'Termasuk PJIR dan APC jurnal', 'Pembayaran 2x (DP 50%, sisa saat LoA terbit)', 'Editing Penyesuaian Template Jurnal', 'Review', 'Mendeley', 'Cek Turnitin', 'Proofreading', 'Translate', 'Revisi minor', 'Letter of Acceptance (LoA)', 'Sertifikat Author Index Nasional/International', 'Corespondent lengkap', 'Fast Respon, Ramah, and Friendly', 'Akun Ojs', 'Free Username dan Password', 'DOI Aktif', 'Publish/Terbit Jurnal Sesuai Issue', 'Full Issue'], en: ['100% Publication Guarantee', 'Includes PJIR and journal APC', '2x Payment (50% DP, rest upon LoA issuance)', 'Journal Template Adjustment Editing', 'Review', 'Mendeley', 'Turnitin Check', 'Proofreading', 'Translation', 'Minor Revisions', 'Letter of Acceptance (LoA)', 'National/International Author Index Certificate', 'Full Correspondent', 'Fast Response, Kind, and Friendly', 'OJS Account', 'Free Username and Password', 'Active DOI', 'Journal Publication According to Issue', 'Full Issue'] } },
        { name: 'Sinta 6 (Nasional Akreditasi)', price: 'Rp 1.699.000', originalPrice: 'Rp 3.000.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Garansi Jaminan 100% Terbit', 'Termasuk PJIR dan APC jurnal', 'Pembayaran 2x (DP 50%, sisa saat LoA terbit)', 'Editing Penyesuaian Template Jurnal', 'Review', 'Mendeley', 'Cek Turnitin', 'Proofreading', 'Translate', 'Revisi minor', 'Letter of Acceptance (LoA)', 'Sertifikat Author Index Nasional/International', 'Corespondent lengkap', 'Fast Respon, Ramah, and Friendly', 'Akun Ojs', 'Free Username dan Password', 'DOI Aktif', 'Publish/Terbit Jurnal Sesuai Issue', 'Full Issue'], en: ['100% Publication Guarantee', 'Includes PJIR and journal APC', '2x Payment (50% DP, rest upon LoA issuance)', 'Journal Template Adjustment Editing', 'Review', 'Mendeley', 'Turnitin Check', 'Proofreading', 'Translation', 'Minor Revisions', 'Letter of Acceptance (LoA)', 'National/International Author Index Certificate', 'Full Correspondent', 'Fast Response, Kind, and Friendly', 'OJS Account', 'Free Username and Password', 'Active DOI', 'Journal Publication According to Issue', 'Full Issue'] } },
        { name: 'Sinta 5 (Nasional Akreditasi)', price: 'Rp 2.099.000', originalPrice: 'Rp 4.000.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Garansi Jaminan 100% Terbit', 'Termasuk PJIR dan APC jurnal', 'Pembayaran 2x (DP 50%, sisa saat LoA terbit)', 'Editing Penyesuaian Template Jurnal', 'Review', 'Mendeley', 'Cek Turnitin', 'Proofreading', 'Translate', 'Revisi minor', 'Letter of Acceptance (LoA)', 'Sertifikat Author Index Nasional/International', 'Corespondent lengkap', 'Fast Respon, Ramah, and Friendly', 'Akun Ojs', 'Free Username dan Password', 'DOI Aktif', 'Publish/Terbit Jurnal Sesuai Issue', 'Full Issue'], en: ['100% Publication Guarantee', 'Includes PJIR and journal APC', '2x Payment (50% DP, rest upon LoA issuance)', 'Journal Template Adjustment Editing', 'Review', 'Mendeley', 'Turnitin Check', 'Proofreading', 'Translation', 'Minor Revisions', 'Letter of Acceptance (LoA)', 'National/International Author Index Certificate', 'Full Correspondent', 'Fast Response, Kind, and Friendly', 'OJS Account', 'Free Username and Password', 'Active DOI', 'Journal Publication According to Issue', 'Full Issue'] } },
        { name: 'Sinta 4 (Nasional Akreditasi)', price: 'Rp 2.999.000', originalPrice: 'Rp 5.000.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Garansi Jaminan 100% Terbit', 'Termasuk PJIR dan APC jurnal', 'Pembayaran 2x (DP 50%, sisa saat LoA terbit)', 'Editing Penyesuaian Template Jurnal', 'Review', 'Mendeley', 'Cek Turnitin', 'Proofreading', 'Translate', 'Revisi minor', 'Letter of Acceptance (LoA)', 'Sertifikat Author Index Nasional/International', 'Corespondent lengkap', 'Fast Respon, Ramah, and Friendly', 'Akun Ojs', 'Free Username dan Password', 'DOI Aktif', 'Publish/Terbit Jurnal Sesuai Issue', 'Full Issue'], en: ['100% Publication Guarantee', 'Includes PJIR and journal APC', '2x Payment (50% DP, rest upon LoA issuance)', 'Journal Template Adjustment Editing', 'Review', 'Mendeley', 'Turnitin Check', 'Proofreading', 'Translation', 'Minor Revisions', 'Letter of Acceptance (LoA)', 'National/International Author Index Certificate', 'Full Correspondent', 'Fast Response, Kind, and Friendly', 'OJS Account', 'Free Username and Password', 'Active DOI', 'Journal Publication According to Issue', 'Full Issue'] } },
        { name: 'Sinta 3 (Nasional Akreditasi)', price: 'Rp 4.999.000', originalPrice: 'Rp 8.000.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Garansi Jaminan 100% Terbit', 'Termasuk PJIR dan APC jurnal', 'Pembayaran 2x (DP 50%, sisa saat LoA terbit)', 'Editing Penyesuaian Template Jurnal', 'Review', 'Mendeley', 'Cek Turnitin', 'Proofreading', 'Translate', 'Revisi minor', 'Letter of Acceptance (LoA)', 'Sertifikat Author Index Nasional/International', 'Corespondent lengkap', 'Fast Respon, Ramah, and Friendly', 'Akun Ojs', 'Free Username dan Password', 'DOI Aktif', 'Publish/Terbit Jurnal Sesuai Issue', 'Full Issue'], en: ['100% Publication Guarantee', 'Includes PJIR and journal APC', '2x Payment (50% DP, rest upon LoA issuance)', 'Journal Template Adjustment Editing', 'Review', 'Mendeley', 'Turnitin Check', 'Proofreading', 'Translation', 'Minor Revisions', 'Letter of Acceptance (LoA)', 'National/International Author Index Certificate', 'Full Correspondent', 'Fast Response, Kind, and Friendly', 'OJS Account', 'Free Username and Password', 'Active DOI', 'Journal Publication According to Issue', 'Full Issue'] }, popular: true },
      ]
    },
    'penulisan-artikel-sinta': {
      title: { id: 'Penulisan Artikel Jurnal Nasional Terakreditasi SINTA', en: 'SINTA Accredited National Journal Article Writing' },
      icon: '✍️',
      packages: [
        { name: 'SINTA 2', price: 'Rp 7.499.500', originalPrice: 'Rp 14.999.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Artikel ditulis dari awal', 'Proofreading', 'Proses submit'], en: ['Article written from scratch', 'Proofreading', 'Submission process'] } },
        { name: 'SINTA 3', price: 'Rp 2.499.500', originalPrice: 'Rp 4.999.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Artikel ditulis dari awal', 'Proofreading', 'Proses submit'], en: ['Article written from scratch', 'Proofreading', 'Submission process'] } },
        { name: 'SINTA 4', price: 'Rp 1.499.500', originalPrice: 'Rp 2.999.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Artikel ditulis dari awal', 'Proofreading', 'Proses submit'], en: ['Article written from scratch', 'Proofreading', 'Submission process'] } },
        { name: 'SINTA 5', price: 'Rp 999.500', originalPrice: 'Rp 1.999.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Artikel ditulis dari awal', 'Proofreading', 'Proses submit'], en: ['Article written from scratch', 'Proofreading', 'Submission process'] } },
        { name: 'SINTA 6', price: 'Rp 749.500', originalPrice: 'Rp 1.499.000', duration: { id: 'Variatif', en: 'Variative' }, features: { id: ['Artikel ditulis dari awal', 'Proofreading', 'Proses submit'], en: ['Article written from scratch', 'Proofreading', 'Submission process'] } },
      ]
    },
    workshop: {
      title: { id: 'Workshop Akademik', en: 'Academic Workshop' },
      icon: '🎓',
      packages: [
        { name: 'Basic', price: 'Rp 500,000', duration: { id: '4 jam', en: '4 hours' }, features: { id: ['Basic workshop', 'Materials', 'Certificate'], en: ['Basic workshop', 'Materials', 'Certificate'] } },
        { name: 'Premium', price: 'Rp 1,200,000', duration: { id: '2 hari', en: '2 days' }, features: { id: ['Intensive workshop', 'Practical exercises', 'Personal feedback'], en: ['Intensive workshop', 'Practical exercises', 'Personal feedback'] }, popular: true },
        { name: 'Professional', price: 'Rp 2,000,000', duration: { id: '1 minggu', en: '1 week' }, features: { id: ['Custom workshop', 'Expert trainers', 'Advanced materials'], en: ['Custom workshop', 'Expert trainers', 'Advanced materials'] } }
      ]
    },
    konsultasi: {
      title: { id: 'Konsultasi Penelitian', en: 'Research Consultation' },
      icon: '🔬',
      packages: [
        { name: 'Basic', price: 'Rp 300,000', duration: { id: '1 jam', en: '1 hour' }, features: { id: ['One hour consult', 'Problem analysis', 'Basic guidance'], en: ['One hour consult', 'Problem analysis', 'Basic guidance'] } },
        { name: 'Premium', price: 'Rp 1,000,000', duration: { id: '4 minggu', en: '4 weeks' }, features: { id: ['Multi session', 'Detailed analysis', 'Custom solution'], en: ['Multi session', 'Detailed analysis', 'Custom solution'] }, popular: true },
        { name: 'Professional', price: 'Rp 2,500,000', duration: { id: '3 bulan', en: '3 months' }, features: { id: ['Dedicated consultant', 'Comprehensive analysis', 'Implementation support'], en: ['Dedicated consultant', 'Comprehensive analysis', 'Implementation support'] } }
      ]
    },
    mentoring: {
      title: { id: 'Mentoring Personal', en: 'Personal Mentoring' },
      icon: '👨‍🏫',
      packages: [
        { name: 'Basic', price: 'Rp 1,200,000', duration: { id: '2 bulan', en: '2 months' }, features: { id: ['Biweekly meeting', 'Goal setting', 'Progress review'], en: ['Biweekly meeting', 'Goal setting', 'Progress review'] } },
        { name: 'Premium', price: 'Rp 2,800,000', duration: { id: '6 bulan', en: '6 months' }, features: { id: ['Weekly meeting', 'Personalized plan', 'Skill development'], en: ['Weekly meeting', 'Personalized plan', 'Skill development'] }, popular: true },
        { name: 'Professional', price: 'Rp 5,000,000', duration: { id: '12 bulan', en: '12 months' }, features: { id: ['Dedicated mentor', 'Comprehensive development', 'Industry insights'], en: ['Dedicated mentor', 'Comprehensive development', 'Industry insights'] } }
      ]
    }
  }

  const allCategories = Object.entries(priceData).map(([id, data]) => ({ id, ...data }))

  const filteredCategories = category
    ? allCategories.filter((c) => c.id === category)
    : allCategories

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-blue-200 mb-4 sm:mb-6">
            <span className="mr-2">💰</span>
            {t('price.badge')}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            {category ? `${t('price.title')} - ${priceData[category as keyof typeof priceData]?.title[language as keyof typeof priceData[keyof typeof priceData]['title']]}` : t('price.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            {t('price.subtitle')}
          </p>
          {category && (
            <Link href="/harga" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
              ← {t('price.allServices')}
            </Link>
          )}
        </div>

        {!category && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-2">
            {allCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/harga?category=${cat.id}`}
                className="bg-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:shadow-lg transition-all duration-300 border border-gray-200 text-sm sm:text-base whitespace-nowrap"
              >
                <span className="mr-1 sm:mr-2">{cat.icon}</span>
                <span className="hidden sm:inline">{cat.title[language as keyof typeof cat.title]}</span>
                <span className="sm:hidden">{cat.title[language as keyof typeof cat.title].split(' ')[0]}</span>
              </Link>
            ))}
          </div>
        )}

        {filteredCategories.map((catData) => (
          <CategoryPriceSection key={catData.id} categoryData={catData} isFiltered={!!category} />
        ))}

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white mx-2 sm:mx-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Butuh Konsultasi Khusus?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan akademik Anda
            </p>
            <Link
              href="https://wa.me/6283121451587"
              className="inline-flex items-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Hubungi Kami →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Harga() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">Loading...</p>
        </div>
      </div>
    }>
      <PriceListContent />
    </Suspense>
  )
}