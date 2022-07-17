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
  border: 2px solid green;
  align-items: center;
  padding-right: 5.2%;
`;

export const BgItemWrapper = styled(ItemWrapper)`
  height: calc(100vh - 80px);
  background-color: ${GRAY200};
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  background: transparent;
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  width: 2695px;
  height: 364px;
  background-image: url("/img/home/logo.svg");
  opacity: 0.1;
  top: 98px;
  left: -646px;
  background-repeat: repeat-x;
  z-index: -999;
`;

export const MainTitleWrapper = styled.div`
  & .main-title-1 {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const BigText = styled.div`
  font-size: 48px;
  line-height: 68px;
`;

export const SmallText = styled.div`
  font-size: 24px;
  line-height: 44px;
`;

export const StartButton = styled.button`
  width: 374px;
  height: 48px;
  background-color: #ff5a00;
  border-radius: 4px;
  text-align: center;
  margin-top: 64px;
  z-index: 3;
`;

export const BgTitleWrapper = styled.div.attrs((props) => ({ maxWidth: props.maxWidth || "28%" }))`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth};
`;

export const EmogiImage = styled.img`
  width: 4.4vw;
  height: 4.4vw;
  margin-bottom: 2%;
`;

export const PageImage = styled.img``;

export const SliderArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 22vw;
  justify-content: space-between;
  align-items: center;
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
