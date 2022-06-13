import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize"; 

//TODO: style 가이드 나오면 수정 해야댐
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "고딕", sans-serif;
    line-height: 1.5;
  }
`;
export default GlobalStyle;