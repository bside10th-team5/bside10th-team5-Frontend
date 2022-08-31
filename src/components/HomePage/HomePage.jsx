import React, { useRef, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { debounce } from "lodash";
import { WideWrapper } from "../elements/Wrapper.style";
import {
  MainTitleWrapper,
  Section,
  ItemWrapper,
  StartButton,
  BigText,
  BigTextSpan,
  SmallText,
  MiddleText,
  BgItemWrapper,
  BgTitleWrapper,
  EmogiImage,
  PageImage,
  MainImage,
  ResponsiveWrapper,
  BackgroundImageContainer,
} from "./HomePage.styled";
import { isLoggedInState } from "../../state";
import Gnb from "../articles/Gnb";
import Footer from "../articles/Footer";
import { GRAY900 } from "../../styles/theme";
import SliderArrow from "./SliderArrow";
import TopButton from "../articles/TopButton";
import useIsMobile from "../../hooks/useIsMobile";

const HomePage = () => {
  const router = useRouter();
  const ref = useRef(null);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [step, setStep] = useState(0);
  const [scrollDetect, setScrollDetect] = useState("");
  const isMobile = useIsMobile();

  const handleStep = (value) => {
    setStep(value);
  };

  const onClickLoginButton = () => {
    router.push("/login");
  };

  let lastScrollY = 0;
  const scrollEvent = useCallback(
    debounce((e) => {
      e.preventDefault();
      const scrollY = window.scrollY;
      if (window.scrollY === 0) {
        //스크롤 최상단
        setStep(0);
      }
      if (Number(window.innerHeight) + Number(scrollY) >= Number(ref.current.scrollHeight) - 10) {
        // 스크롤 최하단 약간 오차가 있네?
        setStep(3);
      }
      if (scrollY % (window.innerHeight - 80) !== 0) {
        const direction = scrollY > lastScrollY ? "down" : "up";
        setScrollDetect(direction);
      }
      lastScrollY = scrollY;
    }, 300),
    [],
  );

  const downScrolling = (stepValue) => {
    window.scrollTo({ left: 0, top: (Number(stepValue) + 1) * (window.innerHeight - 80), behavior: "smooth" });
    setStep(stepValue + 1);
  };

  const upScrolling = (stepValue) => {
    window.scrollTo({ left: 0, top: (Number(stepValue) - 1) * (window.innerHeight - 80), behavior: "smooth" });
    setStep(stepValue - 1);
  };

  React.useEffect(() => {
    if (!isMobile) {
      if (step < 3 && scrollDetect === "down") {
        downScrolling(step);
      }
      if (step > 0 && scrollDetect === "up") {
        upScrolling(step);
      }
    }
  }, [scrollDetect, isMobile]);

  React.useEffect(() => {
    setScrollDetect("");
  }, [step]);

  React.useEffect(() => {
    if (!isMobile) {
      window.addEventListener("scroll", scrollEvent);
      return () => window.removeEventListener("scroll", scrollEvent);
    }
  }, [isMobile]);

  return (
    <WideWrapper ref={ref}>
      <Gnb isVisible />
      <Section>
        <ItemWrapper>
          <ResponsiveWrapper gap="5.8vw" flexDirection="row-reverse">
            <div>
              <MainTitleWrapper>
                <BackgroundImageContainer src={"/img/home/main_bg.png"} />
                <SmallText className="headline-6-rg">오늘 무슨 일이 일어났나요?</SmallText>
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
            <MainImage src="/img/home/main_img.svg" />
          </ResponsiveWrapper>
          <SliderArrow step={step} handleStep={handleStep} />
        </ItemWrapper>
        <BgItemWrapper>
          <ResponsiveWrapper gap="5.4vw">
            <BgTitleWrapper maxWidth="40%">
              <EmogiImage src="/img/home/emoji/add_folder.svg" />
              <BigText className="headline-3" style={{ color: "#0B70FE", fontWeight: 600 }}>
                하루 5분 투자로
              </BigText>
              <BigText className="subtitle-2" style={{ color: GRAY900 }}>
                미리 준비하는 포트폴리오
              </BigText>
              <MiddleText className="headline-5">중요 정보와 자료를 미리미리 기록!</MiddleText>
            </BgTitleWrapper>
            <PageImage src="/img/home/img_LT.svg" />
          </ResponsiveWrapper>
        </BgItemWrapper>
        <BgItemWrapper>
          <ResponsiveWrapper gap="7vw">
            <BgTitleWrapper maxWidth="40%">
              <EmogiImage src="/img/home/emoji/bulb.svg" />
              <BigText className="subtitle-2" style={{ color: "#03C348" }}>
                업무 상황에 맞는
                <BigText className="subtitle-2" style={{ color: GRAY900 }}>
                  다양한 템플릿 이용 가능
                </BigText>
              </BigText>
              <MiddleText className="headline-5" >설계서형, IA형 등 다양한 템플릿</MiddleText>
            </BgTitleWrapper>
            <PageImage src="/img/home/img_WR.svg" />
          </ResponsiveWrapper>
        </BgItemWrapper>
        <BgItemWrapper>
          <ResponsiveWrapper gap="4.6vw">
            <BgTitleWrapper maxWidth="50%">
              <EmogiImage src="/img/home/emoji/worker.svg" />
              <BigText className="subtitle-2">
                디자이너, 개발자 등
                <BigText className="subtitle-2" style={{ color: "#FF9F00" }}>
                  다양한 협업 히스토리
                  <BigTextSpan className="subtitle-2" style={{ color: GRAY900}}>
                    {" "}기록
                  </BigTextSpan>
                </BigText>
              </BigText>
              <MiddleText className="headline-5">왓헤픈과 함께 커뮤니케이션 스킬도 UP!</MiddleText>
            </BgTitleWrapper>
            <PageImage src="/img/home/img_WR.2.svg" />
          </ResponsiveWrapper>
        </BgItemWrapper>
        <img src="/img/home/03_bottom.svg" style={{ width: "100%", flex: 1 }} />
        <Footer />
      </Section>
      <TopButton />
    </WideWrapper>
  );
};

export default HomePage;
