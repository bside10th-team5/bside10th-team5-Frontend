import styled from "styled-components";
import { GNB_H } from "../../styles/theme";

export const Section = styled.section`
  box-sizing: border-box;
  width: 1200px;
  padding: 52px 0 100px 0;
  margin: ${GNB_H}px auto 0 auto;
  border: 1px solid black;
`;

export const TemplateBox = styled.button`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  width: 384px;
  height: 312px;

  & > img {
    width: 100%;
    height: 260px;
  }
`;
