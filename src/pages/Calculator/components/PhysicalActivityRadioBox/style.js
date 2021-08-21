import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.section`
  margin-top: 0.5rem;

  & p {
    font-weight: 400;
    font-size: 1rem;
    color: #363f5f;
  }
`

export const RadioBoxContainer = styled.div`
  display: flex;
  margin-top: 8px;

  button:first-child {
    padding: 8px 10px;
    width: 100%;
    border-radius: 0.25rem 0 0 0.25rem;
    border: 1px solid #d7d7d7;
    cursor: pointer;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.12, '#d7d7d7')};
    }
  }

  button {
    padding: 8px 10px;
    width: 100%;
    border: 1px solid #d7d7d7;
    cursor: pointer;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.12, '#d7d7d7')};
    }
  }

  button:last-child {
    padding: 8px 10px;
    width: 100%;
    border-radius: 0 0.25rem 0.25rem 0;
    border: 1px solid #d7d7d7;
    cursor: pointer;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.12, '#d7d7d7')};
    }
  }
`
const color = {
  green: '#33CC95'
}

export const RadioBox = styled.button`
  background: ${props =>
    props.isActive ? transparentize(0.81, color.green) : 'white'};
`
