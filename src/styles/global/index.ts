import  styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle` 
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Saira', sans-serif;
  }

  html,
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    cursor: pointer;
    user-select: none;
  }
 
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Fundo da barra de rolagem */
  ::-webkit-scrollbar-track-piece {
      background-color: transparent;
      border-left: 0;
  }
  
  /* Cor do indicador de rolagem */
  ::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:horizontal {
      background-color: #ccc;
      border-radius: 25px;
  }
`
 