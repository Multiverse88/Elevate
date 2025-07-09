'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import { motion } from 'framer-motion'

// Enhanced PriceCard component with Framer Motion
interface PriceCardProps {
  pkg: {
    name: string
    price: string
    originalPrice?: string
    duration: { id: string; en: string }
    features: { id: string[]; en: string[] }
    popular?: boolean
    badge?: string
    tier?: 'free' | 'basic' | 'pro' | 'enterprise'
  }
  index: number
  categoryId: string
}

function PriceCard({ pkg, index, categoryId }: PriceCardProps) {
  const { language, t } = useLanguage()
  
  const getTierStyle = () => {
    if (pkg.tier === 'free') {
      return {
        bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
        border: 'border-blue-200',
        button: 'bg-blue-600 text-white hover:bg-blue-700',
        popular: false
      }
    } else if (pkg.popular) {
      return {
        bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
        border: 'border-purple-500 border-2',
        button: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-105',
        popular: true
      }
    }
    return {
      bg: 'bg-white',
      border: 'border-gray-200',
      button: 'border-2 border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600',
      popular: false
    }
  }

  const tierStyle = getTierStyle()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl p-8 shadow-lg ${tierStyle.bg} ${tierStyle.border} border h-full flex flex-col`}
    >
      <div className="mb-8">
        {/* Badge positioned above package name */}
        {(pkg.popular || pkg.badge) && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
            className="flex justify-center mb-4"
          >
            <span className={`text-white px-6 py-2 rounded-full text-sm font-semibold ${
              pkg.badge 
                ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                : 'bg-gradient-to-r from-purple-600 to-blue-600'
            }`}>
              {pkg.badge || t('price.popular')}
            </span>
          </motion.div>
        )}
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
        
        <div className="mb-2">
          {pkg.originalPrice && (
            <span className="text-sm text-gray-500 line-through block">
              {pkg.originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold text-gray-900">
            {pkg.price}
          </span>
        </div>
        <p className="text-sm text-gray-600">{pkg.duration[language as keyof typeof pkg.duration]}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {pkg.features[language as keyof typeof pkg.features].map((feature, featureIdx) => (
          <motion.li
            key={featureIdx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + featureIdx * 0.05 }}
            className="flex items-start"
          >
            <svg
              className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-700">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={pkg.tier === 'free' ? "https://wa.me/6283121451587?text=Halo, saya tertarik dengan konsultasi gratis" : "https://wa.me/6283121451587"}
          className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 text-sm ${tierStyle.button}`}
        >
          {pkg.tier === 'free' ? t('price.freeConsultation') : t('price.choosePackage')}
        </Link>
      </motion.div>
    </motion.div>
  )
}

function PriceListContentComponent() {
  const { t, language } = useLanguage()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const priceData = {
    skripsi: {
      title: { id: 'Penulisan Skripsi', en: 'Thesis Writing' },
      icon: '📘',
      description: { 
        id: 'Layanan profesional penulisan skripsi dengan bimbingan lengkap dari awal hingga selesai', 
        en: 'Professional thesis writing service with complete guidance from start to finish' 
      },
      packages: [
        { 
          name: 'Konsultasi Gratis', 
          price: 'Rp 0', 
          duration: { id: 'Mentoring deep 101 session', en: 'Mentoring deep 101 session' }, 
          tier: 'free' as const,
          features: { 
            id: [
              'Konsultasi topik skripsi',
              'Review outline awal',
              'Diskusi metodologi',
              'Saran perbaikan',
              'Mentoring mendalam'
            ], 
            en: [
              'Thesis topic consultation',
              'Initial outline review',
              'Methodology discussion',
              'Improvement suggestions',
              'Deep mentoring'
            ] 
          } 
        },
        { 
          name: 'Layanan Tambahan', 
          price: 'Mulai dari Rp 200.000', 
          duration: { id: '3-7 hari', en: '3-7 days' }, 
          features: { 
            id: [
              'Layouting: Rp 250.000 - 350.000',
              'Proofreading: Rp 350.000 - 500.000',
              'Daftar Pustaka: Rp 200.000 - 300.000',
              'Format margin, spasi, heading, daftar isi otomatis',
              'Grammar & academic style (ID/EN)'
            ], 
            en: [
              'Layout: Rp 250,000 - 350,000',
              'Proofreading: Rp 350,000 - 500,000',
              'Bibliography: Rp 200,000 - 300,000',
              'Margin, spacing, heading, auto table of contents',
              'Grammar & academic style (ID/EN)'
            ] 
          } 
        },
        { 
          name: 'Per Bab Individual', 
          price: 'Mulai dari Rp 450.000', 
          duration: { id: '1-2 minggu per bab', en: '1-2 weeks per chapter' }, 
          features: { 
            id: [
              'Bab 1 (Latar belakang, rumusan masalah): Rp 550.000 - 700.000',
              'Bab 2 (Kajian pustaka + kerangka teori): Rp 600.000 - 750.000',
              'Bab 3 (Metodologi kuanti/kuali): Rp 650.000 - 800.000',
              'Bab 4 (Analisis data + visualisasi): Rp 850.000 - 1.100.000',
              'Bab 5 (Simpulan dan saran): Rp 450.000 - 600.000',
              '1x revisi per bab'
            ], 
            en: [
              'Chapter 1 (Background, problem statement): Rp 550,000 - 700,000',
              'Chapter 2 (Literature review + theory): Rp 600,000 - 750,000',
              'Chapter 3 (Quantitative/qualitative methodology): Rp 650,000 - 800,000',
              'Chapter 4 (Data analysis + visualization): Rp 850,000 - 1,100,000',
              'Chapter 5 (Conclusion and suggestions): Rp 450,000 - 600,000',
              '1x revision per chapter'
            ] 
          } 
        },
        { 
          name: 'Paket Semua Bab (1-5)', 
          price: 'Rp 3.200.000 - 4.500.000', 
          duration: { id: '2-4 bulan', en: '2-4 months' }, 
          features: { 
            id: [
              'Penulisan semua bab',
              '2x revisi tiap bab',
              'Bonus layout + daftar pustaka',
              'Konsultasi berkala',
              'Bimbingan presentasi'
            ], 
            en: [
              'Writing all chapters',
              '2x revision per chapter',
              'Bonus layout + bibliography',
              'Regular consultation',
              'Presentation guidance'
            ] 
          },
          popular: true 
        },
        { 
          name: 'From Scratch', 
          price: 'Rp 4.999.000', 
          originalPrice: 'Rp 8.000.000',
          duration: { id: '3-6 bulan', en: '3-6 months' }, 
          badge: 'Early Bird',
          features: { 
            id: [
              'Penulisan lengkap Bab 1-5',
              'Diskusi topik & outline',
              '2x revisi per bab',
              'Proofreading akhir',
              'Panduan presentasi',
              'Bonus layouting + daftar pustaka'
            ], 
            en: [
              'Complete writing Chapters 1-5',
              'Topic & outline discussion',
              '2x revision per chapter',
              'Final proofreading',
              'Presentation guide',
              'Bonus layout + bibliography'
            ] 
          }
        }
      ]
    },
    'publikasi-jurnal': {
      title: { id: 'Publikasi Jurnal', en: 'Journal Publication' },
      icon: '📄',
      description: { 
        id: 'Layanan publikasi jurnal nasional dan internasional dengan garansi terbit 100%', 
        en: 'National and international journal publication service with 100% publication guarantee' 
      },
      packages: [
        { 
          name: 'Konsultasi Gratis', 
          price: 'Rp 0', 
          duration: { id: '30 menit', en: '30 minutes' }, 
          tier: 'free' as const,
          features: { 
            id: [
              'Review artikel Anda',
              'Rekomendasi jurnal target',
              'Diskusi strategi publikasi',
              'Tips meningkatkan kualitas',
              'Tanpa komitmen'
            ], 
            en: [
              'Article review',
              'Target journal recommendations',
              'Publication strategy discussion',
              'Quality improvement tips',
              'No commitment'
            ] 
          } 
        },
        { 
          name: 'ISSN (Nasional Standar)', 
          price: 'Rp 999.000', 
          originalPrice: 'Rp 1.500.000', 
          duration: { id: 'Variatif', en: 'Variable' }, 
          features: { 
            id: [
              'Garansi Jaminan 100% Terbit',
              'Termasuk PJIR dan APC jurnal',
              'Editing Template Jurnal',
              'Review & Cek Turnitin',
              'Letter of Acceptance (LoA)'
            ], 
            en: [
              '100% Publication Guarantee',
              'Includes PJIR and journal APC',
              'Journal Template Editing',
              'Review & Turnitin Check',
              'Letter of Acceptance (LoA)'
            ] 
          } 
        },
        { 
          name: 'Sinta 6 (Nasional Akreditasi)', 
          price: 'Rp 1.699.000', 
          originalPrice: 'Rp 3.000.000', 
          duration: { id: 'Variatif', en: 'Variable' }, 
          features: { 
            id: [
              'Semua fitur ISSN',
              'Jurnal terakreditasi Sinta 6',
              'Proses lebih cepat',
              'Review berkualitas tinggi',
              'Standar akreditasi nasional'
            ], 
            en: [
              'All ISSN features',
              'Sinta 6 accredited journal',
              'Faster processing',
              'High quality review',
              'National accreditation standards'
            ] 
          } 
        },
        { 
          name: 'Sinta 5 (Nasional Akreditasi)', 
          price: 'Rp 2.099.000', 
          originalPrice: 'Rp 4.000.000', 
          duration: { id: 'Variatif', en: 'Variable' }, 
          features: { 
            id: [
              'Semua fitur Sinta 6',
              'Jurnal terakreditasi Sinta 5',
              'Impact factor lebih tinggi',
              'Proses review lebih selektif'
            ], 
            en: [
              'All Sinta 6 features',
              'Sinta 5 accredited journal',
              'Higher impact factor',
              'More selective review process'
            ] 
          } 
        },
        { 
          name: 'Sinta 4 (Nasional Akreditasi)', 
          price: 'Rp 2.999.000', 
          originalPrice: 'Rp 5.000.000', 
          duration: { id: 'Variatif', en: 'Variable' }, 
          features: { 
            id: [
              'Semua fitur Sinta 5',
              'Jurnal terakreditasi Sinta 4',
              'Reputasi akademik tinggi',
              'Standar publikasi ketat'
            ], 
            en: [
              'All Sinta 5 features',
              'Sinta 4 accredited journal',
              'High academic reputation',
              'Strict publication standards'
            ] 
          } 
        },
        { 
          name: 'Sinta 3 (Nasional Akreditasi)', 
          price: 'Rp 4.999.000', 
          originalPrice: 'Rp 8.000.000', 
          duration: { id: 'Variatif', en: 'Variable' }, 
          features: { 
            id: [
              'Semua fitur Sinta 4',
              'Jurnal terakreditasi Sinta 3',
              'Kredibilitas maksimal',
              'Review berkualitas sangat tinggi'
            ], 
            en: [
              'All Sinta 4 features',
              'Sinta 3 accredited journal',
              'Maximum credibility',
              'Very high quality review'
            ] 
          },
          popular: true 
        },
        { 
          name: 'Sinta 2', 
          price: 'Rp 7.499.500', 
          originalPrice: 'Rp 14.999.000', 
          duration: { id: 'Variatif', en: 'Variable' }, 
          features: { 
            id: [
              'Artikel ditulis dari awal',
              'Jurnal terakreditasi Sinta 2',
              'Proofreading premium',
              'Proses submit prioritas',
              'High impact factor'
            ], 
            en: [
              'Article written from scratch',
              'Sinta 2 accredited journal',
              'Premium proofreading',
              'Priority submission process',
              'High impact factor'
            ] 
          } 
        },
        { 
          name: 'Sinta 1', 
          price: 'Contact Us', 
          duration: { id: 'Variatif', en: 'Variable' }, 
          features: { 
            id: [
              'Artikel ditulis dari awal',
              'Jurnal terakreditasi Sinta 1',
              'Review eksklusif',
              'Konsultasi premium',
              'Highest academic prestige'
            ], 
            en: [
              'Article written from scratch',
              'Sinta 1 accredited journal',
              'Exclusive review',
              'Premium consultation',
              'Highest academic prestige'
            ] 
          }
        }
      ]
    },
    workshop: {
      title: { id: 'Workshop Akademik', en: 'Academic Workshop' },
      icon: '🎤',
      description: { 
        id: 'Acara akademik profesional - Serahkan pada kami! Elevate Academia siap jadi partner akademik dalam menyelenggarakan workshop penulisan, webinar, seminar, guest lecture, training proposal, dan lain-lain.', 
        en: 'Professional academic events - Leave it to us! Elevate Academia is ready to be your academic partner in organizing writing workshops, webinars, seminars, guest lectures, training proposals, and more.' 
      },
      packages: [
        { 
          name: 'Konsultasi Gratis', 
          price: 'Rp 0', 
          duration: { id: '30 menit', en: '30 minutes' }, 
          tier: 'free' as const,
          features: { 
            id: [
              'Diskusi kebutuhan acara',
              'Rekomendasi format workshop',
              'Saran pembicara',
              'Estimasi budget',
              'Konsultasi format: daring, hybrid, luring'
            ], 
            en: [
              'Event needs discussion',
              'Workshop format recommendations',
              'Speaker suggestions',
              'Budget estimation',
              'Format consultation: online, hybrid, offline'
            ] 
          } 
        },
        { 
          name: 'Paket 1 - Pembicara & Modul', 
          price: 'Rp 1.500.000 - 2.500.000', 
          duration: { id: 'Per sesi', en: 'Per session' }, 
          features: { 
            id: [
              'Penyedia pembicara ahli (praktisi/dosen/professional)',
              'Pembuatan dan pengiriman e-modul atau handout',
              'Sertifikat pembicara (softcopy)',
              'Koordinasi dengan pembicara'
            ], 
            en: [
              'Expert speaker provider (practitioner/lecturer/professional)',
              'E-module or handout creation and delivery',
              'Speaker certificate (softcopy)',
              'Speaker coordination'
            ] 
          },
          popular: true 
        },
        { 
          name: 'Paket 2 - Full Package (Panitia + Pembicara + Modul)', 
          price: 'Rp 3.000.000 - 5.000.000', 
          duration: { id: 'Per sesi', en: 'Per session' }, 
          features: { 
            id: [
              'Penyedia pembicara & moderator',
              'Desain dan pengiriman modul',
              'Tim panitia (MC, operator Zoom, admin dokumentasi)',
              'E-sertifikat peserta & pembicara',
              'Desain publikasi (poster, caption, link pendaftaran)',
              'Rekap peserta & laporan kegiatan'
            ], 
            en: [
              'Speaker & moderator provider',
              'Module design and delivery',
              'Event team (MC, Zoom operator, documentation admin)',
              'E-certificate for participants & speakers',
              'Publication design (poster, caption, registration link)',
              'Participant recap & activity report'
            ] 
          }
        }
      ]
    },
    konsultasi: {
      title: { id: 'Konsultasi Penelitian', en: 'Research Consultation' },
      icon: '💼',
      description: { 
        id: 'Layanan konsultasi penelitian profesional dengan bimbingan intensif dari mentor berpengalaman. Waktu fleksibel: Pagi (08.00-11.00), Siang (12.00-15.00), Sore (16.00-18.00).', 
        en: 'Professional research consultation service with intensive guidance from experienced mentors. Flexible time: Morning (08.00-11.00), Afternoon (12.00-15.00), Evening (16.00-18.00).' 
      },
      packages: [
        { 
          name: 'Konsultasi Gratis', 
          price: 'Rp 0', 
          duration: { id: '30 menit', en: '30 minutes' }, 
          tier: 'free' as const,
          features: { 
            id: [
              'Diskusi masalah penelitian',
              'Review metodologi awal',
              'Saran improvement',
              'Rekomendasi sumber',
              'Tanpa komitmen'
            ], 
            en: [
              'Research problem discussion',
              'Initial methodology review',
              'Improvement suggestions',
              'Source recommendations',
              'No commitment'
            ] 
          } 
        },
        { 
          name: 'Paket 1 - Basic Focus', 
          price: 'Rp 749.000', 
          duration: { id: '6x pertemuan (60 menit)', en: '6x meetings (60 minutes)' }, 
          features: { 
            id: [
              'Konsultasi fokus ke 1-2 bab',
              'Koreksi rumusan masalah/topik',
              'Revisi terarah',
              'Akses grup WhatsApp',
              '1x revisi tertulis',
              'Waktu fleksibel (Pagi/Siang/Sore)'
            ], 
            en: [
              'Focus consultation on 1-2 chapters',
              'Problem formulation/topic correction',
              'Targeted revision',
              'WhatsApp group access',
              '1x written revision',
              'Flexible time (Morning/Afternoon/Evening)'
            ] 
          } 
        },
        { 
          name: 'Paket 2 - Standard Development', 
          price: 'Rp 1.399.000', 
          duration: { id: '12x pertemuan (60-75 menit)', en: '12x meetings (60-75 minutes)' }, 
          features: { 
            id: [
              'Pendampingan BAB 1, 2, 3',
              'Konsultasi metode dan kajian teori',
              'Bimbingan struktur logis antar bab',
              'Review draft dan latihan sidang',
              'Pendampingan data awal'
            ], 
            en: [
              'Chapters 1, 2, 3 guidance',
              'Method and theory consultation',
              'Logical structure guidance between chapters',
              'Draft review and trial defense',
              'Initial data guidance'
            ] 
          },
          popular: true 
        },
        { 
          name: 'Paket 3 - Intensive Guidance', 
          price: 'Rp 2.149.000', 
          duration: { id: '18x pertemuan (75-90 menit)', en: '18x meetings (75-90 minutes)' }, 
          features: { 
            id: [
              'Pendampingan lengkap BAB 1-5',
              'Bimbingan analisis data',
              'Bantuan ubah skripsi jadi artikel',
              '2x proofreading + latihan presentasi',
              'Review hasil revisi dosen'
            ], 
            en: [
              'Complete chapters 1-5 guidance',
              'Data analysis guidance',
              'Thesis to article conversion help',
              '2x proofreading + presentation practice',
              'Lecturer revision result review'
            ] 
          } 
        },
        { 
          name: 'Paket 4 - Full Academic Support', 
          price: 'Rp 2.999.000', 
          duration: { id: '24x pertemuan (90 menit)', en: '24x meetings (90 minutes)' }, 
          features: { 
            id: [
              'Semua layanan Paket 3',
              'Pendampingan submit jurnal (SINTA/Scopus)',
              'Bantuan revisi reviewer',
              'Editing + layouting artikel',
              '3x simulasi sidang',
              'Prioritas WA + jadwal fleksibel'
            ], 
            en: [
              'All Package 3 services',
              'Journal submission guidance (SINTA/Scopus)',
              'Reviewer revision assistance',
              'Article editing + layout',
              '3x trial defense',
              'WhatsApp priority + flexible schedule'
            ] 
          } 
        }
      ]
    },
    'all-you-can-request': {
      title: { id: 'All You Can Request', en: 'All You Can Request' },
      icon: '✨',
      description: { 
        id: 'Layanan fleksibel sesuai kebutuhanmu! Tidak menemukan layanan yang dibutuhkan? Ajukan permintaan khusus yang berkaitan dengan dunia akademik.', 
        en: 'Flexible service according to your needs! Cannot find the service you need? Submit special requests related to the academic world.' 
      },
      packages: [
        { 
          name: 'Konsultasi Gratis', 
          price: 'Rp 0', 
          duration: { id: '30 menit', en: '30 minutes' }, 
          tier: 'free' as const,
          features: { 
            id: [
              'Diskusi kebutuhan spesifik',
              'Analisis kelayakan request',
              'Estimasi waktu & biaya',
              'Rekomendasi solusi',
              'Tanpa komitmen'
            ], 
            en: [
              'Specific needs discussion',
              'Request feasibility analysis',
              'Time & cost estimation',
              'Solution recommendations',
              'No commitment'
            ] 
          } 
        },
        { 
          name: 'Layanan Akademik Khusus', 
          price: 'Harga Disesuaikan', 
          duration: { id: 'Sesuai kebutuhan', en: 'As needed' }, 
          features: { 
            id: [
              'Penyediaan responden',
              'Layout skripsi/artikel',
              'Pembuatan halaman awal skripsi',
              'Sitasi & daftar pustaka',
              'Cek plagiarisme'
            ], 
            en: [
              'Respondent provision',
              'Thesis/article layout',
              'Thesis front page creation',
              'Citations & bibliography',
              'Plagiarism check'
            ] 
          } 
        },
        { 
          name: 'Editing & Translation', 
          price: 'Harga Disesuaikan', 
          duration: { id: 'Sesuai kebutuhan', en: 'As needed' }, 
          features: { 
            id: [
              'Terjemahan & editing',
              'Format artikel sesuai jurnal',
              'PPT Sidang',
              'Simulasi Sidang',
              'Dan kebutuhan akademik lainnya'
            ], 
            en: [
              'Translation & editing',
              'Journal article formatting',
              'Defense PPT',
              'Defense Simulation',
              'And other academic needs'
            ] 
          },
          popular: true 
        }
      ]
    }
  }

  const allCategories = Object.entries(priceData).map(([id, data]) => ({ id, ...data }))

  const filteredCategories = category
    ? allCategories.filter((c) => c.id === category)
    : allCategories

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            {t('price.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4"
          >
            {t('price.subtitle')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base text-gray-500 max-w-2xl mx-auto"
          >
            {t('price.description')}
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        {!category && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {allCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/harga?category=${cat.id}`}
                  className="bg-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 border border-gray-200 text-sm flex items-center space-x-2"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.title[language as keyof typeof cat.title]}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Back Button for Category View */}
        {category && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/harga" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              {t('price.backToServices')}
            </Link>
          </motion.div>
        )}

        {/* Price Cards */}
        {filteredCategories.map((catData, categoryIndex) => (
          <motion.div
            key={catData.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="text-4xl mb-4"
              >
                {catData.icon}
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {catData.title[language as keyof typeof catData.title]}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {catData.description[language as keyof typeof catData.description]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {catData.packages.map((pkg, index) => (
                <PriceCard 
                  key={index} 
                  pkg={pkg} 
                  index={index} 
                  categoryId={catData.id}
                />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('price.consultationTitle')}</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('price.consultationSubtitle')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://wa.me/6283121451587"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('price.contactButton')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function PriceListContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600">Loading...</p>
        </motion.div>
      </div>
    }>
      <PriceListContentComponent />
    </Suspense>
  )
} 