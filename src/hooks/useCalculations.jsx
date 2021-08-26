import React, { createContext, useContext, useState } from 'react'

const CalculationsContext = createContext()

export function CalculationsProvider({ children }) {
  const [genreType, setGenreType] = useState('women')
  const [informationsFormData, setInformationsFormData] = useState({})
  const [physicalActivityType, setPhysicalActivityType] = useState('moderate')
  const [inputsElements, setInputsElements] = useState({})

  return (
    <CalculationsContext.Provider
      value={{
        genreType,
        setGenreType,
        informationsFormData,
        setInformationsFormData,
        physicalActivityType,
        setPhysicalActivityType,
        history,
        setInputsElements,
        inputsElements
      }}
    >
      {children}
    </CalculationsContext.Provider>
  )
}

export function useCalculations() {
  const context = useContext(CalculationsContext)

  return context
}
