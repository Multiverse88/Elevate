'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'

export default function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  const imageRef = useRef(null)
  const floatingElementsRef = useRef([])
  const decorativeShapesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], { 
        opacity: 0, 
        y: 50 
      })
      gsap.set(imageRef.current, { 
        opacity: 0, 
        scale: 0.8, 
        rotation: -10 
      })
      gsap.set(floatingElementsRef.current, { 
        opacity: 0, 
        scale: 0, 
        rotation: -180 
      })
      gsap.set(decorativeShapesRef.current, { 
        opacity: 0, 
        scale: 0 
      })

      // Main timeline
      const tl = gsap.timeline()

      // Decorative shapes appear first
      tl.to(decorativeShapesRef.current, {
        opacity: 0.3,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
      })

      // Text animations
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")

      // Image animation
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
      }, "-=0.8")

      // Floating elements
      .to(floatingElementsRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5")

      // Continuous floating animations
      floatingElementsRef.current.forEach((el, index) => {
        gsap.to(el, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-15, 15)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        })
      })

      // Decorative shapes continuous animation
      decorativeShapesRef.current.forEach((el, index) => {
        gsap.to(el, {
          rotation: 360,
          duration: "random(10, 20)",
          repeat: -1,
          ease: "none"
        })
        gsap.to(el, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        })
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen relative overflow-hidden">
      {/* Animated Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large decorative circles */}
        <div 
          ref={el => decorativeShapesRef.current[0] = el}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10"
        ></div>
        <div 
          ref={el => decorativeShapesRef.current[1] = el}
          className="absolute top-40 left-10 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-15"
        ></div>
        <div 
          ref={el => decorativeShapesRef.current[2] = el}
          className="absolute bottom-32 right-32 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20"
        ></div>
        
        {/* Geometric shapes */}
        <div 
          ref={el => decorativeShapesRef.current[3] = el}
          className="absolute top-60 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 transform rotate-45 opacity-15"
        ></div>
        <div 
          ref={el => decorativeShapesRef.current[4] = el}
          className="absolute bottom-60 left-20 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-20"
        ></div>
        
        {/* Small accent dots */}
        <div 
          ref={el => decorativeShapesRef.current[5] = el}
          className="absolute top-80 left-40 w-6 h-6 bg-blue-500 rounded-full opacity-30"
        ></div>
        <div 
          ref={el => decorativeShapesRef.current[6] = el}
          className="absolute top-96 right-60 w-8 h-8 bg-green-500 rounded-full opacity-25"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm">
              <span className="mr-2">✨</span>
              100% Satisfaction Guarantee
            </div>
            
            <h1 ref={titleRef} className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Learn <span className="text-blue-600">Skills</span> From<br />
              Our Top Instructors
            </h1>
            
            <p ref={subtitleRef} className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Borem ipsum dolor sit amet consectetur adipiscing area we followt.
            </p>
            
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg transform hover:scale-105">
                EXPLORE COURSES
              </button>
              <div className="flex items-center text-gray-700">
                <div className="flex items-center mr-4">
                  <span className="text-2xl mr-2">📞</span>
                  <div>
                    <p className="text-sm text-gray-500">Have any Question?</p>
                    <p className="font-semibold">993-00-67777</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image with Stats */}
          <div className="relative">
            <div ref={imageRef} className="relative z-10">
              {/* Main image container */}
              <div className="relative">
                <Image 
                  src="/images/character.png" 
                  alt="Student" 
                  width={500} 
                  height={500} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div 
              ref={el => floatingElementsRef.current[0] = el}
              className="absolute top-20 -left-10 bg-white p-4 rounded-xl shadow-lg border"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-2xl">👥</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">15K</p>
                </div>
              </div>
            </div>

            <div 
              ref={el => floatingElementsRef.current[1] = el}
              className="absolute top-40 -right-10 bg-white p-4 rounded-xl shadow-lg border"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 text-2xl">🎓</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Complete Graduation</p>
                  <p className="text-2xl font-bold text-gray-900">34K</p>
                </div>
              </div>
            </div>

            {/* Additional floating icons */}
            <div 
              ref={el => floatingElementsRef.current[2] = el}
              className="absolute -top-5 right-20 bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg shadow-lg"
            >
              <span className="text-2xl text-white">📚</span>
            </div>
            
            <div 
              ref={el => floatingElementsRef.current[3] = el}
              className="absolute bottom-10 -left-5 bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-lg shadow-lg"
            >
              <span className="text-2xl text-white">✏️</span>
            </div>
            
            <div 
              ref={el => floatingElementsRef.current[4] = el}
              className="absolute bottom-32 right-10 bg-gradient-to-br from-green-400 to-blue-500 p-3 rounded-lg shadow-lg"
            >
              <span className="text-2xl text-white">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 