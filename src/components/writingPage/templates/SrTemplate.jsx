import React, { useState } from "react";
import Checkbox from "../../articles/Checkbox";
import CircleArrowIcon from "../../elements/CircleArrowIcon";
import FaceSmileIcon from "../../elements/FaceSmileIcon";
import FaceNormalIcon from "../../elements/FaceNormalIcon";
import StarIcon from "../../elements/StarIcon";
import { Row } from "../../settingPage/AddProjectPage.style";
import { Box } from "./Templates.style";
import FaceSadIcon from "../../elements/FaceSadIcon";

const SrTemplate = () => {
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

      <Box>
        <span>주요 설계 화면에 대한 고민을 남겨보세요</span>
        <Row justifyContent="space-between">
          <CircleArrowIcon rotate={180} />
          <div>화면 이름을 입력해주세요</div>
          <CircleArrowIcon />
        </Row>
        <div
          style={{
            border: "1px dashed black",
            width: "100%",
            height: "556px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src="/img/icon/upload.png" alt="" />
          <div>설계 이미지 업로드하기</div>
        </div>
        ,
        <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              width: "100%",
              border: "1px solid black",
              height: "92px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>화면의 정의가 무엇인가요?</div>
            <textarea
              style={{ flex: 1, width: "100%" }}
              className="body-2"
              placeholder="업로드한 설계의 정의에 대해 작성해 주세요"
              value=""
              // onChange=()
            />
          </div>

          <div
            style={{
              width: "100%",
              border: "1px solid black",
              height: "92px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>사용자에게 어떤 행동을 유도하는 것이 목표인가요?</div>
            <textarea
              style={{ flex: 1, width: "100%" }}
              className="body-2"
              placeholder="업로드한 설계의 목표에 대해 작성해 주세요"
              value=""
              // onChange=()
            />
          </div>
          <div
            style={{
              width: "100%",
              border: "1px solid black",
              height: "92px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>목표를 달성하기 위해, 화면 설계에서 중점적으로 고민했던 부분은 무엇인가요?</div>
            <textarea
              style={{ flex: 1, width: "100%" }}
              className="body-2"
              placeholder="업로드한 설계에 대해 고민한 부분을 작성해 주세요"
              value=""
              // onChange=()
            />
          </div>
        </div>
      </Box>
      <Box marginBottom="0">
        <span>오늘의 업무평가</span>
        <Row>
          <span>총점</span>
          <span>
            <StarIcon isActive />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </span>
          <span>기분</span>
          <span>
            <FaceSmileIcon />
            <FaceNormalIcon />
            <FaceSadIcon />
          </span>
        </Row>
      </Box>
    </div>
  );
};

export default SrTemplate;
