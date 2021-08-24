import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 355px;
  background-color: #f0f2f5;
  border-radius: 7px;
`

export const Content = styled.section`
  padding: 10px 20px;

  & h3 {
    color: #363f5f;
  }

  & p {
    color: #363f5f;
    font-size: 19px;
  }

  table {
    color: #363f5f;
    width: 100%;
    background: ${transparentize(0.81, '#33CC95')};
    border-radius: 5px;
    margin-bottom: 5px;
  }

  td,
  th {
    padding-left: 8px;
    text-align: center;
    font-size: 20px;
  }

  thead tr {
    height: 60px;
    font-size: 16px;
  }

  tbody tr {
    height: 48px;
    border-bottom: 1px solid #e3f1d5;
    &:last-child {
      border: 0;
    }
  }
`
