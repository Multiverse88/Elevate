'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface AnimatedLanguageToggleProps {
  compact?: boolean
}

export default function AnimatedLanguageToggle({ compact = false }: AnimatedLanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  const isIndonesian = language === 'id'

  // Bouncing animation variants for the button
  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.1, 
      y: [0, -8, 0],
      transition: {
        scale: { duration: 0.2 },
        y: { duration: 0.6, ease: "easeInOut" }
      }
    },
    tap: { 
      scale: 0.9,
      y: [0, 4, 0],
      transition: {
        scale: { duration: 0.1 },
        y: { duration: 0.3, ease: "easeInOut" }
      }
    }
  }

  // Flag bounce and flip animation
  const flagVariants = {
    initial: { scale: 1, rotateY: 0, y: 0 },
    hover: { 
      scale: 1.4, 
      rotateY: [0, 180, 360],
      y: [0, -5, 0],
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.6,
      rotateY: [0, -180, 0],
      y: [0, 3, 0],
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  // Text bounce animation
  const textVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.1,
      y: [0, -3, 0],
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9,
      y: [0, 2, 0],
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  // Color pulse animation
  const backgroundVariants = {
    initial: { 
      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
    },
    hover: { 
      background: [
        "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
        "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
      ],
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  }

  // Sparkle effect
  const sparkleVariants = {
    initial: { opacity: 0, scale: 0 },
    hover: { 
      opacity: [0, 1, 0],
      scale: [0, 1.2, 0],
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  if (compact) {
    return (
      <motion.button
        onClick={toggleLanguage}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="relative px-2 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md hover:shadow-xl transition-all duration-200 border border-white/20 overflow-hidden"
      >
        {/* Animated background */}
        <motion.div
          variants={backgroundVariants}
          className="absolute inset-0"
        />
        
        {/* Sparkle effects */}
        <motion.div
          variants={sparkleVariants}
          className="absolute top-1 right-1 w-1 h-1 bg-yellow-300 rounded-full"
        />
        <motion.div
          variants={sparkleVariants}
          className="absolute bottom-1 left-1 w-1 h-1 bg-yellow-300 rounded-full"
          style={{ animationDelay: '0.2s' }}
        />
        <motion.div
          variants={sparkleVariants}
          className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-yellow-300 rounded-full"
          style={{ animationDelay: '0.4s' }}
        />
        
        {/* Content */}
        <div className="relative flex items-center space-x-1.5">
          <motion.div
            variants={flagVariants}
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.span
              className="text-base"
            >
              {isIndonesian ? '🇮🇩' : '🇺🇸'}
            </motion.span>
          </motion.div>
          <motion.span
            variants={textVariants}
            className="text-xs font-semibold"
          >
            {isIndonesian ? 'ID' : 'EN'}
          </motion.span>
        </div>

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: [0, 0.4, 0] }}
          transition={{ duration: 0.6 }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg blur-sm"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    )
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className="relative px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md hover:shadow-xl transition-all duration-200 border border-white/20 overflow-hidden group"
    >
      {/* Animated background */}
      <motion.div
        variants={backgroundVariants}
        className="absolute inset-0"
      />
      
      {/* Sparkle effects */}
      <motion.div
        variants={sparkleVariants}
        className="absolute top-2 right-2 w-1.5 h-1.5 bg-yellow-300 rounded-full"
      />
      <motion.div
        variants={sparkleVariants}
        className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-yellow-300 rounded-full"
        style={{ animationDelay: '0.2s' }}
      />
      <motion.div
        variants={sparkleVariants}
        className="absolute top-1 left-1 w-1 h-1 bg-yellow-300 rounded-full"
        style={{ animationDelay: '0.4s' }}
      />
      
      {/* Content */}
      <div className="relative flex items-center space-x-2">
        <motion.div
          variants={flagVariants}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.span
            className="text-lg"
          >
            {isIndonesian ? '🇮🇩' : '🇺🇸'}
          </motion.span>
        </motion.div>
        <motion.span
          variants={textVariants}
          className="text-sm font-semibold"
        >
          {isIndonesian ? 'ID' : 'EN'}
        </motion.span>
      </div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: [0, 0.4, 0] }}
        transition={{ duration: 0.6 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg blur-sm"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
} 