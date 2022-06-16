import styled from "styled-components";

export const ItemWrapper = styled.ul`
  margin-top: 3.25rem;
  padding: 0 25px;
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  border: 2px solid black;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  & > img {
    max-width: 100%;
    height: auto;
  }
`;
