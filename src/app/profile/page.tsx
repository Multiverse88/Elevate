import Image from 'next/image'

export default function Profile() {
  return (
    <div className="min-h-screen py-20">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Didampingi oleh Tim Profesional dan Berpengalaman
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Elevate Academia lahir dari semangat kolaboratif akademisi muda lulusan Bahasa dan Sastra Inggris yang berpengalaman dalam mendampingi penulisan dan publikasi karya ilmiah.
          </p>
          <p>
            Kami telah membantu mahasiswa, dosen, dan peneliti menyusun berbagai naskah akademik seperti artikel jurnal berbahasa Inggris, skripsi, tesis, disertasi, hingga makalah ilmiah untuk kepentingan tugas akhir maupun publikasi nasional dan internasional. Beberapa klien kami berhasil terbit di jurnal bereputasi seperti SINTA dan Scopus melalui bimbingan menyeluruh dari tim kami.
          </p>
          <p>
            Didukung latar keilmuan yang kuat serta kemampuan bahasa Inggris pada level B2 hingga C1, kami percaya diri dalam menangani proofreading, editing, dan pendampingan penulisan ilmiah secara etis dan berkualitas.
          </p>
          <p>
            Kami tidak hanya menyediakan jasa, tetapi memastikan setiap proses penulisan dan publikasi berjalan secara etis, tepat, dan berkualitas.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Visi dan Misi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadi mitra strategis dan terpercaya dalam pengembangan kapasitas akademik, bahasa, dan publikasi ilmiah di Indonesia dan tingkat global.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Misi</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyediakan layanan bimbingan penulisan dan pengembangan naskah akademik yang mendukung mahasiswa dan akademisi dalam menghasilkan karya ilmiah yang berkualitas dan beretika.</li>
                <li>Memberikan pendampingan profesional dalam proses publikasi ilmiah nasional maupun internasional sebagai upaya memperluas kontribusi keilmuan dari berbagai bidang.</li>
                <li>Mengelola penyelenggaraan workshop, seminar, dan kegiatan edukatif lainnya secara profesional melalui layanan event organizer berbasis kebutuhan dunia akademik dan penelitian.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Tim Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/team/ceo.jpg"
                  alt="CEO"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nama CEO</h3>
              <p className="text-gray-600">Chief Executive Officer</p>
            </div>

            {/* CMO */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/team/cmo.jpg"
                  alt="CMO"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nama CMO</h3>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>

            {/* COO */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/team/coo.jpg"
                  alt="COO"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nama COO</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 