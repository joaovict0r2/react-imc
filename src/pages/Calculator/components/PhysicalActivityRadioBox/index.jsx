import React, { useState } from 'react'
import { Container, RadioBox, RadioBoxContainer } from './style'

export default function PhysicalActivityRadioBox() {
  const [physicalActivityType, setPhysicalActivityType] = useState('moderate')

  return (
    <Container>
      <p>Atividade Física</p>
      <RadioBoxContainer>
        <RadioBox
          type="button"
          onClick={() => setPhysicalActivityType('sedentary')}
          isActive={physicalActivityType === 'sedentary'}
        >
          Sedentária
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => setPhysicalActivityType('moderate')}
          isActive={physicalActivityType === 'moderate'}
        >
          Moderada
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => setPhysicalActivityType('intense')}
          isActive={physicalActivityType === 'intense'}
        >
          Intensa
        </RadioBox>
      </RadioBoxContainer>
    </Container>
  )
}
