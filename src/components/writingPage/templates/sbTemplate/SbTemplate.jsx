import React, { useState } from "react";
import Checkbox from "../../../articles/Checkbox";
import { Row } from "../../../settingPage/AddProjectPage.style";
import { Box } from "../Templates.style";
import TodayEval from "../../../articles/TodayEval";
import SbScreenReview from "./SbScreenReview";

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
      <Box>
        <Row>
          <span>설계목표</span>
          <span>과거에 입력한 정보를 불러와요 (업데이트 시 전체 설계 목표에 반영)</span>
        </Row>
        <Row gap="1rem">
          <div
            style={{ border: "1px solid black", height: "184px", flex: 1, display: "flex", flexDirection: "column" }}
          >
            <div>사용자 편의성 측면</div>
            <textarea
              style={{ flex: 1, width: "100%" }}
              className="body-2"
              placeholder="서비스 기획자를 대상으로한 회고록 서비스 입니다.&#13;&#10;ex) 쉬운 회고록 템플릿 제시하여 회고 습관 형성"
              value=""
              // onChange=()
            />
          </div>
          <div
            style={{ border: "1px solid black", height: "184px", flex: 1, display: "flex", flexDirection: "column" }}
          >
            <div>사용자 편의성 측면</div>
            <textarea
              style={{ flex: 1, width: "100%" }}
              className="body-2"
              placeholder="서비스 기획자를 대상으로한 회고록 서비스 입니다.&#13;&#10;ex) 쉬운 회고록 템플릿 제시하여 회고 습관 형성"
              value=""
              // onChange=()
            />
          </div>
        </Row>
      </Box>
      <Box>
        <Row>
          <span style={{ marginRight: "40px" }}>오늘 진행한 설계 업무</span>
          <span>홈</span>
          <span>마이페이지</span>
          <span>전체메뉴</span>
          <span>관리자</span>
          <span>+ 추가등록</span>
        </Row>
        <div style={{ width: "100%", padding: "16px", border: "1px solid black" }}>
          설계 업무 리스트 중 하나를 선택해 주세요
        </div>
      </Box>
      <SbScreenReview />
      <TodayEval />
    </div>
  );
};

export default SbTemplate;
