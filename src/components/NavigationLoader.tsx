'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useNavigation } from '@/contexts/NavigationContext'

export default function NavigationLoader() {
  const pathname = usePathname()
  const { isNavigating, stopNavigation } = useNavigation()

  useEffect(() => {
    // Stop navigation when pathname changes (page has loaded)
    if (isNavigating) {
      const timer = setTimeout(() => {
        stopNavigation()
      }, 800) // Minimum loading time

      return () => clearTimeout(timer)
    }
  }, [pathname, isNavigating, stopNavigation])

  const overlayVariants = {
    initial: {
      opacity: 0,
      backdropFilter: 'blur(0px)'
    },
    animate: {
      opacity: 1,
      backdropFilter: 'blur(8px)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      backdropFilter: 'blur(0px)',
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  }

  const containerVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  }

  const logoVariants = {
    initial: { 
      opacity: 0, 
      y: 30, 
      scale: 0.8,
      rotate: -10
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      scale: 0.8,
      rotate: 10,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  }

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 15,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  }

  const progressVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { 
      width: '100%', 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        delay: 0.4
      }
    },
    exit: { 
      width: 0, 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isNavigating && (
        <motion.div
          key="navigation-loading"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={overlayVariants}
          className="fixed inset-0 bg-white/90 z-[9999] flex items-center justify-center"
        >
          <motion.div
            variants={containerVariants}
            className="text-center relative"
          >
            {/* Background Pulse Effect */}
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl"
              style={{ width: '200px', height: '200px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />

            {/* Logo */}
            <motion.div
              variants={logoVariants}
              className="relative mb-8"
            >
              <img
                src="/images/logos/Logo Elevate.png"
                alt="Elevate Academia"
                className="w-24 h-24 mx-auto rounded-full shadow-2xl border-4 border-white"
              />
            </motion.div>

            {/* Spinner */}
            <motion.div
              variants={spinnerVariants}
              animate="animate"
              className="relative w-12 h-12 mx-auto mb-6"
            >
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 rounded-full" style={{ animationDelay: '-0.5s' }}></div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              variants={textVariants}
              className="space-y-3"
            >
              <p className="text-xl font-bold text-gray-800">
                Loading...
              </p>
              <p className="text-sm text-gray-500 max-w-xs">
                Please wait while we prepare your page
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              variants={progressVariants}
              className="mt-8 mx-auto max-w-xs"
            >
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center space-x-1 mt-4"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-blue-500 rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 