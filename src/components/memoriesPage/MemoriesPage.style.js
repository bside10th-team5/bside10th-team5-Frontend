import styled from "styled-components";
import { GNB_H, GRAY100, GRAY700, GRAY900 } from "../../styles/theme";

export const Section = styled.section`
  margin-top: ${GNB_H}px;
  margin-bottom: 297px;
  width: 100%;
`;
export const ItemWrapper = styled.ul`
  margin-top: 3.25rem;
  padding: 0 25px;
  display: grid;
  grid-column-gap: 1.25rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  & .item-ref {
    display: flex;
    align-items: center;
    margin-top: 4px;
    cursor: pointer;
  }

  & > img {
    max-width: 100%;
    height: auto;
  }
`;

export const ItemTitle = styled.span`
  margin-top: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemType = styled.span`
  display: flex;
  align-items: center;
  height: 2rem;
  background: ${GRAY100};
  color: ${GRAY700};
  border-radius: 5px;
  padding: 0px 16px;
`;

export const ItemDate = styled.span`
  flex: 1;
  margin-left: 1rem;
  color: ${GRAY900};
`;

export const CloseIconWrapper = styled.button`
  position: absolute;
  right: 21.83px;
  top: 21.83px;
`;
