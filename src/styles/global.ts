import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {

        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.textPrimary};
        font: 400 1.6rem Roboto, sans-serif;
    }

    a {
      text-decoration: none;

    }

`;
