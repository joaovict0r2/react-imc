import React from 'react'
import { useCalculations } from '../../../../hooks/useCalculations'
import { Container, Input, InputContent } from './style'

export default function InformationsForm() {
  const { informationsFormData, setInformationsFormData } = useCalculations()

  return (
    <Container>
      <p>Idade</p>
      <InputContent>
        <Input
          onChange={e =>
            setInformationsFormData({
              ...informationsFormData,
              age: Number(e.target.value)
            })
          }
          value={informationsFormData.age || ''}
          placeholder="36"
        />
        <small>anos</small>
      </InputContent>

      <p>Altura</p>
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
        />
        <small>m</small>
      </InputContent>

      <p>Peso</p>
      <InputContent>
        <Input
          onChange={e =>
            setInformationsFormData({
              ...informationsFormData,
              weight: Number(e.target.value)
            })
          }
          value={informationsFormData.weight || ''}
          placeholder="73"
        />
        <small>kg</small>
      </InputContent>
    </Container>
  )
}
