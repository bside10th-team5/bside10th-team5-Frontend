import styled from "styled-components";
import { GRAY300, GRAY500, GRAY900 } from "../../../styles/theme";

export const Box = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "36px",
}))`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Title = styled.span`
  color: ${GRAY900};
  margin-bottom: 28px;
`;

export const ImgTitle = styled.input.attrs({ type: "text" })`
  border: none;
  outline: none;
  color: ${GRAY500};
  text-align: center;
  flex: 1;
`;

export const UploadBox = styled.div`
  border: 1px dashed ${GRAY300};
  width: 100%;
  height: 556px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > img {
    margin-bottom: 31px;
  }
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 28px;
`;
