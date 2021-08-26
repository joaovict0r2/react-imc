import React, { useState } from 'react'
import CalculateButton from './components/CalculateButton'
import GenreRadioBox from './components/GenreRadioBox'
import InformationsForm from './components/InformationsForm'
import PhysicalActivityRadioBox from './components/PhysicalActivityRadioBox'
import CalculationCompleted from '../CalculationCompleted'
import { Container, Content } from './style'

export default function Calculator() {
  const [hasFinished, setHasFinished] = useState(false)
  const [imc, setImc] = useState(0)

  return (
    <>
      {hasFinished ? (
        <CalculationCompleted setHasFinished={setHasFinished} imc={imc} />
      ) : (
        <Container>
          <Content>
            <GenreRadioBox />
            <InformationsForm />
            <PhysicalActivityRadioBox />
            <CalculateButton setHasFinished={setHasFinished} setImc={setImc} />
          </Content>
        </Container>
      )}
    </>
  )
}
