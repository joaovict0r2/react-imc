import styled from 'styled-components'

export const Container = styled.section`
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
