import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import TodayEval from "../../components/TodayEval";
import SbScreenReview from "../sbTemplate/SbScreenReview";
import Workflow from "./Workflow";
import { Row } from "../../../elements/Wrapper.style";

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
        <Checkbox
          id="workflow"
          isChecked={checkedWorkflow}
          marginRight="1rem"
          onChange={handleCheckBox}
          name="오늘 진행한 업무"
        />

        <Checkbox
          id="review"
          isChecked={checkedReview}
          marginRight="1rem"
          onChange={handleCheckBox}
          name="주요 워크플로우 회고"
        />
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox} name="오늘의 업무평가" />
      </Row>
      {checkedWorkflow && <Workflow />}
      {checkedReview && <SbScreenReview />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default WorkflowTemplate;
