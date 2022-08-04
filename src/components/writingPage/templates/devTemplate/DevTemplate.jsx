import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import { Row } from "../../../elements/Wrapper.style";
import TodayInsight from "../../components/TodayInsight";
import TodayEval from "../../components/TodayEval";
import CommunicationTemp from "../../components/CommunicationTemp";
import TodayDevWorks from "./TodayDevWorks";


const DevTemplate = () => {
  const [checkedDev, setCheckedDev] = useState(true);
  const [checkedInsight, setCheckedInsight] = useState(true);
  const [checkedEval, setCheckedEval] = useState(true);
  const [checkedCommunicationTemp, setCheckedCommunicationTemp] = useState(true);

  const handleCheckBox = (e) => {
    if (e.target.id === "dev") setCheckedDev((prev) => !prev);
    if (e.target.id === "insight") setCheckedInsight((prev) => !prev);
    if (e.target.id === "eval") setCheckedEval((prev) => !prev);
    if (e.target.id === "communicationTemp") setCheckedCommunicationTemp((prev) => !prev);
  };

  return (
    <div className="open-tab">
      <Row marginBottom="36px">
        <Checkbox id="dev" isChecked={checkedDev} marginRight="1rem" onChange={handleCheckBox} name="오늘 진행한 업무" />
        <Checkbox id="insight" isChecked={checkedInsight} marginRight="1rem" onChange={handleCheckBox} name="인사이트" />
        <Checkbox id="communicationTemp" isChecked={checkedCommunicationTemp} marginRight="1rem" onChange={handleCheckBox} name="커뮤니케이션 온도체크" />
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox} name="오늘의 업무평가"/>
      </Row>
      {checkedDev && <TodayDevWorks title="오늘 진행한 개발 업무"/>}
      {checkedInsight && 
        <TodayInsight 
          subTitle="오늘 개발 업무를 통해 배우고 느낀 점을 자유롭게 써주세요"
          placeholder="flow chart의 중요성 기획에서 누락된 부분을 flow chart로 설명해서, 개발팀장님과 원활한 커뮤니케이션 진행" 
        />
      }
      {checkedCommunicationTemp && <CommunicationTemp />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default DevTemplate;
