import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import { Row } from "../../../elements/Wrapper.style";
import TodayDesignWorks from "./TodayDesignWorks";
// import Design from "./Design";
import TodayEval from "../../components/TodayEval";
import TodayInsight from "../../components/TodayInsight";

const DesignTemplate = () => {
  const [checkedDesign, setCheckedDesign] = useState(true);
  const [checkedInsight, setCheckedInsight] = useState(true);
  const [checkedEval, setCheckedEval] = useState(true);
  const [checkedCommunicationTemp, setCheckedCommunicationTemp] = useState(true);

  const handleCheckBox = (e) => {
    if (e.target.id === "design") setCheckedDesign((prev) => !prev);
    if (e.target.id === "insight") setCheckedInsight((prev) => !prev);
    if (e.target.id === "eval") setCheckedEval((prev) => !prev);
    if (e.target.id === "communicationTemp") setCheckedCommunicationTemp((prev) => !prev);
  };

  return (
    <div className="open-tab">
      <Row marginBottom="36px">
        <Checkbox id="design" isChecked={checkedDesign} marginRight="1rem" onChange={handleCheckBox} name="오늘 진행한 업무" />
        <Checkbox id="insight" isChecked={checkedInsight} marginRight="1rem" onChange={handleCheckBox} name="인사이트" />
        <Checkbox id="eval" isChecked={checkedEval} marginRight="1rem" onChange={handleCheckBox} name="오늘의 업무평가"/>
        <Checkbox id="communicationTemp" isChecked={checkedCommunicationTemp} onChange={handleCheckBox} name="커뮤니케이션 온도체크" />
      </Row>
      {checkedDesign && <TodayDesignWorks title="오늘 진행한 디자인 업무"/>}
      {checkedInsight && <TodayInsight subTitle="오늘 디자인 업무를 통해 배우고 느낀 점을 자유롭게 써주세요" />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default DesignTemplate;
