import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../../articles/Checkbox";
import { Row, Column } from "../../../elements/Wrapper.style";
import { GRAY300, GRAY500, GRAY900 } from "../../../../styles/theme";

const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid ${GRAY300};
  border-radius: 4px;
  margin-bottom: 16px;

  & .subtitle-2 {
    margin-bottom: 12px;
    color: ${GRAY900};
  }

  & .subtitle-1 {
    min-width: 229px;
    color: ${GRAY500};
  }
`;

const QaTestEnv = () => {
  const [checkedWeb, setCheckedWeb] = useState(false);
  const [checkedApp, setCheckedApp] = useState(false);
  const [checkedAndroid, setCheckedAndroid] = useState(false);
  const [checkedIos, setCheckedIos] = useState(false);
  const [checkedChrome, setCheckedChrome] = useState(false);
  const [checkedEdge, setCheckedEdge] = useState(false);
  const [checkedWhale, setCheckedWhale] = useState(false);
  const [checkedSafari, setCheckedSafari] = useState(false);
  const [checkedFirefox, setCheckedFirefox] = useState(false);

  const handleCheckBox = (e) => {
    if (e.target.id === "web") setCheckedWeb((prev) => !prev);
    if (e.target.id === "app") setCheckedApp((prev) => !prev);
    if (e.target.id === "android") setCheckedAndroid((prev) => !prev);
    if (e.target.id === "ios") setCheckedIos((prev) => !prev);
    if (e.target.id === "chrome") setCheckedChrome((prev) => !prev);
    if (e.target.id === "edge") setCheckedEdge((prev) => !prev);
    if (e.target.id === "whale") setCheckedWhale((prev) => !prev);
    if (e.target.id === "safari") setCheckedSafari((prev) => !prev);
    if (e.target.id === "firefox") setCheckedFirefox((prev) => !prev);
  };

  return (
    <Wrapper>
      <div className="subtitle-2">테스트 환경</div>
      <Column gap="20px">
        <Row>
          <span className="subtitle-1">디바이스 유형</span>
          <Row gap="1rem">
            <Checkbox id="web" isChecked={checkedWeb} onChange={handleCheckBox} name="웹(Web)" />
            <Checkbox id="app" isChecked={checkedApp} onChange={handleCheckBox} name="앱(App)" />
          </Row>
        </Row>
        {checkedWeb && (
          <Row>
            <span className="subtitle-1">웹(Web) 운영체제</span>
            <Row gap="1rem">
              <Checkbox id="chrome" isChecked={checkedChrome} onChange={handleCheckBox} name="크롬" />
              <Checkbox id="edge" isChecked={checkedEdge} onChange={handleCheckBox} name="마이크로소프트 엣지" />
              <Checkbox id="whale" isChecked={checkedWhale} onChange={handleCheckBox} name="웨일" />
              <Checkbox id="safari" isChecked={checkedSafari} onChange={handleCheckBox} name="사파리" />
              <Checkbox id="firefox" isChecked={checkedFirefox} onChange={handleCheckBox} name="파이어폭스" />
            </Row>
          </Row>
        )}
        {checkedApp && (
          <Row>
            <span className="subtitle-1">디바이스 유형</span>
            <Row gap="1rem">
              <Checkbox id="android" isChecked={checkedAndroid} onChange={handleCheckBox} name="안드로이드" />
              <Checkbox id="ios" isChecked={checkedIos} onChange={handleCheckBox} name="iOS" />
            </Row>
          </Row>
        )}
      </Column>
    </Wrapper>
  );
};

export default QaTestEnv;
