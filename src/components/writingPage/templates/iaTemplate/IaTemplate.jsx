import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import { Row } from "../../../elements/Wrapper.style";
import IaWorkHistory from "./iaWorkHistory";
import TodayEval from "../../components/TodayEval";

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
        <Checkbox id="history" isChecked={checkedHistory} marginRight="1rem" onChange={handleCheckBox} name="IA 작업기록" />
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox} name="오늘 진행한 업무"/>
      </Row>
      {checkedHistory && <IaWorkHistory />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default IaTemplate;
