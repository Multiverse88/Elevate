'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useNavigation } from '@/contexts/NavigationContext'

interface AnimatedLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  as?: 'link' | 'button'
}

export default function AnimatedLink({ 
  href, 
  children, 
  className = '', 
  onClick,
  as = 'link'
}: AnimatedLinkProps) {
  const { startNavigation } = useNavigation()

  const handleClick = () => {
    // Start navigation loading animation
    startNavigation()
    
    // Call custom onClick if provided
    if (onClick) {
      onClick()
    }
  }

  if (as === 'button') {
    return (
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <Link href={href} onClick={handleClick}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {children}
      </motion.div>
    </Link>
  )
} 