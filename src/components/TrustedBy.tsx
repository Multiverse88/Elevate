export default function TrustedBy() {
  const companies = [
    { name: 'Universitas Indonesia', color: 'text-blue-600' },
    { name: 'Institut Teknologi Bandung', color: 'text-purple-600' },
    { name: 'Universitas Gadjah Mada', color: 'text-green-600' },
    { name: 'Universitas Padjadjaran', color: 'text-indigo-600' },
    { name: 'Universitas Airlangga', color: 'text-orange-600' }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-blue-200 mb-6">
          <span className="mr-2">🤝</span>
          Dipercaya Oleh
        </div>
        <p className="text-gray-600 mb-12 text-lg font-medium">
          Dipercaya oleh ribuan mahasiswa dan institusi pendidikan terkemuka di Indonesia
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company, idx) => (
            <div key={idx} className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">{company.name[0]}</span>
              </div>
              <span className={`text-lg font-semibold ${company.color} group-hover:text-gray-900 transition-colors duration-300`}>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 