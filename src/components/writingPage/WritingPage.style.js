import styled from "styled-components";
import { GNB_H, WHITE } from "../../styles/theme";

export const Section = styled.section`
  box-sizing: border-box;
  width: 1200px;
  padding: 52px 0 100px 0;
  margin: ${GNB_H}px auto 0 auto;
  border: 1px solid black;
`;

export const TemplateBoxWrapper = styled.button`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  width: 384px;
  height: 312px;

  & > img {
    width: 100%;
    height: 260px;
  }

  & > .hover-text {
    position: absolute;
    width: 384px;
    height: 260px;
    background: rgba(17, 17, 17, 0.5);
    color: ${WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
