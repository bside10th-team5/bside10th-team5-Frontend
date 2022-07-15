import styled from "styled-components";
import { GNB_H } from "../../styles/theme";

export const BackgroundLogo = styled.img`
  src: url(${"/logo.svg"});
  width: 981px;
  height: 364px;
`;

export const Section = styled.section`
  margin-top: ${GNB_H}px;
  width: 100%;
  background-color: #fbfbfb;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 1000px;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const MainTitleWrapper = styled.div`
  padding-bottom: 100px;
  padding-left: 100px;
  & .main-title-1 {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const BigText = styled.div`
  width: 600px;
  font-size: 48px;
  line-height: 68px;
  /* text-align: center; */
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
`;

export const BgItemWrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 1080px;
  /* margin-left: 188px; */
  justify-content: center;
  align-items: center;
`;

export const BgTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 316px;
`;

export const EmogiImage = styled.img`
  width: 84px;
  height: 84px;
  margin-bottom: 40px;
`;

export const PageImage = styled.img`
  width: 44vw;
`;

export const SliderArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 424px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 5.2vw;
  margin-bottom: 60px;
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
