import styled from "styled-components";

export const ItemWrapper = styled.ul`
  padding: 1rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
`;

export const ItemBox = styled.div`
  border: 1px solid black;
  min-height: 240px;
  height: auto;
`;
