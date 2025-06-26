import Image from 'next/image'

const features = [
  { 
    title: 'Exclusive Coach', 
    desc: 'Our tutors who are specialist in their respective subjects.',
    icon: '👨‍🏫'
  },
  { 
    title: 'Master Certified', 
    desc: 'Get specialized certification from our masters subject.',
    icon: '🏆'
  },
  { 
    title: 'Creative Minds', 
    desc: 'Unlock your creative abilities with our unique methods.',
    icon: '🧠'
  },
  { 
    title: 'Video Tutorials', 
    desc: 'Access comprehensive video lessons anytime, anywhere.',
    icon: '🎥'
  },
]

export default function CoachingSection() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main circular background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue to-brand-medium-blue rounded-full transform scale-110 opacity-20"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-brand-light-gray to-white rounded-full opacity-80"></div>
              
              {/* Coach image */}
              <div className="relative z-20 flex justify-center items-center h-96">
                <div className="text-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-white to-brand-light-gray rounded-full flex items-center justify-center">
                    <div className="text-6xl">👨‍💼</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-brand-gold bg-opacity-20 text-brand-dark-navy px-4 py-2 rounded-full text-sm font-medium font-barlow">
              <span className="mr-2">🎯</span>
              About Us
            </div>
            
            <h2 className="text-4xl font-bold text-brand-dark-navy leading-tight font-kelvinch">
              We Offering Coaching by{' '}
              <span className="text-brand-medium-blue">Skilled Advisors</span>
            </h2>
            
            <p className="text-brand-dark-navy opacity-80 text-lg leading-relaxed font-barlow">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam 
              consequat sunt nostrud amet.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-lg bg-white bg-opacity-50 hover:bg-opacity-80 transition-colors">
                  <div className="w-10 h-10 bg-brand-light-blue bg-opacity-30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark-navy mb-1 font-barlow-bold">
                      {feature.title}
                    </h4>
                    <p className="text-brand-dark-navy opacity-70 text-sm font-barlow">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-brand-medium-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-dark-navy transition-all font-barlow-bold">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 