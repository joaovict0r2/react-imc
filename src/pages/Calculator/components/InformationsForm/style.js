import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 1.5rem;
`

export const InputContent = styled.div`
  display: flex;
  align-items: center;

  & small {
    width: 50px;
    margin-left: 10px;
    font-size: 0.65em;
    opacity: 0.65;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 5px;
  border: 2px solid #585858;
  margin-bottom: 0.8rem;
`
