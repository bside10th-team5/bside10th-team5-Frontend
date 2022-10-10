import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row } from "../../../elements/Wrapper.style";
import Checkbox from "../../../articles/Checkbox";
import TodayWorks from "../../components/TodayWorks";
import TodayEval from "../../components/TodayEval";
import TodayInsight from "../../components/TodayInsight";
import QaTestReview from "./QaTestReview";
import { qaWorkTagState, qaWorkSecondTagState } from "../../../../state/qaTemplateState";

const QaTemplate = () => {
  const [checkedWork, setCheckedWork] = useState(true);
  const [checkedTest, setCheckedTest] = useState(true);
  const [checkedInsight, setCheckedInsight] = useState(true);
  const [checkedEval, setCheckedEval] = useState(true);

  const handleCheckBox = (e) => {
    if (e.target.id === "work") setCheckedWork((prev) => !prev);
    if (e.target.id === "test") setCheckedTest((prev) => !prev);
    if (e.target.id === "insight") setCheckedInsight((prev) => !prev);
    if (e.target.id === "eval") setCheckedEval((prev) => !prev);
  };

  return (
    <div className="open-tab">
      <Row marginBottom="36px">
        <Checkbox
          id="work"
          isChecked={checkedWork}
          marginRight="1rem"
          onChange={handleCheckBox}
          name="오늘 진행한 업무"
        />
        <Checkbox
          id="test"
          isChecked={checkedTest}
          marginRight="1rem"
          onChange={handleCheckBox}
          name="QA 테스트 리뷰"
        />

        <Checkbox
          id="insight"
          isChecked={checkedInsight}
          marginRight="1rem"
          onChange={handleCheckBox}
          name="인사이트"
        />

        <Checkbox id="eval" isChecked={checkedEval} onChange={handleCheckBox} name="오늘의 업무평가" />
      </Row>
      {checkedWork && (
        <TodayWorks
          title="오늘 진행한 QA 업무"
          defaultHolder="오늘 작업한 QA 업무 내용 중 하나를 선택해 주세요"
          placeholder="오늘 작업한 QA 업무를 작성해 주세요"
          tagListState={qaWorkTagState}
          secondTagListState={qaWorkSecondTagState}
        />
      )}
      {checkedTest && <QaTestReview />}
      {checkedInsight && <TodayInsight subTitle="오늘 QA 업무를 통해 배우고 느낀 점을 자유롭게 써주세요" />}
      {checkedEval && <TodayEval />}
    </div>
  );
};

export default QaTemplate;

QaTemplate.propTypes = {
  id: PropTypes.any.isRequired,
};
