import Image from 'next/image'
import Link from 'next/link'

export default function Layanan() {
  const services = [
    {
      title: "Bimbingan Penulisan Naskah",
      description: "Layanan profesional penulisan skripsi dengan bimbingan lengkap dari awal hingga selesai",
      features: [
        "Konsultasi topik skripsi",
        "Penulisan per bab atau paket lengkap", 
        "Review dan revisi",
        "Proofreading dan layouting"
      ],
      icon: "📘",
      bgColor: "bg-blue-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      href: "/harga?category=skripsi"
    },
    {
      title: "Publikasi Jurnal",
      description: "Layanan publikasi jurnal nasional dan internasional dengan garansi terbit 100%",
      features: [
        "ISSN hingga Sinta 1",
        "Garansi publikasi",
        "Review dan editing artikel",
        "Submit dan follow-up"
      ],
      icon: "📄", 
      bgColor: "bg-green-50",
      buttonColor: "bg-green-600 hover:bg-green-700",
      href: "/harga?category=publikasi-jurnal"
    },
    {
      title: "Workshop Akademik",
      description: "Acara akademik profesional - Serahkan pada kami! Penyelenggaraan workshop, webinar, seminar, guest lecture.",
      features: [
        "Penyedia pembicara ahli",
        "Tim panitia lengkap",
        "E-modul dan sertifikat",
        "Desain publikasi acara"
      ],
      icon: "🎤",
      bgColor: "bg-orange-50", 
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      href: "/harga?category=workshop"
    },
    {
      title: "Konsultasi Penelitian",
      description: "Layanan konsultasi penelitian profesional dengan bimbingan intensif dari mentor berpengalaman.",
      features: [
        "Konsultasi metodologi",
        "Bimbingan analisis data",
        "Review dan perbaikan",
        "Simulasi sidang"
      ],
      icon: "💼",
      bgColor: "bg-purple-50",
      buttonColor: "bg-purple-600 hover:bg-purple-700", 
      href: "/harga?category=konsultasi"
    },
    {
      title: "All You Can Request",
      description: "Layanan fleksibel sesuai kebutuhanmu! Tidak menemukan layanan yang dibutuhkan? Ajukan permintaan khusus yang berkaitan dengan dunia akademik.",
      features: [
        "Penyediaan responden",
        "Layout dan formatting",
        "Terjemahan dan editing",
        "Kebutuhan akademik lainnya"
      ],
      icon: "✨",
      bgColor: "bg-yellow-50",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      href: "/harga?category=all-you-can-request"
    }
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Layanan Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk kebutuhan akademik Anda dengan layanan profesional dan berkualitas tinggi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                    <span className="text-2xl">{service.icon}</span>
            </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
          </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
              </ul>
                
              <Link
                  href={service.href}
                  className={`block text-center ${service.buttonColor} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                  Lihat Paket & Harga
              </Link>
          </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white bg-opacity-30 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Tidak Menemukan Yang Anda Cari?</h2>
            <p className="text-lg mb-6 opacity-90">
              Hubungi kami untuk konsultasi gratis dan dapatkan solusi akademik yang tepat untuk kebutuhan Anda
            </p>
              <Link
              href="/kontak"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
              Konsultasi Gratis Sekarang
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 