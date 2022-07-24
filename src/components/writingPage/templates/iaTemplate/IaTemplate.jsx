import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import { Row } from "../../../settingPage/AddProjectPage.style";
import IaWorkHistory from "./iaWorkHistory";
import TodayEval from "../../../articles/TodayEval";

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
        <Checkbox id="history" isChecked={checkedHistory} marginRight="1rem" onChange={handleCheckBox}>
          <span className="button">IA 작업기록</span>
        </Checkbox>
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox}>
          <span className="button">오늘의 업무평가</span>
        </Checkbox>
      </Row>
      {/* //TODO: 컴포넌트 있다없이 말고 css 로 처리하는게 편하려나? */}
      {checkedHistory && <IaWorkHistory />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default IaTemplate;
