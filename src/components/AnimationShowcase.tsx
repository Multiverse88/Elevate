'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FloatingDecorations from './FloatingDecorations'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AnimationShowcase() {
  const showcaseRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, { opacity: 0, y: 50, scale: 0.8 })
      gsap.set(cardsRef.current, { opacity: 0, y: 100, rotationY: 90 })

      // Create main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      })
      .to(cardsRef.current, {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.5")

      // Add interactive hover effects
      cardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              y: -10,
              rotationY: 5,
              duration: 0.3,
              ease: "power2.out"
            })
          })
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              rotationY: 0,
              duration: 0.3,
              ease: "power2.out"
            })
          })
        }
      })

    }, showcaseRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      title: "GSAP Hero Animations",
      description: "Smooth entrance animations with floating elements and text reveals",
      icon: "🚀",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "ScrollTrigger Effects",
      description: "Elements animate in as they enter the viewport",
      icon: "📜",
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Interactive Hover States",
      description: "Smooth micro-interactions on card hover and click",
      icon: "✨",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Floating Decorations",
      description: "Continuous floating background elements with random movement",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <section ref={showcaseRef} className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingDecorations variant="section" density="heavy" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-5xl font-bold text-gray-900 mb-6">
            🎭 Animation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience smooth GSAP animations with floating decorative elements, just like the reference design!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              ref={el => { cardsRef.current[idx] = el }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated progress bar */}
                <div className="mt-6 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${feature.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="mr-2">🎯</span>
            Explore Our Animated Services
            <span className="ml-2">→</span>
          </div>
        </div>
      </div>
    </section>
  )
} 