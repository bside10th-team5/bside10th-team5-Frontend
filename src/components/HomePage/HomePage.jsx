import Gnb from "../articles/Gnb";
import { useRouter } from "next/router";
import { WideWrapper } from "../elements/Wrapper.style";
import {
  MainTitleWrapper,
  Section,
  ItemWrapper,
  ContentWrapper,
  Wrapper,
  StartButton,
  BigText,
  SmallText,
  BgItemWrapper,
  BgTitleWrapper,
  EmogiImage,
  PageImage,
  SliderArrowContainer,
  Dot,
  SelectedDot,
  BackgroundImageContainer,
} from "./HomePage.styled";
import { useState } from "react";
import { isLoggedInState } from "../../state";
import { useRecoilValue } from "recoil";
import Footer from "../articles/Footer";
import React, { useRef } from "react";

const HomePage = () => {
  const router = useRouter();
  const ref = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [scrollDetect, setScrollDetect] = useState("");
  const [step, setStep] = useState(0);

  const onClickLoginButton = () => {
    router.push("/login");
  };

  React.useEffect(() => {
    let lastScrollY = 0;
    window.addEventListener("scroll", (e) => {
      //TODO : 리턴
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY + 10 ? "down" : "up";
      lastScrollY = scrollY;
      console.log(direction);
      setScrollDetect(direction);
    });
  }, []);

  React.useEffect(() => {
    // console.log(step);
    // if (scrollDetect === "down" && step === 0) {
    //   setStep(1);
    //   window.scrollTo(0, window.innerHeight - 80);
    // }
  }, [scrollDetect]);

  const SliderArrow = () => {
    const onClickUpArrow = () => {
      window.scrollBy(0, -1080);
      setScrollHeight(window.scrollY);
    };

    const onClickDownArrow = () => {
      console.log(window.innerHeight);
      window.scrollTo(0, window.innerHeight - 80);
      // setScrollHeight(window.scrollY);
    };

    return (
      <SliderArrowContainer>
        <button onClick={onClickUpArrow}>
          <img src="/img/home/icon/slider/arrow/up.svg" style={{ width: "3.3vw", height: "3.3vw" }} />
        </button>
        {scrollHeight >= 0 && scrollHeight < 1080 ? <SelectedDot /> : <Dot />}
        {scrollHeight >= 1080 && scrollHeight < 1080 * 2 ? <SelectedDot /> : <Dot />}
        {scrollHeight >= 1080 * 2 && scrollHeight < 1080 * 3 ? <SelectedDot /> : <Dot />}
        {scrollHeight >= 1080 * 3 && scrollHeight < 1080 * 4 ? <SelectedDot /> : <Dot />}
        <button onClick={onClickDownArrow}>
          <img src="/img/home/icon/slider/arrow/down.svg" style={{ width: "3.3vw", height: "3.3vw" }} />
        </button>
      </SliderArrowContainer>
    );
  };

  // const
  return (
    <WideWrapper ref={ref}>
      <Gnb isVisible />
      <Section>
        <ItemWrapper>
          {/* <BackgroundImageContainer /> */}
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: "5.8%",
            }}
          >
            <div>
              <img src="/img/home/main_img.svg" style={{ width: "37vw" }} />
            </div>
            <div>
              <MainTitleWrapper>
                <span className="main-title-1">오늘 무슨 일이 일어났나요?</span>
                <BigText className="subtitle-1 ">
                  서비스 기획자를 위한<BigText className="subtitle-2">회고록 서비스</BigText>
                </BigText>
                {isLoggedIn ? (
                  <div></div>
                ) : (
                  <StartButton type="button" className="subtitle-2" onClick={onClickLoginButton}>
                    시작하기
                  </StartButton>
                )}
              </MainTitleWrapper>
            </div>
          </div>
          <SliderArrow />
        </ItemWrapper>
        <BgItemWrapper>
          <div
            style={{
              display: "flex",

              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: "5.4%",
            }}
          >
            <BgTitleWrapper>
              <EmogiImage src="/img/home/emoji/add_folder.svg" />
              <BigText className="headline-3" style={{ color: "#0B70FE", fontWeight: 600 }}>
                하루 5분 투자로
                <BigText className="subtitle-2" style={{ color: "black" }}>
                  미리 준비하는 포트폴리오
                </BigText>
              </BigText>
              <SmallText className="subtitle-1">중요 정보와 자료를 미리미리 기록!</SmallText>
            </BgTitleWrapper>
            <PageImage src="/img/home/img_LT.svg" style={{ width: "43.5vw" }} />
          </div>
          <SliderArrow />
        </BgItemWrapper>
        <BgItemWrapper>
          <div
            style={{
              display: "flex",

              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: "7%",
            }}
          >
            <BgTitleWrapper maxWidth="26%">
              <EmogiImage src="/img/home/emoji/bulb.svg" />
              <BigText className="subtitle-2" style={{ color: "#03C348" }}>
                업무 상황에 맞는
                <BigText className="subtitle-2" style={{ color: "black" }}>
                  다양한 템플릿 이용 가능
                </BigText>
              </BigText>
              <SmallText className="subtitle-1">설계서형, IA형 등 다양한 템플릿</SmallText>
            </BgTitleWrapper>
            <PageImage src="/img/home/img_WR.svg" style={{ width: "43.5vw" }} />
          </div>
          <SliderArrow />
        </BgItemWrapper>
        <BgItemWrapper>
          <div
            style={{
              display: "flex",

              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: "4.6%",
            }}
          >
            <BgTitleWrapper maxWidth="28.6%">
              <EmogiImage src="/img/home/emoji/worker.svg" />
              <BigText className="subtitle-2">
                디자이너, 개발자 등
                <BigText className="subtitle-2" style={{ color: "#FF9F00" }}>
                  다양한 협업 히스토리{" "}
                  <span className="subtitle-2" style={{ fontSize: "48px", color: "black" }}>
                    기록
                  </span>
                </BigText>
              </BigText>
              <SmallText className="subtitle-1">왓헤픈과 함께 커뮤니케이션 스킬도 UP!</SmallText>
            </BgTitleWrapper>
            <PageImage src="/img/home/img_WR.2.svg" style={{ width: "43.5vw" }} />
          </div>
          <SliderArrow />
        </BgItemWrapper>
        <img src="/img/home/03_bottom.svg" style={{ width: "100%", flex: 1 }} />
        <Footer />
      </Section>
    </WideWrapper>
  );
};

export default HomePage;
