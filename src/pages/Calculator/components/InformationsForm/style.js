import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 1.5rem;

  & p {
    font-weight: 400;
    font-size: 1rem;
    color: #363f5f;
  }
`

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  & small {
    width: 50px;
    margin-left: 10px;
    font-size: 0.65em;
    opacity: 0.7;
    color: #363f5f;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  margin-bottom: 1rem;

  &::placeholder {
    color: #969cb3;
  }
`
