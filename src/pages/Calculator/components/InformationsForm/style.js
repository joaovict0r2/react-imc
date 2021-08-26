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

  &::placeholder {
    color: #969cb3;
  }
`
export const ContainerButton = styled.section`
  margin-bottom: 5px;
`

export const Button = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 3rem;
  background: #33cc95;
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  box-shadow: 0 2px 0 #13a974;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const DivError = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`
