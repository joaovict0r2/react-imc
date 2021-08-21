import React from 'react'
import { useCalculations } from '../../../../hooks/useCalculations'
import { Container, RadioBox, RadioBoxContainer } from './style'

export default function GenreRadioBox() {
  const { genreType, setGenreType } = useCalculations()

  return (
    <Container>
      <p>Sexo</p>
      <RadioBoxContainer>
        <RadioBox
          type="button"
          onClick={() => setGenreType('women')}
          isActive={genreType === 'women'}
        >
          Mulher
        </RadioBox>
        <RadioBox
          type="button"
          onClick={() => setGenreType('men')}
          isActive={genreType === 'men'}
        >
          Homem
        </RadioBox>
      </RadioBoxContainer>
    </Container>
  )
}
