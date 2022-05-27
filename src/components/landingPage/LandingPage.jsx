import React, { useEffect, useRef, useState } from "react";
import { Gnb, Observer, Section, Wrapper } from "./LandingPage.style";

const LandingPage = () => {
  const toptarget = useRef();
  const bottomTarget = useRef();
  const [gnbVisible, setGnbVisible] = useState(false);

  const observerCallback = (entries) => {
    const [entry] = entries;
    if (entry.time > 1500) {
      if (entry.isIntersecting) {
        setGnbVisible(false);
      } else {
        setGnbVisible(true);
      }
    }
  };

  // TODO: customhook 으로 리팩토링
  useEffect(() => {
    const option = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(observerCallback, option);
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

  useEffect(() => {
    const option = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, option);
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

  return (
    <Wrapper>
      <Observer ref={toptarget} />
      <Gnb theme={{ isVisible: gnbVisible }}>
        <div>로고</div>
        <div>내예약</div>
      </Gnb>
      <Section theme={{ backgroundColor: "orange" }}>
        <div className="row-box">
          <span>로고</span>
          <span>내예약</span>
        </div>
        <div className="center-box">영역1</div>
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
    </Wrapper>
  );
};

export default LandingPage;
