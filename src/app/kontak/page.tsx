import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'

export default function Kontak() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Kontak Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi kami untuk konsultasi dan informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Alamat</h3>
                  <p className="text-gray-600">Bandung, West Java</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-blue-600 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Telepon & WhatsApp</h3>
                  <p className="text-gray-600">0831-2145-1587</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-blue-600 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">elevateacademiaa@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/elevateacademia.id"
                  className="text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://tiktok.com/@elevateacademia"
                  className="text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={24} />
                </a>
                <a
                  href="https://facebook.com/elevateacademia"
                  className="text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 