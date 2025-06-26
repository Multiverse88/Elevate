import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Elevate Academia</h3>
            <p className="text-gray-400">
              Solusi Profesional untuk Naskah dan Publikasi Ilmiah
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-white">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-400 hover:text-white">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-gray-400 hover:text-white">
                  Artikel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Bandung, West Java</li>
              <li>Phone: 0831-2145-1587</li>
              <li>Email: elevateacademiaa@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/elevateacademia.id" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="https://tiktok.com/@elevateacademia" className="text-gray-400 hover:text-white">
                TikTok
              </a>
              <a href="https://facebook.com/elevateacademia" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elevate Academia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 