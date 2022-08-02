import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import TodayEval from "../../components/TodayEval";
import SbScreenReview from "./SbScreenReview";
import TodayWorks from "../../components/TodayWorks";
import SbGoal from "./SbGoal";
import { Row } from "../../../elements/Wrapper.style";

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
        <Checkbox id="goal" isChecked={checkedGoal} marginRight="1rem" onChange={handleCheckBox} name="설계 목표" />
        <Checkbox
          id="work"
          isChecked={checkedWork}
          marginRight="1rem"
          onChange={handleCheckBox}
          name="오늘 진행한 업무"
        />
        <Checkbox
          id="review"
          isChecked={checkedReview}
          marginRight="1rem"
          onChange={handleCheckBox}
          name="주요 설계 화면 회고"
        />
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox} name="오늘의 업무평가" />
      </Row>
      {/* //TODO: 컴포넌트 있다없이 말고 css 로 처리하는게 편하려나? */}
      {checkedGoal && <SbGoal />}
      {checkedWork && <TodayWorks title="오늘 진행한 설계 업무" />}
      {checkedReview && <SbScreenReview />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default SbTemplate;
