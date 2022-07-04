import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import { Row } from "../../../settingPage/AddProjectPage.style";
import TodayEval from "../../../articles/TodayEval";
import SbScreenReview from "./SbScreenReview";
import SbWorks from "./SbWorks";
import SbGoal from "./SbGoal";

const SbTemplate = () => {
  const [checkedGoal, setCheckedGoal] = useState(true);
  const [checkedWork, setCheckedWork] = useState(true);
  const [checkedReview, setCheckedReview] = useState(true);
  const [checkedEval, setCheckedEval] = useState(true);

  const handleCheckBox = (e) => {
    if (e.target.id === "goal") setCheckedGoal((prev) => !prev);
    if (e.target.id === "work") setCheckedWork((prev) => !prev);
    if (e.target.id === "review") setCheckedReview((prev) => !prev);
    if (e.target.id === "eval") setCheckedEval((prev) => !prev);
  };

  return (
    <div className="open-tab">
      <Row marginBottom="36px">
        <Checkbox id="goal" isChecked={checkedGoal} marginRight="1rem" onChange={handleCheckBox}>
          <span className="button">설계 목표</span>
        </Checkbox>
        <Checkbox id="work" isChecked={checkedWork} marginRight="1rem" onChange={handleCheckBox}>
          <span className="button">오늘 진행한 업무</span>
        </Checkbox>
        <Checkbox id="review" isChecked={checkedReview} marginRight="1rem" onChange={handleCheckBox}>
          <span className="button">주요 설계 화면 회고</span>
        </Checkbox>
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox}>
          <span className="button">오늘의 업무평가</span>
        </Checkbox>
      </Row>
      {checkedGoal && <SbGoal />}
      {checkedWork && <SbWorks />}
      {checkedWork && <SbScreenReview />}
      {checkedWork && <TodayEval />}
    </div>
  );
};

export default SbTemplate;
