import styled from "styled-components";

export const Box = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "36px",
}))`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginBottom};
  border: 1px solid green;
`;
