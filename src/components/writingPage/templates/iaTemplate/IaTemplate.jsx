import React, { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "../../../articles/Checkbox";
import { Row } from "../../../elements/Wrapper.style";
import IaWorkHistory from "./IaWorkHistory";
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
        <Checkbox
          id="history"
          isChecked={checkedHistory}
          marginRight="1rem"
          onChange={handleCheckBox}
          name="IA 작업기록"
        />
        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox} name="오늘의 업무평가" />
      </Row>
      {checkedHistory && <IaWorkHistory />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default IaTemplate;

IaTemplate.propTypes = {
  id: PropTypes.string.isRequired,
};
