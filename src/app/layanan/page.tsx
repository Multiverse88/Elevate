import Image from 'next/image'
import Link from 'next/link'

export default function Layanan() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk kebutuhan akademik Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bimbingan Penulisan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/services/writing.jpg"
                alt="Bimbingan Penulisan"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Bimbingan Penulisan Naskah</h3>
              <p className="text-gray-600 mb-4">
                Layanan bimbingan penulisan untuk berbagai jenis naskah akademik:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Skripsi</li>
                <li>Artikel Jurnal</li>
                <li>Esai</li>
                <li>Disertasi</li>
              </ul>
              <Link
                href="https://wa.me/6283121451587"
                className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Konsultasi Sekarang
              </Link>
            </div>
          </div>

          {/* Publikasi Ilmiah */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/services/publication.jpg"
                alt="Publikasi Ilmiah"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Pendampingan Publikasi Ilmiah</h3>
              <p className="text-gray-600 mb-4">
                Bantuan publikasi di berbagai platform terkemuka:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>SINTA</li>
                <li>Scopus</li>
                <li>Web of Science</li>
              </ul>
              <Link
                href="https://wa.me/6283121451587"
                className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Konsultasi Sekarang
              </Link>
            </div>
          </div>

          {/* Workshop Akademik */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/services/workshop.jpg"
                alt="Workshop Akademik"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Event Organizer Workshop Akademik</h3>
              <p className="text-gray-600 mb-4">
                Penyelenggaraan berbagai acara akademik:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Webinar</li>
                <li>Kuliah Tamu</li>
                <li>Pelatihan Menulis</li>
              </ul>
              <Link
                href="https://wa.me/6283121451587"
                className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Konsultasi Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 