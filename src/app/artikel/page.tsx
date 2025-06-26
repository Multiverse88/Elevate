import Image from 'next/image'
import Link from 'next/link'

export default function Artikel() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Artikel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan informasi dan tips seputar penulisan akademik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article cards will be dynamically populated here */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/articles/placeholder.jpg"
                alt="Article thumbnail"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Judul Artikel</h3>
              <p className="text-gray-600 mb-4">
                Deskripsi singkat artikel akan ditampilkan di sini...
              </p>
              <Link
                href="/artikel/[slug]"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 