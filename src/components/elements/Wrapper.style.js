import styled from "styled-components";

export const WideWrapper = styled.div`
  width: 100vw;
  overflowx: hidden;
`;

export const Gnb = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #c4c196;
  transform: ${(props) => (props.theme.isVisible ? "translateY(0%)" : "translateY(-100%)")};
  transition: all 400ms ease-in-out 0s;
`;

export const Tag = styled.span`
  background-color: ${(props) => props.theme.backgroundColor || "gold"};
  color: ${(props) => props.theme.color || "white"};
  padding: 0 0.5rem;
  border-radius: 0.4rem;
  margin-right: 1rem;
`;
