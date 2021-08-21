import React from 'react'
import GenreRadioBox from './components/GenreRadioBox'
import InformationsForm from './components/InformationsForm'
import { Container, Content } from './style'

export default function Calculator() {
  return (
    <Container>
      <Content>
        <GenreRadioBox />
        <InformationsForm />
      </Content>
    </Container>
  )
}
