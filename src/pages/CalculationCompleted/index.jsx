import React from 'react'
import { Container, Content } from './style'
import { BiArrowBack } from 'react-icons/bi'

export default function CalculationCompleted({ setHasFinished, imc }) {
  const text = '< 18.5'
  const text2 = '> 30'

  function imcText(imc) {
    if (imc < 18.5) {
      return `🤔 Opa, seu IMC é ${imc} kg/m2 e você está abaixo do peso normal!`
    } else if (imc >= 18.5 && imc < 24.9) {
      return `🎉 Parabéns, seu IMC é ${imc} kg/m2 e você está dentro do peso adequado!`
    } else if (imc >= 24.9 && imc < 30) {
      return `🤔 Opa, seu IMC é ${imc} kg/m2 e você está com o peso acima do normal!`
    } else if (imc > 30) {
      return `😢 Coe meu mano, seu IMC é ${imc} kg/m2 e você está com o peso muito acima do peso normal!`
    }
  }

  const newImc = Number(imc)

  return (
    <Container>
      <Content>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BiArrowBack
            style={{ marginRight: '10px', color: '#363f5f', cursor: 'pointer' }}
            onClick={() => (window.location.href = '/')}
          />
          <h3>RESULTADO:</h3>
        </div>
        <p style={{ marginTop: '10px' }}>{imcText(newImc)}</p>
        <hr style={{ margin: '10px 0' }} />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>IMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Magreza</td>
              <td>{text}</td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>18.5 a 24.9</td>
            </tr>
            <tr>
              <td>Sobrepeso</td>
              <td>24.9 a 30</td>
            </tr>
            <tr>
              <td>Obesidade</td>
              <td>{text2}</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  )
}
