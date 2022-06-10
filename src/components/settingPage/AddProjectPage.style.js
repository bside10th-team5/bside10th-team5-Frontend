import styled from "styled-components";

export const Title = styled.div`
  color: #000000;

  & span {
    color: ${({ theme }) => theme.color.orange};
  }
`;

export const Row = styled.div`
  margin-bottom: 2rem;
`;

export const Box = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  width: 80%;
  display: flex;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
