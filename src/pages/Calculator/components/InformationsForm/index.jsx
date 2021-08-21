import React from 'react'
import { Container, Input, InputContent } from './style'

export default function InformationsForm() {
  return (
    <Container>
      <p>Idade</p>
      <InputContent>
        <Input placeholder="36" />
        <small>anos</small>
      </InputContent>

      <p>Altura</p>
      <InputContent>
        <Input placeholder="1.60" />
        <small>m</small>
      </InputContent>

      <p>Peso</p>
      <InputContent>
        <Input placeholder="73" />
        <small>kg</small>
      </InputContent>
    </Container>
  )
}
