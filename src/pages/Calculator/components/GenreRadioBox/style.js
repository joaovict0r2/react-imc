import styled from 'styled-components'

export const Container = styled.section``

export const RadioBoxContainer = styled.div`
  button:first-child {
    padding: 8px 10px;
    width: 100%;
    border-radius: 5px 0 0 5px;
    border: 1px solid #585858;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.91);
    }
  }

  button {
    padding: 8px 10px;
    width: 100%;
    border-radius: 0 5px 5px 0;
    border: 1px solid #585858;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.91);
    }
  }
`

export const RadioBox = styled.button``
