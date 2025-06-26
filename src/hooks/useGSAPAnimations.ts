import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAPAnimations = () => {
  // Fade in from bottom animation
  const useFadeInUp = (dependencies: any[] = []) => {
    const elementRef = useRef(null)
    
    useEffect(() => {
      if (!elementRef.current) return
      
      const ctx = gsap.context(() => {
        gsap.set(elementRef.current, { opacity: 0, y: 50 })
        
        gsap.to(elementRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      }, elementRef)
      
      return () => ctx.revert()
    }, dependencies)
    
    return elementRef
  }

  // Staggered cards animation
  const useStaggeredCards = (dependencies: any[] = []) => {
    const containerRef = useRef(null)
    const cardsRef = useRef([])
    
    useEffect(() => {
      if (!containerRef.current) return
      
      const ctx = gsap.context(() => {
        gsap.set(cardsRef.current, { opacity: 0, y: 80, scale: 0.8 })
        
        gsap.to(cardsRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      }, containerRef)
      
      return () => ctx.revert()
    }, dependencies)
    
    return { containerRef, cardsRef }
  }

  // Floating elements animation
  const useFloatingElements = (dependencies: any[] = []) => {
    const elementsRef = useRef([])
    
    useEffect(() => {
      const ctx = gsap.context(() => {
        elementsRef.current.forEach((el, index) => {
          if (el) {
            gsap.to(el, {
              y: "random(-20, 20)",
              x: "random(-15, 15)",
              rotation: "random(-15, 15)",
              duration: "random(3, 6)",
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.2
            })
          }
        })
      })
      
      return () => ctx.revert()
    }, dependencies)
    
    return elementsRef
  }

  // Modal animations
  const useModalAnimations = () => {
    const modalRef = useRef(null)
    const contentRef = useRef(null)
    const fieldsRef = useRef([])
    
    const openModal = () => {
      gsap.set(modalRef.current, { visibility: 'visible' })
      
      const tl = gsap.timeline()
      
      tl.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(contentRef.current, {
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.1")
      .to(fieldsRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.2")
    }
    
    const closeModal = (onComplete?: () => void) => {
      const tl = gsap.timeline({
        onComplete
      })
      
      tl.to(fieldsRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in"
      })
      .to(contentRef.current, {
        scale: 0.7,
        y: 50,
        duration: 0.3,
        ease: "back.in(1.7)"
      }, "-=0.1")
      .to(modalRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      }, "-=0.1")
    }
    
    return {
      modalRef,
      contentRef,
      fieldsRef,
      openModal,
      closeModal
    }
  }

  // Hover scale effect
  const useHoverScale = (scale = 1.05) => {
    const elementRef = useRef(null)
    
    useEffect(() => {
      if (!elementRef.current) return
      
      const element = elementRef.current
      
      const handleMouseEnter = () => {
        gsap.to(element, {
          scale,
          duration: 0.3,
          ease: "power2.out"
        })
      }
      
      const handleMouseLeave = () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      }
      
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, [scale])
    
    return elementRef
  }

  return {
    useFadeInUp,
    useStaggeredCards,
    useFloatingElements,
    useModalAnimations,
    useHoverScale
  }
}

export default useGSAPAnimations 