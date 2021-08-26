import React, { useState } from 'react'
import GenreRadioBox from './components/GenreRadioBox'
import InformationsForm from './components/InformationsForm'
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
            <InformationsForm setHasFinished={setHasFinished} setImc={setImc} />
          </Content>
        </Container>
      )}
    </>
  )
}
