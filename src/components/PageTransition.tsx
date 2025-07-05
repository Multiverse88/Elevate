'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
}

const loadingVariants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Page Transition Loading Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Loading Spinner for Page Transitions */}
      <AnimatePresence>
        <motion.div
          key="loading-spinner"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={loadingVariants}
          className="fixed inset-0 bg-white/90 backdrop-blur-sm z-[9999] flex items-center justify-center"
          style={{ pointerEvents: 'none' }}
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <img
                src="/images/logos/Logo Elevate.png"
                alt="Elevate Academia"
                className="w-16 h-16 mx-auto rounded-full shadow-lg"
              />
            </motion.div>

            {/* Spinner */}
            <motion.div
              variants={spinnerVariants}
              animate="animate"
              className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full mx-auto"
            />

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 text-sm text-gray-600 font-medium"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
} 