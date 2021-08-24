import React, { createContext, useContext, useState } from 'react'

const CalculationsContext = createContext()

const informationsFormProps = {
  age: 0,
  height: 0,
  weight: 0
}

export function CalculationsProvider({ children }) {
  const [genreType, setGenreType] = useState('women')
  const [informationsFormData, setInformationsFormData] = useState(
    informationsFormProps
  )
  const [physicalActivityType, setPhysicalActivityType] = useState('moderate')
  const [imc, setImc] = useState(0)

  return (
    <CalculationsContext.Provider
      value={{
        genreType,
        setGenreType,
        informationsFormData,
        setInformationsFormData,
        physicalActivityType,
        setPhysicalActivityType,
        setImc,
        imc,
        history
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
