import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
}

export const GlobalStyle = createGlobalStyle`
    *{
    margin:0;
    padding:0;
    box-sizing: border-box;
}



body{
    background: ${(props) => props.theme['base-gray']}; 
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
}

 body, button{
    font-weight: 700;
    font-size: 1rem;
    font-family: 'Open-sans', sans-serif;
}

a {
    color: inherit;
    text-decoration: none;

}
`
