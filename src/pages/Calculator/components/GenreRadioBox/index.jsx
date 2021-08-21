import React from 'react'
import { Container, RadioBox, RadioBoxContainer } from './style'

export default function GenreRadioBox() {
  return (
    <Container>
      <p>Sexo</p>
      <RadioBoxContainer>
        <RadioBox type="button">Mulher</RadioBox>
        <RadioBox type="button">Homem</RadioBox>
      </RadioBoxContainer>
    </Container>
  )
}
