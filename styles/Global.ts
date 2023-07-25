import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px !important;
    box-sizing: border-box;
    background: #F2F8F8;
    font-size: 14px;
    font-family: NotoSans, sans-serif;   
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
  }
`;
