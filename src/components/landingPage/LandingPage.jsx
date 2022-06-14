import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import Gnb from "../articles/Gnb";
import FlexibleBtn from "../elements/FlexibleBtn";
import { WideWrapper } from "../elements/Wrapper.style";
import { Observer, Section } from "./LandingPage.style";

const LandingPage = () => {
  const toptarget = useRef();
  const router = useRouter();
  const themeContext = useContext(ThemeContext);
  const bottomTarget = useRef();
  const [topObserve, setTopObserve] = useState(true);
  const [bottomObserve, setBottomObserve] = useState(false);

  const onClickLtBtn = () => {
    router.push("/memories");
  };

  const topObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.time > 1200) {
      if (entry.isIntersecting) {
        setTopObserve(true);
      } else {
        setTopObserve(false);
      }
    }
  };

  const bottomObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.time > 1200) {
      if (entry.isIntersecting) {
        setBottomObserve(true);
      } else {
        setBottomObserve(false);
      }
    }
  };

  // TODO: customhook 으로 리팩토링
  useEffect(() => {
    const option = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(topObserverCallback, option);
    const currentTarget = toptarget.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [toptarget]);

  useEffect(() => {
    const option = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(bottomObserverCallback, option);
    const currentTarget = bottomTarget.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [bottomTarget]);

  return (
    <WideWrapper>
      <Observer ref={toptarget} />
      <Gnb isVisible={!topObserve && !bottomObserve} />
      <Section backgroundColor={themeContext.color.orange}>
        <div className="row-box">
          <span className="ko-button">로고</span>
          <span className="en-button">로그인</span>
        </div>
        <div className="center-box">
          <div className="column-box">
            <div className="ko-headline-4">서비스 기획자를 위한 회고록 서비스</div>
            <img src="https://via.placeholder.com/300x300.jpg" />
            <FlexibleBtn text="시작하기" onClick={onClickLtBtn} />
          </div>
        </div>
      </Section>
      <Section backgroundColor={themeContext.color.yellow}>
        <div className="center-box">
          <div className="column-box">
            <div style={{}}>
              하루 단 5분만 투자하세요!
              <br />
              쉽고 간편한 회고록 서비스
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <img src="https://via.placeholder.com/300x300.jpg" />
              <img src="https://via.placeholder.com/300x300.jpg" />
              <img src="https://via.placeholder.com/300x300.jpg" />
            </div>
          </div>
        </div>
      </Section>
      <Section ref={bottomTarget} height="15rem" backgroundColor={themeContext.color.green}>
        <div className="center-box">footer</div>
      </Section>
    </WideWrapper>
  );
};

export default LandingPage;
