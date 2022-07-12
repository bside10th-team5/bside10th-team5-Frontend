import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import TodayEval from "../../../articles/TodayEval";
import { Row } from "../../../settingPage/AddProjectPage.style";
import SbScreenReview from "../sbTemplate/SbScreenReview";
import Workflow from "./Workflow";

const WorkflowTemplate = () => {
  const [checkedWorkflow, setCheckedWorkflow] = useState(true);
  const [checkedReview, setCheckedReview] = useState(true);
  const [checkedEval, setCheckedEval] = useState(true);

  const handleCheckBox = (e) => {
    if (e.target.id === "workflow") setCheckedWorkflow((prev) => !prev);
    if (e.target.id === "review") setCheckedReview((prev) => !prev);
    if (e.target.id === "eval") setCheckedEval((prev) => !prev);
  };
  return (
    <div className="open-tab">
      <Row marginBottom="36px">
        <Checkbox id="workflow" isChecked={checkedWorkflow} marginRight="1rem" onChange={handleCheckBox}>
          <span className="button">오늘 진행한 워크플로우 업무</span>
        </Checkbox>
        <Checkbox id="review" isChecked={checkedReview} marginRight="1rem" onChange={handleCheckBox}>
          <span className="button">주요 워크플로우 대한 고민을 남겨보세요</span>
        </Checkbox>
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox}>
          <span className="button">오늘의 업무평가</span>
        </Checkbox>
      </Row>
      {checkedWorkflow && <Workflow />}
      {checkedReview && <SbScreenReview />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default WorkflowTemplate;
