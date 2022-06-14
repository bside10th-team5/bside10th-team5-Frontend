import styled from "styled-components";
import { GNB_H } from "../../styles/theme";

export const Section = styled.section`
  width: 1200px;
  padding: 52px 0 100px 0;
  margin: ${GNB_H}px auto 0 auto;
`;

export const Title = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "1.5rem",
}))`
  color: #000000;
  margin-bottom: ${(props) => props.marginBottom};

  & span {
    color: ${({ theme }) => theme.color.orange};
  }

  & .ko-caption {
    color: ${({ theme }) => theme.color.gray700};
    position: relative;
    left: 20px;
    bottom: 2px;
  }
`;

export const Row = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "0",
  justifyContent: props.justifyContent || "flex-start",
}))`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Box = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "2.25rem",
}))`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const SubTitle = styled.div`
  width: 246px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray500};
`;
