import React, { useRef, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { WideWrapper } from "../elements/Wrapper.style";
import {
  MainTitleWrapper,
  Section,
  ItemWrapper,
  StartButton,
  BigText,
  SmallText,
  BgItemWrapper,
  BgTitleWrapper,
  EmogiImage,
  PageImage,
  MainImage,
  ResponsiveWrapper,
  BackgroundImageContainer,
} from "./HomePage.styled";
import { isLoggedInState } from "../../state";
import { useRecoilValue } from "recoil";
import Gnb from "../articles/Gnb";
import Footer from "../articles/Footer";
import { GRAY900 } from "../../styles/theme";
import SliderArrow from "./SliderArrow";
import TopButton from "../articles/TopButton";
import { debounce } from "lodash";

const HomePage = () => {
  const router = useRouter();
  const ref = useRef(null);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [step, setStep] = useState(0);
  const [scrollDetect, setScrollDetect] = useState("");

  const handleStep = (value) => {
    setStep(value);
  };

  const onClickLoginButton = () => {
    router.push("/login");
  };

  let lastScrollY = 0;
  const scrollEvent = useCallback(
    debounce((e) => {
      const scrollY = window.scrollY;
      if (scrollY % (window.innerHeight - 80) !== 0) {
        console.log("scroll 했어");
        const direction = scrollY > lastScrollY ? "down" : "up";
        console.log(direction);
        setScrollDetect(direction);
      }
      lastScrollY = scrollY;
    }, 400),
    [],
  );

  React.useEffect(() => {
    console.log(step, scrollDetect);
    if (step === 0 && scrollDetect === "down") {
      window.scrollTo({ left: 0, top: (Number(step) + 1) * (window.innerHeight - 80), behavior: "smooth" });
      // lastScrollY = (Number(step) + 1) * (window.innerHeight - 80);
      setStep(1);
    }
    if (step === 1 && scrollDetect === "down") {
      window.scrollTo({ left: 0, top: (Number(step) + 1) * (window.innerHeight - 80), behavior: "smooth" });
      // lastScrollY = (Number(step) + 1) * (window.innerHeight - 80);
      setStep(2);
    }
    if (step === 2 && scrollDetect === "down") {
      window.scrollTo({ left: 0, top: (Number(step) + 1) * (window.innerHeight - 80), behavior: "smooth" });
      // lastScrollY = (Number(step) + 1) * (window.innerHeight - 80);
      setStep(3);
    }
    if (step === 3 && scrollDetect === "down") {
      // setStep(1);
      // window.scrollTo({ left: 0, top: (Number(step) + 1) * (window.innerHeight - 80), behavior: "smooth" });
    }
    if (step === 3 && scrollDetect === "up") {
      window.scrollTo({ left: 0, top: (Number(step) - 1) * (window.innerHeight - 80), behavior: "smooth" });
      // lastScrollY = (Number(step) - 1) * (window.innerHeight - 80);
      setStep(2);
    }
    if (step === 2 && scrollDetect === "up") {
      window.scrollTo({ left: 0, top: (Number(step) - 1) * (window.innerHeight - 80), behavior: "smooth" });
      // lastScrollY = (Number(step) - 1) * (window.innerHeight - 80);
      setStep(1);
    }
    if (step === 1 && scrollDetect === "up") {
      window.scrollTo({ left: 0, top: (Number(step) - 1) * (window.innerHeight - 80), behavior: "smooth" });
      // lastScrollY = (Number(step) - 1) * (window.innerHeight - 80);
      setStep(0);
    }
    if (step === 0 && scrollDetect === "up") {
      // setStep(2);
      // window.scrollTo({ left: 0, top: (Number(step) - 1) * (window.innerHeight - 80), behavior: "smooth" });
    }
  }, [scrollDetect]);

  React.useEffect(() => {
    setScrollDetect("");
  }, [step]);

  React.useEffect(() => {
    // const scrollEvent =;
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <WideWrapper ref={ref}>
      <Gnb isVisible />
      <Section>
        <ItemWrapper>
          <ResponsiveWrapper gap="5.8vw" flexDirection="row-reverse">
            <div>
              <MainTitleWrapper>
                <BackgroundImageContainer src={"/img/home/main_bg.png"} />
                <div className="main-title-1 headline-6-rg">오늘 무슨 일이 일어났나요?</div>
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
              <SmallText className="subtitle-1">중요 정보와 자료를 미리미리 기록!</SmallText>
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
              <SmallText className="subtitle-1">설계서형, IA형 등 다양한 템플릿</SmallText>
            </BgTitleWrapper>
            <PageImage src="/img/home/img_WR.svg" />
          </ResponsiveWrapper>
        </BgItemWrapper>
        <BgItemWrapper>
          <ResponsiveWrapper gap="4.6vw">
            <BgTitleWrapper maxWidth="40%">
              <EmogiImage src="/img/home/emoji/worker.svg" />
              <BigText className="subtitle-2">
                디자이너, 개발자 등
                <BigText className="subtitle-2" style={{ color: "#FF9F00" }}>
                  다양한 협업 히스토리{" "}
                  <span className="subtitle-2" style={{ fontSize: "48px", color: GRAY900 }}>
                    기록
                  </span>
                </BigText>
              </BigText>
              <SmallText className="subtitle-1">왓헤픈과 함께 커뮤니케이션 스킬도 UP!</SmallText>
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
