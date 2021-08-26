import React from 'react'
import { useCalculations } from '../../../../hooks/useCalculations'
import { Button, Container } from './style'

export default function CalculateButton({ setHasFinished, setImc }) {
  const {
    informationsFormData,
    setGenreType,
    setInformationsFormData,
    setPhysicalActivityType
  } = useCalculations()

  function handleCalculationButton() {
    const { weight, height } = informationsFormData

    const imcCalculation = weight / (height * height)
    console.log(imcCalculation.toFixed(2))

    setImc(imcCalculation.toFixed(2))

    setGenreType('women')
    setInformationsFormData({
      age: 0,
      height: 0,
      weight: 0
    })
    setPhysicalActivityType('moderate')
  }

  return (
    <Container>
      <Button
        onClick={() => {
          handleCalculationButton()
          setHasFinished(true)
        }}
        type="button"
      >
        Calcular
      </Button>
    </Container>
  )
}
