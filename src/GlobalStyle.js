import { createGlobalStyle } from "styled-components";
import background from "./GTA-SA-wallpaper.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: auto;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    max-width: 1200px;
    font-family: 'Saira Stencil One', cursive;
    text-align: center;
    background-image: url("${background}");
    overflow: visible;
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
}
`;
