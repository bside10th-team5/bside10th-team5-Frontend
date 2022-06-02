import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import MediumBtn from "../elements/MediumBtn";
import { Gnb, WideWrapper } from "../elements/Wrapper";
import { Observer, Section } from "./LandingPage.style";

const LandingPage = () => {
  const toptarget = useRef();
  const router = useRouter();
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
      <Gnb theme={{ isVisible: !topObserve && !bottomObserve }}>
        <div>로고</div>
        <div>로그인</div>
      </Gnb>
      <Section theme={{ backgroundColor: "orange" }}>
        <div className="row-box">
          <span>로고</span>
          <span>로그인</span>
        </div>
        <div className="center-box">
          <MediumBtn text="임시 lt-page 이동버튼" onClick={onClickLtBtn} />
          <div>영역1</div>
        </div>
      </Section>
      <Section theme={{ backgroundColor: "blue" }}>
        <div className="center-box">영역2</div>
      </Section>
      <Section theme={{ backgroundColor: "purple" }}>
        <div className="center-box">영역3</div>
      </Section>
      <Section ref={bottomTarget} theme={{ backgroundColor: "black", height: "30rem" }}>
        <div className="center-box">영역4</div>
      </Section>
    </WideWrapper>
  );
};

export default LandingPage;
