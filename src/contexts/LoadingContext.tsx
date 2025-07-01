'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface LoadingContextType {
  loading: boolean
  setLoading: (isLoading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true) // Initially true for the loading screen

  // This useEffect will run once after the initial render of the children
  useEffect(() => {
    // You might want to add a minimum display time for the loading screen here
    // For now, it will hide as soon as the content is ready.
    setLoading(false)
  }, [])

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
