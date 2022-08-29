import styled from "styled-components";

export const WideWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Row = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "0",
  marginTop: props.marginTop || "0",
  justifyContent: props.justifyContent || "flex-start",
  alignItems: props.alignItems || "center",
  gap: props.gap || "0",
}))`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;

export const Column = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "0",
  justifyContent: props.justifyContent || "center",
  alignItems: props.alignItems || "flex-start",
  gap: props.gap || "0",
}))`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  gap: ${(props) => props.gap};
`;

export const Observer = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 0;
  right: 0;
`;
