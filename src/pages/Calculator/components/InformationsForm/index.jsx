import React, { useState } from 'react'
import { useCalculations } from '../../../../hooks/useCalculations'
import {
  Container,
  Input,
  InputContent,
  ContainerButton,
  Button,
  DivError
} from './style'
import PhysicalActivityRadioBox from '../PhysicalActivityRadioBox'

export default function InformationsForm({ setHasFinished, setImc }) {
  const {
    informationsFormData,
    setGenreType,
    setInformationsFormData,
    setPhysicalActivityType
  } = useCalculations()
  const [hasError, setHasError] = useState(false)

  function handleCalculationButton() {
    if (Object.entries(informationsFormData).length === 0) {
      setHasError(true)
      return
    }

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
    setHasFinished(true)
  }

  return (
    <>
      <Container>
        <p>Idade</p>
        <div>
          <InputContent>
            <Input
              onChange={e =>
                setInformationsFormData({
                  ...informationsFormData,
                  age: e.target.value
                })
              }
              value={informationsFormData.age || ''}
              placeholder="36"
              id="ageInput"
            />
            <small>anos</small>
          </InputContent>
          <DivError style={{ visibility: hasError ? 'visible' : 'hidden' }}>
            Preencha o campo idade
          </DivError>
        </div>

        <p>Altura</p>
        <div>
          <InputContent>
            <Input
              onChange={e =>
                setInformationsFormData({
                  ...informationsFormData,
                  height: e.target.value
                })
              }
              value={informationsFormData.height || ''}
              placeholder="1.63"
              id="heightInput"
            />
            <small>m</small>
          </InputContent>
          <DivError style={{ visibility: hasError ? 'visible' : 'hidden' }}>
            Preencha o campo Altura
          </DivError>
        </div>

        <p>Peso</p>
        <div>
          <InputContent>
            <Input
              onChange={e =>
                setInformationsFormData({
                  ...informationsFormData,
                  weight: e.target.value
                })
              }
              value={informationsFormData.weight || ''}
              placeholder="73"
              id="weightInput"
            />
            <small>kg</small>
          </InputContent>
          <DivError style={{ visibility: hasError ? 'visible' : 'hidden' }}>
            Preencha o campo Peso
          </DivError>
        </div>
      </Container>
      <PhysicalActivityRadioBox />
      <ContainerButton>
        <Button
          onClick={() => {
            handleCalculationButton()
          }}
          type="button"
        >
          Calcular
        </Button>
      </ContainerButton>
    </>
  )
}
