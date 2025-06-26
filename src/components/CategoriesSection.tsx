import Image from 'next/image'

const categories = [
  { 
    title: 'Business', 
    icon: '🚀',
    bgColor: 'bg-gradient-to-br from-brand-light-blue to-brand-medium-blue bg-opacity-20',
    iconBg: 'bg-brand-light-gray'
  },
  { 
    title: 'English', 
    icon: '🎨',
    bgColor: 'bg-gradient-to-br from-brand-cream to-brand-gold bg-opacity-30',
    iconBg: 'bg-brand-cream'
  },
  { 
    title: 'Finance', 
    icon: '📊',
    bgColor: 'bg-gradient-to-br from-brand-medium-blue to-brand-dark-navy bg-opacity-20',
    iconBg: 'bg-brand-light-gray'
  },
  { 
    title: 'Content Writing', 
    icon: '💻',
    bgColor: 'bg-gradient-to-br from-brand-gold to-brand-cream bg-opacity-40',
    iconBg: 'bg-brand-gold bg-opacity-20'
  },
  { 
    title: 'Development', 
    icon: '⚛️',
    bgColor: 'bg-gradient-to-br from-brand-light-blue to-brand-light-gray',
    iconBg: 'bg-brand-light-blue bg-opacity-30'
  },
  { 
    title: 'Art & Design', 
    icon: '🎭',
    bgColor: 'bg-gradient-to-br from-brand-cream to-brand-light-gray',
    iconBg: 'bg-brand-cream'
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-gold bg-opacity-20 text-brand-dark-navy px-4 py-2 rounded-full text-sm font-medium mb-6 font-barlow">
            <span className="mr-2">📚</span>
            Courses Details
          </div>
          <h2 className="text-4xl font-bold text-brand-dark-navy mb-6 font-kelvinch">
            Explore Our Categories
          </h2>
          <p className="text-brand-dark-navy opacity-70 text-lg max-w-2xl mx-auto mb-8 font-barlow">
            A real estate mobile app designed by our company elite and also lorem  
            corporis, consequatur sunt unde
          </p>
          <button className="bg-brand-medium-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark-navy transition-all font-barlow-bold">
            All Categories →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className={`${category.bgColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer border border-white border-opacity-50`}>
              <div className={`${category.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-3xl">{category.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark-navy text-center font-barlow-bold">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 