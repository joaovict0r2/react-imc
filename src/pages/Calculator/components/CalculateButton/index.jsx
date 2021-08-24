import React from 'react'
import { useHistory } from 'react-router-dom'
import { useCalculations } from '../../../../hooks/useCalculations'
import { Button, Container } from './style'

export default function CalculateButton() {
  const history = useHistory()

  const {
    informationsFormData,
    setImc,
    setGenreType,
    setInformationsFormData,
    setPhysicalActivityType
  } = useCalculations()

  function handleCalculationButton() {
    const { weight, height } = informationsFormData

    const imcCalculation = weight / (height * height)

    setImc(imcCalculation)

    setGenreType('women')
    setInformationsFormData({
      age: 0,
      height: 0,
      weight: 0
    })
    setPhysicalActivityType('moderate')
    history.push('/finished')
  }

  return (
    <Container>
      <Button
        onClick={() => {
          handleCalculationButton()
        }}
        type="button"
      >
        Calcular
      </Button>
    </Container>
  )
}
