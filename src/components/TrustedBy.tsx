export default function TrustedBy() {
  const companies = [
    { name: 'Layers', color: 'text-brand-medium-blue' },
    { name: 'Sisyphus', color: 'text-brand-light-blue' },
    { name: 'Circooles', color: 'text-brand-dark-navy' },
    { name: 'Catalog', color: 'text-brand-medium-blue' },
    { name: 'Quotient', color: 'text-brand-light-blue' }
  ]

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-brand-dark-navy opacity-70 mb-8 text-lg font-barlow">Trusted by 4,000+ companies</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-medium-blue to-brand-light-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{company.name[0]}</span>
              </div>
              <span className={`text-xl font-semibold ${company.color} font-barlow-bold`}>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 