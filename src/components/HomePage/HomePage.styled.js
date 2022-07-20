import styled from "styled-components";
import { GNB_H, GRAY200 } from "../../styles/theme";

export const BackgroundLogo = styled.img`
  src: url(${"/logo.svg"});
  width: 981px;
  height: 364px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: ${GNB_H}px;
  width: 100%;
  background-color: transparent;
`;

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: calc(100vh - 80px);
  align-items: center;
  padding-right: 6.3vw;

  @media screen and (max-width: 1000px) {
    padding: 9vw 0;
    height: auto;
  }
  @media screen and (max-width: 600px) {
    padding: 17vw 0;
    height: auto;
  }
`;

export const BgItemWrapper = styled(ItemWrapper)`
  height: calc(100vh - 80px);
  background-color: ${GRAY200};

  @media screen and (max-width: 1000px) {
    padding: 9vw 0;
    height: auto;
  }
  @media screen and (max-width: 600px) {
    padding: 17vw 0;
    height: auto;
  }
`;

export const ResponsiveWrapper = styled.div.attrs((props) => ({
  gap: props.gap || "28%",
  flexDirection: props.flexDirection || "row",
}))`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  height: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6vw;
  }
  @media screen and (max-width: 600px) {
    gap: 12vw 0;
  }
`;

export const BackgroundImageContainer = styled.img`
  position: absolute;
  width: 100vw;
  height: auto;
  top: -39.5px;
  left: -58vw;
  z-index: -999;
`;

export const MainTitleWrapper = styled.div`
  position: relative;

  & .main-title-1 {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BigText = styled.div`
  font-size: 48px;
  line-height: 68px;
  word-break: keep-all;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export const SmallText = styled.div`
  font-size: 24px;
  line-height: 44px;
  margin-top: 12px;
`;

export const StartButton = styled.button`
  width: 374px;
  height: 48px;
  background-color: #ff5a00;
  border-radius: 4px;
  text-align: center;
  margin-top: 64px;
  color: white;
`;

export const BgTitleWrapper = styled.div.attrs((props) => ({ maxWidth: props.maxWidth || "none" }))`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth};

  @media screen and (max-width: 1000px) {
    max-width: none;
    align-items: center;
  }
`;

export const EmogiImage = styled.img`
  width: 84px;
  height: 84px;
  margin-bottom: 40px;
`;

export const MainImage = styled.img`
  width: 37vw;

  @media screen and (max-width: 1000px) {
    width: 65.5vw;
  }
  @media screen and (max-width: 600px) {
    width: 74vw;
  }
`;

export const PageImage = styled.img`
  width: 43.5vw;

  @media screen and (max-width: 1000px) {
    width: 64.5vw;
  }
  @media screen and (max-width: 600px) {
    width: 86vw;
  }
`;

export const SliderArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 22vw;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 4vw;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #bbb;
  border-radius: 50%;
`;

export const SelectedDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: 50%;
`;
