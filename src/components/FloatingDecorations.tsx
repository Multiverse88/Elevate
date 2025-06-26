'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface FloatingDecorationsProps {
  variant?: 'hero' | 'section' | 'footer'
  density?: 'light' | 'medium' | 'heavy'
}

export default function FloatingDecorations({ 
  variant = 'section', 
  density = 'medium' 
}: FloatingDecorationsProps) {
  const containerRef = useRef(null)
  const elementsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(elementsRef.current, { opacity: 0, scale: 0, rotation: -180 })

      // Animate in
      gsap.to(elementsRef.current, {
        opacity: 0.7,
        scale: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.5
      })

      // Continuous floating animations
      elementsRef.current.forEach((el, index) => {
        if (el) {
          // Random floating movement
          gsap.to(el, {
            y: "random(-20, 20)",
            x: "random(-15, 15)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          })

          // Random rotation
          gsap.to(el, {
            rotation: "random(-15, 15)",
            duration: "random(4, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3
          })

          // Occasional scale pulse
          gsap.to(el, {
            scale: "random(0.8, 1.2)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5
          })
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const getElementsByVariant = () => {
    switch (variant) {
      case 'hero':
        return [
          { size: 'w-32 h-32', bg: 'bg-gradient-to-br from-blue-400 to-purple-500', shape: 'rounded-full', position: 'top-20 right-20', opacity: 'opacity-10' },
          { size: 'w-24 h-24', bg: 'bg-gradient-to-br from-green-400 to-blue-500', shape: 'rounded-full', position: 'top-40 left-10', opacity: 'opacity-15' },
          { size: 'w-20 h-20', bg: 'bg-gradient-to-br from-orange-400 to-pink-500', shape: 'rounded-full', position: 'bottom-32 right-32', opacity: 'opacity-20' },
          { size: 'w-16 h-16', bg: 'bg-gradient-to-br from-purple-400 to-blue-500', shape: 'transform rotate-45', position: 'top-60 right-10', opacity: 'opacity-15' },
          { size: 'w-6 h-6', bg: 'bg-blue-500', shape: 'rounded-full', position: 'top-80 left-40', opacity: 'opacity-30' },
        ]
      case 'footer':
        return [
          { size: 'w-16 h-16', bg: 'bg-gradient-to-br from-blue-300 to-purple-400', shape: 'rounded-full', position: 'top-10 right-20', opacity: 'opacity-20' },
          { size: 'w-12 h-12', bg: 'bg-gradient-to-br from-green-300 to-blue-400', shape: 'transform rotate-45', position: 'bottom-10 left-20', opacity: 'opacity-25' },
          { size: 'w-8 h-8', bg: 'bg-gradient-to-br from-orange-300 to-red-400', shape: 'rounded-lg', position: 'top-20 left-1/3', opacity: 'opacity-20' },
        ]
      default: // section
        return [
          { size: 'w-20 h-20', bg: 'bg-gradient-to-br from-blue-400 to-purple-500', shape: 'rounded-full', position: 'top-20 left-20', opacity: 'opacity-10' },
          { size: 'w-16 h-16', bg: 'bg-gradient-to-br from-green-400 to-blue-500', shape: 'transform rotate-45', position: 'top-40 right-40', opacity: 'opacity-15' },
          { size: 'w-24 h-24', bg: 'bg-gradient-to-br from-orange-400 to-red-500', shape: 'rounded-full', position: 'bottom-40 left-40', opacity: 'opacity-10' },
          { size: 'w-12 h-12', bg: 'bg-gradient-to-br from-purple-400 to-pink-500', shape: 'rounded-lg', position: 'bottom-20 right-20', opacity: 'opacity-20' },
        ]
    }
  }

  const elements = getElementsByVariant()
  const densityMultiplier = density === 'light' ? 0.5 : density === 'heavy' ? 1.5 : 1
  const displayElements = elements.slice(0, Math.ceil(elements.length * densityMultiplier))

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {displayElements.map((element, index) => (
        <div
          key={index}
          ref={el => { elementsRef.current[index] = el }}
          className={`absolute ${element.size} ${element.bg} ${element.shape} ${element.position} ${element.opacity}`}
        ></div>
      ))}
      
      {/* Additional accent dots for medium/heavy density */}
      {density !== 'light' && (
        <>
          <div 
            ref={el => { elementsRef.current[displayElements.length] = el }}
            className="absolute top-32 left-1/3 w-4 h-4 bg-blue-500 rounded-full opacity-30"
          ></div>
          <div 
            ref={el => { elementsRef.current[displayElements.length + 1] = el }}
            className="absolute bottom-32 right-1/3 w-6 h-6 bg-green-500 rounded-full opacity-25"
          ></div>
        </>
      )}
    </div>
  )
} 