'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface NavigationContextType {
  isNavigating: boolean
  startNavigation: () => void
  stopNavigation: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false)

  const startNavigation = () => {
    setIsNavigating(true)
  }

  const stopNavigation = () => {
    setIsNavigating(false)
  }

  return (
    <NavigationContext.Provider value={{ isNavigating, startNavigation, stopNavigation }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
} 