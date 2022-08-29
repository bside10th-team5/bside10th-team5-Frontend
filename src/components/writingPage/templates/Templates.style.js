import styled, { css } from "styled-components";
import { BLUE, GRAY300, GRAY500, GRAY900, GREEN, INPUT_H, ORANGE, YELLOW } from "../../../styles/theme";

export const Box = styled.div.attrs((props) => ({
  marginTop: props.marginTop,
  marginBottom: props.marginBottom || "36px",
}))`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
`;

export const Title = styled.span`
  color: ${GRAY900};
  margin-bottom: 28px;
`;

export const ScreenTitle = styled.input.attrs({ type: "text" })`
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

  & > .preview {
    width: 100%;
    height: 556px;
    margin: 0;
    object-fit: contain;
  }

  & > img {
    margin-bottom: 31px;
  }

  & > input[type="file"] {
    display: none;
  }
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 28px;
`;

export const UploadButton = styled.label`
  width: 215px;
  height: ${INPUT_H}px;
  border-radius: 5px;
  border: 1px solid ${ORANGE};
  color: ${ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PageTag = styled.button.attrs((props) => ({
  colorCase: props.colorCase || 1,
}))`
  height: 32px;
  border-radius: 4px;
  padding: 4px 16px;
  background-color: rgba(3, 195, 72, 0.16);
  color: ${GREEN};

  ${({ colorCase }) =>
    colorCase === 1 &&
    css`
      background-color: rgba(255, 122, 65, 0.16);
      color: ${ORANGE};
    `};
  ${({ colorCase }) =>
    colorCase === 2 &&
    css`
      background-color: rgba(3, 195, 72, 0.16);
      color: ${GREEN};
    `};
  ${({ colorCase }) =>
    colorCase === 3 &&
    css`
      background-color: rgba(11, 112, 254, 0.16);
      color: ${BLUE};
    `};
  ${({ colorCase }) =>
    colorCase === 4 &&
    css`
      background-color: rgba(255, 159, 0, 0.16);
      color: ${YELLOW};
    `};

  & > .close-wrapper {
    margin-left: 12px;
  }
`;
