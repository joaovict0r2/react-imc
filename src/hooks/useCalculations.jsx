import React, { createContext, useContext, useState } from 'react'

const CalculationsContext = createContext()

export function CalculationsProvider({ children }) {
  const [genreType, setGenreType] = useState('women')

  return (
    <CalculationsContext.Provider value={{ genreType, setGenreType }}>
      {children}
    </CalculationsContext.Provider>
  )
}

export function useCalculations() {
  const context = useContext(CalculationsContext)

  return context
}
