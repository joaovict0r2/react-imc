import React from 'react'
import CalculateButton from './components/CalculateButton'
import GenreRadioBox from './components/GenreRadioBox'
import InformationsForm from './components/InformationsForm'
import PhysicalActivityRadioBox from './components/PhysicalActivityRadioBox'
import { Container, Content } from './style'

export default function Calculator() {
  return (
    <Container>
      <Content>
        <GenreRadioBox />
        <InformationsForm />
        <PhysicalActivityRadioBox />
        <CalculateButton />
      </Content>
    </Container>
  )
}
