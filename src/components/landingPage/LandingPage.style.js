const { default: styled } = require("styled-components");

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

export const Section = styled.section`
  background-color: ${(props) => props.theme.backgroundColor || "white"};
  height: ${(props) => props.theme.height || "55rem"};
  display: flex;
  flex-direction: column;
  color: white;

  & > .row-box {
    box-sizing: border-box;
    border: 1px solid black;
    margin: 23px 50px 17px;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > .center-box {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
  }
`;
