import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  overflowx: hidden;
`;

export const Observer = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Section = styled.section.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  height: props.height || "45rem",
}))`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;

  & > .row-box {
    box-sizing: border-box;
    margin: 23px 50px 17px;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .column-box {
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  & .center-box {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
  }
`;
