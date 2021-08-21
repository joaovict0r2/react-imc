import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #282c34;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: calc(5px + 2vmin);
    font-family: 'Roboto', sans-serif;
    color: white;
  }
`
