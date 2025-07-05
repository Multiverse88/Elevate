'use client'
import { motion } from 'framer-motion'
import { useNavigation } from '@/contexts/NavigationContext'

export default function LoadingDemo() {
  const { startNavigation } = useNavigation()

  const triggerLoading = () => {
    startNavigation()
    // Simulate navigation delay
    setTimeout(() => {
      // Navigation would complete here
    }, 2000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={triggerLoading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-medium"
      >
        Test Loading Animation
      </motion.button>
    </div>
  )
} 