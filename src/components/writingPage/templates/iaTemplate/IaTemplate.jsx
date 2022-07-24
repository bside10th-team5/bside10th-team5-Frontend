import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
<<<<<<< HEAD
import { Row } from "../../../elements/Wrapper.style";
import IaWorkHistory from "./IaWorkHistory";
import TodayEval from "../../components/TodayEval";
=======
import { Row } from "../../../settingPage/AddProjectPage.style";
import IaWorkHistory from "./iaWorkHistory";
import TodayEval from "../../../articles/TodayEval";
>>>>>>> feat: 테스트 페이지 생성 및 ia템플릿 밑작업

const IaTemplate = () => {
  const [checkedHistory, setCheckedHistory] = useState(true);
  const [checkedEval, setCheckedEval] = useState(true);

  const handleCheckBox = (e) => {
    if (e.target.id === "history") setCheckedHistory((prev) => !prev);
    if (e.target.id === "eval") setCheckedEval((prev) => !prev);
  };

  return (
    <div className="open-tab">
      <Row marginBottom="36px">
<<<<<<< HEAD
        <Checkbox id="history" isChecked={checkedHistory} marginRight="1rem" onChange={handleCheckBox} name="IA 작업기록" />
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox} name="오늘의 업무평가"/>
      </Row>
=======
        <Checkbox id="history" isChecked={checkedHistory} marginRight="1rem" onChange={handleCheckBox}>
          <span className="button">IA 작업기록</span>
        </Checkbox>
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox}>
          <span className="button">오늘의 업무평가</span>
        </Checkbox>
      </Row>
      {/* //TODO: 컴포넌트 있다없이 말고 css 로 처리하는게 편하려나? */}
>>>>>>> feat: 테스트 페이지 생성 및 ia템플릿 밑작업
      {checkedHistory && <IaWorkHistory />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default IaTemplate;
